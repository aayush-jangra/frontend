import { PollWidget } from "./PollWidget";

const question = "What is the best hobby?";
const options = [
  {
    option: "Video games",
    votes: 12,
  },
  {
    option: "Movies",
    votes: 6,
  },
  {
    option: "Reading",
    votes: 8,
  },
];

const PollWidgetPage = () => {
  return (
    <div>
      <PollWidget question={question} options={options} />
    </div>
  );
};

export default PollWidgetPage;
