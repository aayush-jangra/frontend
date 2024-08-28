import { CreatePost } from "../Components/CreatePost";
import { usePosts } from "../data/usePosts";

export const Posts: React.FC = () => {
  const { posts } = usePosts();

  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      {posts.map(
        ({
          id,
          username,
          profileImage,
          createdAt,
          emoji,
          content,
          comments,
        }) => {
          return (
            <div
              key={id}
              className="bg-post border-border-primary border-2 rounded-lg px-5 py-6 flex flex-col gap-5"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="bg-white rounded-full h-11 w-11"></div>
                  <div className="flex flex-col gap-1">
                    <div className="text-text-primary font-medium">
                      {username}
                    </div>
                    <div className="text-content font-medium text-sm">
                      {createdAt}
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer text-white">Icon here</div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 p-4 bg-content-bg rounded-lg">
                  <div className="flex shrink-0 items-center justify-center rounded-full h-12 w-12 bg-post">
                    {emoji}
                  </div>
                  <div className="text-content">{content}</div>
                </div>
                <div className="font-medium text-sm text-text-secondary">
                  {"Icon"} {comments} comments
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
