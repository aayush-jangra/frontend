import { HomePage } from "./Pages/Home/HomePage";
import { LoginPage } from "./Pages/Login/LoginPage";

export const App = () => {
  return (
    <div className="bg-canvas min-h-screen flex justify-center p-16">
      <div className="max-w-screen-md w-full">
        <LoginPage />
      </div>
    </div>
  );
};
