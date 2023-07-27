import { NextSeo } from "next-seo";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NextSeo
        title="Bruno Melo - Pagina não encontrada"
        description="Sou desenvolvedor Fullstack na Stack JS, atualmente construindo SaaS e MicroSaaS"
      />
      <div className="mx-auto flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Pagina não encontrada</h1>
        <Link aria-label="Voltar para a home" href="/" className="px-4 rounded border">
          Voltar para a Home
        </Link>
      </div>
    </>
  );
}
