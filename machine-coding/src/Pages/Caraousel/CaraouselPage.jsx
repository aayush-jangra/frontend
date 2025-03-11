import { useEffect, useRef, useState } from "react";
import { images } from "../../constants/images";
import "./carouselStyles.css";

const Caraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div>
      <div
        onMouseEnter={() => {
          clearInterval(interval.current);
          setHovered(true);
        }}
        onMouseLeave={() => {
          interval.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }, 3000);
          setHovered(false);
        }}
        className="carousel-container"
      >
        {images.map((image, index) => (
          <img
            className={`carousel-image ${
              currentIndex === index ? "" : "image-hide"
            }`}
            key={image}
            src={image}
            alt={`Image-${index}`}
          />
        ))}
        <div
          style={{ opacity: hovered ? 1 : 0 }}
          className="carousel-left-button"
          onClick={() =>
            setCurrentIndex(
              (prev) =>
                (((prev - 1) % images.length) + images.length) % images.length
            )
          }
        >
          {"<"}
        </div>
        <div
          style={{ opacity: hovered ? 1 : 0 }}
          className="carousel-right-button"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
