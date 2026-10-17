import Header from "./Header";
import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";
import DatoCurioso from "./DatoCurioso";
import Footer from "./Footer";

export default function Playground() {
return (
<> <Header />


  <main>
    <Perfil />

    <section
      id="fotografias"
      className="container py-4"
    >
      <h2 className="text-center mb-4">
        Mis fotografías
      </h2>

      <div className="row">
        <Tarjeta
          imagen="/fotos/paisaje1.jpg"
          titulo="Paisajes naturales"
          descripcion="Fotografías de lugares naturales que transmiten tranquilidad y belleza."
        />

        <Tarjeta
          imagen="/fotos/animal1.jpg"
          titulo="Animales"
          descripcion="Capturando la belleza y los detalles del mundo animal."
        />

        <Tarjeta
          imagen="/fotos/paisaje2.jpeg"
          titulo="Momentos especiales"
          descripcion="Recuerdos de mis experiencias explorando y fotografiando la naturaleza."
        />
      </div>
    </section>

    <DatoCurioso />
  </main>

  <Footer />
</>


);
}
