import { NextSeo } from "next-seo";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Header } from "@/components/header";
import { allContents, Content } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allContents.map((post) => ({ slug: post._raw.flattenedPath }));

export default function Blog() {
  const posts = allContents.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      <NextSeo title="Bruno Melo - Blog" />
      <Header />
      <div className="flex flex-col gap-4">
        {!posts.length && (
          <>
            <h1 className="text-xl leading-7 tracking-tighter">
              Work in Progress 🚨👷🏽🚧
            </h1>
            <Link
              aria-label="Voltar para a home"
              href="/"
              className="px-4 w-2/4 rounded border"
            >
              Voltar para a Home
            </Link>
          </>
        )}

        {posts.length && (
          <>
            <h1 className="mb-8 text-2xl font-bold">Posts</h1>

            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

function PostCard(post: Content) {
  return (
    <div className="">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.publishedAt}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.publishedAt), "LLLL d, yyyy", {
          locale: ptBR,
        })}
      </time>
    </div>
  );
}
