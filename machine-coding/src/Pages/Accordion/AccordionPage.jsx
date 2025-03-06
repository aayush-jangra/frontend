import { Accordion } from "./Accordion";
import "./accordionStyles.css";

export const AccordionPage = () => {
  return (
    <div className="accordion-page-container">
      <Accordion
        title="Title 1"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab? Nobis quas placeat nostrum? Officia exercitationem suscipit laudantium hic, quas, sint id, quos temporibus illum eos debitis animi! Tempora, ullam."
        defaultOpen
      />
      <Accordion
        title="Title 2"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nemo ullam ad praesentium aliquam et illum nulla deleniti, doloribus molestias eaque! Laboriosam possimus, expedita delectus laborum rerum impedit illo molestiae. Aut omnis magni repellendus iure suscipit odio fuga at sequi iusto repudiandae, minima nihil quam deserunt, facilis reprehenderit dolores exercitationem rerum modi? Quo praesentium eligendi ex odit delectus similique cumque?"
      />
      <Accordion
        title="Title 3"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ab? Nobis quas placeat nostrum? Officia exercitationem suscipit laudantium hic, quas, sint id, quos temporibus illum eos debitis animi! Tempora, ullam."
      />
    </div>
  );
};
