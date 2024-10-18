import { useState } from "react";
import { Checkbox } from "../../../Components/Checkbox";
import { IconButton } from "../../../Components/IconButton";
import { Tooltip } from "../../../Components/Tooltip";

export const CheckList = () => {
  const [checkList, setCheckList] = useState<
    { checked: boolean; content: string }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && inputValue) {
      setCheckList((prev) => [
        { content: inputValue, checked: false },
        ...prev,
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

  const removeCheck = (index: number) => {
    setCheckList((prev) => {
      const newV = [...prev];

      return newV.filter((_, ind) => ind !== index);
    });
  };

  const removeAllChecked = () => {
    setCheckList((prev) => {
      const newV = [...prev];

      return newV.filter((v) => !v.checked);
    });
  };

  return (
    <div className="flex flex-col gap-2 h-full p-2">
      <div className="overflow-auto flex-1 flex flex-col gap-1">
        {checkList.map(({ content, checked }, index) => {
          return (
            <div
              className="flex border-b border-slate-800/50 items-center"
              key={index}
            >
              <div className="flex-1">
                <Checkbox
                  content={content}
                  checked={checked}
                  onChange={() => handleCheck(index)}
                />
              </div>
              <IconButton onClick={() => removeCheck(index)}>D</IconButton>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <input
          className="w-full rounded-full bg-slate-800/10 border-slate-800 border px-4 placeholder:text-text-subtitle"
          type="text"
          placeholder="Add item"
          maxLength={200}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <Tooltip content="Delete checked">
          <IconButton onClick={removeAllChecked}>D</IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
