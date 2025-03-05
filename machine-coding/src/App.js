import { HeaderWrapper } from "./components/Header";
import { Caraousel } from "./Pages/Caraousel/CaraouselPage";
import { DebounceAndThrottle } from "./Pages/DebounceAndThrottle/DebounceAndThrottle";
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
    {
      path: "/debounce-throttle",
      component: <DebounceAndThrottle />,
    },
    {
      path: "/carousel",
      component: <Caraousel />,
    },
  ];

  return (
    <HeaderWrapper>
      <CustomRouter config={routerConfig} />
    </HeaderWrapper>
  );
}

export default App;
