function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi py-5">

      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <span className="etiqueta">CONÓCEME</span>
          <h2 className="titulo-seccion mt-3">
            Sobre <span>mí</span>
          </h2>
          <p className="texto-seccion">
            Un poco sobre mi personalidad, mis intereses y mis objetivos.
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-7" data-aos="fade-right">

            <h3 className="mb-4">
              ¡Hola! Soy José Caleb Chinchilla Alvarado.
            </h3>

            <p>
              Soy estudiante de Ingeniería de Sistemas en la
              Universidad Francisco de Paula Santander Ocaña.
              Me considero una persona creativa, responsable,
              organizada y con muchas ganas de aprender.
            </p>

            <p>
              Tengo interés en la programación, el desarrollo
              web y las nuevas tecnologías. Actualmente estoy
              fortaleciendo mis conocimientos en Java, HTML,
              CSS y React.
            </p>

            <p>
              También disfruto realizar actividades creativas
              como la fotografía, las manualidades, la decoración
              y los trabajos independientes. Estas experiencias
              me han permitido desarrollar habilidades como la
              creatividad, la paciencia y la dedicación.
            </p>

            <h4 className="mt-4 mb-3">Mi objetivo profesional</h4>

            <p>
              Mi objetivo es fortalecer continuamente mis
              conocimientos y habilidades para prepararme
              en el ámbito laboral. Busco aprovechar mis bases
              académicas, mi creatividad y mi capacidad de
              aprendizaje para desarrollar soluciones y realizar
              trabajos de alta calidad.
            </p>

          </div>

          <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">

            <div className="tarjeta-perfil">

              <div className="dato-perfil">
                <i className="bi bi-person-fill"></i>
                <div>
                  <h6>Nombre</h6>
                  <p>José Caleb Chinchilla Alvarado</p>
                </div>
              </div>

              <div className="dato-perfil">
                <i className="bi bi-calendar-event"></i>
                <div>
                  <h6>Edad</h6>
                  <p>19 años</p>
                </div>
              </div>

              <div className="dato-perfil">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h6>Ubicación</h6>
                  <p>Ocaña, Norte de Santander</p>
                </div>
              </div>

              <div className="dato-perfil">
                <i className="bi bi-mortarboard-fill"></i>
                <div>
                  <h6>Profesión</h6>
                  <p>Estudiante de Ingeniería de Sistemas</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="row mt-5 g-4">

          <div className="col-md-4" data-aos="zoom-in">
            <div className="tarjeta-cualidad">
              <i className="bi bi-lightbulb-fill"></i>
              <h5>Creatividad</h5>
              <p>
                Me gusta desarrollar ideas, crear cosas nuevas
                y encontrar diferentes formas de solucionar problemas.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="tarjeta-cualidad">
              <i className="bi bi-book-half"></i>
              <h5>Aprendizaje continuo</h5>
              <p>
                Disfruto aprender nuevas habilidades y fortalecer
                mis conocimientos de manera autónoma.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="tarjeta-cualidad">
              <i className="bi bi-people-fill"></i>
              <h5>Responsabilidad</h5>
              <p>
                Me esfuerzo por cumplir mis compromisos,
                trabajar con dedicación y mantener una buena actitud.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SobreMi;