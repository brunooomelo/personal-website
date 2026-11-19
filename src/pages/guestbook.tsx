import { NextSeo } from "next-seo";
import { useSession, signIn } from "next-auth/react";
import { SiGithub } from "react-icons/si";
import { Header } from "@/components/header";
import { CommentList, type Comment } from "@/components/comment-list";
import { useQuery } from "react-query";
import { CommentForm } from "@/components/form-comment";
import { event } from "@/utils/gtag";
import { absoluteUrl } from "@/config/site";
import { useRouter } from "next/router";
import { PageTitle } from "@/components/page-title";
import { getPagesDictionary } from "@/i18n/pages";

export default function Guestbook() {
  const { data: session, status } = useSession();
  const t = getPagesDictionary(useRouter().locale).guestbook;
  const { isLoading, data: comments } = useQuery<Comment[]>(
    "comments",
    async () => {
      const res = await fetch("/api/guestbook");
      // fetch não rejeita em 4xx/5xx: sem isto o react-query considerava a
      // falha um sucesso e a lista virava `undefined` em silêncio.
      if (!res.ok) throw new Error(t.loadError);
      const body = await res.json();
      return body.docs ?? [];
    },
  );

  return (
    <>
      <NextSeo
        title="Bruno Melo - Guestbook"
        description={t.seo}
        canonical={absoluteUrl("/guestbook")}
        openGraph={{ url: absoluteUrl("/guestbook") }}
      />
      <Header />
      <PageTitle eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {status === "unauthenticated" && (
        <button
          onClick={() => {
            event({
              action: "sign-in-github",
              category: "login",
              label: "sign in with github on guestbook page",
              value: 1,
            });
            signIn("github");
          }}
          className="inline-flex items-center gap-3 self-start rounded border border-ink-500 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.05em] text-ink-50 transition-colors hover:border-ink-300 hover:bg-ink-800"
        >
          <SiGithub className="h-4 w-4" />
          {t.signIn}
        </button>
      )}

      {status === "loading" && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-9 bg-ink-800 rounded col-span-2"></div>
                <div className="h-9 bg-ink-800 rounded col-span-1"></div>
              </div>
              <div className="h-2 w-1/4 bg-ink-800 rounded"></div>
            </div>
          </div>
        </div>
      )}

      {!!session?.user && status === "authenticated" && (
        <CommentForm session={session} />
      )}

      <CommentList
        isLoading={isLoading}
        comments={comments ?? []}
        ownerId={session?.user?.id}
      />
    </>
  );
}
