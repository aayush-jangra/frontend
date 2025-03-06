import { HeaderWrapper } from "./components/Header";
import { AccordionPage } from "./Pages/Accordion/AccordionPage";
import { Caraousel } from "./Pages/Caraousel/CaraouselPage";
import { DebounceAndThrottle } from "./Pages/DebounceAndThrottle/DebounceAndThrottle";
import { Homepage } from "./Pages/Homepage/Homepage";
import { OtpInputPage } from "./Pages/OtpInput/OtpInputPage";
import { ProgressBarPage } from "./Pages/ProgressBar/ProgressBarPage";
import { StopwatchPage } from "./Pages/Stopwatch/StopwatchPage";
import { ToastPage } from "./Pages/Toast/ToastPage";
import { ToastProvider } from "./Pages/Toast/ToastProvider";
import { VirtualisedListPage } from "./Pages/VirtualisedList/VirtualisedListPage";
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
    {
      path: "/progress-bar",
      component: <ProgressBarPage />,
    },
    {
      path: "/accordion",
      component: <AccordionPage />,
    },
    {
      path: "/otp-input",
      component: <OtpInputPage />,
    },
    {
      path: "/virtualised-list",
      component: <VirtualisedListPage />,
    },
    {
      path: "/stopwatch",
      component: <StopwatchPage />,
    },
  ];

  return (
    <HeaderWrapper>
      <CustomRouter config={routerConfig} />
    </HeaderWrapper>
  );
}

export default App;
