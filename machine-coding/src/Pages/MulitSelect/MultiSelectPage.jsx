import { movies } from "../../constants/movies";
import { MultiSelect } from "./MultiSelect";

const MultiSelectPage = () => {
  return (
    <div>
      <MultiSelect data={movies} />
    </div>
  );
};

export default MultiSelectPage;
