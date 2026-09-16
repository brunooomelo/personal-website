import Link from "next/link";

const link =
  "underline decoration-ink-500 underline-offset-4 transition-colors hover:decoration-ink-50 focus-visible:decoration-ink-50";

type Project = {
  title: string;
  url: string;
  ariaLabel: string;
  status: string;
  description: string;
  // O número é o que separa "fiz um projeto" de "fiz um projeto que alguém
  // usou", então ele tem peso próprio na hierarquia.
  highlight: string;
  outcome: string;
};

const projects: Project[] = [
  {
    title: "Figurinhas",
    url: "https://figurinhaszap.com",
    ariaLabel: "Conheça mais sobre o Figurinhas, gerador de figurinhas de WhatsApp",
    status: "encerrado",
    description:
      "Gerador de figurinhas de WhatsApp que rodava no navegador, sem instalar nada.",
    highlight:
      "Na primeira semana de lançamento saíram mais de 2 mil figurinhas.",
    outcome:
      "Desliguei depois. Entrou bastante gente, mas não tinha produto ali. A pessoa fazia a figurinha e não tinha motivo nenhum pra voltar.",
  },
  {
    title: "Mules Studio",
    url: "https://mulesstudio.vercel.app",
    ariaLabel:
      "Conheça mais sobre o Mules Studio, comunidade de NFT na blockchain da Fantom",
    status: "encerrado",
    description:
      "Uma comunidade de NFT de mulas na blockchain da Fantom. Eu escrevi o contrato, montei o mint e fiz o site.",
    highlight: "Vendemos 600 dos 1000 NFTs.",
    outcome: "Acabou quando o mercado de NFT esfriou.",
  },
];

export const Projects = () => (
  <section className="flex flex-col border-b border-ink-500">
    {projects.map((project) => (
      <div
        key={project.title}
        className="flex flex-col gap-2 border-t border-ink-500 py-5"
      >
        <div className="flex items-center gap-3">
          <h3>
            <Link
              aria-label={project.ariaLabel}
              href={project.url}
              className={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </Link>
          </h3>
          <span className="font-mono text-xs uppercase tracking-wide text-ink-400">
            {project.status}
          </span>
        </div>
        <p className="text-ink-300">{project.description}</p>
        <p className="font-semibold">{project.highlight}</p>
        <p className="text-ink-300">{project.outcome}</p>
      </div>
    ))}

    {/* Os dois projetos pequenos numa linha só: dar a eles o mesmo peso dos de
        cima achataria a hierarquia. */}
    <div className="border-t border-ink-500 py-5">
      <p className="text-ink-300">
        Tem mais duas coisas antigas no meu GitHub. O{" "}
        <Link
          aria-label="Veja o picpay-js no GitHub"
          href="https://github.com/brunooomelo/picpay-js"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          picpay-js
        </Link>{" "}
        é uma SDK em JavaScript pra API do PicPay, e o{" "}
        <Link
          aria-label="Veja o Lottery no GitHub"
          href="https://github.com/brunooomelo/lottery"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lottery
        </Link>{" "}
        é uma CLI que puxa resultado da loteria. As duas paradas.
      </p>
    </div>
  </section>
);
