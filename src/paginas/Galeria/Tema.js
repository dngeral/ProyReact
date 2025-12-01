import React, { useState } from "react";
import "./Tema.css";
import { Link, useNavigate } from "react-router-dom";

const imgs = [
  "https://picsum.photos/id/220/400/300",
  "https://picsum.photos/id/221/400/300",
  "https://picsum.photos/id/222/400/300",
];

export default function Tema() {
  const [idx, setIdx] = useState(0);
  const [love, setLove] = useState(false);
  const navigate = useNavigate();
  const next = () => setIdx((i) => (i + 1) % imgs.length);

  return (
    <div className="tema card">
      <div className="diag-carousel">
        <img src={imgs[idx]} alt="tema" />
        <button className="btn ghost diag-next" onClick={next}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <p className="helper-text"> Surrealismo.</p>
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
        <button
          className="btn secondary"
          onClick={() => navigate("/mi-perfil")}
        >
          Añadir a Favoritos
        </button>
      </div>
    </div>
  );
}
