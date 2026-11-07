import { useState, useEffect } from 'react';

function Navbar() {
const [oscuro, setOscuro] = useState(false);

useEffect(() => {
document.body.classList.toggle('modo-oscuro', oscuro);
}, [oscuro]);

const cambiarTema = () => {
setOscuro(!oscuro);
};

return ( <nav className="navbar navbar-expand-lg navbar-dark navbar-personalizada sticky-top"> <div className="container">

    <a className="navbar-brand fw-bold" href="#inicio">
      JC<span className="text-info">.</span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menuPrincipal"
      aria-controls="menuPrincipal"
      aria-expanded="false"
      aria-label="Abrir menú"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="menuPrincipal">

      <ul className="navbar-nav ms-auto align-items-lg-center">

        <li className="nav-item">
          <a className="nav-link" href="#inicio">Inicio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#sobre-mi">Sobre mí</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#estudios">Estudios</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#habilidades">Habilidades</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#proyectos">Proyectos</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#experiencia">Experiencia</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#galeria">Galería</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contacto</a>
        </li>

        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
          <button
            className="btn btn-outline-info rounded-pill"
            onClick={cambiarTema}
            aria-label="Cambiar tema"
          >
            <i className={`bi ${oscuro ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
            {' '}
            {oscuro ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </li>

      </ul>

    </div>
  </div>
</nav>

);
}

export default Navbar;
