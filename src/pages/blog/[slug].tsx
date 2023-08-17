import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Content, allContents } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";

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
    (content) => content._raw.flattenedPath === params.slug
  );
  if (!content) return { notFound: true };
  return { props: content };
}

const CustomLink = (props: any) => {
  const href = props.href;
  const className = "text-cyan-400 hover:text-cyan-200 focus:text-cyan-200";

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className={className}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className={className} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={className}
    />
  );
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const PostLayout = (content: Content) => {
  const MDXContent = useMDXComponent(content.body.code);
  return (
    <article className=" max-w-xl py-8 prose prose-quoteless prose-neutral dark:prose-invert">
      <div className="mb-8 text-center">
        <time
          dateTime={content.publishedAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(content.publishedAt), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{content.title}</h1>
      </div>

      <MDXContent
        components={{
          a: CustomLink,
          image: RoundedImage,
        }}
      />
    </article>
  );
};

export default PostLayout;
