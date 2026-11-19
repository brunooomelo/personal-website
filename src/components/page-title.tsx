/**
 * Abertura padrão das páginas internas: rótulo em mono, título e uma linha
 * de apoio. Mantém o mesmo ritmo da home em todo o site.
 */
export const PageTitle = ({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) => (
  <section className="flex flex-col gap-3">
    <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-ink-400">
      {eyebrow}
    </p>
    <h1>{title}</h1>
    {lead && <p className="text-ink-300">{lead}</p>}
  </section>
);
