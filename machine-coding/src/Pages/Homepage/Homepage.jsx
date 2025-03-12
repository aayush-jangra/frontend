import { useState } from "react";
import { ContentBox } from "../../components/ContentBox";
import { questions } from "../../constants/questions";
import "./homepageStyles.css";
import { useDebounce } from "../../utils/debounce";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const debouncedSearch = useDebounce((value) => {
    setFilteredQuestions(
      questions.filter((ques) =>
        ques.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, 300);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="homepage-container">
      <h1>
        Welcome and explore the frequently asked machine coding round questions
      </h1>
      <input
        className="homepage-search-input"
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search 🔎"
      />
      <div className="homepage-questions">
        {filteredQuestions.map((ques) => (
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
    </div>
  );
};
export default Homepage;
