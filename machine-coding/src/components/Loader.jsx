import "./componentStyles.css";

export const Loader = ({ fullPage }) => {
  return (
    <div className={fullPage ? "custom-loader-full-page" : ""}>
      <div className="custom-loader"></div>
    </div>
  );
};
