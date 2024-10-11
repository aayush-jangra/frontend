import { GridBox } from "./GridBox";
import { Tooltip } from "../../Components/Tooltip";
import { useGridContext } from "./GridBoardWrapper";
import "./styles.css";

export const GridBoard = () => {
  const { board, boxes, addBox, getTemplateArea, extendBoard } =
    useGridContext();

  const rows = board.length;
  const cols = board[0].length;

  return (
    <div className="flex gap-4 h-full">
      <div className="bg-sky-50 border p-4 rounded border-teal-500 shadow-container shadow-teal-500 flex flex-col items-center justify-around w-1/12 min-w-16">
        <Tooltip
          theme="dark"
          direction="right"
          content="Extend board horizontally"
        >
          <button
            onClick={() => extendBoard("right")}
            className="bg-slate-700 rounded-full w-10 h-10 text-white flex items-center justify-center shadow hover:shadow-box-focus shadow-black hover:shadow-black transition-shadow duration-500 cursor-pointer"
          >{`->`}</button>
        </Tooltip>
        <Tooltip
          theme="dark"
          direction="right"
          content="Extend board vertically"
        >
          <button
            onClick={() => extendBoard("down")}
            className="bg-slate-700 rounded-full w-10 h-10 text-white flex items-center justify-center shadow hover:shadow-box-focus shadow-black hover:shadow-black transition-shadow duration-500 cursor-pointer rotate-90"
          >{`->`}</button>
        </Tooltip>
      </div>
      <div className="w-11/12 min-w-board bg-sky-50 border border-blue-500 p-4 rounded-md shadow-container shadow-sky-500 box-border">
        <div className="overflow-scroll hide-scrollbar h-full max-w-full">
          <div
            className={`min-h-full grid grid-rows-[repeat(${rows},minmax(0,1fr))] grid-cols-[repeat(${cols},minmax(0,1fr))] gap-4`}
            style={{
              gridTemplateAreas: getTemplateArea(),
            }}
          >
            {boxes.map((gridBoxInfo) => {
              return (
                <div
                  className="min-w-28 min-h-28"
                  key={gridBoxInfo.id}
                  style={{ gridArea: gridBoxInfo.id }}
                >
                  <GridBox {...gridBoxInfo} />
                </div>
              );
            })}
            {board.map((row, rowIndex) => {
              return row.map((val, colIndex) => {
                if (val !== ".") return null;

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="relative min-w-28 min-h-28 group bg-gray-300 text-3xl flex items-center justify-center p-4 rounded-2xl cursor-pointer hover:bg-gray-600 transition-all duration-500"
                    onClick={() => addBox(rowIndex, colIndex)}
                  >
                    <div className="bg-gray-200 rounded-full w-[24px] h-[24px] flex items-center justify-center group-hover:scale-[2] transition-all duration-500">
                      <div className="absolute w-[12px] h-[2px] bg-black rounded"></div>
                      <div className="absolute w-[12px] h-[2px] bg-black rotate-90 rounded"></div>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
