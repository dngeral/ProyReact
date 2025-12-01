import React from "react";
import "./Foro.css";
import { Link } from "react-router-dom";

export default function Foro() {
  return (
    <div className="foro">
      <button className="btn-volver" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h2>FORO de Retroalimentación</h2>
      <div className="grid-publicaciones">
        <div className="publicacion">
          <h3 className="titulo-obra">Nombre de la Obra</h3>

          <div className="contenido-obra">
            <img
              src="https://picsum.photos/200/140"
              alt="obra"
              className="imagen-obra"
            />

            <div className="descripcion-obra">
              <p>Descripción...</p>
              <p className="puntuacion">Puntuación: ★★★★★</p>
              <p className="autor">De: Lauren C.</p>
              <button className="btn-comentar">
                <i className="fa-regular fa-comment"></i> Comentar
              </button>
            </div>
          </div>
        </div>
        <div className="publicacion">
          <h3 className="titulo-obra">Nombre de la Obra</h3>

          <div className="contenido-obra">
            <img
              src="https://picsum.photos/200/140"
              alt="obra"
              className="imagen-obra"
            />

            <div className="descripcion-obra">
              <p>Descripción...</p>
              <p className="puntuacion">Puntuación: ★★★★★</p>
              <p className="autor">De: Lauren C.</p>
              <button className="btn-comentar">
                <i className="fa-regular fa-comment"></i> Comentar
              </button>
            </div>
          </div>
        </div>
        <div className="publicacion">
          <h3 className="titulo-obra">Nombre de la Obra</h3>

          <div className="contenido-obra">
            <img
              src="https://picsum.photos/200/140"
              alt="obra"
              className="imagen-obra"
            />

            <div className="descripcion-obra">
              <p>Descripción...</p>
              <p className="puntuacion">Puntuación: ★★★★★</p>
              <p className="autor">De: Lauren C.</p>
              <button className="btn-comentar">
                <i className="fa-regular fa-comment"></i> Comentar
              </button>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}
