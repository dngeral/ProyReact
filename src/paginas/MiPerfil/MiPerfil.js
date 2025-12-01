import React, { useState } from "react";
import "./MiPerfil.css";
import Portafolio from "./Portafolio";
import Proyectos from "./Proyectos";
import Colaboraciones from "./Colaboraciones";

export default function MiPerfil() {
  const [activo, setActivo] = useState("portafolio");

  return (
    <div className="mi-perfil">
      <div className="encabezado-perfil">
        <div className="info-usuario">
          <h2>@username_</h2>
          <img
            src="https://picsum.photos/200/140"
            alt="Foto de perfil"
            className="foto-perfil"
          />
          <p>Diseñador Web | La Paz, Bolivia</p>
          <div className="estadisticas">
            <span>💜 25.5K Likes</span>
            <span>👥 5.5K Seguidores</span>
            <span>➕ 1.5K Siguiendo</span>
          </div>
        </div>
      </div>

      <div className="navegacion-perfil">
        <span
          className={activo === "portafolio" ? "activo" : ""}
          onClick={() => setActivo("portafolio")}
        >
          Portafolio
        </span>
        <span
          className={activo === "proyectos" ? "activo" : ""}
          onClick={() => setActivo("proyectos")}
        >
          Proyectos
        </span>
        <span
          className={activo === "colaboraciones" ? "activo" : ""}
          onClick={() => setActivo("colaboraciones")}
        >
          Colaboraciones
        </span>
      </div>

      <div className="contenido-perfil">
        {activo === "portafolio" && <Portafolio />}
        {activo === "proyectos" && <Proyectos />}
        {activo === "colaboraciones" && <Colaboraciones />}
      </div>
    </div>
  );
}
