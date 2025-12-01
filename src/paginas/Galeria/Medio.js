import React, { useState } from "react";
import "./Medio.css";
import { Link } from "react-router-dom";

const imgs = [
  "https://picsum.photos/id/210/400/300",
  "https://picsum.photos/id/211/400/300",
  "https://picsum.photos/id/212/400/300",
];

export default function Medio() {
  const [idx, setIdx] = useState(0);
  const [love, setLove] = useState(false);
  const next = () => setIdx((i) => (i + 1) % imgs.length);

  return (
    <div className="medio card">
      <div className="diag-carousel">
        <img src={imgs[idx]} alt="medio" />
        <button className="btn ghost diag-next" onClick={next}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <p className="helper-text">Ilustración Digital </p>
      <p className="helper-text">Fecha: 09/05/2023.</p>
      Por: Laura Torrez.
      <div className="inline-links">
        <button
          className={`btn ${love ? "mint" : ""}`}
          onClick={() => setLove((v) => !v)}
        >
          <i className={`fa-${love ? "solid" : "regular"} fa-heart`}></i> Me
          encanta
        </button>
      </div>
      <div className="inline-links">
        <button className="btn secondary">Añadir a Favoritos</button>
      </div>
    </div>
  );
}
