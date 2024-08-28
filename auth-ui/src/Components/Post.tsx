import { Post } from "../schema/posts.schema";
import DotsHorizontal from "../Assets/Icons/dots-horizontal.svg";
import ChatBubble from "../Assets/Icons/chat-bubble.svg";
import DefaultAvatar from "../Assets/Icons/default-avatar.svg";
import { useAuthState } from "../Pages/Home/AuthProvider";

export const PostComponent: React.FC<Post> = ({
  id,
  username,
  createdAt,
  emoji,
  content,
  comments,
  profileUrl,
}) => {
  const { requireAuth } = useAuthState();
  return (
    <div
      onClick={() => requireAuth(() => {})}
      className="bg-post border-border-primary border-2 rounded-lg px-5 py-6 flex flex-col gap-5 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            src={profileUrl ?? DefaultAvatar}
            className={`bg-transparent rounded-full h-11 w-11 ${
              profileUrl ? "object-cover" : "p-2"
            }`}
          />
          <div className="flex flex-col gap-1">
            <div className="text-text-primary font-medium">{username}</div>
            <div className="text-content font-medium text-sm">{createdAt}</div>
          </div>
        </div>
        <img src={DotsHorizontal} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 p-4 bg-content-bg rounded-lg">
          <div className="flex shrink-0 items-center justify-center rounded-full h-12 w-12 bg-post">
            {emoji}
          </div>
          <div className="text-content">{content}</div>
        </div>
        <button className="font-medium text-sm text-text-secondary flex gap-2 w-fit">
          <img src={ChatBubble} /> {comments} comments
        </button>
      </div>
    </div>
  );
};
