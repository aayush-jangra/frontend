import { TypeWriter } from "./TypeWriter";
import "./typewriterStyles.css";

const TypeWriterPage = () => {
  return (
    <div>
      <div className="typewriter-container">
        <TypeWriter content={"This is a typewriter text with loop!"} loop />
      </div>
      <div className="typewriter-container">
        <TypeWriter content={"This is a typewriter text without loop!"} />
      </div>
      <div className="typewriter-container">
        <TypeWriter
          content={["1st Text line", "2nd Text line", "3rd Text line"]}
        />
      </div>
    </div>
  );
};

export default TypeWriterPage;
