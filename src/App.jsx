import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
