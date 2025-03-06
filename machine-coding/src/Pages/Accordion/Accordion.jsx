import { useState } from "react";
import "./accordionStyles.css";

export const Accordion = ({ title, content, defaultOpen }) => {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setOpen((prev) => !prev)}>
        <div>{title}</div>
        <div>{open ? "-" : "+"}</div>
      </div>
      {open && <div className="accordion-content">{content}</div>}
    </div>
  );
};
