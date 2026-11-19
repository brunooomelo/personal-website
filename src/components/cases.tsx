import type { Case } from "@/i18n/home";

type Labels = Record<"problem" | "constraint" | "built" | "result", string>;

const steps: (keyof Labels)[] = ["problem", "constraint", "built", "result"];

/**
 * Cada case segue sempre a mesma ordem (problema → restrição → construído →
 * resultado), então a ordem é informação e os rótulos ficam na coluna da
 * esquerda, alinhados entre todos os cases.
 */
export const Cases = ({ items, labels }: { items: Case[]; labels: Labels }) => (
  <div className="flex flex-col border-b border-ink-500">
    {items.map((item) => (
      <article
        key={item.id}
        id={item.id}
        className="flex flex-col gap-5 border-t border-ink-500 py-8"
      >
        <header className="flex flex-col gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400">
            {item.context}
          </p>
          <h3 className="text-lg leading-7">{item.title}</h3>
        </header>

        <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[9rem_1fr]">
          {steps.map((step) => (
            <div key={step} className="contents">
              <dt
                className={`font-mono text-[11px] uppercase tracking-[0.05em] sm:pt-1.5 ${
                  step === "result" ? "text-accent" : "text-ink-400"
                }`}
              >
                {labels[step]}
              </dt>
              <dd
                className={`-mt-3 min-w-0 sm:mt-0 ${
                  step === "result" ? "text-ink-50" : "text-ink-300"
                }`}
              >
                {item[step]}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-wrap gap-2" aria-label="Stack">
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
