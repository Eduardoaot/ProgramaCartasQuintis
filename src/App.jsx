import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QueEs from './components/QueEs.jsx'
import Personajes from './components/Personajes.jsx'
import Antecedentes from './components/Antecedentes.jsx'
import JuegoCartas from './components/JuegoCartas.jsx'
import Tutorial from './components/Tutorial.jsx'
import Expansiones from './components/Expansiones.jsx'
import Rarezas from './components/Rarezas.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <QueEs />
        <Personajes />
        <Antecedentes />
        <JuegoCartas />
        <Tutorial />
        <Expansiones />
        <Rarezas />
      </main>
      <Footer />
    </>
  )
}
