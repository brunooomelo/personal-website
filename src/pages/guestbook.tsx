import { NextSeo } from "next-seo";
import { Header } from "@/components/header";
import { useSession, signIn, signOut } from "next-auth/react";
import { SiGithub } from "react-icons/si";
import { FiSend } from "react-icons/fi";

const comments = [
  {
    id: 1,
    username: "Bruno Melo",
    comment:
      "Hope y'all are doing great! 😉 Hit me up if you're interested in working together!",
  },
  {
    id: 21,
    username: "yang Yanr",
    comment: "Hi Lee, I love the great work you are doing 🤝🏾",
  },
  {
    id: 13,
    username: "Snorlax",
    comment: "Thank you for sharing your expertise over the years <3",
  },
];
export default function Guestbook() {
  const { data: session, status } = useSession();
  return (
    <>
      <NextSeo title="Bruno Melo - Guestbook" />
      <Header />
      <h1 className="text-xl leading-7 tracking-tighter">
        Bem-vindo ao meu Guestbook 📕
      </h1>

      {status === "unauthenticated" && (
        <button
          onClick={() => signIn("github")}
          className="flex w-1/4 items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
        >
          <SiGithub className="h-5 w-5" />
          <span className="text-sm font-semibold leading-6">GitHub</span>
        </button>
      )}

      {status === "loading" && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-9 bg-[#24292F] rounded col-span-2"></div>
                <div className="h-9 bg-[#24292F] rounded col-span-1"></div>
              </div>
              <div className="h-2 w-1/4 bg-[#24292F] rounded"></div>
            </div>
          </div>
        </div>
      )}

      {!!session && status === "authenticated" && (
        <div className="flex flex-col gap-1 items-start">
          <form className="flex w-full gap-2 items-start">
            <input
              className="px-4 py-1.5  block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none"
              placeholder="Deixe sua mensagem aqui"
            />
            <button
              type="submit"
              className="flex w-1/4 items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <span className="text-sm font-semibold leading-6">Enviar</span>
              <FiSend className="h-5 w-5" />
            </button>
          </form>
          <button
            onClick={() => signOut()}
            className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
          >
            Sair do guestbook
          </button>
        </div>
      )}

      <div className="flex flex-col space-y-1 mb-4">
        {comments.map((comment) => (
          <div className="w-full text-sm break-words" key={comment.id}>
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {comment.username}:
            </span>
            {comment.comment}
          </div>
        ))}
      </div>
    </>
  );
}
