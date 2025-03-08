import { useState } from "react";
import { Accordion } from "./Accordion";
import "./accordionStyles.css";
import { CustomSwitch } from "../../components/CustomSwitch";

export const AccordionPage = () => {
  const [allowMultiple, setAllowMultiple] = useState(false);

  const accordionData = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab? Nobis quas placeat nostrum? Officia exercitationem suscipit laudantium hic, quas, sint id, quos temporibus illum eos debitis animi! Tempora, ullam.",
      defaultOpen: true,
    },
    {
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab? Nobis quas placeat nostrum? Officia exercitationem suscipit laudantium hic, quas, sint id, quos temporibus illum eos debitis animi! Tempora, ullam.",
      defaultOpen: false,
    },
    {
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab? Nobis quas placeat nostrum? Officia exercitationem suscipit laudantium hic, quas, sint id, quos temporibus illum eos debitis animi! Tempora, ullam.",
      defaultOpen: false,
    },
  ];

  return (
    <div className="accordion-page-container">
      <label className="accordion-multiple-input">
        Allow Multiple:
        <CustomSwitch
          value={allowMultiple}
          onChange={(e) => setAllowMultiple(e.target.checked)}
        />
      </label>
      <Accordion list={accordionData} allowMultiple={allowMultiple} />
    </div>
  );
};
