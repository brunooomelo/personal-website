import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { databaseName } from "./_lib/config";

type PostView = {
  postId: string;
  view_count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostView | null>
) {
  const client = await clientPromise;
  const db = client.db(databaseName);
  const collection = db.collection<PostView>("postview");

  if (req.method === "POST") {
    const { id } = req.body;
    // Precisa ser string: um objeto aqui viraria operador do Mongo no filtro.
    if (typeof id !== "string" || !id) {
      return res.status(400).json(null);
    }

    // Upsert atômico: cria com view_count 1 ou incrementa o existente, num
    // único round-trip. O ler-depois-escrever anterior perdia views quando
    // duas visitas caíam juntas — e não respondia no caminho do update.
    const result = await collection.findOneAndUpdate(
      { postId: id },
      { $inc: { view_count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

    return res.status(200).json({
      postId: id,
      view_count: result.value?.view_count ?? 1,
    });
  }

  if (req.method === "GET") {
    const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
    if (!id) {
      return res.status(400).json(null);
    }

    const postview = await collection.findOne({ postId: id });

    // Post ainda sem visualizações não é erro: vale zero.
    return res.status(200).json({
      postId: id,
      view_count: postview?.view_count ?? 0,
    });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json(null);
}
