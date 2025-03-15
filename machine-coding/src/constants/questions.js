export const questions = [
  {
    folderName: "Toast",
    title: "Alert Toast",
    description: `Build a Toast Notification Component that supports four types—Success, Warning, Info, and Error—which appear when triggered and auto-disappear after a few seconds. It should handle multiple toasts at once with distinct styling, and optionally support manual dismissal and configurable duration.`,
    path: "/toast",
  },
  {
    folderName: "DebounceAndThrottle",
    title: "Debounce & Throttle",
    description: `Build functions to implement debounce and throttle, which control the frequency of function execution. Debounce delays execution until after a pause in events, while throttle ensures execution at a fixed interval. Implement both efficiently and showcase their usage with a simple UI example`,
    path: "/debounce-throttle",
  },
  {
    folderName: "OtpInput",
    title: "OTP Input",
    description: `Build an OTP Input Component that allows users to enter a multi-digit OTP code. It should support keyboard navigation, automatic focus shift, backspace handling, and basic validations.`,
    path: "/otp-input",
  },
  {
    folderName: "VirtualisedList",
    title: "Virtualised List",
    description: `Build a Virtualized List Component that efficiently renders large datasets by displaying only visible items while dynamically loading more as the user scrolls. Ensure smooth performance, support dynamic item heights, and handle edge cases like fast scrolling.`,
    path: "/virtualised-list",
  },
  {
    folderName: "Rating",
    title: "Rating Component",
    description: `Build a Rating Component that allows users to select a rating using stars (or any other symbol). It should support hover effects, customizable max rating, and controlled/uncontrolled states. Optionally, add half-star support and keyboard accessibility.`,
    path: "/rating",
  },
  {
    folderName: "Pagination",
    title: "Pagination",
    description: `Build a Pagination Component to navigate through a list of items efficiently. It should support page navigation, dynamic page sizes, and disable previous/next buttons when needed. Optionally, add infinite scrolling and server-side pagination support.`,
    path: "/pagination",
  },
  {
    folderName: "Todos",
    title: "Draggable Todos",
    description: `Build a Draggable Todo List where users can move tasks between different states (e.g., Todo, In Progress, Done) using drag-and-drop. Ensure smooth animations, state persistence, and accessibility. Optionally, support adding new tasks.`,
    path: "/todos",
  },
  {
    folderName: "EventFlow",
    title: "Event Flow",
    description: `Build a demo to visualize event flow in JavaScript, showcasing event bubbling (bottom-up) and event capturing (top-down). Implement event listeners at different levels and allow users to toggle between phases to observe the propagation order. Optionally, add stopPropagation() to demonstrate its effect.`,
    path: "/event-flow",
  },
  {
    folderName: "Caraousel",
    title: "Image Carousel",
    description:
      "Build an Image Carousel that automatically cycles through images at a set interval. The image transition should pause on hover and resume when the mouse leaves. Include left and right navigation buttons to manually change images.",
    path: "/carousel",
  },
  {
    folderName: "AutoComplete",
    title: "Autocomplete",
    description:
      "Build an Autocomplete Component that suggests options as the user types. It should support keyboard navigation, and click selection. Optionally, add remote data fetching, highlighting of matched text.",
    path: "/autocomplete",
  },
  {
    folderName: "ProgressBar",
    title: "Progress Bar",
    description:
      "Build a Progress Bar Component that starts filling when a button is clicked. It should smoothly animate from 0% to 100% over time. Optionally, support pausing and resetting.",
    path: "/progress-bar",
  },
  {
    folderName: "Accordion",
    title: "Accordion",
    description:
      "Build an Accordion Component where users can expand and collapse sections to reveal content. It should support multiple or single open sections, and default open sections.",
    path: "/accordion",
  },
  {
    folderName: "Timer",
    title: "Timer",
    description:
      "Build a Timer Component that counts up or down from a specified time. It should support start, pause, and reset functionality.",
    path: "/timer",
  },
  {
    folderName: "QueueGrid",
    title: "Queue Grid",
    description:
      "Build a 3×3 Clickable Grid where each box changes background color when clicked. Once all boxes are clicked, the grid should reset one box at a time in a FIFO (first-in, first-out) order. Optionally, add customizable grid size and support for different reset speeds.",
    path: "/queue-grid",
  },
  {
    folderName: "TicTacToe",
    title: "Tic Tac Toe",
    description:
      "Build a Tic-Tac-Toe game where users can customize the grid size (e.g., 3×3, 4×4, etc.) before starting. The game should track turns, detect winners. Optionally, highlight the winning sequence.",
    path: "/tic-tac-toe",
  },
  {
    folderName: "SnakeGame",
    title: "Snake game",
    description:
      "Build a Snake Game where the player controls a growing snake that moves in four directions, eats food, and avoids collisions with itself or walls. The game should track the score. Optionally increase speed as the snake grows.",
    path: "/snake-game",
  },
  {
    folderName: "Stepper",
    title: "Stepper",
    description:
      "Build a Stepper Component that visually represents progress through multiple steps. It should support next, previous, and disabled steps, with clear indicators for active and completed steps.",
    path: "/stepper",
  },
  {
    folderName: "Tabs",
    title: "Tabs",
    description:
      "Build a Tabs Component where users can switch between different content sections by clicking on tab headers. It should support keyboard navigation, active tab highlighting, and smooth transitions. Optionally, add lazy loading of content.",
    path: "/tabs",
  },
  {
    folderName: "MemoryGame",
    title: "Memory Game",
    description:
      "Build a Memory Game where players flip tiles to find matching pairs. Each tile has a hidden number, and when two matching tiles are revealed, they remain open; otherwise, they flip back. The game continues until all tiles are matched and removed.",
    path: "/memory-game",
  },
  {
    folderName: "NestedComments",
    title: "Nested Comments",
    description:
      "Build a Nested Comments Component that supports adding, replying to, and deleting comments. Each comment can have multiple levels of replies, maintaining a proper hierarchy. Optionally, do not use recursive data",
    path: "/nested-comments",
  },
  {
    folderName: "TrafficLight",
    title: "Traffic light",
    description:
      "Build a Traffic Light Component with three lights (red, yellow, and green) that change automatically in a loop.",
    path: "traffic-light",
  },
  {
    folderName: "Modal",
    title: "Modal",
    description:
      "Build a Modal Component that opens and closes when triggered. It should support a close button, clicking outside to close, and Escape key dismissal.",
    path: "/modal",
  },
  {
    folderName: "MeetingCalendar",
    title: "Meeting Calendar",
    description:
      "Build a simple alendar with 1-hour time slots, where users can add, edit, and delete events. It should display a clear timeline for the day.",
    path: "/meeting-calendar",
  },
  {
    folderName: "InfiniteScroll",
    title: "Infinite Scroll",
    description: `Build an Infinite Scroll Component that dynamically loads more content as the user scrolls down. Ensure smooth performance with lazy loading and loading indicators. Optionally, support manual "Load More" and filtering options.`,
    path: "/infinite-scroll",
  },
  {
    folderName: "PollWidget",
    title: "Poll Widget",
    description:
      "Build a simple poll widget where users can vote on a given question with multiple choices. Once a user selects an option, display the updated vote count and percentage for each choice.",
    path: "/poll-widget",
  },
];
