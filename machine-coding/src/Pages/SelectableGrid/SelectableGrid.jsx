import { useCallback, useRef, useState } from "react";
import "./selectableGridStyles.css";

export const SelectableGrid = ({ rows, columns }) => {
  const [selected, setSelected] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => false)
    )
  );
  const [pressed, setPressed] = useState(false);
  const currentBox = useRef(null);
  const startBox = useRef(null);

  const updateSelection = useCallback(
    (forced = false) => {
      if (pressed || forced) {
        setSelected((prev) => {
          const copy = [...prev.map((v) => v)];

          const containerDimensions = {
            sr: Math.min(currentBox.current.row, startBox.current.row),
            sc: Math.min(currentBox.current.col, startBox.current.col),
            er: Math.max(currentBox.current.row, startBox.current.row),
            ec: Math.max(currentBox.current.col, startBox.current.col),
          };

          return copy.map((row, ri) => {
            return row.map((_, ci) => {
              return (
                ri >= containerDimensions.sr &&
                ri <= containerDimensions.er &&
                ci >= containerDimensions.sc &&
                ci <= containerDimensions.ec
              );
            });
          });
        });
      }
    },
    [pressed]
  );

  return (
    <div>
      <div
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          maxWidth: `${columns * 64}px`,
        }}
        className="selectable-grid"
      >
        {selected.map((row, ri) => {
          return row.map((cell, ci) => (
            <div
              onMouseDown={() => {
                setPressed(true);
                startBox.current = { row: ri, col: ci };
                updateSelection(true);
              }}
              onMouseUp={() => {
                setPressed(false);
              }}
              onMouseEnter={() => {
                currentBox.current = { row: ri, col: ci };
                updateSelection();
              }}
              key={`${ri}-${ci}`}
              className={`selectable-grid-item ${
                cell ? "selectable-grid-item-selected" : ""
              }`}
            >
              {ri * columns + ci + 1}
            </div>
          ));
        })}
      </div>
    </div>
  );
};
