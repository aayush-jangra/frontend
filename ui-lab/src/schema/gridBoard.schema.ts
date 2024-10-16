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
  STOPWATCH = "Stopwatch",
  TIMER = "Timer",
  TRACKER = "Tracker",
}

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

export interface CustomTime {
  hour: number;
  min: number;
  sec: number;
}
