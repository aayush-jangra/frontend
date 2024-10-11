import { useEffect, useRef, useState } from "react";
import { Checkbox } from "../../Components/Checkbox";

export const CheckList = ({ end }: { end: [number, number] }) => {
  const [checkList, setCheckList] = useState<
    { checked: boolean; content: string }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  const [maxHeight, setMaxHeight] = useState(80);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && inputValue) {
      setCheckList((prev) => [
        ...prev,
        { content: inputValue, checked: false },
      ]);
      setInputValue("");
    }
  };

  const handleCheck = (index: number) => {
    setCheckList((prev) => {
      const newV = [...prev];

      newV[index] = {
        checked: !newV[index].checked,
        content: newV[index].content,
      };

      return newV;
    });
  };

  useEffect(() => {
    if (ref.current) {
      setMaxHeight(ref.current.clientHeight - 40);
    }
  }, [ref.current?.clientHeight, end]);

  return (
    <div className="flex flex-col gap-2 h-full" ref={ref}>
      <div
        className="overflow-auto flex-1 flex flex-col gap-1"
        style={{ maxHeight }}
      >
        {checkList.map(({ content, checked }, index) => {
          return (
            <div className="border-b border-slate-800/50" key={index}>
              <Checkbox
                content={content}
                checked={checked}
                onChange={() => handleCheck(index)}
              />
            </div>
          );
        })}
      </div>
      <input
        className="w-full rounded-full bg-slate-800/10 border-slate-800 border px-4 placeholder:text-text-subtitle"
        type="text"
        placeholder="Add task"
        maxLength={200}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
};
