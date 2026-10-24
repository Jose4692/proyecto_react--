
import React from "react";

function Titulos() {
  const estudios = [
    {
      id: 1,
      titulo: "Tecnología en Desarrollo de Software",
      institucion: "Instituto Tecnológico del Norte",
      anio: "2024",
      color: "primary",
      descripcion:
        "Fundamentos de programación, bases de datos y desarrollo de aplicaciones."
    },
    {
      id: 2,
      titulo: "Curso de Desarrollo Frontend",
      institucion: "Academia Digital Creativa",
      anio: "2023",
      color: "success",
      descripcion:
        "Creación de interfaces web con HTML, CSS y JavaScript."
    },
    {
      id: 3,
      titulo: "Certificación en React y Bootstrap",
      institucion: "Plataforma Aprende Código",
      anio: "2025",
      color: "danger",
      descripcion:
        "Desarrollo de interfaces reutilizables y diseños adaptables."
    },
    {
      id: 4,
      titulo: "Diseño de Interfaces UI/UX",
      institucion: "Centro de Formación Digital",
      anio: "2025",
      color: "warning",
      descripcion:
        "Principios de experiencia de usuario, prototipado y accesibilidad."
    }
  ];
//
  return (
    <section
      id="titulos"
      className="container-fluid w-100 px-4 px-lg-5 py-5 bg-light"
    >
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
            <div>
              <p className="text-primary fw-bold mb-1">
                MI PREPARACIÓN
              </p>
              <h2 className="display-6 fw-bold mb-0">
                Títulos y formación
              </h2>
              <p className="text-secondary mt-2">
                Mi recorrido académico y profesional.
              </p>
            </div>

            <span className="badge text-bg-primary fs-6 p-3">
              4 formaciones
            </span>
          </div>
        </div>

        {estudios.map((estudio) => (
          <div className="col-12 mb-3" key={estudio.id}>
            <article
              className={`card border-start border-5 border-${estudio.color} shadow-sm`}
            >
              <div className="card-body p-4">
                <div className="row align-items-center g-3">
                  <div className="col-auto">
                    <div
                      className={`bg-${estudio.color} bg-opacity-10 rounded-3 p-3`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill={`var(--bs-${estudio.color})`}
                        viewBox="0 0 16 16"
                        role="img"
                        aria-label="Icono de formación"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 0 .906L3 7.71V11c0 .258.127.5.338.646C4.48 12.438 6.13 13 8 13s3.52-.562 4.662-1.354A.78.78 0 0 0 13 11V7.71l1.5-.7V10a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.289-.453l-7-3.5ZM12 7.244v3.5C11.015 11.37 9.593 12 8 12s-3.015-.63-4-1.256v-3.5l3.789 1.768a.5.5 0 0 0 .422 0L12 7.244Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="col">
                    <span
                      className={`badge text-bg-${estudio.color} mb-2`}
                    >
                      {estudio.anio}
                    </span>

                    <h3 className="h5 fw-bold mb-1">
                      {estudio.titulo}
                    </h3>

                    <p className="text-primary mb-2">
                      {estudio.institucion}
                    </p>

                    <p className="text-secondary mb-0">
                      {estudio.descripcion}
                    </p>
                  </div>

                  <div className="col-12 col-md-auto">
                    <span className="badge text-bg-light border text-dark p-2">
                      Formación académica
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Titulos;
