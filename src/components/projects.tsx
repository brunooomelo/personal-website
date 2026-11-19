import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    url: "https://figurinhaszap.com",
    title: "Figurinhas",
    description:
      "Gerador de figurinhas de WhatsApp online e sem precisar de aplicativo.",
    descriptionEn: "Online WhatsApp sticker maker, no app required.",
    isArchived: false,
  },
  {
    url: "https://mulesstudio.vercel.app",
    title: "Mules Studio",
    description: "Uma comunidade NFT de Mulas na Blockchain da Fantom",
    descriptionEn: "An NFT community of mules on the Fantom blockchain.",
    isArchived: false,
  },
  {
    url: "https://github.com/brunooomelo/picpay-js",
    title: "Picpay-js",
    description: "Uma SDK em javascript para API Rest do PicPay Ecommerce",
    descriptionEn: "A JavaScript SDK for the PicPay e-commerce REST API.",
    isArchived: true,
  },
  {
    url: "https://github.com/brunooomelo/lottery",
    title: "Lottery",
    description: "CLI para receber resultados da Loteria Brasileira",
    descriptionEn: "A CLI that fetches Brazilian lottery results.",
    isArchived: true,
  },
];

type ProjectsProps = {
  locale?: "pt-BR" | "en";
  archivedLabel?: string;
  // Na home só aparecem os projetos que ainda estão no ar.
  activeOnly?: boolean;
};

export const Projects = ({
  locale = "pt-BR",
  archivedLabel = "Arquivado",
  activeOnly = false,
}: ProjectsProps) => (
  <section className="flex flex-col border-b border-ink-500">
    {projects
      .filter((project) => !activeOnly || !project.isArchived)
      .map((project) => (
      <Link
        key={project.title}
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
                {archivedLabel}
              </span>
            )}
          </div>
          <p className="text-ink-300">{locale === "en" ? project.descriptionEn : project.description}
          </p>
        </div>
        <FiArrowUpRight
          size={24}
          className="mt-1 shrink-0 text-ink-400 transition-colors group-hover:text-ink-50"
        />
      </Link>
    ))}
  </section>
);
