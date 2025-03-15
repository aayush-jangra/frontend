import "./stepperStyles.css";

export const Stepper = ({ currentStep, steps }) => {
  const stepPercentage = Math.floor(
    (currentStep / Math.max(steps.length - 1, 1)) * 100
  );
  return (
    <div className="stepper-steps-container">
      {steps.map((step, index) => (
        <div key={index} className="stepper-step" onClick={step.onClick}>
          <div
            className={`step-circle ${currentStep >= index ? "step-done" : ""}`}
          ></div>
          {step.title}
        </div>
      ))}
      <div className="stepper-progress-bar-container">
        <div
          className="stepper-progress-bar"
          style={{
            transform: `translateY(${stepPercentage - 100}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};
