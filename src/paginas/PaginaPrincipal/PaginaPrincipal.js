import React from "react";
import "./PaginaPrincipal.css";
import { Link } from "react-router-dom";
import Buscador from "../../Componentes/Search/Buscador";
import Carrusel1 from "../../Componentes/Carousel1/Carrusel1";
import Carrusel2 from "../../Componentes/Carousel2/Carrusel2";

export default function PaginaPrincipal() {
  return (
    <div className="home">
      <div className="page-title">@NombredemiCuenta</div>

      <Buscador to="/galeria" />
      <p className="helper-text">Obras más destacadas de la semana</p>

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

      <div className="spacer"></div>

      <div className="link">
        <Link className="link" to="/perfil-artista">
          Más del artista
        </Link>
      </div>
      <div className="spacer"></div>
      <Carrusel2 />
      <div className="spacer"></div>

      <div className="scroll-bar-up">
        <Link to="/pagina" className="scroll-handle">
          <i className="fa-solid fa-chevron-up"></i> Pagina
        </Link>
      </div>
    </div>
  );
}
