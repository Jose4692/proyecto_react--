
import React from "react";
import NavbarPerfil from "./proyectoClase/NavbarPerfil";
import Titulos from "./proyectoClase/Titulos";
import Footer from "./proyectoClase/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="container-fluid p-0">
      <NavbarPerfil />
      <Titulos />
      <Footer />
    </div>
  );
}

export default App;
