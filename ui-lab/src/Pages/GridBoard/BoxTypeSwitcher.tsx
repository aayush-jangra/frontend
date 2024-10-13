import { useState } from "react";
import { GridBoxType } from "../../schema/gridBoard.schema";
import { useGridContext } from "./GridBoardWrapper";
import { Menu } from "../../Components/Menu";
import { IconButton } from "../../Components/IconButton";

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
        <IconButton onClick={() => setOpenMenu((prev) => !prev)}>P</IconButton>
      </Menu>
    </div>
  );
};
