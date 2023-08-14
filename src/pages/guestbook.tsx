import { NextSeo } from "next-seo";
import { useSession, signIn } from "next-auth/react";
import { SiGithub } from "react-icons/si";
import { Header } from "@/components/header";
import { CommentList } from "@/components/comment-list";
import { useQuery } from "react-query";
import { CommentForm } from "@/components/form-comment";

export default function Guestbook() {
  const { data: session, status } = useSession();
  const { isLoading, data: comments } = useQuery("comments", () =>
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then((res) => res.docs)
  );

  return (
    <>
      <NextSeo title="Bruno Melo - Guestbook" />
      <Header />
      <h1 className="text-xl leading-7 tracking-tighter">
        Bem-vindo ao meu Guestbook 📕
      </h1>

      {status === "unauthenticated" && (
        <button
          onClick={() => signIn("github")}
          className="flex w-1/4 items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
        >
          <SiGithub className="h-5 w-5" />
          <span className="text-sm font-semibold leading-6">GitHub</span>
        </button>
      )}

      {status === "loading" && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-9 bg-[#24292F] rounded col-span-2"></div>
                <div className="h-9 bg-[#24292F] rounded col-span-1"></div>
              </div>
              <div className="h-2 w-1/4 bg-[#24292F] rounded"></div>
            </div>
          </div>
        </div>
      )}

      {!!session && status === "authenticated" && (
        <CommentForm username={session?.user?.name} />
      )}

      <CommentList isLoading={isLoading} comments={comments} />
    </>
  );
}
