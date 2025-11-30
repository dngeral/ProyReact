import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

/* imports */
import Inicio from "./Componentes/Home";
/* import { Login, Register } from "./Componentes/Forms"; */
import IniciarSesion from "./Componentes/IniciarSesion"
import Registro from "./Componentes/Register"
import Login from "./Componentes/Login"

/* Todos tus enlaces deberan trabajarse en el archivo "Home.js" */
/* Aqui solo coloca los imports y los routes */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/iniciar" element={<IniciarSesion />} />
        <Route path="/reg" element={<Registro />} />
        <Route path="/log" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
