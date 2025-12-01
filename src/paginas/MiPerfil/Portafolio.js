import React from "react";
import "./Portafolio.css";

export default function Portafolio() {
  return (
    <div className="portafolio">
      <h3>Mis Obras Destacadas</h3>
      <div className="grid-obras">
        {["Obra 1", "Obra 2", "Obra 3", "Obra 4"].map((obra, i) => (
          <div key={i} className="obra">{obra}</div>
        ))}
      </div>
    </div>
  );
}