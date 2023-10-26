import { NextSeo } from "next-seo";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { allContents, Content } from "@contentlayer/generated";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";

export const generateStaticParams = async () =>
  allContents.map((post) => ({ slug: post._raw.flattenedPath }));

type ContentWithViews = Content & {
  views: number;
};
export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<ContentWithViews[]>([]);

  const getPosts = async () => {
    setLoading(true);
    const posts = allContents.sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    );
    const getPostsView: { postId: string; view_count: number }[] =
      await Promise.all(
        posts.map((post) =>
          fetch(`/api/postview?id=${post._id}`).then((res) => res.json()),
        ),
      );

    const postsWithViews = posts.map((post) => {
      const postView = getPostsView.find(
        (postView) => postView?.postId === post._id,
      );
      return {
        ...post,
        views: postView?.view_count || 0,
      } as ContentWithViews;
    });

    setPosts(postsWithViews);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <NextSeo
        title="Bruno Melo - Blog"
        description="Meu blog onde eu irei comentar sobre tecnologias, frameworks, hobbies e outras coisas"
      />
      <Header />
      <div className="flex flex-col gap-8">
        <h1 className="text-xl leading-7 tracking-tighter">
          Todos os meus posts 📝
        </h1>

        {!!loading && (
          <div className="flex flex-col gap-2">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="space-y-3">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="h-5 bg-[#24292F] rounded col-span-6"></div>
                  </div>
                  <div className="grid grid-cols-8 gap-4">
                    <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                    <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                    <div className="h-5 bg-[#24292F] rounded col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!loading && (
          <>
            {!posts.length && (
              <h3 className="text-xl leading-7 tracking-tighter">
                Não tem posts ainda, posts em contrução 🚨👷🏽🚧
              </h3>
            )}
            {!!posts.length && (
              <div className="flex flex-col gap-2">
                {posts.map((post, idx) => (
                  <ContentCard key={idx} {...post} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

function ContentCard(content: ContentWithViews) {
  const incrementPost = () =>
    fetch("/api/postview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: content._id,
      }),
    });

  return (
    <div className="flex flex-col gap-1">
      <h2 className="">
        <Link
          href={content.url}
          onClick={incrementPost}
          className="text-cyan-400 hover:text-cyan-200"
        >
          {content.title}
        </Link>
      </h2>
      <div className="flex gap-4 align-center">
        <time
          dateTime={content.publishedAt}
          className="mb-2 block text-xs text-gray-600"
        >
          {format(parseISO(content.publishedAt), "LLLL d, yyyy", {
            locale: ptBR,
          })}
        </time>
        <span className="block text-xs text-gray-600">-</span>
        <span className="block text-xs text-gray-600">
          {content.views} visualizações
        </span>
      </div>
    </div>
  );
}
