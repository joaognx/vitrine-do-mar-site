import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const images = [
    "logobege.png",
    "logoazul.png",
    "logobege.png",
    "logoazul.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  
  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    scrollToSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]); 

  return (
    <div className="carousel-container">
      
      <button className="nav-btn left" onClick={prevSlide}>❮</button>
      <button className="nav-btn right" onClick={nextSlide}>❯</button>

      <ul className="carousel" ref={carouselRef}>
        {images.map((img, i) => (
          <li key={i} className="img">
            <img src={img} alt={`Slide ${i}`} />
          </li>
        ))}
      </ul>


      <div className="indicators">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => scrollToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}