export interface GridBoxInfo {
  id: string;
  name: string;
  bgColor: string;
  shadowColor: string;
  start: [number, number];
  end: [number, number];
  type: GridBoxType;
}

export enum GridBoxType {
  TEXTAREA = "Textarea",
  CHECKLIST = "Checklist",
}

export const BoxColors = [
  { name: "red", bgColor: "bg-red-300", shadowColor: "hover:shadow-red-900" },
  {
    name: "orange",
    bgColor: "bg-orange-300",
    shadowColor: "hover:shadow-orange-900",
  },
  {
    name: "amber",
    bgColor: "bg-amber-300",
    shadowColor: "hover:shadow-amber-900",
  },
  {
    name: "yellow",
    bgColor: "bg-yellow-300",
    shadowColor: "hover:shadow-yellow-900",
  },
  {
    name: "lime",
    bgColor: "bg-lime-300",
    shadowColor: "hover:shadow-lime-900",
  },
  {
    name: "green",
    bgColor: "bg-green-300",
    shadowColor: "hover:shadow-green-900",
  },
  {
    name: "emerald",
    bgColor: "bg-emerald-300",
    shadowColor: "hover:shadow-emerald-900",
  },
  {
    name: "teal",
    bgColor: "bg-teal-300",
    shadowColor: "hover:shadow-teal-900",
  },
  {
    name: "cyan",
    bgColor: "bg-cyan-300",
    shadowColor: "hover:shadow-cyan-900",
  },
  { name: "sky", bgColor: "bg-sky-300", shadowColor: "hover:shadow-sky-900" },
  {
    name: "blue",
    bgColor: "bg-blue-300",
    shadowColor: "hover:shadow-blue-900",
  },
  {
    name: "indigo",
    bgColor: "bg-indigo-300",
    shadowColor: "hover:shadow-indigo-900",
  },
  {
    name: "violet",
    bgColor: "bg-violet-300",
    shadowColor: "hover:shadow-violet-900",
  },
  {
    name: "purple",
    bgColor: "bg-purple-300",
    shadowColor: "hover:shadow-purple-900",
  },
  {
    name: "fuchsia",
    bgColor: "bg-fuchsia-300",
    shadowColor: "hover:shadow-fuchsia-900",
  },
  {
    name: "pink",
    bgColor: "bg-pink-300",
    shadowColor: "hover:shadow-pink-900",
  },
  {
    name: "rose",
    bgColor: "bg-rose-300",
    shadowColor: "hover:shadow-rose-900",
  },
];

export type Direction = "left" | "right" | "up" | "down";

export interface GridBoardContextProps {
  boxes: GridBoxInfo[];
  board: string[][];
  getTemplateArea: () => string;
  addBox: (row: number, col: number) => void;
  removeBox: (id: string) => void;
  updateBoxInfo: (id: string, newValues: Partial<GridBoxInfo>) => void;
  extendBox: (
    id: string,
    direction: Direction,
    start: [number, number],
    end: [number, number]
  ) => void;
  canExtendBox: (
    direction: Direction,
    start: [number, number],
    end: [number, number]
  ) => boolean;
  extendBoard: (direction: Direction) => void;
}
