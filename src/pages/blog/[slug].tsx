import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { GetStaticPaths } from "next/types";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Content, allContents } from "@contentlayer/generated";
import { Header } from "@/components/header";
import { absoluteUrl } from "@/config/site";
import { formatPostDate, getPagesDictionary } from "@/i18n/pages";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allContents.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const content = allContents.find(
    (content) => content._raw.flattenedPath === params.slug,
  );
  if (!content) return { notFound: true };
  return { props: content };
}

const CustomLink = (props: any) => {
  const href = props.href;
  const className =
    "text-accent underline underline-offset-4 decoration-ink-500 hover:text-ink-50";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className={className}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a {...props} className={className}>
        {props.children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={className}
    >
      {props.children}
    </a>
  );
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const PostLayout = (content: Content) => {
  const { locale } = useRouter();
  const t = getPagesDictionary(locale).post;
  const MDXContent = useMDXComponent(content.body.code);
  return (
    <>
      <NextSeo
        title={content.title}
        description={content.summary}
        canonical={absoluteUrl(content.url)}
        openGraph={{
          url: absoluteUrl(content.url),
          type: "article",
          article: {
            publishedTime: content.publishedAt,
            authors: ["Bruno Melo"],
          },
        }}
      />
      <Header />
      <article className="prose prose-quoteless prose-neutral prose-invert max-w-none text-ink-50">
        <div className="not-prose mb-10 flex flex-col gap-3">
          <Link
            href="/blog"
            className="self-start font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400 transition-colors hover:text-ink-50"
          >
            ← {t.back}
          </Link>
          <time
            dateTime={content.publishedAt}
            className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400"
          >
            {formatPostDate(content.publishedAt, locale)}
          </time>
          <h1 className="text-3xl leading-10">{content.title}</h1>
        </div>

        <MDXContent
          components={{
            a: CustomLink,
            image: RoundedImage,
          }}
        />
      </article>
      <Script
        id="script-ldjson"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.structuredData),
        }}
      />
    </>
  );
};

export default PostLayout;
