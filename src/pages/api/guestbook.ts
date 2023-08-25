import { WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { databaseName } from "./_lib/config";

type Comment = {
  id?: string | null;
  name?: string | null;
  username: string;
  comment: string;
};
type Data = {
  docs: WithId<Comment>[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await clientPromise;
  const db = client.db(databaseName);
  if (req.method === "POST") {
    const { name, comment, id, username } = req.body;
    if (!name || !comment) {
      return res.status(401).end();
    }

    await db.collection("guestbooks").insertOne({
      id,
      name,
      username,
      comment,
      created_at: new Date(),
    });

    return res.status(201).end();
  }

  const docs = await db
    .collection("guestbooks")
    .find()
    .sort({ created_at: -1 })
    .toArray();

  return res.status(201).json({
    docs: docs as WithId<Comment>[],
  });
}
