import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import QueEs from './components/QueEs.jsx'
import Personajes from './components/Personajes.jsx'
import Antecedentes from './components/Antecedentes.jsx'
import JuegoCartas from './components/JuegoCartas.jsx'
import Tutorial from './components/Tutorial.jsx'
import Agenda from './components/Agenda.jsx'
import AgendaFlotante from './components/AgendaFlotante.jsx'
import Expansiones from './components/Expansiones.jsx'
import Rarezas from './components/Rarezas.jsx'
import HiloPalabras from './components/HiloPalabras.jsx'
import Footer from './components/Footer.jsx'
import { AgendaProvider } from './context/AgendaContext.jsx'

export default function App() {
  return (
    <AgendaProvider>
      <Navbar />
      <Hero />
      <main>
        <QueEs />
        <Personajes />
        <Antecedentes />
        <JuegoCartas />
        <Tutorial />
        <Agenda />
        <Expansiones />
        <Rarezas />
        <HiloPalabras />
      </main>
      <Footer />
      <AgendaFlotante />
    </AgendaProvider>
  )
}
