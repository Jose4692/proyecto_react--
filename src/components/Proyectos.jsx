function Proyectos() {
  return (
    <section id="proyectos" className="proyectos py-5">

      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">

          <span className="etiqueta">MIS TRABAJOS</span>

          <h2 className="titulo-seccion mt-3">
            Mis <span>proyectos</span>
          </h2>

          <p className="texto-seccion">
            Algunos de los proyectos que he desarrollado
            durante mi formación académica.
          </p>

        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8" data-aos="zoom-in">

            <div className="tarjeta-proyecto">

              <div className="imagen-proyecto">

                <div className="proyecto-placeholder">
                  <i className="bi bi-heart-pulse-fill"></i>
                  <h3>NUTRIVIDAS</h3>
                  <p>Alimentación saludable y bienestar</p>
                </div>

              </div>

              <div className="contenido-proyecto">

                <span className="categoria-proyecto">
                  PROYECTO UNIVERSITARIO
                </span>

                <h3>Nutrividas</h3>

                <p>
                  Nutrividas es un proyecto enfocado en la
                  alimentación saludable y el bienestar.
                  Busca ofrecer información sobre productos
                  naturales, alimentación equilibrada y
                  alternativas que promuevan hábitos saludables.
                </p>

                <h5>Objetivo del proyecto</h5>

                <p>
                  Desarrollar una plataforma web que permita
                  consultar productos saludables y facilite
                  el acceso a información sobre nutrición,
                  bienestar y emprendimientos relacionados
                  con productos naturales.
                </p>

                <h5>Tecnologías y herramientas</h5>

                <div className="tecnologias-proyecto">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Diseño web</span>
                  <span>Figma</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Proyectos;