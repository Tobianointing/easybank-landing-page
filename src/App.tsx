import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Articles from "./components/Articles/Articles"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Articles/>
      <Footer/>
    </div>
  )
}

export default App
