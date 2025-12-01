export function Login({ visible, cerrarModal, abrirRegister }) {
  if (!visible) return null;

  return (
    <div
      id="modalLogin"
      className="modal"
      /* onClick={(e) => {
        if (e.target.id === 'modalLogin') cerrarModal();
      }} */
    >
      <span className="cerrar" onClick={cerrarModal}>
        &times;
      </span>
      <form>
        <div className="titulo">
          <h2>Iniciar Sesión</h2>
        </div>

        <div>
          <label>Usuario</label>
          <input
            type="text"
            className="txtinput"
            placeholder="Ingrese usuario"
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            className="txtinput"
            placeholder="Ingrese contraseña"
          />
        </div>

        <input className="btn btnenviar" value="Iniciar" type="submit" />
        <span>
          ¿No tienes cuenta? <a onClick={abrirRegister}>Crear cuenta</a>
        </span>

        <div className="optional-icons">
          <label>Iniciar con:</label>
          <div className="icons">
            <div>
              <i className="fa-brands fa-google"></i>
            </div>
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Register({ visible, cerrarModal, abrirLogin }) {
  if (!visible) return null;
  return (
    <div id="modalRegistro" className="modal">
      <span className="cerrar" onClick={cerrarModal}>
        &times;
      </span>
      <form>
        <div className="titulo">
          <h2>Registro</h2>
        </div>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            className="name txtinput"
            placeholder="Ingrese usuario"
          ></input>
        </div>

        <div>
          <label>Correo Email</label>
          <input
            type="email"
            className="txtinput"
            placeholder="Ingrese su correo"
          ></input>
        </div>

        <div>
          <label>Contrasena</label>
          <input
            type="password"
            className="txtinput"
            placeholder="Ingrese contrasena"
          ></input>
        </div>
        <div>
          <label>Vuelva a ingresar la contrasena</label>
          <input
            type="password"
            className="txtinput"
            placeholder="Ingrese contrasena"
          ></input>
        </div>

        {/* <input className='btn btnCrear' value="Crear mi cuenta" type='submit' ></input> */}
        <button className="btn btnCrear">Crear mi cuenta</button>
        <span>
          Ya tienes cuenta? <a onClick={abrirLogin}>Inicia sesion</a>
        </span>
      </form>
    </div>
  );
}
