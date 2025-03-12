import { movies } from "../../constants/movies";
import { AutoComplete } from "./AutoComplete";

const AutoCompletePage = () => {
  return (
    <div>
      <AutoComplete data={movies} />
    </div>
  );
};

export default AutoCompletePage;
