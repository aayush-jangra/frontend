import { useState } from "react";
import { useGridContext } from "./GridBoardWrapper";
import { Menu } from "../../Components/Menu";
import { IconButton } from "../../Components/IconButton";
import { BoxColors } from "../../schema/colors.schema";

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
        <IconButton onClick={() => setOpenMenu((prev) => !prev)}>C</IconButton>
      </Menu>
    </div>
  );
};
