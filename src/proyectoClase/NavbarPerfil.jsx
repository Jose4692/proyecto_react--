
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          Mi Hoja de Vida
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiencia">
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>

          <a
            href="/hoja-de-vida.pdf"
            className="btn btn-light ms-lg-3"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
