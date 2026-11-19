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
    nav: Record<"home" | "blog", string>;
    switchTo: string;
    switchAria: string;
  };
  intro: { heading: string; text: string };
  cases: { heading: string; resultLabel: string; items: Case[] };
  projects: { heading: string; archived: string };
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
    follow: "Fale comigo",
    followAria: "Fale comigo: ir para o contato",
    nav: { home: "home", blog: "blog" },
    switchTo: "EN",
    switchAria: "Read in English",
  },
  intro: {
    heading: "Prazer, eu sou o Bruno Melo",
    text: "Sou Forward Deployed Engineer: entro no problema do cliente, conecto o produto aos sistemas que ele já usa e coloco em produção. Hoje faço isso com pagamentos, mensageria e assistentes de IA numa plataforma de negociação de dívidas, do backend e das filas até o SQL, a observabilidade e a tela. Antes, trabalhei como desenvolvedor backend, frontend e UI designer em empresas como Provi, Popstand, G2L e Polo Wear.",
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
      {
        id: "producao",
        context: "Mensageria · produção",
        title: "Falhas de entrega investigadas até a causa",
        summary:
          "Montei consultas e dashboards em NRQL no New Relic para acompanhar os canais de mensagem, encontrei registros órfãos que ficavam sem processar e investiguei um erro recorrente do provedor (Twilio 21620) até a origem.",
        result: "Causa do erro identificada e falhas acompanhadas em dashboard.",
        stack: ["New Relic", "NRQL", "SQL", "Twilio"],
      },
      {
        id: "campanhas",
        context: "Operação · campanhas no WhatsApp",
        title: "Telas para o time de operação",
        summary:
          "Construí as telas de disparo de campanha e de gestão de templates HSM do WhatsApp, ligadas ao backend e às filas que fazem o envio.",
        result: "Operação dispara campanhas e gerencia templates pela própria tela.",
        stack: ["Interface", "Filas", "Templates HSM"],
      },
    ],
  },
  projects: { heading: "Side projects", archived: "Arquivado" },
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
    follow: "Get in touch",
    followAria: "Get in touch: go to contact",
    nav: { home: "home", blog: "blog" },
    switchTo: "PT",
    switchAria: "Ler em português",
  },
  intro: {
    heading: "Hi, I'm Bruno Melo",
    text: "I'm a Forward Deployed Engineer: I dig into the customer's problem, connect the product to the systems they already run and get it into production. Today I do that with payments, messaging and AI assistants on a debt negotiation platform, from the backend and queues to SQL, observability and the UI. Before that I worked as a backend developer, frontend developer and UI designer at companies like Provi, Popstand, G2L and Polo Wear.",
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
      {
        id: "producao",
        context: "Messaging · production",
        title: "Delivery failures traced to the root cause",
        summary:
          "I built NRQL queries and New Relic dashboards to monitor the messaging channels, found orphaned records that were never processed, and traced a recurring provider error (Twilio 21620) back to its origin.",
        result: "Root cause found, with failures tracked on a dashboard.",
        stack: ["New Relic", "NRQL", "SQL", "Twilio"],
      },
      {
        id: "campanhas",
        context: "Operations · WhatsApp campaigns",
        title: "Screens for the operations team",
        summary:
          "I built the campaign dispatch and WhatsApp HSM template management screens, wired to the backend and the queues that do the sending.",
        result: "Operations sends campaigns and manages templates from its own screens.",
        stack: ["UI", "Queues", "HSM templates"],
      },
    ],
  },
  projects: { heading: "Side projects", archived: "Archived" },
  contact: {
    heading: "Let's talk",
    text: "Got an integration or AI problem that needs to reach production? Reach out.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { "pt-BR": pt, en };

export const getDictionary = (locale?: string) => dictionaries[toLocale(locale)];
