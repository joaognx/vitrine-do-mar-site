import { useEffect, useRef } from "react";
import "./Carousel.css";

export default function Carousel() {

  const images = [
    "logobege.png",
    "logoazul.png",
    "logobege.png",
    "logoazul.png",
  ];

  const carouselRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    function scrollNext() {
      index = (index + 1) % carousel.children.length;
      carousel.scrollTo({
        left: carousel.offsetWidth * index,
        behavior: "smooth",
      });
    }

    let interval = setInterval(scrollNext, 4000);

    return () => clearInterval(interval);
  }, []);



  return (
     <ul className="carousel" ref={carouselRef}>
      {images.map((img, i) => (
        <li key={i} className="img">
          <img src={img} alt="Vitrine do Mar" className='teste' />
        </li>
        ))}
      </ul>
  );
}
