// Textos das páginas internas (blog, post, guestbook, uses, 404) e do rodapé.
// O conteúdo dos posts continua no idioma em que foi escrito; aqui fica só
// a moldura da página.
import ptBR from "date-fns/locale/pt-BR";
import enUS from "date-fns/locale/en-US";
import { format, parseISO } from "date-fns";
import { toLocale, type Locale } from "./home";

type PageCopy = { eyebrow: string; title: string; lead: string; seo: string };

type PagesDictionary = {
  blog: PageCopy & { empty: string; views: (n: number | null) => string };
  post: { back: string };
  guestbook: PageCopy & {
    signIn: string;
    loadError: string;
  };
  uses: PageCopy;
  notFound: PageCopy & { back: string };
  footer: { role: string; backToTop: string };
};

const pt: PagesDictionary = {
  blog: {
    eyebrow: "Blog",
    title: "Textos",
    lead: "Anotações sobre o que eu construo e as ferramentas que uso no dia a dia.",
    seo: "Textos do Bruno Melo sobre o que ele constrói e as ferramentas que usa.",
    empty: "Nenhum texto publicado ainda.",
    views: (n) =>
      n === null ? "— visualizações" : `${n} ${n === 1 ? "visualização" : "visualizações"}`,
  },
  post: { back: "Blog" },
  guestbook: {
    eyebrow: "Guestbook",
    title: "Deixe uma mensagem",
    lead: "Entre com o GitHub para assinar o livro de visitas.",
    seo: "Livro de visitas do Bruno Melo: entre com o GitHub e deixe uma mensagem.",
    signIn: "Entrar com GitHub",
    loadError: "Não foi possível carregar as mensagens.",
  },
  uses: {
    eyebrow: "Uses",
    title: "Setup",
    lead: "Equipamento e programas que eu uso para trabalhar.",
    seo: "O setup do Bruno Melo: equipamento, editor, terminal e programas.",
  },
  notFound: {
    eyebrow: "404",
    title: "Página não encontrada",
    lead: "O endereço pode ter mudado ou a página não existe mais.",
    seo: "Página não encontrada.",
    back: "Voltar para a home",
  },
  footer: { role: "Forward Deployed Engineer", backToTop: "Voltar ao topo" },
};

const en: PagesDictionary = {
  blog: {
    eyebrow: "Blog",
    title: "Writing",
    lead: "Notes on what I build and the tools I use every day. Posts are in Portuguese.",
    seo: "Bruno Melo's notes on what he builds and the tools he uses.",
    empty: "Nothing published yet.",
    views: (n) => (n === null ? "— views" : `${n} ${n === 1 ? "view" : "views"}`),
  },
  post: { back: "Blog" },
  guestbook: {
    eyebrow: "Guestbook",
    title: "Leave a message",
    lead: "Sign in with GitHub to sign the guestbook.",
    seo: "Bruno Melo's guestbook: sign in with GitHub and leave a message.",
    signIn: "Sign in with GitHub",
    loadError: "Couldn't load the messages.",
  },
  uses: {
    eyebrow: "Uses",
    title: "Setup",
    lead: "The hardware and software I work with.",
    seo: "Bruno Melo's setup: hardware, editor, terminal and apps.",
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found",
    lead: "The address may have changed, or the page no longer exists.",
    seo: "Page not found.",
    back: "Back to home",
  },
  footer: { role: "Forward Deployed Engineer", backToTop: "Back to top" },
};

const dictionaries: Record<Locale, PagesDictionary> = { "pt-BR": pt, en };

export const getPagesDictionary = (locale?: string) =>
  dictionaries[toLocale(locale)];

/** Data do post no formato de cada idioma: "4 de agosto de 2023" / "August 4, 2023". */
export const formatPostDate = (iso: string, locale?: string) =>
  toLocale(locale) === "en"
    ? format(parseISO(iso), "MMMM d, yyyy", { locale: enUS })
    : format(parseISO(iso), "d 'de' MMMM 'de' yyyy", { locale: ptBR });
