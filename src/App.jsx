import './styles/App.css'
import Navbar from './components/Navbar'
import About from './components/Sections/About'
import Functions from './components/Sections/Functions'
import Home from './components/Sections/Home'
import Footer from './components/Footer'
import Download from './components/Sections/Download'

function App() {
  return (
    <div className='overflow-hidden' id='home'>
      <Navbar />
      <Home />
      <About />
      <Functions />
      <Download />
      <Footer />
    </div>
  )
}

export default App
