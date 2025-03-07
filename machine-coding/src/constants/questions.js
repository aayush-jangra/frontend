export const questions = [
  {
    title: "Alert Toast",
    description: `Build a Toast Notification Component that supports four types—Success, Warning, Info, and Error—which appear when triggered and auto-disappear after a few seconds. It should handle multiple toasts at once with distinct styling, and optionally support manual dismissal and configurable duration.`,
    path: "/toast",
  },
  {
    title: "Debounce & Throttle",
    description: `Build functions to implement debounce and throttle, which control the frequency of function execution. Debounce delays execution until after a pause in events, while throttle ensures execution at a fixed interval. Implement both efficiently and showcase their usage with a simple UI example`,
    path: "/debounce-throttle",
  },
  {
    title: "OTP Input",
    description: `Build an OTP Input Component that allows users to enter a multi-digit OTP code. It should support keyboard navigation, automatic focus shift, backspace handling, and basic validations.`,
    path: "/otp-input",
  },
  {
    title: "Virtualised List",
    description: `Build a Virtualized List Component that efficiently renders large datasets by displaying only visible items while dynamically loading more as the user scrolls. Ensure smooth performance, support dynamic item heights, and handle edge cases like fast scrolling.`,
    path: "/virtualised-list",
  },
  {
    title: "Rating Component",
    description: `Build a Rating Component that allows users to select a rating using stars (or any other symbol). It should support hover effects, customizable max rating, and controlled/uncontrolled states. Optionally, add half-star support and keyboard accessibility.`,
    path: "/rating",
  },
  {
    title: "Custom useQuery hook",
    description: `Build a custom useQuery hook to fetch and cache data efficiently. It should handle loading, error states, and automatic refetching on demand. Optionally, support polling, retries, and stale data management.`,
    path: "/use-query",
  },
  {
    title: "Pagination",
    description: `Build a Pagination Component to navigate through a list of items efficiently. It should support page navigation, dynamic page sizes, and disable previous/next buttons when needed. Optionally, add infinite scrolling and server-side pagination support.`,
    path: "/pagination",
  },
  {
    title: "Form",
    description: `Build a Form Component with controlled inputs, validation, and submission handling. It should support real-time validation, error messages, and flexible field types.`,
    path: "/form",
  },
  {
    title: "Draggable Todos",
    description: `Build a Draggable Todo List where users can move tasks between different states (e.g., Todo, In Progress, Done) using drag-and-drop. Ensure smooth animations, state persistence, and accessibility. Optionally, support task editing and filtering.`,
    path: "/todos",
  },
  {
    title: "Comments Section",
    description: `Build a Comments Section that supports adding comments and nested replies. Each comment should allow replying, editing, and deleting. Ensure smooth UI updates and maintain a proper hierarchy. Optionally, support lazy loading for replies and upvotes/downvotes.`,
    path: "/comments",
  },
  {
    title: "Event Flow",
    description: `Build a demo to visualize event flow in JavaScript, showcasing event bubbling (bottom-up) and event capturing (top-down). Implement event listeners at different levels and allow users to toggle between phases to observe the propagation order. Optionally, add stopPropagation() to demonstrate its effect.`,
    path: "/event-flow",
  },
  {
    title: "Image Carousel",
    description:
      "Build an Image Carousel that automatically cycles through images at a set interval. The image transition should pause on hover and resume when the mouse leaves. Include left and right navigation buttons to manually change images.",
    path: "/carousel",
  },
  {
    title: "Autocomplete",
    description:
      "Build an Autocomplete Component that suggests options as the user types. It should support keyboard navigation, and click selection. Optionally, add remote data fetching, highlighting of matched text.",
    path: "/autocomplete",
  },
  {
    title: "Progress Bar",
    description:
      "Build a Progress Bar Component that starts filling when a button is clicked. It should smoothly animate from 0% to 100% over time. Optionally, support pausing and resetting.",
    path: "/progress-bar",
  },
  {
    title: "Accordion",
    description:
      "Build an Accordion Component where users can expand and collapse sections to reveal content. It should support multiple or single open sections, and default open sections.",
    path: "/accordion",
  },
  {
    title: "Stopwatch",
    description:
      "Build a Stopwatch Component with start, pause, and reset functionality. It should display elapsed time in hours, minutes, seconds, and milliseconds. Optionally, add lap tracking",
    path: "stopwatch",
  },
  {
    title: "Queue Grid",
    description:
      "Build a 3×3 Clickable Grid where each box changes background color when clicked. Once all boxes are clicked, the grid should reset one box at a time in a FIFO (first-in, first-out) order. Optionally, add customizable grid size and support for different reset speeds.",
    path: "/queue-grid",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Build a Tic-Tac-Toe game where users can customize the grid size (e.g., 3×3, 4×4, etc.) before starting. The game should track turns, detect winners. Optionally, highlight the winning sequence.",
    path: "/tic-tac-toe",
  },
  {
    title: "Snake game",
    description:
      "Build a Snake Game where the player controls a growing snake that moves in four directions, eats food, and avoids collisions with itself or walls. The game should track the score. Optionally increase speed as the snake grows.",
    path: "/snake-game",
  },
];
