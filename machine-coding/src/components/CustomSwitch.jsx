import "./componentStyles.css";

export const CustomSwitch = ({ type, ...props }) => {
  return <input className="custom-switch" type="checkbox" {...props} />;
};
