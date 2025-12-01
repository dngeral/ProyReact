import React, { useEffect, useState } from "react";
import "./Carrusel1.css";

const demoImages = [
  "https://picsum.photos/id/1015/800/450",
  "https://picsum.photos/id/1025/800/450",
  "https://picsum.photos/id/1035/800/450",
  "https://picsum.photos/id/1045/800/450",
];

export default function Carrusel1({
  images = demoImages,
  auto = true,
  interval = 3000,
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(t);
  }, [images.length, auto, interval]);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="carousel1 card">
      <button className="nav left" onClick={prev}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <img src={images[idx]} alt={`slide-${idx}`} />
      <button className="nav right" onClick={next}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
