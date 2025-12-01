import React, { useEffect, useState } from "react";
import "./Carrusel2.css";

const demoImages = [
  "https://picsum.photos/id/1055/400/300",
  "https://picsum.photos/id/1065/400/300",
  "https://picsum.photos/id/1075/400/300",
  "https://picsum.photos/id/109/400/300",
];

export default function Carrusel2({
  images = demoImages,
  auto = true,
  interval = 3000,
}) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!auto) return;

    const timeout = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % images.length);
        setAnimating(false);
      }, 500); // duración de la animación
    }, interval);

    return () => clearTimeout(timeout);
  }, [idx, auto, interval]);

  return (
    <div className="carousel2">
      <div className={`slide ${animating ? "fade-up" : ""}`}>
        <img src={images[idx]} alt={`slide-${idx}`} />
      </div>
    </div>
  );
}
