import "./componentStyles.css";

export const ContentBox = ({ title, content, buttonClick }) => {
  return (
    <div className="content-box">
      <div className="content-box-title">
        <div>{title}</div>
        <button
          className="content-box-cta"
          onClick={(e) => {
            e.preventDefault();
            buttonClick();
          }}
        >
          View
        </button>
      </div>
      <div className="content-box-content">{content}</div>
    </div>
  );
};
