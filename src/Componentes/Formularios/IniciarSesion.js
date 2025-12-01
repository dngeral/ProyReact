import { Link } from "react-router-dom";
import "./Formularios.css"
/* import Home from "./Home" */
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
            <img src="https://picsum.photos/id/1015/800/450" alt="Ejemplo" />
          </div>


          <div className="entradas">
            <Link to="/p" className="btng">Iniciar Sesion</Link>
            {/* <Link to="/p" className="btn">Iniciar Sesion</Link> */}
            {/* <button onClick={onLogin} className="btn">Iniciar Sesion</button> */}
            <a>No tienes cuenta? <Link to="/registro" className="enlace">Crear mi Cuenta</Link></a>




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
