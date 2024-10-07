import { useNavigate } from "react-router-dom";
import { Card } from "../Components/Card";
import { pagesInfo } from "../schema/pagesInfo";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16">
      <div className="text-center p-4 font-bold text-8xl font-mono text-white self-center rounded-lg my-4 w-full max-w-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        UI Lab
      </div>
      <div className="flex w-full flex-wrap gap-16 justify-center">
        {pagesInfo.map(({ id, name, description, path }) => (
          <Card
            key={id}
            title={name}
            onClick={() => {
              navigate(path);
            }}
          >
            {description}
          </Card>
        ))}
      </div>
      <div className="fixed bottom-0 right-0 m-8 italic text-xl">
        ...more coming soon
      </div>
    </div>
  );
};
