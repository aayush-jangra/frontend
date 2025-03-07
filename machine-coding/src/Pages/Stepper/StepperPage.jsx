import { useState } from "react";
import { Stepper } from "./Stepper";

export const StepperPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Personal Information",
      onClick: () => {
        setCurrentStep(0);
      },
    },
    {
      title: "Professional Information",
      onClick: () => {
        setCurrentStep(1);
      },
    },
    {
      title: "Diversity Information",
      onClick: () => {
        setCurrentStep(2);
      },
    },
    {
      title: "Account Information",
      onClick: () => {
        setCurrentStep(3);
      },
    },
  ];

  return (
    <div className="stepper-page-container">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="stepper-component">{steps[currentStep].title}</div>
    </div>
  );
};
