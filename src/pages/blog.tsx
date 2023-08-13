import { NextSeo } from "next-seo";
import Link from "next/link";
import { Header } from "@/components/header";

export default function Blog() {
  return (
    <>
      <NextSeo title="Bruno Melo - Blog" />
      <Header />
      <div className="mx-auto flex flex-col items-center gap-4">
        <h1 className="text-xl leading-7 tracking-tighter">
          Work in Progress 🚨👷🏽🚧
        </h1>
        <Link
          aria-label="Voltar para a home"
          href="/"
          className="px-4 rounded border"
        >
          Voltar para a Home
        </Link>
      </div>
    </>
  );
}
