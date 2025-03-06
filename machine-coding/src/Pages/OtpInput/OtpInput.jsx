import { useEffect, useRef, useState } from "react";
import "./otpInputStyles.css";

const SingleInput = ({ index, focus, value, onChange, setFocusIndex }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef && inputRef.current && focus) {
      inputRef.current.focus();
    }
  }, [focus]);

  const handleChange = (e) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      e.keyCode === 8 ||
      e.keyCode === 37 ||
      e.keyCode === 39
    ) {
      onChange(e.key);
    }
  };

  return (
    <input
      className="otp-input"
      onClick={() => setFocusIndex(index)}
      onChange={() => {}}
      ref={inputRef}
      value={value}
      onKeyDown={handleChange}
      type="text"
      maxLength={1}
    />
  );
};

export const OtpInput = ({ length, value }) => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [values, setValues] = useState(Array.from({ length }, () => ""));
  const [solvedStatus, setSolvedStatus] = useState("solving");

  const handleChange = (index) => (newValue) => {
    if (newValue === "ArrowRight") {
      setFocusIndex(Math.min(length - 1, index + 1));
      return;
    }

    if (newValue === "ArrowLeft") {
      setFocusIndex(Math.max(0, index - 1));
      return;
    }

    setValues((prev) => {
      const newValues = [...prev];

      if (newValue === "Backspace") {
        newValues[index] = "";
        setFocusIndex(Math.max(0, index - 1));

        setSolvedStatus("solving");
      } else {
        newValues[index] = newValue;
        setFocusIndex(Math.min(length - 1, index + 1));

        if (index === length - 1) {
          const finalValue = newValues.reduce((acc, v) => {
            return `${acc}${v}`;
          });

          if (finalValue === value) {
            setSolvedStatus("wrong");
          } else {
            setSolvedStatus("correct");
          }
        } else {
          setSolvedStatus("solving");
        }
      }

      return newValues;
    });
  };

  return (
    <div className="otp-container">
      <div className="otp-input-container">
        {Array.from({ length }).map((_, index) => (
          <SingleInput
            key={index}
            index={index}
            focus={index === focusIndex}
            value={values[index]}
            onChange={(nv) => handleChange(index)(nv)}
            setFocusIndex={setFocusIndex}
          />
        ))}
      </div>
      <div>
        {solvedStatus === "correct" && <div>Wrong OTP</div>}
        {solvedStatus === "wrong" && <div>Correct OTP</div>}
      </div>
    </div>
  );
};
