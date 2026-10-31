import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Estudios from './components/Estudios';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <SobreMi />
      <Estudios />
      <Habilidades />
      <Proyectos />
      <Experiencia />
      <Galeria />
      <Contacto />
    </>
  );
}

export default App;