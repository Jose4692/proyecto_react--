import './App.css'
import miFoto from './assets/foto.png'
function App() {
  return (
    <main className="app">

      <h1>Mi espacio de tecnología</h1>

      <img src={miFoto} alt="Foto" className="foto-perfil" />

      <p className="presentacion">
        Hola, soy Jose Caleb Chinchilla Alvarado,
        estudiante de Ingeniería de Sistemas.
      </p>

      <h2>Mi interés por la programación</h2>

      <p>
        Me interesa aprender programación, desarrollo web
        y nuevas tecnologías para mejorar mis conocimientos.
      </p>

      <h2>¿Qué estoy aprendiendo?</h2>

      <p>
        Actualmente estoy fortaleciendo mis conocimientos
        en Java, HTML, CSS y React.
      </p>

    </main>
  )
}

export default App