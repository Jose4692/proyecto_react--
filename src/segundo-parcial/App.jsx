import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import SobreMi from './components/SobreMi';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

function App() {
  return (
    <>
      <Navbar />
      <Perfil />
      <SobreMi />
      <Formacion />
      <Habilidades />
      <Proyectos />
      <Experiencia />
      <Galeria />
      <Footer />
    </>
  );
}

export default App;