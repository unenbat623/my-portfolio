import Navbar from "./components/Navbar";
import { LanguageProvider } from "./utils/LanguageContext";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="bg-bg w-full overflow-x-hidden relative">
          <StartCanvas />
          <Navbar />

          <div>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
