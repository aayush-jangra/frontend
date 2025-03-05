import { useState } from "react";
import { useDebounce } from "../../utils/debounce";
import "./debounceAndThrottleStyles.css";

export const Debounce = () => {
  const [searched, setSearched] = useState([]);
  const [input, setInput] = useState("");

  const updateFunction = (value) => {
    if (value) {
      setSearched((prev) => [value, ...prev]);
    }
  };

  const debounceUpdateFunction = useDebounce(updateFunction, 300);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    debounceUpdateFunction(value);
  };

  return (
    <>
      <label className="search-label">
        Search:
        <input
          className="search-input"
          type="text"
          value={input}
          onChange={handleChange}
        />
      </label>
      {searched.length > 0 && (
        <div className="searched-container">
          Searched values:
          <div className="searched-values">
            {searched.map((value, index) => (
              <div className="searched-value" key={index}>
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
