import { useState } from "react";
import "./ratingStyles.css";

const Star = ({ selected, onClick, onHover }) => {
  return (
    <div onMouseEnter={onHover} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="black"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={selected ? "gold" : "white"}
        style={{ cursor: "pointer" }}
      >
        <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
      </svg>
    </div>
  );
};

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const finalRating = hoverRating || rating;

  return (
    <div className="rating-container" onMouseLeave={() => setHoverRating(0)}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Star
          onHover={() => setHoverRating(index + 1)}
          key={index}
          selected={finalRating > index}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};
