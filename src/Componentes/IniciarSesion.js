
export default function IniciarSesion() {
  return (<>
    <div className="IniciarSesion">
      <p>Bienvenid@ a</p>
      <div>
        <h1>ArtEgo</h1>
        <p>Crea y comparte</p>
      </div>
      <div>
        <div>
          {/* imagen */}
        </div>
        <div className="figura">
          <div className="cabeza">{/* circulo */}</div>
          <div className="cuerpo">{/* cuerpo */}</div>
        </div>
        <div className="entradas">
          <button className="btn">Iniciar Sesion</button>
          <a>No tienes cuenta? Crear mi Cuenta</a>
        </div>

      </div>
    </div>
  </>
  );
}
