import "./App.css";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particle from "./utils/Particle";

function App() {
  return (
    <div className="App font-inter">
      <Particle />
      {/* <Navbar /> */}
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
