import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { compareDesc } from "date-fns";
import { allContents } from "@contentlayer/generated";
import { Header } from "@/components/header";
import { PageTitle } from "@/components/page-title";
import { absoluteUrl } from "@/config/site";
import { formatPostDate, getPagesDictionary } from "@/i18n/pages";
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
  const { locale } = useRouter();
  const t = getPagesDictionary(locale).blog;
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
        description={t.seo}
        canonical={absoluteUrl("/blog")}
        openGraph={{ url: absoluteUrl("/blog") }}
      />
      <Header />
      <PageTitle eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {!posts.length ? (
        <p className="text-ink-300">{t.empty}</p>
      ) : (
        <ul className="flex flex-col border-b border-ink-500">
          {posts.map((post) => (
            <ContentCard
              key={post._id}
              post={post}
              date={formatPostDate(post.publishedAt, locale)}
              viewsLabel={t.views(views?.[post._id] ?? null)}
            />
          ))}
        </ul>
      )}
    </>
  );
}

type ContentCardProps = {
  post: PostSummary;
  date: string;
  viewsLabel: string;
};

function ContentCard({ post, date, viewsLabel }: ContentCardProps) {
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

  // Mesma linha dos cases e projetos: metadado em mono em cima, título embaixo.
  return (
    <li className="border-t border-ink-500">
      <Link
        href={post.url}
        onClick={incrementPost}
        className="group flex flex-col gap-2 py-5"
      >
        <p className="flex flex-wrap gap-x-3 font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400">
          <time dateTime={post.publishedAt}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>{viewsLabel}</span>
        </p>
        <h2 className="transition-colors group-hover:text-ink-300">
          {post.title}
        </h2>
      </Link>
    </li>
  );
}
