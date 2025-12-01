import React from "react";
import "./Colaboraciones.css";

export default function Colaboraciones() {
  const colaboraciones = [
    "Con @artista_bolivia",
    "Con @visualcode",
    "Con @galeria_latina",
    "Con @uxmotion",
  ];

  return (
    <div className="colaboraciones">
      <h3>Colaboraciones Recientes</h3>
      <div className="grid-colabs">
        {colaboraciones.map((c, i) => (
          <div key={i} className="colab">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
