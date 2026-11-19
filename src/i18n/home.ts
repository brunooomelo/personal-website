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
  problem: string;
  constraint: string;
  built: string;
  // TODO(Bruno): trocar por resultado medido (prazo, taxa de acordo,
  // volume, erros evitados) assim que tiver os números.
  result: string;
  stack: string[];
};

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
  intro: { heading: string; paragraphs: string[] };
  cases: {
    heading: string;
    lead: string;
    labels: Record<"problem" | "constraint" | "built" | "result", string>;
    items: Case[];
  };
  stack: { heading: string; groups: { area: string; items: string }[] };
  companies: string;
  projects: { lead: string; archived: string };
};

const pt: Dictionary = {
  seo: {
    title: "Bruno Melo - Forward Deployed Engineer",
    description:
      "Forward Deployed Engineer: integro produto com os sistemas do cliente, adapto IA para cada caso e coloco em produção.",
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
    paragraphs: [
      "Sou Forward Deployed Engineer. Trabalho no ponto em que o produto encontra a realidade do cliente: entendo o problema, conecto com os sistemas que já existem lá e coloco a solução em produção.",
      "Hoje construo integrações de pagamento e mensageria e assistentes de IA adaptados a cada cliente numa plataforma de negociação de dívidas. Vou do backend e das filas até o SQL, a observabilidade e a tela que o time de operação usa.",
    ],
  },
  cases: {
    heading: "Cases",
    lead: "Problema do cliente, restrição, o que eu construí e o resultado. Os nomes dos clientes ficam de fora.",
    labels: {
      problem: "Problema",
      constraint: "Restrição",
      built: "O que eu construí",
      result: "Resultado",
    },
    items: [
      {
        id: "pagamentos",
        context: "Banco digital · pagamentos",
        title: "Novo canal de pagamento em produção",
        problem:
          "Colocar um novo banco como canal de pagamento dentro da plataforma, recebendo a confirmação de cada pagamento em tempo real.",
        constraint:
          "Autenticação OAuth 2.0 com mTLS, documentação incompleta e webhooks que podem chegar repetidos ou fora de ordem.",
        built:
          "O cliente de integração com certificado mTLS, a recepção de webhooks com idempotência para que o mesmo evento nunca seja processado duas vezes, e a mesma base aplicada à integração com um segundo banco.",
        result:
          "Canal de pagamento no ar, com eventos repetidos tratados sem gerar pagamento duplicado.",
        stack: ["Node.js", "OAuth 2.0", "mTLS", "Webhooks", "Filas"],
      },
      {
        id: "agente-whatsapp",
        context: "Plataforma de mensageria · agente de IA",
        title: "Agente de IA no WhatsApp, do protótipo à decisão",
        problem:
          "Descobrir se um agente de IA dentro do WhatsApp atenderia o fluxo do negócio antes de investir na integração completa.",
        constraint:
          "Plataforma nova, pouca documentação e regras rígidas do provedor para mensagens, templates e fluxos.",
        built:
          "Um workspace local para explorar o agente, a adaptação das skills ao caso de uso e um POC de WhatsApp Flow com harness de testes publicado na Vercel.",
        result:
          "Protótipo funcionando para o time testar o fluxo de ponta a ponta e decidir o que construir.",
        stack: ["WhatsApp Flows", "Agentes de IA", "Vercel", "TypeScript"],
      },
      {
        id: "assistente-por-cliente",
        context: "Instituição de ensino · IA por cliente",
        title: "Assistente de negociação com a cara do cliente",
        problem:
          "Um cliente precisava do assistente de negociação com regras, linguagem e limites próprios.",
        constraint:
          "Uma mudança de prompt para esse cliente não podia alterar o comportamento do assistente para os outros.",
        built:
          "Uma variante do assistente com prompts e regras separados da base comum, mais o monitoramento em produção dos canais de mensagem por onde ele conversa.",
        result:
          "Variante entregue para o cliente, com o assistente dos demais clientes sem mudança.",
        stack: ["LLM", "Prompts", "Twilio", "New Relic", "SQL"],
      },
    ],
  },
  stack: {
    heading: "Stack",
    groups: [
      { area: "Integrações", items: "OAuth 2.0, mTLS, webhooks, idempotência, APIs de bancos e de mensageria (Twilio, WhatsApp)" },
      { area: "Backend", items: "Node.js, TypeScript, filas, Postgres e SQL" },
      { area: "IA", items: "LLMs, prompts e variantes por cliente, agentes no WhatsApp" },
      { area: "Produção", items: "New Relic, NRQL, dashboards e alertas" },
      { area: "Interface", items: "Next.js, React, Tailwind" },
    ],
  },
  companies: "Onde já trabalhei:",
  projects: {
    lead: "Fora do trabalho, faço side-projects e #BuildInPublic. Alguns ainda estão ativos e outros já foram descontinuados.",
    archived: "Arquivado",
  },
};

const en: Dictionary = {
  seo: {
    title: "Bruno Melo - Forward Deployed Engineer",
    description:
      "Forward Deployed Engineer: I integrate products with customer systems, tailor AI to each account and ship it to production.",
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
    paragraphs: [
      "I'm a Forward Deployed Engineer. I work where the product meets the customer's reality: I learn the problem, connect to the systems they already run and get the solution into production.",
      "Today I build payment and messaging integrations and AI assistants tailored to each customer on a debt negotiation platform. I cover the backend and queues, SQL and observability, and the screens the operations team works in.",
    ],
  },
  cases: {
    heading: "Case studies",
    lead: "Customer problem, constraint, what I built and the result. Customer names are left out.",
    labels: {
      problem: "Problem",
      constraint: "Constraint",
      built: "What I built",
      result: "Result",
    },
    items: [
      {
        id: "pagamentos",
        context: "Digital bank · payments",
        title: "A new payment channel in production",
        problem:
          "Add a new bank as a payment channel inside the platform, with each payment confirmed in real time.",
        constraint:
          "OAuth 2.0 with mTLS, incomplete documentation, and webhooks that can arrive duplicated or out of order.",
        built:
          "The integration client with mTLS certificates, webhook handling with idempotency so the same event is never processed twice, and the same foundation applied to a second bank integration.",
        result:
          "Payment channel live, with duplicate events handled without creating duplicate payments.",
        stack: ["Node.js", "OAuth 2.0", "mTLS", "Webhooks", "Queues"],
      },
      {
        id: "agente-whatsapp",
        context: "Messaging platform · AI agent",
        title: "An AI agent on WhatsApp, from prototype to decision",
        problem:
          "Find out whether an AI agent inside WhatsApp could handle the business flow before investing in a full integration.",
        constraint:
          "A new platform, little documentation and strict provider rules for messages, templates and flows.",
        built:
          "A local workspace to explore the agent, the agent's skills adapted to the use case, and a WhatsApp Flow POC with a test harness deployed on Vercel.",
        result:
          "A working prototype the team could test end to end to decide what to build.",
        stack: ["WhatsApp Flows", "AI agents", "Vercel", "TypeScript"],
      },
      {
        id: "assistente-por-cliente",
        context: "Education institution · per-customer AI",
        title: "A negotiation assistant shaped to one customer",
        problem:
          "One customer needed the negotiation assistant to follow its own rules, language and limits.",
        constraint:
          "A prompt change for this customer could not change how the assistant behaved for anyone else.",
        built:
          "An assistant variant with prompts and rules kept apart from the shared base, plus production monitoring of the messaging channels it talks through.",
        result:
          "Variant delivered to the customer, with the assistant unchanged for every other customer.",
        stack: ["LLM", "Prompts", "Twilio", "New Relic", "SQL"],
      },
    ],
  },
  stack: {
    heading: "Stack",
    groups: [
      { area: "Integrations", items: "OAuth 2.0, mTLS, webhooks, idempotency, banking and messaging APIs (Twilio, WhatsApp)" },
      { area: "Backend", items: "Node.js, TypeScript, queues, Postgres and SQL" },
      { area: "AI", items: "LLMs, per-customer prompts and variants, WhatsApp agents" },
      { area: "Production", items: "New Relic, NRQL, dashboards and alerts" },
      { area: "Interface", items: "Next.js, React, Tailwind" },
    ],
  },
  companies: "Where I've worked:",
  projects: {
    lead: "Outside work I build side projects in public (#BuildInPublic). Some are still running and some have been retired.",
    archived: "Archived",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { "pt-BR": pt, en };

export const getDictionary = (locale?: string) => dictionaries[toLocale(locale)];
