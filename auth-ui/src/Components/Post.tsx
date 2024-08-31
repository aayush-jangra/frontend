import { Post } from "../schema/posts.schema";
import DotsHorizontal from "../assets/icons/dots-horizontal.svg";
import ChatBubble from "../assets/icons/chat-bubble.svg";
import DefaultAvatar from "../assets/icons/default-avatar.svg";
import { useAuthState } from "../providers/AuthProvider";

export const PostComponent: React.FC<Post> = ({
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
      tabIndex={0}
      aria-label={`Post by ${username}`}
      onClick={() => requireAuth(() => {})}
      className="bg-post border-border-primary border-2 rounded-lg px-5 py-6 flex flex-col gap-5 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="flex">
            <img
              aria-label="Profile Picture"
              alt=""
              src={profileUrl ?? DefaultAvatar}
              className={`bg-transparent rounded-full h-11 w-11 ${
                profileUrl ? "object-cover" : "p-2"
              }`}
            />
          </button>
          <div className="flex flex-col gap-1">
            <div className="text-text-primary font-medium">{username}</div>
            <div className="text-content font-medium text-sm">{createdAt}</div>
          </div>
        </div>
        <button>
          <img
            alt="More options"
            src={DotsHorizontal}
            className="cursor-pointer"
          />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 p-4 bg-content-bg rounded-lg">
          <div
            aria-label={`Post emoji, ${emoji}`}
            tabIndex={0}
            className="flex shrink-0 items-center justify-center rounded-full h-12 w-12 bg-post text-2xl"
          >
            {emoji}
          </div>
          <div
            aria-label={`Post content, ${content}`}
            tabIndex={0}
            className="text-content"
          >
            {content}
          </div>
        </div>
        <button className="font-medium text-sm text-text-secondary flex gap-2 w-fit">
          <img alt="" src={ChatBubble} /> {comments} comments
        </button>
      </div>
    </div>
  );
};
