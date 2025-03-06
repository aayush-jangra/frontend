import "./progressBarStyles.css";

export const ProgressBar = ({ currentValue, maxValue }) => {
  const percentage = Math.floor((currentValue / maxValue) * 100) - 100;

  return (
    <div className="progress-bar-container">
      <div
        style={{ transform: `translateX(${percentage}%)` }}
        className="progress-bar"
      ></div>
    </div>
  );
};
