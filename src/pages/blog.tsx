import { NextSeo } from "next-seo";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { allContents } from "@contentlayer/generated";
import { Header } from "@/components/header";
import { absoluteUrl } from "@/config/site";
import { useEffect, useState } from "react";

type PostSummary = {
  _id: string;
  title: string;
  publishedAt: string;
  url: string;
};

type BlogProps = {
  posts: PostSummary[];
};

// A lista vem pronta do build: o HTML já sai com os posts, sem depender de
// nenhuma requisição. As views são carregadas depois, sem bloquear a listagem.
export const getStaticProps = async () => {
  const posts: PostSummary[] = allContents
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .map(({ _id, title, publishedAt, url }) => ({
      _id,
      title,
      publishedAt,
      url,
    }));

  return { props: { posts } };
};

export default function Blog({ posts }: BlogProps) {
  const [views, setViews] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    let active = true;

    const getViews = async () => {
      const results = await Promise.allSettled(
        posts.map(async (post) => {
          const res = await fetch(`/api/postview?id=${post._id}`);
          // 404 = post ainda sem views; qualquer outro erro não derruba o resto.
          if (!res.ok && res.status !== 404) {
            throw new Error(`Falha ao buscar views de ${post._id}`);
          }
          const data: { postId: string; view_count: number } | null =
            await res.json();
          return [post._id, data?.view_count ?? 0] as const;
        }),
      );

      if (!active) return;

      setViews(
        Object.fromEntries(
          results.flatMap((result) =>
            result.status === "fulfilled" ? [result.value] : [],
          ),
        ),
      );
    };

    getViews();

    return () => {
      active = false;
    };
  }, [posts]);

  return (
    <>
      <NextSeo
        title="Bruno Melo - Blog"
        description="Meu blog onde eu irei comentar sobre tecnologias, frameworks, hobbies e outras coisas"
        canonical={absoluteUrl("/blog")}
        openGraph={{ url: absoluteUrl("/blog") }}
      />
      <Header />
      <div className="flex flex-col gap-8">
        <h1>Todos os meus posts 📝</h1>

        {!posts.length ? (
          <h2>Não tem posts ainda, posts em construção 🚨👷🏽🚧</h2>
        ) : (
          <div className="flex flex-col gap-2">
            {posts.map((post) => (
              <ContentCard
                key={post._id}
                post={post}
                views={views?.[post._id] ?? null}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

type ContentCardProps = {
  post: PostSummary;
  views: number | null;
};

function ContentCard({ post, views }: ContentCardProps) {
  const incrementPost = () =>
    fetch("/api/postview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post._id,
      }),
    });

  return (
    <div className="flex flex-col gap-1">
      <h2>
        <Link
          href={post.url}
          onClick={incrementPost}
          className="text-cyan-400 hover:text-cyan-200"
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex gap-4 align-center">
        <time
          dateTime={post.publishedAt}
          className="mb-2 block text-xs text-ink-400"
        >
          {format(parseISO(post.publishedAt), "LLLL d, yyyy", {
            locale: ptBR,
          })}
        </time>
        <span className="block text-xs text-ink-400">-</span>
        <span className="block text-xs text-ink-400">
          {views ?? "—"} visualizações
        </span>
      </div>
    </div>
  );
}
