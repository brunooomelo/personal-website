import Link from "next/link";

type Comment = {
  _id: string;
  id?: string | null;
  username: string;
  name?: string | null;
  comment: string;
};
type CommentListProps = {
  comments: Comment[];
  isLoading: boolean;
  ownerId?: string | null;
};

export const CommentList = ({
  comments,
  isLoading,
  ownerId,
}: CommentListProps) => {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      {isLoading && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-ink-800 rounded col-span-1"></div>
                <div className="h-5 bg-ink-800 rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-ink-800 rounded col-span-1"></div>
                <div className="h-5 bg-ink-800 rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-ink-800 rounded col-span-1"></div>
                <div className="h-5 bg-ink-800 rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-ink-800 rounded col-span-1"></div>
                <div className="h-5 bg-ink-800 rounded col-span-7"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {comments?.map((comment) => (
        <div
          className={`flex gap-1 w-full text-sm break-words px-2 ${
            ownerId && ownerId === comment.id
              ? "bg-ink-800 hover:bg-ink-700 rounded"
              : ""
          }`}
          key={comment._id}
        >
          <span>
            {!!comment.id ? (
              <Link
                href={`https://github.com/${comment.username}`}
                className="text-ink-300 hover:text-ink-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                {comment.name}:
              </Link>
            ) : (
              <span className="text-ink-300">{comment.username}:</span>
            )}{" "}
            {comment.comment}{" "}
            {!comment._id && (
              <span className="inline-flex items-center rounded-md bg-ink-800 px-2 text-xs font-medium text-ink-300 ring-1 ring-inset ring-ink-500">
                Enviando mensagem
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
