import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Technologies = () => (
  <motion.section
    variants={container}
    initial="hidden"
    animate="show"
    // Grid em vez de flex-wrap + justify-center: itens de grid comecam na
    // borda do container, entao a primeira coluna alinha com o texto. Com
    // `justify-center` a margem esquerda mudava conforme quantos itens
    // coubessem na linha. 12 itens dividem certo por 3, 4 e 6.
    className="grid grid-cols-3 gap-3 min-[514px]:grid-cols-4 md:grid-cols-6"
  >
    <TooltipPrimitive.Provider>
      {techs.map((tech) => (
        <Tooltip content={tech.label} key={tech.label}>
          <motion.div
            variants={item}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1 }}
            whileFocus={{ scale: 1.15 }}
            tabIndex={0}
            className="flex h-[100px] items-center justify-center rounded border border-ink-500 bg-ink-700 hover:bg-ink-600"
          >
            <tech.Icon size={52} />
          </motion.div>
        </Tooltip>
      ))}
    </TooltipPrimitive.Provider>
  </motion.section>
);
