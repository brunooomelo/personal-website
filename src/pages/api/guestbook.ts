import { WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import clientPromise from "@/lib/mongodb";
import { authOptions } from "./auth/[...nextauth]";
import { databaseName } from "./_lib/config";

const MAX_COMMENT_LENGTH = 280;
const MAX_COMMENTS_RETURNED = 200;

type Comment = {
  id: string;
  name: string;
  username: string;
  comment: string;
  created_at: Date;
};

type Data = { docs: WithId<Comment>[] } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // A identidade sai da sessão, nunca do corpo da requisição. Antes o
    // handler gravava `id`, `name` e `username` como vinham do cliente, então
    // qualquer um conseguia postar em nome de outra pessoa — inclusive do
    // dono do site, já que é o `id` que a listagem usa para marcar o
    // comentário como seu e o `username` que monta o link do GitHub.
    const session = await getServerSession(req, res, authOptions);
    const user = session?.user;
    if (!user?.id || !user.username) {
      return res.status(401).json({ error: "É preciso estar autenticado." });
    }

    const comment = (req.body ?? {}).comment;
    if (typeof comment !== "string" || !comment.trim()) {
      return res.status(400).json({ error: "A mensagem não pode ser vazia." });
    }
    if (comment.trim().length > MAX_COMMENT_LENGTH) {
      return res.status(400).json({
        error: `A mensagem passa de ${MAX_COMMENT_LENGTH} caracteres.`,
      });
    }

    // A conexão com o banco só acontece depois da autenticação e da
    // validação: requisição recusada não precisa abrir conexão.
    const client = await clientPromise;
    await client
      .db(databaseName)
      .collection<Comment>("guestbooks")
      .insertOne({
        id: user.id,
        name: user.name ?? user.username,
        username: user.username,
        comment: comment.trim(),
        created_at: new Date(),
      });

    return res.status(201).end();
  }

  if (req.method === "GET") {
    const client = await clientPromise;
    const docs = await client
      .db(databaseName)
      .collection<Comment>("guestbooks")
      .find()
      .sort({ created_at: -1 })
      .limit(MAX_COMMENTS_RETURNED)
      .toArray();

    return res.status(200).json({ docs });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "Método não suportado." });
}
