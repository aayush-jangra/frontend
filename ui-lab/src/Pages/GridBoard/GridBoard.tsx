import { GridBox } from "./GridBox";
import { Tooltip } from "../../Components/Tooltip";
import { useGridContext } from "./GridBoardWrapper";
import "./styles.css";

export const GridBoard = () => {
  const { board, boxes, addBox, getTemplateArea, extendBoard } =
    useGridContext();

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
      <div className="w-11/12 bg-sky-50 border border-blue-500 p-4 rounded-md shadow-container shadow-sky-500 box-border">
        <div className="overflow-scroll hide-scrollbar h-full max-w-full">
          <div
            className={`min-h-full grid gap-4`}
            style={{
              gridTemplateAreas: getTemplateArea(),
            }}
          >
            {boxes.map((gridBoxInfo) => {
              const { start, end } = gridBoxInfo;
              const gapW = end[1] - start[1] + 1;
              const gapH = end[0] - start[0] + 1;
              const minWidth = gapW * 256 + (gapW - 1) * 16;
              const minHeight = gapH * 208 + (gapH - 1) * 16;

              return (
                <div
                  key={gridBoxInfo.id}
                  style={{ gridArea: gridBoxInfo.id, minWidth, minHeight }}
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
                    className="relative w-64 h-52 group text-3xl flex items-center justify-center p-4 rounded-2xl cursor-pointer transition-all duration-500"
                    onClick={() => addBox(rowIndex, colIndex)}
                  >
                    {/* <div className="bg-gray-200 rounded-full w-[24px] h-[24px] flex items-center justify-center group-hover:scale-[2] transition-all duration-500">
                      <div className="group-hover:scale-50 scale-0 transition-all duration-500 flex items-center justify-center">
                        P
                      </div>
                    </div> */}
                    <div className="bg-gray-200 rounded-lg w-6 h-6 group-hover:w-32 group-hover:h-32 group-hover:animate-bgColorCycle transition-all duration-300"></div>
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
