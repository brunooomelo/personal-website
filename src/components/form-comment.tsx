import { useState } from "react";
import { event } from "@/utils/gtag";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";

const MAX_COMMENT_LENGTH = 280;

type FormValues = {
  comment: string;
};

type OptimisticComment = {
  _id?: string;
  id?: string | null;
  name?: string | null;
  username: string;
  comment: string;
};

type CommentFormProps = {
  session: Session;
};

export const CommentForm = ({ session }: CommentFormProps) => {
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { comment: "" },
  });
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation<
    void,
    Error,
    FormValues,
    { previous?: OptimisticComment[] }
  >(
    async ({ comment }) => {
      // Só a mensagem é enviada: `id`, `name` e `username` agora saem da
      // sessão no servidor, então mandá-los aqui não teria efeito.
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      });

      // fetch não rejeita em 4xx/5xx. Sem esta checagem uma mensagem recusada
      // pelo servidor continuava aparecendo na lista como se tivesse ido.
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível enviar sua mensagem.");
      }
    },
    {
      onMutate: async ({ comment }) => {
        await queryClient.cancelQueries("comments");
        const previous =
          queryClient.getQueryData<OptimisticComment[]>("comments");

        queryClient.setQueryData<OptimisticComment[]>("comments", (old) => [
          {
            id: session.user?.id,
            name: session.user?.name,
            username: session.user?.username ?? "",
            comment,
          },
          // `old` é undefined enquanto a listagem ainda não carregou; sem o
          // fallback o espalhamento quebrava a página.
          ...(old ?? []),
        ]);

        return { previous };
      },
      onError: (err, _variables, context) => {
        queryClient.setQueryData("comments", context?.previous);
        setError(err.message);
      },
      onSuccess: () => {
        setError(null);
        reset({ comment: "" });
      },
      onSettled: () => {
        queryClient.invalidateQueries("comments");
      },
    },
  );

  // `mutate` não devolve promise, então o `await` de antes não esperava nada e
  // o try/catch nunca pegava erro — e o `isLoading` do formState do
  // react-hook-form é sobre carregar valores padrão, não sobre envio.
  const onSubmit = (data: FormValues) =>
    mutation.mutateAsync(data).catch(() => {});

  return (
    <div className="flex flex-col gap-1 items-start">
      <form
        className="flex w-full gap-2 items-start"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="comment"
          render={({ field: { onChange, name, value, onBlur, ref } }) => (
            <input
              ref={ref}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              maxLength={MAX_COMMENT_LENGTH}
              className="block w-full rounded-md border border-ink-500 bg-ink-900 px-4 py-1.5 text-ink-50 placeholder:text-ink-400"
              placeholder="Deixe sua mensagem aqui"
            />
          )}
        />
        <button
          type="submit"
          className="flex shrink-0 items-center justify-center gap-3 rounded-md bg-ink-700 hover:bg-ink-600 px-3 py-1.5 text-ink-50"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <span className="font-mono text-sm font-semibold leading-6">
              Enviando
            </span>
          ) : (
            <>
              <span className="font-mono text-sm font-semibold leading-6">
                Enviar
              </span>
              <FiSend className="h-5 w-5" />
            </>
          )}
        </button>
      </form>

      {error && (
        <p role="alert" className="font-mono text-xs text-ink-300">
          {error}
        </p>
      )}

      <button
        onClick={() => {
          event({
            action: "sign-out-github",
            category: "login",
            label: "sign out on guestbook page",
            value: 1,
          });
          signOut();
        }}
        className="font-mono text-xs text-ink-300 hover:text-ink-50 mt-2 mb-6"
      >
        Sair do guestbook
      </button>
    </div>
  );
};
