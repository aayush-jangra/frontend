import { GridBox } from "../../Components/GridBox";
import { useGridContext } from "./GridBoardWrapper";

export const GridBoard = () => {
  const { board, boxes, addBox, getArea } = useGridContext();

  return (
    <div className="border border-blue-500 rounded-md p-4 border-black h-full shadow-container shadow-sky-500">
      <div
        className="h-full grid grid-rows-[repeat(5,minmax(0,1fr))] grid-cols-[repeat(5,minmax(0,1fr))] gap-4"
        style={{
          gridTemplateAreas: getArea(),
        }}
      >
        {boxes.map((gridBoxInfo) => {
          return (
            <div key={gridBoxInfo.id} style={{ gridArea: gridBoxInfo.id }}>
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
                className="group bg-gray-300 text-3xl flex items-center justify-center p-4 rounded-2xl cursor-pointer hover:bg-gray-600 transition-all duration-500"
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
  );
};
