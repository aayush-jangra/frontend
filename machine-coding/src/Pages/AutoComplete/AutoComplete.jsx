import { useEffect, useRef, useState } from "react";
import "./autoCompleteStyles.css";

export const AutoComplete = ({ data }) => {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState(data);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const clickHandler = (e) => {
      if (menuRef && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  const changeHandler = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    if (newValue) {
      const newList = data.filter((value) =>
        value.toLowerCase().includes(newValue.toLowerCase())
      );
      console.log(newValue, newList);
      setValues([...newList]);
    } else {
      setValues(data);
    }
    setOpenMenu(true);
  };

  const handleMenuItemClick = (value) => {
    setSearch(value);
    setOpenMenu(false);
  };

  return (
    <div ref={menuRef} className="auto-complete-container">
      <input
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
        className="auto-complete-input"
        type="text"
        value={search}
        onChange={changeHandler}
      />
      {openMenu && !!values.length && (
        <>
          <div className="divider"></div>
          <menu className="auto-complete-menu">
            {values.map((v) => (
              <button
                onClick={() => handleMenuItemClick(v)}
                className="auto-complete-menu-item"
                key={v}
              >
                {v}
              </button>
            ))}
          </menu>
        </>
      )}
    </div>
  );
};
