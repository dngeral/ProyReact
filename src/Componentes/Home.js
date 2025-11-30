import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import "../App.css";
import IniciarSesion from "./IniciarSesion";

export default function Home (){

  /* para los formularios */
  /* const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);
  const abrirLogin = () => {
    setVisibleLogin(true);
    setVisibleRegister(false);
  };
  const abrirRegister = () => {
    setVisibleRegister(true);
    setVisibleLogin(false); 
  };
  const cerrarLogin = () => setVisibleLogin(false);
  const cerrarRegister = () => setVisibleRegister(false); */

  return(
    <>
      <IniciarSesion/>
    </>
  )
}

/*  <div className="App">
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
    </div> */