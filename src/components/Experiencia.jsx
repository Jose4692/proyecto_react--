function Experiencia() {
  const experiencias = [
    {
      icono: 'bi-bricks',
      cargo: 'Auxiliar de albañilería',
      tiempo: '9 meses',
      descripcion:
        'Apoyo en actividades de construcción, preparación de materiales y organización del área de trabajo.'
    },
    {
      icono: 'bi-cup-hot',
      cargo: 'Apoyo en restaurante',
      tiempo: '9 meses',
      descripcion:
        'Colaboración en las actividades del restaurante, atención al cliente y organización del espacio de trabajo.'
    },
    {
      icono: 'bi-scissors',
      cargo: 'Barbería independiente',
      tiempo: '5 meses',
      descripcion:
        'Realización de cortes de cabello y atención personalizada a clientes.'
    },
    {
      icono: 'bi-palette',
      cargo: 'Manualidades y decoraciones',
      tiempo: '3 meses',
      descripcion:
        'Elaboración de flores con limpiapipas y detalles personalizados, desarrollando creatividad y habilidades manuales.'
    }
  ];

  return (
    <section id="experiencia" className="experiencia seccion">
      <div className="container">
        <div className="titulo-seccion" data-aos="fade-up">
          <span>Mi trayectoria</span>
          <h2>Experiencia laboral</h2>
          <p>
            Algunas de las actividades y trabajos que me han permitido
            desarrollar habilidades y adquirir experiencia.
          </p>
        </div>

        <div className="row g-4">
          {experiencias.map((experiencia, index) => (
            <div
              className="col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="tarjeta-experiencia">
                <div className="icono-experiencia">
                  <i className={`bi ${experiencia.icono}`}></i>
                </div>

                <div>
                  <h3>{experiencia.cargo}</h3>
                  <span className="tiempo-experiencia">
                    {experiencia.tiempo}
                  </span>
                  <p>{experiencia.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;