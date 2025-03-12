import AllIcon from "../assets/Icons/all.svg";
import "./componentStyles.css";
import { questions } from "../constants/questions";

export const AllQuestionsMenu = () => {
  return (
    <div className="all-questions-container">
      <div className="all-questions-content">
        <div style={{ width: 60, height: 60 }}>
          <img style={{ width: 44, height: 44 }} alt="All Icon" src={AllIcon} />
        </div>
        <div className="question-items-container">
          {questions.map(({ title, path }) => (
            <div
              key={path}
              onClick={() => {
                window.location.href = path;
              }}
              className="question-item"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
