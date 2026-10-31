import { useState } from 'react';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const [estado, setEstado] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });

    setEstado('');
  };

  const limpiarFormulario = () => {
    setFormulario({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    });

    setEstado('');
  };

  const enviarMensaje = (e) => {
    e.preventDefault();

    const asunto = encodeURIComponent(formulario.asunto);

    const contenido = encodeURIComponent(
      `Nombre: ${formulario.nombre}\n` +
      `Correo: ${formulario.correo}\n\n` +
      `Mensaje:\n${formulario.mensaje}`
    );

    const enlace = `mailto:josechinchilla1720@gmail.com?subject=${asunto}&body=${contenido}`;

    window.location.href = enlace;

    setEstado('Se ha preparado tu mensaje. Completa el envío desde tu aplicación de correo.');
  };

  return (
    <section id="contacto" className="contacto seccion">
      <div className="container">

        <div className="titulo-seccion" data-aos="fade-up">
          <span>Hablemos</span>
          <h2>Contacto</h2>
          <p>
            ¿Tienes alguna pregunta, propuesta o proyecto?
            Me gustaría conocerlo. ¡Escríbeme!
          </p>
        </div>

        <div className="row g-4">

          {/* INFORMACIÓN PERSONAL */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="informacion-contacto">
              <h3>Conectemos</h3>

              <p className="texto-contacto">
                Estoy abierto a conocer nuevas oportunidades,
                aprender y participar en proyectos interesantes.
              </p>

              <div className="dato-contacto">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h4>Correo electrónico</h4>
                  <a href="mailto:josechinchilla1720@gmail.com">
                    josechinchilla1720@gmail.com
                  </a>
                </div>
              </div>

              <div className="dato-contacto">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:3248426828">3248426828</a>
                </div>
              </div>

              <div className="dato-contacto">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h4>Ubicación</h4>
                  <p>Ocaña, Norte de Santander, Colombia</p>
                </div>
              </div>

              <h4 className="titulo-redes">Mis redes sociales</h4>

              <div className="redes-contacto">
                <a href="https://github.com/Jose4692"
                  target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>

                <a href="https://www.instagram.com/chinchillajosee"
                  target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="https://www.facebook.com/chinchillajosee"
                  target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="https://wa.me/qr/4TKQO5VV5GWDC1"
                  target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

              <a
                href="https://wa.me/qr/4TKQO5VV5GWDC1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp mt-4"
              >
                <i className="bi bi-whatsapp"></i> Contactarme por WhatsApp
              </a>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="formulario-contacto">

              <h3>Envíame un mensaje</h3>

              <p className="texto-contacto">
                Completa los siguientes campos para ponerte en contacto conmigo.
              </p>

              <form onSubmit={enviarMensaje}>

                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    minLength="3"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className="form-control"
                    placeholder="ejemplo@correo.com"
                    value={formulario.correo}
                    onChange={manejarCambio}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label">
                    Asunto
                  </label>

                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="form-control"
                    placeholder="Motivo del mensaje"
                    value={formulario.asunto}
                    onChange={manejarCambio}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows="5"
                    maxLength="1000"
                    placeholder="Escribe tu mensaje..."
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                    required
                  ></textarea>

                  <div className="contador-mensaje">
                    {formulario.mensaje.length}/1000 caracteres
                  </div>
                </div>

                {estado && (
                  <div className="alert alert-success" role="status">
                    <i className="bi bi-check-circle-fill"></i> {estado}
                  </div>
                )}

                <div className="botones-formulario">

                  <button type="submit" className="btn btn-contacto">
                    <i className="bi bi-send-fill"></i> Preparar mensaje
                  </button>

                  <button
                    type="button"
                    className="btn btn-limpiar"
                    onClick={limpiarFormulario}
                  >
                    <i className="bi bi-trash3"></i> Limpiar
                  </button>

                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto;