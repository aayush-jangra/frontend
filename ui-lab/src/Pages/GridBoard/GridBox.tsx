import { useGridContext } from "./GridBoardWrapper";
import { GridBoxInfo, GridBoxType } from "../../schema/gridBoard.schema";
import { CheckList } from "./Boxes/CheckList";
import { BoxTypeSwitcher } from "./BoxTypeSwitcher";
import { BoxColorSwitcher } from "./BoxColorSwitcher";
import { IconButton } from "../../Components/IconButton";
import { Stopwatch } from "./Boxes/Stopwatch";
import { useEffect, useRef, useState } from "react";

export const GridBox = ({
  id,
  name,
  bgColor,
  shadowColor,
  start,
  end,
  type,
}: GridBoxInfo) => {
  const { canExtendBox, extendBox, removeBox } = useGridContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState(80);

  useEffect(() => {
    if (ref.current) {
      setMaxHeight(ref.current.clientHeight - 24);
    }
  }, [ref.current?.clientHeight, end, start]);

  return (
    <div
      className={`group relative ${bgColor} rounded-2xl h-full w-full p-2 shadow-lg hover:shadow-box-focus transition-all duration-500 ${shadowColor}`}
    >
      {/* Extend Right =>  */}
      {canExtendBox("right", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "right", start, end)}
          className={`z-10 transition-all duration-500 hidden group-hover:flex absolute top-1/2 right-0 ${bgColor} -translate-y-1/2 translate-x-full rounded-r-full w-6 h-12 items-center justify-center`}
        >{`>`}</button>
      )}
      {/* Extend Left =>  */}
      {canExtendBox("left", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "left", start, end)}
          className={`z-10 transition-all duration-500 hidden group-hover:flex absolute top-1/2 left-0 ${bgColor} -translate-y-1/2 -translate-x-full rounded-l-full w-6 h-12 items-center justify-center`}
        >{`<`}</button>
      )}
      {/* Extend Up =>  */}
      {canExtendBox("up", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "up", start, end)}
          className={`z-10 transition-all duration-500 hidden group-hover:flex absolute right-1/2 top-0 ${bgColor} -translate-y-3/4 translate-x-1/2 rounded-l-full w-6 h-12 items-center justify-center rotate-90`}
        >{`<`}</button>
      )}
      {/* Extend Down =>  */}
      {canExtendBox("down", start, end) && (
        <button
          type="button"
          onClick={() => extendBox(id, "down", start, end)}
          className={`z-10 transition-all duration-500 hidden group-hover:flex absolute right-1/2 bottom-0 ${bgColor} translate-y-3/4 translate-x-1/2 rounded-r-full w-6 h-12 items-center justify-center rotate-90`}
        >{`>`}</button>
      )}
      <div className="flex flex-col gap-4 h-full">
        <div className="flex gap-8 items-center justify-between max-w-full h-8">
          <input
            className="w-4/5 rounded-full h-full bg-slate-800/40 border-slate-800 border px-4 text-white placeholder:text-white/70"
            type="text"
            defaultValue={name}
            placeholder="Name"
            maxLength={50}
          />
          <div className="flex h-full bg-transparent border border-slate-800 rounded-full px-1 items-center">
            <BoxColorSwitcher id={id} />
            <BoxTypeSwitcher id={id} />
            <IconButton onClick={() => removeBox(id)}>X</IconButton>
          </div>
        </div>
        {/* Box Content */}
        <div className="flex flex-col h-full" ref={ref}>
          <div className="font-thin font-serif italic text-text-secondary text-sm">
            {type}
          </div>
          <div
            className="w-full h-full rounded-xl p-2 bg-slate-100/75"
            style={{ maxHeight }}
          >
            {type === GridBoxType.TEXTAREA && (
              <textarea
                className={`w-full resize-none bg-transparent outline-none h-full`}
              />
            )}
            {type === GridBoxType.CHECKLIST && <CheckList />}
            {type === GridBoxType.STOPWATCH && <Stopwatch />}
          </div>
        </div>
      </div>
    </div>
  );
};
