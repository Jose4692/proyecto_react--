import miFoto from "../assets/foto.png";

export default function Perfil() {
return ( <section id="inicio" className="container text-center py-5"> <img
     src={miFoto}
     alt="Foto personal de José Caleb"
     className="foto-perfil mb-3"
   />

  <h2>¡Hola! Soy José Caleb Chinchilla Alvarado</h2>

  <p className="lead">
    Soy estudiante de Ingeniería de Sistemas y me interesa
    aprender programación, desarrollo web y nuevas tecnologías.
  </p>

  <p>
    También disfruto la fotografía y me gusta capturar
    paisajes, animales y momentos especiales de la naturaleza.
    En este espacio comparto algunas de mis fotografías favoritas.
  </p>
</section>


);
}
