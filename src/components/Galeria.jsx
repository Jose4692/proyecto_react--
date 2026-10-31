import paisaje1 from '../assets/paisaje1.jpeg';
import paisaje2 from '../assets/paisaje2.jpg';
import animal from '../assets/animal.jpg';
import manualidad from '../assets/manualidad.jpeg';

function Galeria() {
  const fotografias = [
    {
      imagen: paisaje1,
      titulo: 'Paisaje natural',
      categoria: 'Paisajes'
    },
    {
      imagen: paisaje2,
      titulo: 'Momentos de la naturaleza',
      categoria: 'Paisajes'
    },
    {
      imagen: animal,
      titulo: 'Vida animal',
      categoria: 'Animales'
    },
    {
      imagen: manualidad,
      titulo: 'Creaciones hechas a mano',
      categoria: 'Manualidades'
    }
  ];

  return (
    <section id="galeria" className="galeria seccion">
      <div className="container">
        <div className="titulo-seccion" data-aos="fade-up">
          <span>Mis fotografías</span>
          <h2>Galería personal</h2>
          <p>
            Un espacio donde comparto algunos paisajes, animales
            y creaciones que he fotografiado.
          </p>
        </div>

        <div className="row g-4">
          {fotografias.map((foto, index) => (
            <div
              className="col-sm-6 col-lg-3"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="tarjeta-galeria">
                <div className="contenedor-foto">
                  <img src={foto.imagen} alt={foto.titulo} />
                </div>

                <div className="informacion-foto">
                  <span>{foto.categoria}</span>
                  <h3>{foto.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;