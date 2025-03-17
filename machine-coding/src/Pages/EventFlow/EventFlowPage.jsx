import { useEffect, useRef, useState } from "react";
import "./eventFlowStyles.css";
import { CustomSwitch } from "../../components/CustomSwitch";
import { KEY_EVENT_DIV_COUNT } from "../../constants/storage";

const MIN_DIV_COUNT = 1,
  MAX_DIV_COUNT = 5;

const EventDiv = ({ capturePreference, remainingCount, addToWorkerQueue }) => {
  const [bgColor, setBgColor] = useState("var(--background-primary)");

  if (!remainingCount) return null;

  const handleClick = (color) => {
    addToWorkerQueue(() => {
      setBgColor(color);
      setTimeout(() => {
        setBgColor("var(--background-primary)");
      }, 1000);
    });
  };

  const pref = capturePreference[capturePreference.length - remainingCount];

  return (
    <div
      style={{ background: bgColor }}
      className="event-div"
      onClick={!pref ? () => handleClick("lightCoral") : undefined}
      onClickCapture={pref ? () => handleClick("lightGreen") : undefined}
    >
      {pref ? "Capturing" : "Bubbling"}
      <EventDiv
        capturePreference={capturePreference}
        remainingCount={remainingCount - 1}
        addToWorkerQueue={addToWorkerQueue}
      />
    </div>
  );
};

const EventFlowPage = () => {
  const sessionDivCount = sessionStorage.getItem(KEY_EVENT_DIV_COUNT);
  const [divCount, setDivCount] = useState(sessionDivCount ?? 3);
  const [capturePreference, setCapturePreference] = useState([
    false,
    false,
    false,
  ]);
  const workerQueue = useRef([]);

  useEffect(() => {
    setCapturePreference(Array.from({ length: divCount }, () => false));
  }, [divCount]);

  const emptyQueue = () => {
    workerQueue.current[0]();
    workerQueue.current.shift();
    if (workerQueue.current.length > 0) {
      setTimeout(() => {
        emptyQueue();
      }, 1000);
    }
  };

  const addToWorkerQueue = (fn) => {
    workerQueue.current.push(fn);

    if (workerQueue.current.length === 1) {
      setTimeout(() => {
        emptyQueue();
      }, 100);
    }
  };

  const handlePrefChange = (index) => {
    setCapturePreference((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];

      return copy;
    });
  };

  return (
    <div className="event-page-container">
      <label>
        Div count:
        <input
          value={divCount}
          type="range"
          min={MIN_DIV_COUNT}
          max={MAX_DIV_COUNT}
          onChange={(e) => {
            sessionStorage.setItem(KEY_EVENT_DIV_COUNT, e.target.value);
            setDivCount(e.target.value);
          }}
        />
        {divCount}
      </label>
      <div className="event-content-container">
        <div className="capture-preferences">
          {capturePreference.map((pref, index) => (
            <label className="capture-preference-label" key={index}>
              Bubbling
              <CustomSwitch
                onChange={() => handlePrefChange(index)}
                checked={pref}
              />
              Capturing
            </label>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <EventDiv
            capturePreference={capturePreference}
            addToWorkerQueue={addToWorkerQueue}
            remainingCount={divCount}
          />
        </div>
      </div>
      <div className="event-flow-info">
        Event always captures first and then bubbles up
      </div>
    </div>
  );
};

export default EventFlowPage;
