import "./componentStyles.css";

export const HeaderWrapper = ({ children }) => {
  return (
    <div className="app-container">
      <div className="header-container">
        <div
          className="header-home"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </div>
      </div>
      <div className="header-children">{children}</div>
    </div>
  );
};
