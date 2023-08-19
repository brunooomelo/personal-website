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
      <div className="flex flex-col gap-8">
        <h2 className="text-xl leading-7 tracking-tighter">
          Todos os meus posts 📝
        </h2>

        {!posts.length && (
          <h3 className="text-xl leading-7 tracking-tighter">
            Não tem posts ainda, posts em contrução 🚨👷🏽🚧
          </h3>
        )}
        {!!posts.length && (
          <div className="flex flex-col gap-2">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function PostCard(post: Content) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="">
        <Link href={post.url} className="text-cyan-400 hover:text-cyan-200">
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
