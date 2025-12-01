import React from "react";
import "./PerfilArtista.css";
import { Link } from "react-router-dom";

export default function PerfilArtista() {
  return (
    <div className="perfil-artista">
      <div className="header">
        <Link to="/" className="back">
          <i className="fa-solid fa-arrow-left"></i> Volver atrás
        </Link>
      </div>

      <div className="card">
        <div className="head">
          <div className="avatar"></div>
          <div className="names">
            <div className="name">@NombredeemiCuenta</div>
            <div className="role">Artista Digital</div>
            <div className="actions">
              <button className="btn mint">
                <i className="fa-solid fa-plus"></i> Seguir
              </button>
              <button className="btn ghost">
                <i className="fa-solid fa-envelope"></i> Mensaje
              </button>
            </div>
          </div>
        </div>
        <p className="helper-text">
          Hola amig@s, soy una creadora de arte digital. Me encanta el arte con
          estilo surrealista.
        </p>

        <div className="row">
          <div className="col">
            <div className="section-title">Colaboraciones y Desafíos...</div>
            <div className="card inner"></div>
          </div>
          <div className="col">
            <div className="section-title">Seguidores</div>
            <div className="card inner"></div>
          </div>
        </div>

        <div className="section-title">Galeria</div>
        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="tile"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
