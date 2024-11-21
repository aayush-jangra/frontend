import { useState } from "react";
import { debounce } from "../../../utils/debounce";
import { hexToRgba } from "../../../utils/hexToRgba";
import { hexToHsl } from "../../../utils/hexToHsl";

export const ColorToolbox = () => {
  const [hexValue, setHexValue] = useState("#4eaab7");

  const debounceUpdate = debounce((colorValue: string) => {
    setHexValue(colorValue);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceUpdate(e.target.value);
  };

  return (
    <div className="overflow-auto h-full p-2 flex flex-col gap-2">
      <div className="w-full h-12">
        <input type="color" className="w-full h-12" onChange={handleChange} />
      </div>
      <div
        className="border-2 bg-white/75 rounded-lg p-2 flex gap-2"
        style={{ borderColor: hexValue }}
      >
        <div className="flex-1">{hexValue}</div>
        <div>C</div>
      </div>
      <div
        className="border-2 bg-white/75 rounded-lg p-2 flex gap-2"
        style={{ borderColor: hexValue }}
      >
        <div className="flex-1">{hexToRgba(hexValue)}</div>
        <div>C</div>
      </div>
      <div
        className="border-2 bg-white/75 rounded-lg p-2 flex gap-2"
        style={{ borderColor: hexValue }}
      >
        <div className="flex-1">{hexToHsl(hexValue)}</div>
        <div>C</div>
      </div>
    </div>
  );
};
