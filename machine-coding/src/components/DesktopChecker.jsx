import "./componentStyles.css";

const DesktopChecker = ({ children }) => {
  return (
    <>
      <div className="desktop-checker-mobile-view">
        Please use <b>desktop site</b> to view this component
      </div>
      <div className="desktop-checker-desktop-view">{children}</div>
    </>
  );
};
export default DesktopChecker;
