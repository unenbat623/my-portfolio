import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./utils/LanguageContext";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import StartCanvas from "./components/canvas/Stars";

const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="bg-bg w-full overflow-x-hidden relative">
          <StartCanvas />
          <Navbar />

          <div>
            <Hero />
            <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
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
