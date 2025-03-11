import { forwardRef } from "react";
import "./componentStyles.css";

export const CustomSwitch = forwardRef(({ type, ...props }, ref) => {
  return <input className="custom-switch" type="checkbox" {...props} />;
});
