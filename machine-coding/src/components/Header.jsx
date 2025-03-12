import { questions } from "../constants/questions";
import "./componentStyles.css";
import HomeIcon from "../assets/Icons/home.svg";
import LinkIcon from "../assets/Icons/link.svg";
import { AllQuestionsMenu } from "./AllQuestionsMenu";

const GITHUB_PATH =
  "https://github.com/aayush-jangra/frontend/tree/main/machine-coding/src/Pages";

export const HeaderWrapper = ({ children }) => {
  const { pathname } = window.location;

  const gtihubFolder =
    "/" +
    (questions.find(({ path }) => pathname.includes(path))?.folderName ?? "");

  return (
    <div className="app-container">
      <div className="header-container">
        <AllQuestionsMenu />
        <button
          className="header-button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            style={{ width: 20, height: 20 }}
            src={HomeIcon}
            alt="Home Icon"
          />
          Home
        </button>
        <a
          className="header-button header-code-link"
          href={GITHUB_PATH + gtihubFolder}
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: 20, height: 20 }}
            src={LinkIcon}
            alt="Link Icon"
          />
          Code
        </a>
      </div>
      <div className="header-children">{children}</div>
    </div>
  );
};
