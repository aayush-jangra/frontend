import { useState } from "react";
import { useGridContext } from "./GridBoardWrapper";
import { Menu } from "../../Components/Menu";
import { BoxColors } from "../../schema/gridBoard.schema";

export const BoxColorSwitcher = ({ id }: { id: string }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { updateBoxInfo } = useGridContext();

  const handleChange = (selectedItem: string) => {
    const item = BoxColors.find(({ name }) => name === selectedItem);

    if (item) {
      updateBoxInfo(id, {
        bgColor: item.bgColor,
        shadowColor: item.shadowColor,
      });
    }
    setOpenMenu(false);
  };

  return (
    <div className="relative">
      <Menu
        open={openMenu}
        items={BoxColors.map(({ name, bgColor }) => ({
          id: name,
          content: <div className={`w-24 h-3 ${bgColor} rounded-full`}></div>,
        }))}
        onClose={() => setOpenMenu(false)}
        onChange={handleChange}
      >
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          type="button"
          className="hover:bg-slate-800/40 hover:border-slate-800 rounded-full w-6 h-6 text-center hover:text-white transition-all duration-500"
        >
          C
        </button>
      </Menu>
    </div>
  );
};
