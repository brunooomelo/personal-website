type Comment = {
  _id: string;
  username: string;
  comment: string;
};
type CommentListProps = {
  comments: Comment[];
  isLoading: boolean;
};
export const CommentList = ({ comments, isLoading }: CommentListProps) => {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      {isLoading && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading &&
        comments?.map((comment) => (
          <div className="w-full text-sm break-words" key={comment._id}>
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {comment.username}:
            </span>
            {comment.comment}
          </div>
        ))}
    </div>
  );
};
