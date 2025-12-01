import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import IniciarSesion from "./Componentes/IniciarSesion";
import Registro from "./Componentes/Register";
import Login from "./Componentes/Login";
import PaginaPrincipal from "./paginas/PaginaPrincipal/PaginaPrincipal";
import Pagina from "./paginas/Pagina/Pagina";
import Galeria from "./paginas/Galeria/Galeria";
import Estilo from "./paginas/Galeria/Estilo";
import Medio from "./paginas/Galeria/Medio";
import Tema from "./paginas/Galeria/Tema";
import MiPerfil from "./paginas/MiPerfil/MiPerfil";
import Foro from "./paginas/Foro/Foro";
import PerfilArtista from "./paginas/PerfilArtista/PerfilArtista";
import Footer from "./Componentes/Navegacion/Footer";
import "./Componentes/Navegacion/Footer.css";

function LayoutPrincipal() {
  const location = useLocation();
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/p" className="brand">ArtEgo</Link>
        <nav className="topnav">
          <Link to="/p" className={location.pathname === "/p" ? "active" : ""}>
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link to="/galeria" className={location.pathname.startsWith("/galeria") ? "active" : ""}>
            <i className="fa-solid fa-images"></i>
          </Link>
          <Link to="/foro" className={location.pathname === "/foro" ? "active" : ""}>
            <i className="fa-solid fa-comments"></i>
          </Link>
          <Link to="/mi-perfil" className={location.pathname === "/mi-perfil" ? "active" : ""}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </nav>
      </header>
      <main className="main">
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Rutas de autenticación SIN header/footer */}
      <Route path="/" element={<IniciarSesion />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/ayuda" element={<div>Ayuda</div>} />

      {/* Rutas principales CON header/footer */}
      <Route element={<LayoutPrincipal />}>
        <Route path="/p" element={<PaginaPrincipal />} />
        <Route path="/pagina" element={<Pagina />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/estilo" element={<Estilo />} />
        <Route path="/galeria/medio" element={<Medio />} />
        <Route path="/galeria/tema" element={<Tema />} />
        <Route path="/mi-perfil" element={<MiPerfil />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/perfil-artista" element={<PerfilArtista />} />
      </Route>
    </Routes>
  );
}

export default App;
