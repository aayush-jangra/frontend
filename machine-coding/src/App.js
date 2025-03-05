import { Header } from "./components/Header";
import { Homepage } from "./Pages/Homepage/Homepage";
import { ToastPage } from "./Pages/Toast/ToastPage";
import { ToastProvider } from "./Pages/Toast/ToastProvider";
import { CustomRouter } from "./Router/CustomRouter";

function App() {
  const routerConfig = [
    {
      path: "/",
      component: <Homepage />,
    },
    {
      path: "/toast",
      component: (
        <ToastProvider>
          <ToastPage />
        </ToastProvider>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <CustomRouter config={routerConfig} />
    </div>
  );
}

export default App;
