import { useGridContext } from "./GridBoardWrapper";
import { GridBoxInfo } from "../../schema/gridBoard.schema";

export const GridBox = ({
  id,
  name,
  bgColor,
  shadowColor,
  start,
  end,
}: GridBoxInfo) => {
  const { canExtendBox, extendBox, removeBox } = useGridContext();
  return (
    <div
      className={`group relative ${bgColor} rounded-2xl h-full w-full p-2 shadow-lg hover:shadow-box-focus transition-all duration-500 ${shadowColor}`}
    >
      {/* Extend Right =>  */}
      {canExtendBox("right", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "right", start, end)}
          className={`z-10 hidden group-hover:flex absolute top-1/2 right-0 ${bgColor} -translate-y-1/2 translate-x-full rounded-r-full w-6 h-12 items-center justify-center`}
        >{`>`}</button>
      )}
      {/* Extend Left =>  */}
      {canExtendBox("left", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "left", start, end)}
          className={`z-10 hidden group-hover:flex absolute top-1/2 left-0 ${bgColor} -translate-y-1/2 -translate-x-full rounded-l-full w-6 h-12 items-center justify-center`}
        >{`<`}</button>
      )}
      {/* Extend Up =>  */}
      {canExtendBox("up", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "up", start, end)}
          className={`z-10 hidden group-hover:flex absolute right-1/2 top-0 ${bgColor} -translate-y-3/4 translate-x-1/2 rounded-l-full w-6 h-12 items-center justify-center rotate-90`}
        >{`<`}</button>
      )}
      {/* Extend Down =>  */}
      {canExtendBox("down", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "down", start, end)}
          className={`z-10 hidden group-hover:flex absolute right-1/2 bottom-0 ${bgColor} translate-y-3/4 translate-x-1/2 rounded-r-full w-6 h-12 items-center justify-center rotate-90`}
        >{`>`}</button>
      )}
      <div className="flex gap-8 items-center justify-between max-w-full h-8">
        <input
          className="w-4/5 rounded-full h-full bg-slate-800/40 border-slate-800 border px-4 text-white placeholder:text-white/70"
          type="text"
          defaultValue={name}
          placeholder="Name"
          maxLength={50}
        />
        <div className="flex h-full bg-transparent border border-slate-800 rounded-full px-1 items-center">
          <button
            onClick={() => removeBox(id)}
            type="button"
            className="hover:bg-slate-800/40 hover:border-slate-800 rounded-full w-6 h-6 text-center hover:text-white transition-all duration-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
