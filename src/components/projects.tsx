import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    ariaLabel: "Conheça mais sobre meu orçamento simples",
    url: "https://figurinhaszap.com",
    title: "Figurinhas",
    description:
      "Gerador de figurinhas de WhatsApp online e sem precisar de aplicativo.",
    isArchived: false,
  },
  {
    ariaLabel:
      "Conheça mais sobre o Mules Studio, NFT de Mulas na Blockchain da Fantom",
    url: "https://mulesstudio.vercel.app",
    title: "Mules Studio",
    description: "Uma comunidade NFT de Mulas na Blockchain da Fantom",
    isArchived: false,
  },
  {
    ariaLabel:
      "Conheça mais sobre um projeto arquivo de uma SDK do PicPay em Javascript",
    url: "https://github.com/brunooomelo/picpay-js",
    title: "Picpay-js",
    description: "Uma SDK em javascript para API Rest do PicPay Ecommerce",
    isArchived: true,
  },
  {
    ariaLabel:
      "Conheça mais sobre um projeto arquivado de uma CLI de resultados da loteria brasileira",
    url: "https://github.com/brunooomelo/lottery",
    title: "Lottery",
    description: "CLI para receber resultados da Loteria Brasileira",
    isArchived: true,
  },
];

export const Projects = () => (
  <section className="flex flex-col border-b border-ink-500">
    {projects.map((project) => (
      <Link
        key={project.title}
        aria-label={project.ariaLabel}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-4 border-t border-ink-500 py-5"
      >
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <h2 className="transition-colors group-hover:text-ink-300">
              {project.title}
            </h2>
            {project.isArchived && (
              <span className="rounded border px-2 font-mono text-sm text-ink-300">
                Archived
              </span>
            )}
          </div>
          <p className="text-ink-300">{project.description}</p>
        </div>
        <FiArrowUpRight
          size={24}
          className="mt-1 shrink-0 text-ink-400 transition-colors group-hover:text-ink-50"
        />
      </Link>
    ))}
  </section>
);
