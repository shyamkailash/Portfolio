import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Timeline from "./components/timeline/Timeline";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NeuralBackground from "./components/background/NeuralBackground";


function App() {
  return (
    <div className="app">
      <NeuralBackground />
      <div className="portfolio-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
