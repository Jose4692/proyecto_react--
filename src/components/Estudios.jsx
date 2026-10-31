function Estudios() {
  return (
    <section id="estudios" className="estudios py-5">

      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">

          <span className="etiqueta">MI FORMACIÓN</span>

          <h2 className="titulo-seccion mt-3">
            Formación <span>académica</span>
          </h2>

          <p className="texto-seccion">
            Mi recorrido educativo y preparación profesional.
          </p>

        </div>

        <div className="timeline">

          {/* UNIVERSIDAD */}

          <div className="timeline-item" data-aos="fade-right">

            <div className="timeline-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>

            <div className="timeline-card">

              <span className="periodo-estudio">
                2025 - Actualidad
              </span>

              <h3>Ingeniería de Sistemas</h3>

              <h5>
                Universidad Francisco de Paula Santander Ocaña
              </h5>

              <p>
                Actualmente curso el cuarto semestre de Ingeniería
                de Sistemas, fortaleciendo mis conocimientos en
                programación, desarrollo de software y tecnologías
                de la información.
              </p>

              <div className="etiquetas-estudio">
                <span>Universitario</span>
                <span>Cuarto semestre</span>
                <span>En curso</span>
              </div>

            </div>

          </div>

          {/* BACHILLERATO */}

          <div className="timeline-item" data-aos="fade-left">

            <div className="timeline-icon">
              <i className="bi bi-book-fill"></i>
            </div>

            <div className="timeline-card">

              <span className="periodo-estudio">
                2024
              </span>

              <h3>Bachiller académico</h3>

              <h5>
                Institución Educativa Enrique Pardo Farelo
              </h5>

              <p>
                Culminé mis estudios de educación media,
                adquiriendo conocimientos y habilidades
                fundamentales para continuar mi formación
                académica y personal.
              </p>

              <div className="etiquetas-estudio">
                <span>Educación media</span>
                <span>Finalizado</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Estudios;