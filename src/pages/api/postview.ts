import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { databaseName } from "./_lib/config";

type Comment = {
  postId: string;
  view_count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment | null>
) {
  const client = await clientPromise;
  const db = client.db(databaseName);

  if (req.method === "POST") {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json(null);
    }

    const hasPost = await db.collection("postview").findOne({ postId: id });
    if (hasPost) {
      await db.collection("postview").findOneAndUpdate(
        {
          postId: id,
        },
        {
          $inc: {
            view_count: 1,
          },
        }
      );

      return {
        postId: id,
        view_count: hasPost.view_count + 1,
      };
    }

    await db.collection("postview").insertOne({
      postId: id,
      view_count: 1,
    });

    return res.status(200).json({
      postId: id,
      view_count: 1,
    });
  }

  if (req.method === "GET") {
    const { id } = req.query;
    if (!id) {
      return res.status(401).json(null);
    }

    const postview = await db.collection<Comment>("postview").findOne({
      postId: id,
    });

    if (!postview) {
      return res.status(404).json(null);
    }

    return res.status(200).json({
      postId: id as string,
      view_count: postview.view_count,
    });
  }

  return res.status(404).json(null);
}
