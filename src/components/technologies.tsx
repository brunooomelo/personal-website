import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  SiEthereum,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Tooltip } from "@/components/tooltip";

const techs = [
  {
    label: "Javascript",
    Icon: SiJavascript,
  },
  {
    label: "Typescript",
    Icon: SiTypescript,
  },
  {
    label: "HTML5",
    Icon: SiHtml5,
  },
  {
    label: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    label: "Node.JS",
    Icon: SiNodedotjs,
  },
  {
    label: "Next.JS",
    Icon: SiNextdotjs,
  },
  {
    label: "Firebase",
    Icon: SiFirebase,
  },
  {
    label: "Postgres",
    Icon: SiPostgresql,
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
  },
  {
    label: "Figma",
    Icon: SiFigma,
  },
  {
    label: "Web3/Ethereum",
    Icon: SiEthereum,
  },
  {
    label: "Git",
    Icon: SiGit,
  },
];

export const Technologies = () => (
  <section
    // Grid em vez de flex-wrap + justify-center: itens de grid comecam na
    // borda do container, entao a primeira coluna alinha com o texto. Com
    // `justify-center` a margem esquerda mudava conforme quantos itens
    // coubessem na linha. 12 itens dividem certo por 3, 4 e 6.
    className="grid grid-cols-3 justify-items-start gap-y-6 min-[514px]:grid-cols-4 md:grid-cols-6"
  >
    <TooltipPrimitive.Provider>
      {techs.map((tech) => (
        <Tooltip content={tech.label} key={tech.label}>
          <div
            tabIndex={0}
            className="flex h-14 items-center text-ink-300 transition-colors hover:text-ink-50 focus-visible:text-ink-50"
          >
            <tech.Icon size={52} />
          </div>
        </Tooltip>
      ))}
    </TooltipPrimitive.Provider>
  </section>
);
