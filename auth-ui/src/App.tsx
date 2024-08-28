import { HomePage } from "./Home/HomePage";

export const App = () => {
  return (
    <div className="bg-canvas min-h-screen flex justify-center p-16">
      <div className="max-w-screen-md w-full">
        <HomePage />
      </div>
    </div>
  );
};
