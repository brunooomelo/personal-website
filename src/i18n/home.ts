// Textos da home e do header em português (padrão) e inglês (/en).
//
// Os cases são anonimizados de propósito: nenhum cliente ou parceiro é citado
// pelo nome, só pelo tipo ("banco digital", "instituição de ensino").

export type Locale = "pt-BR" | "en";

export const locales: Locale[] = ["pt-BR", "en"];

export const toLocale = (value?: string): Locale =>
  value === "en" ? "en" : "pt-BR";

export type Case = {
  id: string;
  context: string;
  title: string;
  // Problema, restrição e o que foi construído, em uma ou duas frases.
  summary: string;
  // TODO(Bruno): trocar por resultado medido (prazo, taxa de acordo,
  // volume, erros evitados) assim que tiver os números.
  result: string;
  stack: string[];
};

export type ContactLink = { label: string; href: string };

type Dictionary = {
  seo: { title: string; description: string };
  header: {
    tagline: string;
    follow: string;
    followAria: string;
    nav: Record<"home" | "blog" | "guestbook" | "uses", string>;
    switchTo: string;
    switchAria: string;
  };
  intro: { heading: string; text: string };
  cases: { heading: string; resultLabel: string; items: Case[] };
  projects: { heading: string };
  contact: { heading: string; text: string };
};

export const contactLinks: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brunooomelo" },
  { label: "GitHub", href: "https://github.com/brunooomelo" },
  { label: "X / Twitter", href: "https://twitter.com/brunooomelo" },
];

const pt: Dictionary = {
  seo: {
    title: "Bruno Melo - Forward Deployed Engineer",
    description:
      "Forward Deployed Engineer: conecto o produto aos sistemas do cliente, adapto IA para cada caso e coloco em produção.",
  },
  header: {
    tagline: "Forward Deployed Engineer",
    follow: "Me acompanhe",
    followAria: "Me acompanhe no GitHub",
    nav: { home: "home", blog: "blog", guestbook: "guestbook", uses: "uses" },
    switchTo: "EN",
    switchAria: "Read in English",
  },
  intro: {
    heading: "Prazer, eu sou o Bruno Melo",
    text: "Sou Forward Deployed Engineer: entro no problema do cliente, conecto o produto aos sistemas que ele já usa e coloco em produção. Hoje faço isso com pagamentos, mensageria e assistentes de IA numa plataforma de negociação de dívidas.",
  },
  cases: {
    heading: "Cases",
    resultLabel: "Resultado",
    items: [
      {
        id: "pagamentos",
        context: "Banco digital · pagamentos",
        title: "Novo canal de pagamento em produção",
        summary:
          "Integrei um novo banco à plataforma por uma API com OAuth 2.0, mTLS e documentação incompleta. Os webhooks chegam repetidos ou fora de ordem, então a recepção é idempotente.",
        result: "Canal no ar, sem pagamento duplicado.",
        stack: ["Node.js", "OAuth 2.0", "mTLS", "Webhooks", "Filas"],
      },
      {
        id: "agente-whatsapp",
        context: "Plataforma de mensageria · agente de IA",
        title: "Agente de IA no WhatsApp, do protótipo à decisão",
        summary:
          "Antes de investir na integração completa, montei um workspace para explorar o agente, adaptei as skills ao caso de uso e publiquei um POC de WhatsApp Flow com harness de testes.",
        result: "Fluxo testado de ponta a ponta pelo time antes da decisão.",
        stack: ["WhatsApp Flows", "Agentes de IA", "Vercel", "TypeScript"],
      },
      {
        id: "assistente-por-cliente",
        context: "Instituição de ensino · IA por cliente",
        title: "Assistente de negociação com a cara do cliente",
        summary:
          "Criei uma variante do assistente com prompts e regras próprios do cliente, separada da base comum, para que a mudança não afetasse os outros clientes.",
        result: "Variante entregue, sem mudança para os demais clientes.",
        stack: ["LLM", "Prompts", "Twilio", "New Relic"],
      },
    ],
  },
  projects: { heading: "Side projects" },
  contact: {
    heading: "Vamos conversar",
    text: "Tem um problema de integração ou de IA para colocar em produção? Me chama.",
  },
};

const en: Dictionary = {
  seo: {
    title: "Bruno Melo - Forward Deployed Engineer",
    description:
      "Forward Deployed Engineer: I connect products to customer systems, tailor AI to each account and ship it to production.",
  },
  header: {
    tagline: "Forward Deployed Engineer",
    follow: "Follow along",
    followAria: "Follow along on GitHub",
    nav: { home: "home", blog: "blog", guestbook: "guestbook", uses: "uses" },
    switchTo: "PT",
    switchAria: "Ler em português",
  },
  intro: {
    heading: "Hi, I'm Bruno Melo",
    text: "I'm a Forward Deployed Engineer: I dig into the customer's problem, connect the product to the systems they already run and get it into production. Today I do that with payments, messaging and AI assistants on a debt negotiation platform.",
  },
  cases: {
    heading: "Case studies",
    resultLabel: "Result",
    items: [
      {
        id: "pagamentos",
        context: "Digital bank · payments",
        title: "A new payment channel in production",
        summary:
          "I integrated a new bank into the platform through an API with OAuth 2.0, mTLS and incomplete documentation. Webhooks arrive duplicated or out of order, so intake is idempotent.",
        result: "Channel live, with no duplicate payments.",
        stack: ["Node.js", "OAuth 2.0", "mTLS", "Webhooks", "Queues"],
      },
      {
        id: "agente-whatsapp",
        context: "Messaging platform · AI agent",
        title: "An AI agent on WhatsApp, from prototype to decision",
        summary:
          "Before investing in the full integration, I set up a workspace to explore the agent, adapted its skills to the use case and shipped a WhatsApp Flow POC with a test harness.",
        result: "Flow tested end to end by the team before the decision.",
        stack: ["WhatsApp Flows", "AI agents", "Vercel", "TypeScript"],
      },
      {
        id: "assistente-por-cliente",
        context: "Education institution · per-customer AI",
        title: "A negotiation assistant shaped to one customer",
        summary:
          "I built an assistant variant with the customer's own prompts and rules, kept apart from the shared base so the change would not affect other customers.",
        result: "Variant delivered, unchanged for every other customer.",
        stack: ["LLM", "Prompts", "Twilio", "New Relic"],
      },
    ],
  },
  projects: { heading: "Side projects" },
  contact: {
    heading: "Let's talk",
    text: "Got an integration or AI problem that needs to reach production? Reach out.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { "pt-BR": pt, en };

export const getDictionary = (locale?: string) => dictionaries[toLocale(locale)];
