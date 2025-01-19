import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="home" className="snap-start"><Home /></section>
        <section id="about" className="snap-start"><About /></section>
        <section id="projects" className="snap-start"><Projects /></section>
        <section id="certifications" className="snap-start"><Certifications /></section>
        <section id="contact" className="snap-start"><Contact /></section>
      </div>
    </div>
  );
}

export default App;