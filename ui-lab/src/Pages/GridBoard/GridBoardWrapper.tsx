import { createContext, useContext } from "react";
import { GridBoardContextProps } from "../../schema/gridBoard.schema";
import { useGridBoard } from "../../helper/useGridBoard";

const GridBoardContext = createContext<GridBoardContextProps | null>(null);

export const GridBoardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const gridBoardInfo = useGridBoard();

  return (
    <GridBoardContext.Provider value={{ ...gridBoardInfo }}>
      {children}
    </GridBoardContext.Provider>
  );
};

export const useGridContext = () => {
  const context = useContext(GridBoardContext);

  if (!context) {
    throw new Error("useGridContext should be used inside grid wrapper");
  }

  return context;
};
