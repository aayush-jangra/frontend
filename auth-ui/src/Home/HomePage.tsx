import { Heading } from "./Heading";
import { Posts } from "./Posts";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <Heading />
      <Posts />
    </div>
  );
};
