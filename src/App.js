import { Routes, Route, Link, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();

  // Rutas donde NO quieres mostrar header/footer
  const hideLayout = ["/login", "/registro", "/iniciar-sesion"].includes(location.pathname);

  return (
    <div className="app">
      {!hideLayout && (
        <header className="topbar">
          <Link to="/" className="brand">ArtEgo</Link>
          <nav className="topnav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
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
      )}

      <main className="main">
        <Routes>
          {/* Login / Registro */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />

          {/* Páginas principales */}
          <Route path="/principal" element={<PaginaPrincipal />} />
          <Route path="/pagina" element={<Pagina />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeria/estilo" element={<Estilo />} />
          <Route path="/galeria/medio" element={<Medio />} />
          <Route path="/galeria/tema" element={<Tema />} />
          <Route path="/mi-perfil" element={<MiPerfil />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/perfil-artista" element={<PerfilArtista />} />
        </Routes>
      </main>

      {!hideLayout && (
        <footer className="footer">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
