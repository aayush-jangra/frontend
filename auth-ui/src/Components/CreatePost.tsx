import { useAuthState } from "../Pages/Home/AuthProvider";

export const CreatePost: React.FC = () => {
  const { requireAuth } = useAuthState();

  return (
    <div className="flex flex-col px-5 py-6 border-2 rounded-lg bg-post gap-4 border-border-primary">
      <div className="text-text-primary">Create Post</div>
      <div className="bg-content-bg flex p-4 gap-4 rounded-lg">
        <div className="flex shrink-0 items-center justify-center rounded-full h-12 w-12 bg-post">
          🤗
        </div>
        <input
          type="text"
          className="outline-0 bg-transparent w-full text-text-primary placeholder:text-content"
          placeholder="How are you feeling today?"
        />
      </div>
      <button
        onClick={() => requireAuth(() => {})}
        className="py-3 px-10 text-white rounded bg-cta w-fit font-medium self-end"
      >
        Post
      </button>
    </div>
  );
};
