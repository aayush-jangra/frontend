import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Routes } from "./routes";

const FullScreenWrapper = ({
  background = "",
  children,
}: {
  background?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`h-screen w-screen p-2 ${background}`}>{children}</div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: Routes.HOME,
      element: (
        <FullScreenWrapper background="bg-sky-50">
          <HomePage />
        </FullScreenWrapper>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
