import "./App.css";
import { useState } from "react";
import { Login, Register } from "./Componentes/Forms";

function App() {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);

  const abrirLogin = () => {
    setVisibleLogin(true);
    setVisibleRegister(false); // aseguramos que se cierre el registro
  };

  const abrirRegister = () => {
    setVisibleRegister(true);
    setVisibleLogin(false); // aseguramos que se cierre el login
  };

  const cerrarLogin = () => setVisibleLogin(false);
  const cerrarRegister = () => setVisibleRegister(false);

  return (
    <div className="App">
      {/* <button onClick={ mostrarF }>Iniciar sesion</button>   */}
      <button onClick={abrirLogin}>Abrir Login</button>
      <button onClick={abrirRegister}>Abrir Registro</button>

      <Login
        visible={visibleLogin}
        cerrarModal={cerrarLogin}
        abrirRegister={abrirRegister}
      />
      <Register
        visible={visibleRegister}
        cerrarModal={cerrarRegister}
        abrirLogin={abrirLogin}
      />
    </div>
  );
}

export default App;
