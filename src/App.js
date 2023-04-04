import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
