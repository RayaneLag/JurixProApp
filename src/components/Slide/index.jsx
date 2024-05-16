import React, { useState, useEffect } from "react";
import "./Slide.css";

const Slide = ({ images = [], textOverlay = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={image} alt={`slide-${index}`} />
          {isHovered && index === currentIndex && (
            <div className="text-overlay">{textOverlay[index]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slide;
