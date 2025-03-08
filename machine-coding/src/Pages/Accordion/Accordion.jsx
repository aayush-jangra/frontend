import { useState } from "react";
import "./accordionStyles.css";

export const Accordion = ({ list, allowMultiple }) => {
  const [open, setOpen] = useState([]);

  const handleClick = (index) => {
    setOpen((prev) => {
      if (prev.includes(index)) {
        return prev.filter((ind) => ind !== index);
      }
      if (allowMultiple) {
        return [...prev, index];
      }

      return [index];
    });
  };

  return (
    <>
      {list.map(({ title, content }, index) => (
        <div key={index} className="accordion">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <div>{title}</div>
            <div>{open.includes(index) ? "-" : "+"}</div>
          </div>
          {open.includes(index) && (
            <div className="accordion-content">{content}</div>
          )}
        </div>
      ))}
    </>
  );
};
