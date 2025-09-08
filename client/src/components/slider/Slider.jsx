import { useState, useEffect } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (imageIndex !== null) {
        if (e.key === "ArrowLeft") {
          changeSlide("left");
        } else if (e.key === "ArrowRight") {
          changeSlide("right");
        } else if (e.key === "Escape") {
          setImageIndex(null);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [imageIndex]);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow left" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow right" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            ×
          </div>
          <div className="imageCounter">
            {imageIndex + 1} / {images.length}
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
