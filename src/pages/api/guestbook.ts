import { WithId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

type Comment = {
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
  const db = client.db("personal-website");
  if (req.method === "POST") {
    const { username, comment } = req.body;
    if (!username || !comment) {
      return res.status(401).end();
    }

    await db.collection("guestbooks").insertOne({
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
