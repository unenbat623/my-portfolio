import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./utils/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";

// AGGRESSIVE CODE SPLITTING: Only Hero and Navbar load synchronously
const StarCanvas = lazy(() => import("./components/canvas/Stars"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="bg-bg w-full overflow-x-hidden relative min-h-screen">
          {/* Deferred Background Canvas */}
          <Suspense fallback={null}>
            <StarCanvas />
          </Suspense>

          <Navbar />

          <div className="flex flex-col gap-0 relative">
            {/* LCP Section (Fixed: Immediate Paint) */}
            <Hero />

            {/* Below-the-fold Sections (Deferred Load) */}
            <Suspense fallback={<div className="h-[600px] w-full bg-[#090917]" />}>
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
