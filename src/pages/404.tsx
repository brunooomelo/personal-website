import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "@/components/header";
import { PageTitle } from "@/components/page-title";
import { getPagesDictionary } from "@/i18n/pages";

export default function NotFound() {
  const t = getPagesDictionary(useRouter().locale).notFound;

  return (
    <>
      <NextSeo
        title={`Bruno Melo - ${t.title}`}
        description={t.seo}
        noindex
        nofollow
      />
      <Header />
      <PageTitle eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Link
        href="/"
        className="self-start font-mono text-[11px] uppercase tracking-[0.05em] text-accent underline underline-offset-4 transition-colors hover:text-ink-50"
      >
        ← {t.back}
      </Link>
    </>
  );
}
