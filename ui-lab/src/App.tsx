import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home page</div>,
    },
    {
      path: "test",
      element: <div>Test page</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
