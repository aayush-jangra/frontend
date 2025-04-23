import { useRef, useState } from "react";
import "./graphCoordinatesStyles.css";

const Circle = ({ length, coordinate: { x, y }, demo }) => {
  const posX = (x + length) * 64;
  const posY = (y + length) * 64;

  return (
    <div
      style={{ top: posY, left: posX }}
      className={`graph-circle ${demo ? "graph-circle-demo" : ""}`}
    ></div>
  );
};

export const GraphCoordinates = ({ length }) => {
  const grid = useRef(Array.from({ length: length * 4 * length }));
  const [coordinates, setCoordinates] = useState([]);
  const [inputs, setInputs] = useState({ x: 0, y: 0 });

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };

  const putCoordinate = () => {
    setCoordinates((prev) => [...prev, { ...inputs }]);
  };

  return (
    <div>
      <div className="graph-inputs-container">
        <label className="graph-input">
          X Coordinate: {inputs.x}
          <input
            name="x"
            type="range"
            min={-1 * length}
            max={length}
            value={inputs.x}
            onChange={handleInputChange}
          />
        </label>
        <label className="graph-input">
          Y Coordinate: {inputs.y}
          <input
            name="y"
            type="range"
            min={-1 * length}
            max={length}
            onChange={handleInputChange}
            value={inputs.y}
          />
        </label>
        <button className="coordinate-button" onClick={putCoordinate}>
          Put Coordinate
        </button>
      </div>
      <div className="graph-container">
        <div
          className="graph"
          style={{ gridTemplateColumns: `repeat(${length * 2}, 1fr)` }}
        >
          {grid.current.map((_, index) => (
            <div className="graph-box" key={index}></div>
          ))}
          <div className="graph-y-axis"></div>
          <div className="graph-x-axis"></div>
        </div>
        {coordinates.map((c, ind) => (
          <Circle key={ind} coordinate={c} length={length} />
        ))}
        <Circle coordinate={inputs} length={length} demo />
      </div>
    </div>
  );
};
