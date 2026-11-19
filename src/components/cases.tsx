import type { Case } from "@/i18n/home";

/** Case curto: contexto, título, uma ou duas frases e o resultado em destaque. */
export const Cases = ({
  items,
  resultLabel,
}: {
  items: Case[];
  resultLabel: string;
}) => (
  <div className="flex flex-col border-b border-ink-500">
    {items.map((item) => (
      <article
        key={item.id}
        id={item.id}
        className="flex flex-col gap-3 border-t border-ink-500 py-6"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400">
          {item.context}
        </p>
        <h3 className="text-lg leading-7">{item.title}</h3>
        <p className="text-ink-300">{item.summary}</p>
        <p>
          <span className="mr-3 font-mono text-[11px] uppercase tracking-[0.05em] text-accent">
            {resultLabel}
          </span>
          {item.result}
        </p>
        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Stack">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border px-2 font-mono text-xs leading-6 text-ink-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);
