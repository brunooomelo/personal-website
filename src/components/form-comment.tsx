import { event } from "@/utils/gtag";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";

type FormValues = {
  comment: string;
};
type CommentFormProps = {
  session: Session;
};
export const CommentForm = ({ session }: CommentFormProps) => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { isLoading },
    reset,
  } = useForm<FormValues>();

  const mutation = useMutation(
    (newComment: FormValues) =>
      fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }),
    {
      onMutate: async (newComment) => {
        await queryClient.cancelQueries("comments");
        const previousTodos = queryClient.getQueryData("comments");

        queryClient.setQueryData("comments", (old: any) => [
          newComment,
          ...old,
        ]);

        return { previousTodos };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData("comments", context?.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("comments");
      },
    }
  );

  const onSubmit = async (data: FormValues) => {
    if (!session.user) {
      alert("voce nao esta authenticado");
      return;
    }

    const newComment = {
      id: session.user.id,
      name: session.user.name,
      username: session.user.username,
      comment: data.comment,
    };

    try {
      await mutation.mutate(newComment);
      reset({ comment: "" });
    } catch (error) {
      console.error(error);
    }
  };
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
              className="block w-full rounded-md border border-ink-500 bg-ink-900 px-4 py-1.5 text-ink-50 placeholder:text-ink-400"
              placeholder="Deixe sua mensagem aqui"
            />
          )}
        />
        <button
          type="submit"
          className="flex w-1/4 items-center justify-center gap-3 rounded-md bg-ink-700 hover:bg-ink-600 px-3 py-1.5 text-ink-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="text-sm font-semibold leading-6">Carregando</span>
          ) : (
            <>
              <span className="text-sm font-semibold leading-6">Enviar</span>
              <FiSend className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
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
        className="text-xs text-ink-300 hover:text-ink-50 mt-2 mb-6"
        disabled={isLoading}
      >
        Sair do guestbook
      </button>
    </div>
  );
};
