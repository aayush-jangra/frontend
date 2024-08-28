import { CreatePost } from "../../Components/CreatePost";
import { PostComponent } from "../../Components/Post";
import { usePosts } from "../../data/usePosts";

export const Posts: React.FC = () => {
  const { posts } = usePosts();

  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      {posts.map((post) => (
        <PostComponent {...post} />
      ))}
    </div>
  );
};
