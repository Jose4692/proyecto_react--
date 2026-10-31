import perfil from '../assets/perfil.png';

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7 text-center text-lg-start">

            <span className="etiqueta">
              BIENVENIDO A MI PORTAFOLIO
            </span>

            <h1 className="titulo-inicio mt-4">
              Hola, soy <br />
              <span>José Caleb</span>
              <br />
              Chinchilla Alvarado
            </h1>

            <h3 className="subtitulo-inicio">
              Estudiante de Ingeniería de Sistemas
            </h3>

            <p className="descripcion-inicio">
              Tengo 19 años y soy una persona creativa,
              responsable y autodidacta. Me apasiona la
              tecnología, la programación, el desarrollo
              web y aprender nuevas habilidades.
            </p>

            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">

              <a
                href="https://wa.me/573248426828"
                target="_blank"
                rel="noreferrer"
                className="btn btn-info btn-lg rounded-pill"
              >
                <i className="bi bi-whatsapp"></i>
                Contactarme
              </a>

              <a
                href="https://github.com/Jose4692"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-lg rounded-pill"
              >
                <i className="bi bi-github"></i>
                Mi GitHub
              </a>

            </div>

            <div className="redes-inicio mt-4">

              <a href="https://www.instagram.com/chinchillajosee"
                target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="https://www.facebook.com/chinchillajosee"
                target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="mailto:josechinchilla1720@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>

            </div>

          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <div className="contenedor-foto">
              <img
                src={perfil}
                alt="Fotografía de José Caleb Chinchilla"
                className="foto-inicio"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Inicio;