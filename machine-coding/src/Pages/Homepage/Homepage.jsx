import { ContentBox } from "../../components/ContentBox";
import { questions } from "../../constants/questions";
import "./homepageStyles.css";

const Homepage = () => {
  return (
    <>
      <h1>
        Welcome and explore the frequently asked machine coding round questions
      </h1>
      <div className="homepage-questions">
        {questions.map((ques) => (
          <ContentBox
            key={ques.path}
            title={ques.title}
            content={ques.description}
            buttonClick={() => {
              window.location.pathname = ques.path;
            }}
          />
        ))}
      </div>
    </>
  );
};
export default Homepage;
