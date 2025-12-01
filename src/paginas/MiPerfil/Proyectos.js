import React from "react";
import "./Proyectos.css";

export default function Proyectos() {
  const proyectos = [
    "Diseño de plataforma colaborativa",
    "Galería interactiva para artistas",
    "Animaciones UI para portafolios",
    "Sistema de retroalimentación visual",
    "Optimización de carga en React",
    "Integración de API para perfiles"
  ];

  return (
    <div className="proyectos">
      <h3>Proyectos en Curso</h3>
      <div className="grid-proyectos">
        {proyectos.map((p, i) => (
          <div key={i} className="proyecto">{p}</div>
        ))}
      </div>
    </div>
  );
}