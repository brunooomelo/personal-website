import Link from "next/link";
import { NextSeo } from "next-seo";
import { compareDesc, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { allContents } from "@contentlayer/generated";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { absoluteUrl } from "@/config/site";

// Link em texto corrido: sublinhado discreto em vez de cor. A paleta do site é
// uma rampa de cinza neutra, e o cyan-400 que estava aqui era a única cor
// cromática da página inteira.
const link =
  "underline decoration-ink-500 underline-offset-4 transition-colors hover:decoration-ink-50 focus-visible:decoration-ink-50";

type LatestPost = {
  title: string;
  publishedAt: string;
  url: string;
};

type HomeProps = {
  latestPost: LatestPost | null;
};

// O último post entra no HTML no build. A home é a porta de entrada do site e
// o blog só existe pra quem clica em "BLOG" no menu — aqui ele aparece sem
// depender de requisição nenhuma.
export const getStaticProps = async () => {
  const [latest] = allContents.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  const latestPost: LatestPost | null = latest
    ? {
        title: latest.title,
        publishedAt: latest.publishedAt,
        url: latest.url,
      }
    : null;

  return { props: { latestPost } };
};

export default function Home({ latestPost }: HomeProps) {
  return (
    <>
      <NextSeo
        title="Bruno Melo — desenvolvedor fullstack JavaScript"
        description="Desenvolvedor fullstack JavaScript. Hoje no time de WhatsApp da Monest, cuidando de fila, Redis e observabilidade. Antes disso, sistema de frete, processador de nota fiscal e alguns projetos meus."
        canonical={absoluteUrl("/")}
        openGraph={{ url: absoluteUrl("/") }}
      />
      <Header />

      <h1>Bruno Melo, desenvolvedor fullstack JavaScript</h1>

      <section className="flex flex-col gap-5">
        <h2>Quem sou eu</h2>
        <p>
          Sou o Bruno. Escrevo TypeScript em tudo, uso Node no servidor e
          Next.js com Tailwind no front. Nunca fui designer, mas já fiz bastante
          coisa de design e ainda faço quando precisa. Esse site aqui eu fiz do
          zero, e o{" "}
          <Link
            aria-label="Veja o código deste site no GitHub"
            href="https://github.com/brunooomelo/personal-website"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            código está no GitHub
          </Link>
          .
        </p>
        <p>
          Gosto de construir coisa e soltar pra ver o que acontece. Já lancei
          coisa que foi bem e desliguei mesmo assim, e já lancei coisa que
          morreu sozinha.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <h2>O que eu construí</h2>
        <Projects />
      </section>

      <section className="flex flex-col gap-5">
        <h2>No trabalho</h2>
        <p>
          Hoje eu estou no time de WhatsApp da Monest. A gente manda milhares de
          mensagens por dia, então boa parte do meu trabalho é cuidar pra fila
          não entupir e pro Redis e o banco aguentarem o volume. Mexo bastante
          em observabilidade, que é o que me avisa quando alguma coisa saiu do
          lugar.
        </p>
        <p>
          Escrevi esse tipo de sistema na mão por muitos anos, quando não tinha
          IA pra ajudar. Hoje eu escrevo o RFC, escrevo a spec, ajusto o prompt,
          e a IA implementa.
        </p>
        {/* TODO: falta a Popstand. Uma frase no mesmo formato das outras, sobre
            o que foi feito lá, entra no fim deste parágrafo. */}
        <p>
          Antes da Monest eu fiz um processador de nota fiscal em Node pra
          Polowear. Na Kronos eu montei um sistema de busca de informação que
          puxava dado de crawler e de API, tudo rodando em cima de fila. Na G2L
          a gente construiu um sistema de frete do zero, olhando o Fretebras
          como referência, e levou um ano pra ficar de pé. Na Provi eu trabalhei
          melhorando a vida de quem desenvolvia, arrumando o que travava o time
          no dia a dia.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <h2>Hobbies</h2>
        <p>
          Montei teclado por muito tempo e parei. Ficou trabalhoso, e chegou uma
          hora em que todo teclado virou o mesmo teclado. Eu já tinha feito
          todos os tipos que eu queria ter.
        </p>
        <p>
          Agora estou aprendendo modelagem 3D e pixel art, e mexendo com
          miniatura. Também gosto de jogo, e de fazer jogo. Tem um protótipo em
          pé aqui que eu conto depois o que é.
        </p>
      </section>

      <section className="flex flex-col gap-5">
        {/* Sem promessa de escrever mais: a seção mostra o que existe e para
            aí. Promessa na home envelhece sozinha. */}
        <h2>Blog</h2>
        {latestPost && (
          <div className="flex flex-col gap-1">
            <h3>
              <Link href={latestPost.url} className={link}>
                {latestPost.title}
              </Link>
            </h3>
            <time
              dateTime={latestPost.publishedAt}
              className="font-mono text-xs text-ink-400"
            >
              {format(parseISO(latestPost.publishedAt), "d 'de' LLLL 'de' yyyy", {
                locale: ptBR,
              })}
            </time>
          </div>
        )}
        <p>
          <Link href="/blog" className={link}>
            Todos os posts
          </Link>
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <h2>Contato</h2>
        {/* TODO: se você quiser expor e-mail, troque este parágrafo por
            "me manda um e-mail: <a href="mailto:...">...</a>". */}
        <p>
          Se quiser falar comigo, me chama no{" "}
          <Link
            aria-label="Fale comigo no Twitter"
            href="https://twitter.com/brunooomelo"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          ou no{" "}
          <Link
            aria-label="Fale comigo no LinkedIn"
            href="https://www.linkedin.com/in/brunooomelo"
            className={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          .
        </p>
      </section>

      <Footer />
    </>
  );
}
