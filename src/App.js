import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react";

/* imports */
import Inicio from "./Componentes/Home"
import { Login, Register } from "./Componentes/Forms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/log" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
