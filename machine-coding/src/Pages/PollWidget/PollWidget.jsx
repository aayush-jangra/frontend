import { useRef, useState } from "react";
import "./pollWidgetStyles.css";

export const PollWidget = ({ question, options }) => {
  const [selected, setSelected] = useState(null);
  const totalVotes = useRef(
    options.reduce((acc, { votes }) => {
      return acc + votes;
    }, 1)
  );
  const [renderProgressBar, setRenderProgressBar] = useState(false);

  const handleChange = (index) => {
    setSelected(index);
    setTimeout(() => {
      setRenderProgressBar(true);
    }, 0);
  };

  const removeVote = () => {
    setSelected(null);
    setRenderProgressBar(false);
  };

  const getPollDetails = (index) => {
    const votes = (selected === index ? 1 : 0) + options[index].votes;

    const percentage = ((votes * 100) / totalVotes.current).toFixed(2);

    return { percentage, votes };
  };

  return (
    <div className="poll-widget-container">
      <div className="poll-widget-question">{question}</div>
      {options.map(({ option }, index) => {
        const { percentage, votes } = getPollDetails(index);
        return (
          <div className="poll-widet-option-conatiner" key={index}>
            <div className="poll-widet-option-label-conatiner">
              <label className="poll-widget-option-label">
                <input
                  radioGroup="poll"
                  onChange={() => handleChange(index)}
                  checked={selected === index}
                  type="radio"
                />
                {option}
              </label>
              {selected !== null && `${votes} votes (${percentage}%)`}
            </div>
            {selected !== null && (
              <div className="poll-widget-percentage-bar-outer">
                <div
                  style={{
                    transform: renderProgressBar
                      ? `translateX(-${100 - percentage}%)`
                      : undefined,
                  }}
                  className="poll-widget-percentage-bar-inner"
                ></div>
              </div>
            )}
          </div>
        );
      })}
      <button
        disabled={selected === null}
        onClick={removeVote}
        className="poll-widget-remove-vote"
      >
        Remove vote
      </button>
    </div>
  );
};
