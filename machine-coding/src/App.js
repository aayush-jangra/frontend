import { HeaderWrapper } from "./components/Header";
import { AccordionPage } from "./Pages/Accordion/AccordionPage";
import { Caraousel } from "./Pages/Caraousel/CaraouselPage";
import { DebounceAndThrottle } from "./Pages/DebounceAndThrottle/DebounceAndThrottle";
import { EventFlowPage } from "./Pages/EventFlow/EventFlowPage";
import { Homepage } from "./Pages/Homepage/Homepage";
import { InfinitePageScroll } from "./Pages/InfiniteScroll/InfiniteScrollPage";
import { MeetingCalendarPage } from "./Pages/MeetingCalendar/MeetingCalendarPage";
import { MemoryGamePage } from "./Pages/MemoryGame/MemoryGamePage";
import { ModalPage } from "./Pages/Modal/ModalPage";
import { NestedCommentsPage } from "./Pages/NestedComments/NestedCommentsPage";
import { OtpInputPage } from "./Pages/OtpInput/OtpInputPage";
import { ProgressBarPage } from "./Pages/ProgressBar/ProgressBarPage";
import { QueueGridPage } from "./Pages/QueueGrid/QueueGridPage";
import { SnakeGamePage } from "./Pages/SnakeGame/SnakeGamePage";
import { StepperPage } from "./Pages/Stepper/StepperPage";
import { StopwatchPage } from "./Pages/Stopwatch/StopwatchPage";
import { TabsPage } from "./Pages/Tabs/TabsPage";
import { TicTacToePage } from "./Pages/TicTacToe/TicTacToePage";
import { ToastPage } from "./Pages/Toast/ToastPage";
import { ToastProvider } from "./Pages/Toast/ToastProvider";
import { TodosPage } from "./Pages/Todos/TodosPage";
import { TrafficLightPage } from "./Pages/TrafficLight/TrafficLightPage";
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
    {
      path: "/queue-grid",
      component: <QueueGridPage />,
    },
    {
      path: "/tic-tac-toe",
      component: <TicTacToePage />,
    },
    {
      path: "/snake-game",
      component: <SnakeGamePage />,
    },
    {
      path: "/todos",
      component: <TodosPage />,
    },
    {
      path: "/stepper",
      component: <StepperPage />,
    },
    {
      path: "/tabs",
      component: <TabsPage />,
    },
    {
      path: "/memory-game",
      component: <MemoryGamePage />,
    },
    {
      path: "/nested-comments",
      component: <NestedCommentsPage />,
    },
    {
      path: "/traffic-light",
      component: <TrafficLightPage />,
    },
    {
      path: "/modal",
      component: <ModalPage />,
    },
    {
      path: "/meeting-calendar",
      component: <MeetingCalendarPage />,
    },
    {
      path: "/event-flow",
      component: <EventFlowPage />,
    },
    {
      path: "/infinite-scroll",
      component: <InfinitePageScroll />,
    },
  ];

  return (
    <HeaderWrapper>
      <CustomRouter config={routerConfig} />
    </HeaderWrapper>
  );
}

export default App;
