import React, { useState } from "react";
import "./Galeria.css";
import Estilo from "./Estilo";
import Medio from "./Medio";
import Tema from "./Tema";
import Buscador from "../../Componentes/Search/Buscador";
import { Link, useNavigate } from "react-router-dom";
export default function Galeria() {
  const [activo, setActivo] = useState("estilo");

  return (
    <div className="galeria">
      <div className="encabezado-galeria">
        <button className="btn-volver" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="nombre-cuenta">@NombredemiCuenta</div>
      </div>

      <Buscador to="/galeria" />

      <p className="helper-text">Categorías por:</p>

      <div className="categorias">
        <span
          className={activo === "estilo" ? "activo" : ""}
          onClick={() => setActivo("estilo")}
        >
          Estilo
        </span>
        <span
          className={activo === "medio" ? "activo" : ""}
          onClick={() => setActivo("medio")}
        >
          Medio
        </span>
        <span
          className={activo === "tema" ? "activo" : ""}
          onClick={() => setActivo("tema")}
        >
          Tema
        </span>
      </div>

      <div className="componente-activo">
        {activo === "estilo" && <Estilo />}
        {activo === "medio" && <Medio />}
        {activo === "tema" && <Tema />}
      </div>
    </div>
  );
}
