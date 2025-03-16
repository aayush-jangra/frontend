import { useEffect, useRef, useState } from "react";
import "./mutliSelectStyles.css";

export const MultiSelect = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const multiSelectInputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
      setSelectedItems((prev) => {
        prev.pop();
        return [...prev];
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const selectItem = (title) => {
    setSelectedItems((prev) => [...prev, title]);
  };

  const removeItem = (title) => {
    setSelectedItems((prev) => prev.filter((v) => v !== title));
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !(
          multiSelectInputRef?.current &&
          multiSelectInputRef.current.contains(e.target)
        )
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const filteredValues = (
    search
      ? data.filter((v) => v.toLowerCase().includes(search.toLowerCase()))
      : data
  ).filter((v) => !selectedItems.includes(v));

  return (
    <div ref={multiSelectInputRef} className="multi-select-input-container">
      <div className="multi-select-input">
        {selectedItems.map((value, index) => (
          <div key={index} className="multi-select-item">
            {value}
            <div
              className="multi-select-remove-item"
              onClick={() => removeItem(value)}
            >
              X
            </div>
          </div>
        ))}
        <input
          placeholder="Type to search"
          onClick={() => {
            setOpenMenu(true);
          }}
          className="multi-select-search"
          value={search}
          onKeyDown={handleKeyDown}
          onChange={handleSearchChange}
        />
      </div>
      {openMenu && (
        <>
          <div className="multi-select-divider"></div>
          <div className="multi-select-options-container">
            {filteredValues.map((title, index) => (
              <div
                key={index}
                onClick={() => selectItem(title)}
                className="multi-select-option-title"
              >
                {title}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
