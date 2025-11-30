import {Link} from "react-router-dom";
export default function IniciarSesion() {
  return (
  <div className="Log">
    <div className="IniciarSesion">
      <div className="titulos">
        <p>Bienvenid@ a</p>
        <h1>ArtEgo</h1>
        <span>Crea y comparte</span>
      </div>
      <div>
        <div className="imagen">
          {/* imagen */}
        </div>
        
        <div className="entradas">
          <button className="btn">Iniciar Sesion</button>
          <a>No tienes cuenta? <Link to="/reg" className="enlace">Crear mi Cuenta</Link></a>
        </div>
        <div className="figura">
          <div className="cabeza">{/* circulo */}</div>
          <div className="cuerpo">{/* cuerpo */}</div>
        </div>

      </div>
    </div>
  </div>
  );
}
