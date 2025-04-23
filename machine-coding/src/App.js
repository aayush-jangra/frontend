import React, { Suspense } from "react";
import { HeaderWrapper } from "./components/Header";
import { ToastProvider } from "./Pages/Toast/ToastProvider";
import Homepage from "./Pages/Homepage/Homepage";
import { CustomRouter } from "./Router/CustomRouter";
import { Loader } from "./components/Loader";

const AccordionPage = React.lazy(() =>
  import("./Pages/Accordion/AccordionPage")
);
const Caraousel = React.lazy(() => import("./Pages/Caraousel/CaraouselPage"));
const DebounceAndThrottle = React.lazy(() =>
  import("./Pages/DebounceAndThrottle/DebounceAndThrottle")
);
const EventFlowPage = React.lazy(() =>
  import("./Pages/EventFlow/EventFlowPage")
);
const InfinitePageScroll = React.lazy(() =>
  import("./Pages/InfiniteScroll/InfiniteScrollPage")
);
const MeetingCalendarPage = React.lazy(() =>
  import("./Pages/MeetingCalendar/MeetingCalendarPage")
);
const MemoryGamePage = React.lazy(() =>
  import("./Pages/MemoryGame/MemoryGamePage")
);
const ModalPage = React.lazy(() => import("./Pages/Modal/ModalPage"));
const NestedCommentsPage = React.lazy(() =>
  import("./Pages/NestedComments/NestedCommentsPage")
);
const OtpInputPage = React.lazy(() => import("./Pages/OtpInput/OtpInputPage"));
const ProgressBarPage = React.lazy(() =>
  import("./Pages/ProgressBar/ProgressBarPage")
);
const QueueGridPage = React.lazy(() =>
  import("./Pages/QueueGrid/QueueGridPage")
);
const SnakeGamePage = React.lazy(() =>
  import("./Pages/SnakeGame/SnakeGamePage")
);
const StepperPage = React.lazy(() => import("./Pages/Stepper/StepperPage"));
const TimerPage = React.lazy(() => import("./Pages/Timer/TimerPage"));
const TabsPage = React.lazy(() => import("./Pages/Tabs/TabsPage"));
const TicTacToePage = React.lazy(() =>
  import("./Pages/TicTacToe/TicTacToePage")
);
const ToastPage = React.lazy(() => import("./Pages/Toast/ToastPage"));
const TodosPage = React.lazy(() => import("./Pages/Todos/TodosPage"));
const TrafficLightPage = React.lazy(() =>
  import("./Pages/TrafficLight/TrafficLightPage")
);
const VirtualisedListPage = React.lazy(() =>
  import("./Pages/VirtualisedList/VirtualisedListPage")
);
const RatingPage = React.lazy(() => import("./Pages/Rating/RatingPage"));
const PaginationPage = React.lazy(() =>
  import("./Pages/Pagination/PaginationPage")
);
const AutoCompletePage = React.lazy(() =>
  import("./Pages/AutoComplete/AutoCompletePage")
);
const DesktopChecker = React.lazy(() => import("./components/DesktopChecker"));
const PollWidgetPage = React.lazy(() =>
  import("./Pages/PollWidget/PollWidgetPage")
);
const PasswordGeneratorPage = React.lazy(() =>
  import("./Pages/PasswordGenerator/PasswordGeneratorPage")
);
const MultiSelectPage = React.lazy(() =>
  import("./Pages/MulitSelect/MultiSelectPage")
);
const SelectableGridPage = React.lazy(() =>
  import("./Pages/SelectableGrid/SelectableGridPage")
);
const TypeWriterPage = React.lazy(() =>
  import("./Pages/TypeWriter/TypeWriterPage")
);
const FileUploadPage = React.lazy(() =>
  import("./Pages/FileUpload/FileUploadPage")
);
const GraphCoordinatesPage = React.lazy(() =>
  import("./Pages/GraphCoordinates/GraphCoordinatesPage")
);

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
      path: "/timer",
      component: <TimerPage />,
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
      component: (
        <DesktopChecker>
          <SnakeGamePage />
        </DesktopChecker>
      ),
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
      component: (
        <DesktopChecker>
          <TabsPage />
        </DesktopChecker>
      ),
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
      component: (
        <DesktopChecker>
          <MeetingCalendarPage />
        </DesktopChecker>
      ),
    },
    {
      path: "/event-flow",
      component: <EventFlowPage />,
    },
    {
      path: "/infinite-scroll",
      component: <InfinitePageScroll />,
    },
    {
      path: "/rating",
      component: <RatingPage />,
    },
    {
      path: "/pagination",
      component: <PaginationPage />,
    },
    {
      path: "/autocomplete",
      component: <AutoCompletePage />,
    },
    {
      path: "/poll-widget",
      component: <PollWidgetPage />,
    },
    {
      path: "/password-generator",
      component: <PasswordGeneratorPage />,
    },
    {
      path: "/multi-select",
      component: <MultiSelectPage />,
    },
    {
      path: "/selectable-grid",
      component: (
        <DesktopChecker>
          <SelectableGridPage />
        </DesktopChecker>
      ),
    },
    {
      path: "/typewriter",
      component: <TypeWriterPage />,
    },
    {
      path: "/file-upload",
      component: <FileUploadPage />,
    },
    {
      path: "/graph-coordinates",
      component: <GraphCoordinatesPage />,
    },
  ];

  return (
    <HeaderWrapper>
      <Suspense fallback={<Loader fullPage />}>
        <CustomRouter config={routerConfig} />
      </Suspense>
    </HeaderWrapper>
  );
}

export default App;
