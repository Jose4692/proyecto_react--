const habilidades = [
  {
    nombre: "Java",
    icono: "bi-cup-hot-fill",
    nivel: "Medio",
    porcentaje: 60,
    categoria: "Programación"
  },
  {
    nombre: "HTML5",
    icono: "bi-filetype-html",
    nivel: "Medio",
    porcentaje: 60,
    categoria: "Desarrollo web"
  },
  {
    nombre: "CSS3",
    icono: "bi-filetype-css",
    nivel: "Medio",
    porcentaje: 60,
    categoria: "Desarrollo web"
  },
  {
    nombre: "JavaScript",
    icono: "bi-filetype-js",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Programación"
  },
  {
    nombre: "React",
    icono: "bi-code-slash",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Desarrollo web"
  },
  {
    nombre: "Bootstrap",
    icono: "bi-bootstrap-fill",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Desarrollo web"
  },
  {
    nombre: "Git y GitHub",
    icono: "bi-github",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Herramientas"
  },
  {
    nombre: "MySQL",
    icono: "bi-database-fill",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Bases de datos"
  },
  {
    nombre: "Python",
    icono: "bi-terminal-fill",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Programación"
  },
  {
    nombre: "C++",
    icono: "bi-code-square",
    nivel: "Básico",
    porcentaje: 30,
    categoria: "Programación"
  },
  {
    nombre: "Visual Studio Code",
    icono: "bi-code-square",
    nivel: "Medio",
    porcentaje: 60,
    categoria: "Herramientas"
  },
  {
    nombre: "NetBeans",
    icono: "bi-window",
    nivel: "Medio",
    porcentaje: 60,
    categoria: "Herramientas"
  }
];

function Habilidades() {

  return (
    <section id="habilidades" className="habilidades py-5">

      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">

          <span className="etiqueta">MIS CONOCIMIENTOS</span>

          <h2 className="titulo-seccion mt-3">
            Habilidades <span>tecnológicas</span>
          </h2>

          <p className="texto-seccion">
            Tecnologías y herramientas que conozco y utilizo
            durante mi formación académica.
          </p>

        </div>

        <div className="row g-4">

          {habilidades.map((habilidad, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={habilidad.nombre}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >

              <div className="tarjeta-habilidad">

                <div className="encabezado-habilidad">

                  <div className="icono-habilidad">
                    <i className={`bi ${habilidad.icono}`}></i>
                  </div>

                  <div>
                    <h5>{habilidad.nombre}</h5>
                    <span>{habilidad.categoria}</span>
                  </div>

                </div>

                <div className="d-flex justify-content-between mt-4 mb-2">

                  <span className="nivel-habilidad">
                    Nivel: {habilidad.nivel}
                  </span>

                  <span className="porcentaje-habilidad">
                    {habilidad.porcentaje}%
                  </span>

                </div>

                <div className="progress">

                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${habilidad.porcentaje}%` }}
                    aria-valuenow={habilidad.porcentaje}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-5" data-aos="fade-up">

          <div className="mensaje-aprendizaje">

            <i className="bi bi-lightbulb-fill"></i>

            <h4>Siempre aprendiendo</h4>

            <p>
              Actualmente estoy fortaleciendo mis conocimientos
              y adquiriendo nuevas habilidades para crecer
              académica y profesionalmente en el mundo tecnológico.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Habilidades;