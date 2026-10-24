
import React from "react";

function NavbarPerfil() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold" href="#inicio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="me-2"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2Z" />
            </svg>
            Mi Portafolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="menuPrincipal"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#titulos">Formación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="inicio" className="container-fluid w-100 px-4 px-lg-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop"
              alt="Fotografía de perfil profesional"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "260px",
                height: "260px",
                objectFit: "cover",
                border: "6px solid #cfe2ff"
              }}
            />

            <div className="mt-3">
              <span className="badge text-bg-success me-2">
                Disponible para trabajar
              </span>
              <span className="badge text-bg-warning">
                Perfil junior
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <p className="text-primary fw-bold mb-2">
              HOLA, SOY
            </p>

            <h1 className="display-4 fw-bold">
              Laura Martínez Gómez
            </h1>

            <h2 className="h3 text-secondary mb-3">
              Desarrolladora Web Junior
            </h2>

            <p className="lead">
              Me apasiona construir experiencias digitales
              modernas, accesibles y funcionales. Disfruto
              trabajar con React, JavaScript, Bootstrap y
              tecnologías web.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge text-bg-primary p-2">React</span>
              <span className="badge text-bg-success p-2">JavaScript</span>
              <span className="badge text-bg-danger p-2">HTML5</span>
              <span className="badge text-bg-warning p-2">CSS3</span>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-success btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="me-2"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4Z" />
                  <path d="M0 5.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.485 4.49a1 1 0 0 1-1.03 0L0 5.383Z" />
                </svg>
                Contactarme
              </a>

              <a href="#titulos" className="btn btn-outline-primary btn-lg">
                Ver formación
              </a>
            </div>

            <div className="mt-4 text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="me-2"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10Zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              Cúcuta, Colombia
            </div>
          </div>
        </div>    //
      </section>
    </>
  );
}

export default NavbarPerfil;
