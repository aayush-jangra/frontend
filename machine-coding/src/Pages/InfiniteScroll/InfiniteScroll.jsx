import { useEffect, useRef, useState } from "react";
import "./infiniteScrollStyles.css";
import { CustomSwitch } from "../../components/CustomSwitch";
import { Loader } from "../../components/Loader";

const API_URL = "https://picsum.photos/v2/list";
const IMAGE_LIMIT = 3;

export const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [autoLoad, setAutoLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(1);
  const lastDivRef = useRef();

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(
      API_URL + `?page=${page.current}&limit=${IMAGE_LIMIT}`
    );
    const data = await res.json();

    setImages((prev) => [...prev, ...data]);
    setIsLoading(false);
  };

  const loadMoreImage = () => {
    page.current++;
    fetchData();
  };

  useEffect(() => {
    fetchData();

    return () => {
      setImages([]);
      page.current = 1;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((params) => {
      if (autoLoad && params[0].isIntersecting && !isLoading) {
        loadMoreImage();
      }
    });

    const div = lastDivRef.current;

    if (div) {
      observer.observe(lastDivRef.current);
    }

    return () => {
      if (div) {
        observer.unobserve(div);
      }
    };
  }, [autoLoad, lastDivRef.current]);

  return (
    <div className="infinite-scroll-container">
      <label
        style={{
          color: "var(--text-primary)",
          display: "flex",
          alignItems: "center",
        }}
      >
        Auto Load:{" "}
        <CustomSwitch
          checked={autoLoad}
          onChange={(e) => setAutoLoad(e.target.checked)}
        />
      </label>
      <div
        style={{
          height: "80vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {images.map(({ id, download_url, author }) => (
          <div key={id} className="infinite-scroll-image-container">
            <img
              className="infinite-scroll-image"
              alt={"image-" + id}
              src={download_url}
            />
            <div className="infinite-scroll-image-author">{author}</div>
          </div>
        ))}
        <div ref={lastDivRef}></div>
        {isLoading && <Loader />}
        {!autoLoad && !isLoading && (
          <button className="infinite-scroll-load-more" onClick={loadMoreImage}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
