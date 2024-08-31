import { AuthProvider } from "./providers/AuthProvider";
import { HomePage } from "./pages/HomePage/HomePage";
import { Routes } from "./schema/routes.schema";
import { LoginPage } from "./pages/LoginPage/LoginPage";

/** Created custom router instead of React Router since it's a very small app */
const Router: React.FC = () => {
  const { pathname } = window.location;

  if (pathname === Routes.HOME) {
    return <HomePage />;
  } else if (pathname === Routes.LOGIN) {
    return <LoginPage />;
  } else {
    return <div className="text-3xl text-white font-bold">Invalid path</div>;
  }
};

export const App = () => {
  return (
    <div className="bg-canvas min-h-screen flex justify-center p-8 md:p-16">
      <div className="max-w-screen-md w-full">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </div>
    </div>
  );
};
