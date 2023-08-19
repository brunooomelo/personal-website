import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export const Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    summary: { type: "string", required: true },
    image: {
      type: "string",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    structuredData: {
      type: "json",
      resolve: (doc) => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: doc.title,
        datePublished: doc.publishedAt,
        dateModified: doc.publishedAt,
        description: doc.summary,
        image: doc.image
          ? `https://brunooomelo.vercel.app${doc.image}`
          : `https://brunooomelo.vercel.app/og?title=${doc.title}`,
        url: `https://brunooomelo.vercel.app/blog/${doc._raw.flattenedPath}`,
        author: {
          "@type": "Person",
          name: "Bruno Melo",
        },
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Content],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
          behavior: "append",
        },
      ],
    ],
  },
});
