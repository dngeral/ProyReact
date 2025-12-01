import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wave">
      <div className="wave"></div>
      <div>
       Encuentranos en:
      </div>
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
          
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>


      <div className="copyright">
        ©2025 | Todos los derechos reservados
      </div>
    </footer>
  );
}
