export interface GridBoxInfo {
  id: string;
  bgColor: string;
  shadowColor: string;
  start: [number, number];
  end: [number, number];
}

export const BoxColors = [
  { bgColor: "bg-red-300", shadowColor: "hover:shadow-red-900" },
  { bgColor: "bg-orange-300", shadowColor: "hover:shadow-orange-900" },
  { bgColor: "bg-amber-300", shadowColor: "hover:shadow-amber-900" },
  { bgColor: "bg-yellow-300", shadowColor: "hover:shadow-yellow-900" },
  { bgColor: "bg-lime-300", shadowColor: "hover:shadow-lime-900" },
  { bgColor: "bg-green-300", shadowColor: "hover:shadow-green-900" },
  { bgColor: "bg-emerald-300", shadowColor: "hover:shadow-emerald-900" },
  { bgColor: "bg-teal-300", shadowColor: "hover:shadow-teal-900" },
  { bgColor: "bg-cyan-300", shadowColor: "hover:shadow-cyan-900" },
  { bgColor: "bg-sky-300", shadowColor: "hover:shadow-sky-900" },
  { bgColor: "bg-blue-300", shadowColor: "hover:shadow-blue-900" },
  { bgColor: "bg-indigo-300", shadowColor: "hover:shadow-indigo-900" },
  { bgColor: "bg-violet-300", shadowColor: "hover:shadow-violet-900" },
  { bgColor: "bg-purple-300", shadowColor: "hover:shadow-purple-900" },
  { bgColor: "bg-fuchsia-300", shadowColor: "hover:shadow-fuchsia-900" },
  { bgColor: "bg-pink-300", shadowColor: "hover:shadow-pink-900" },
  { bgColor: "bg-rose-300", shadowColor: "hover:shadow-rose-900" },
];

export interface GridBoardContextProps {
  boxes: GridBoxInfo[];
  board: string[][];
  getArea: () => string;
  addBox: (row: number, col: number) => void;
  extendBox: (
    id: string,
    direction: "left" | "right" | "up" | "down",
    start: [number, number],
    end: [number, number]
  ) => void;
  canExtendBox: (
    direction: "left" | "right" | "up" | "down",
    start: [number, number],
    end: [number, number]
  ) => boolean;
}
