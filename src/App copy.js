import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
/* import { BrowserRouter, Route, Routes } from "react-router-dom";
 */import { useState } from "react";

/* imports */

/* import { Login, Register } from "./Componentes/Forms"; */
import IniciarSesion from "./Componentes/IniciarSesion"
import Registro from "./Componentes/Register";
import Login from "./Componentes/Login";
import PaginaPrincipal from "./paginas/PaginaPrincipal/PaginaPrincipal";


import Footer from "./Componentes/Navegacion/Footer";
import "./Componentes/Navegacion/Footer.css";
import Home from "./Inicio";


function App() {
  const location = useLocation();
  return (
    <div className="">
      <Routes>
        <Route path="/d" element={<IniciarSesion/>} />
        <Route path="/reg" element={<Registro/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
