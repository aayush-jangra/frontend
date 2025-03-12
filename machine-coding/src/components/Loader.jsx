import "./componentStyles.css";

export const Loader = ({ fullPage }) => {
  return (
    <div
      style={{ zIndex: 200 }}
      className={fullPage ? "custom-loader-full-page" : ""}
    >
      <div className="custom-loader"></div>
    </div>
  );
};
