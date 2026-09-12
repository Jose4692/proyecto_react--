import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>HOLA MUNDO</h1>
          <p>
            ESTOY APRENDIENDO REACT
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onMouseEnter={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
