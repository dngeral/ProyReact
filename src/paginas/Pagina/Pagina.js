import React from "react";
import "./Pagina.css";
import { Link, useNavigate } from "react-router-dom";
import Carrusel1 from "../../Componentes/Carousel1/Carrusel1";

export default function Pagina() {
  const navigate = useNavigate();

  return (
    <div className="pagina">
      <div className="page-title">@NombredemiCuenta</div>
      <p className="helper-text">Obras más destacadas de la semana</p>

      <div className="card">
        <Carrusel1 />
        <div className="inline-links">
          <Link className="inline-link" to="/foro">
            Saber Más
          </Link>
          <Link className="inline-link" to="/foro">
            Comentar
          </Link>
          <Link className="inline-link" to="/perfil-artista">
            Colaborar
          </Link>
        </div>
      </div>

      <Link className="link" to="/perfil-artista">
        Más del artista
      </Link>

      <div className="spacer"></div>
      <div className="spacer"></div>

      <div className="scroll-bar-down card">
        <div className="header">
          <button className="btn mint" onClick={() => navigate("/mi-perfil")}>
            <i className="fa-solid fa-plus"></i> Subir mi Obra
          </button>
        </div>

        <div className="last-posts">
          <div className="meta">
            <div className="thumb eye"></div>
            <div className="desc helper-text">Publicación 1</div>
          </div>

          <div className="meta">
            <div className="thumb face"></div>
            <div className="desc helper-text">Publicación 2</div>
          </div>

          <div className="meta">
            <div className="thumb eye"></div>
            <div className="desc helper-text">Publicación 1</div>
          </div>

          <div className="meta">
            <div className="thumb face"></div>
            <div className="desc helper-text">Publicación 2</div>
          </div>
        </div>

        <div className="bar-down">
          <Link to="/" className="deslizar">
            <i className="fa-solid fa-chevron-down"></i> 
          </Link>
        </div>
      </div>
    </div>
  );
}
