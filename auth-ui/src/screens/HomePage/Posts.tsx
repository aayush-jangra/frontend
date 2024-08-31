import { PostComponent } from "../../common-components/Post";
import { usePosts } from "../../data/usePosts";
import { CreatePost } from "./CreatePost";

export const Posts: React.FC = () => {
  const { posts } = usePosts();

  return (
    <div className="flex flex-col gap-4">
      <CreatePost />
      {posts.map((post) => (
        <PostComponent key={post.id} {...post} />
      ))}
    </div>
  );
};
