
import React, { useState } from "react";

function Footer() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <footer
      id="contacto"
      className="container-fluid bg-dark text-white p-4 p-md-5"
    >
      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <span className="badge text-bg-warning mb-3">
            CONTACTO
          </span>

          <h2 className="fw-bold">¡Hablemos!</h2>

          <p className="text-light">
            Estoy abierto a nuevas oportunidades y proyectos.
          </p>

          <p>
            <span className="text-info">Correo:</span>{" "}
            laura.martinez@example.com
          </p>

          <p>
            <span className="text-info">Ubicación:</span>{" "}
            Cúcuta, Colombia
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light me-2"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light"
          >
            LinkedIn
          </a>
        </div>

        <div className="col-12 col-lg-7">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="card-title text-dark mb-4">
                Envíame un mensaje
              </h3>

              {enviado && (
                <div className="alert alert-success">
                  ¡Formulario completado correctamente!
                </div>
              )}

              <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>

                  <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>

                  <input
                    id="correo"
                    className="form-control"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    className="form-control"
                    rows="4"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>//

      <hr className="border-secondary my-4" />

      <div className="row">
        <div className="col-12 text-center">
          <p className="mb-0">
            © 2026 Laura Martínez Gómez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}    

export default Footer;
