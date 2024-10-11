import { useState } from "react";
import { GridBoxType } from "../../schema/gridBoard.schema";
import { useGridContext } from "./GridBoardWrapper";
import { Menu } from "../../Components/Menu";

export const BoxTypeSwitcher = ({ id }: { id: string }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { updateBoxInfo } = useGridContext();

  const list = Object.values(GridBoxType);

  const handleChange = (selectedItem: string) => {
    updateBoxInfo(id, { type: selectedItem as GridBoxType });
    setOpenMenu(false);
  };

  return (
    <div className="relative">
      <Menu
        open={openMenu}
        items={list.map((item) => ({ id: item, content: item }))}
        onChange={handleChange}
        onClose={() => setOpenMenu(false)}
      >
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          type="button"
          className="hover:bg-slate-800/40 hover:border-slate-800 rounded-full w-6 h-6 text-center hover:text-white transition-all duration-500"
        >
          P
        </button>
      </Menu>
    </div>
  );
};
