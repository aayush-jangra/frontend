import { useGridContext } from "../Pages/GridBoard/GridBoardWrapper";
import { GridBoxInfo } from "../schema/gridBoard.schema";

export const GridBox = ({
  id,
  bgColor,
  shadowColor,
  start,
  end,
}: GridBoxInfo) => {
  const { canExtendBox, extendBox } = useGridContext();
  return (
    <div
      className={`group relative ${bgColor} rounded h-full w-full p-2 shadow-lg hover:shadow-box-focus transition-all duration-500 ${shadowColor}`}
    >
      Hello
      {/* Extend Right =>  */}
      {canExtendBox("right", start, end) && (
        <button
          onClick={() => extendBox(id, "right", start, end)}
          className={`hidden group-hover:flex absolute top-1/2 right-0 ${bgColor} -translate-y-1/2 translate-x-1/2 rounded-full w-12 h-12 px-3 items-center justify-end cursor-pointer`}
        >{`>`}</button>
      )}
      {/* Extend Left =>  */}
      {canExtendBox("left", start, end) && (
        <button
          onClick={() => extendBox(id, "left", start, end)}
          className={`hidden group-hover:flex absolute top-1/2 left-0 ${bgColor} -translate-y-1/2 -translate-x-1/2 rounded-full w-12 h-12 px-3 items-center justify-start cursor-pointer`}
        >{`<`}</button>
      )}
      {/* Extend Up =>  */}
      {canExtendBox("up", start, end) && (
        <button
          onClick={() => extendBox(id, "up", start, end)}
          className={`hidden group-hover:flex absolute right-1/2 top-0 ${bgColor} -translate-y-1/2 translate-x-1/2 rounded-full w-12 h-12 px-3 items-center justify-start cursor-pointer rotate-90`}
        >{`<`}</button>
      )}
      {/* Extend Down =>  */}
      {canExtendBox("down", start, end) && (
        <button
          onClick={() => extendBox(id, "down", start, end)}
          className={`hidden group-hover:flex absolute right-1/2 bottom-0 ${bgColor} translate-y-1/2 translate-x-1/2 rounded-full w-12 h-12 px-3 items-center justify-end cursor-pointer rotate-90`}
        >{`>`}</button>
      )}
    </div>
  );
};
