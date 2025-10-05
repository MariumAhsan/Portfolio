import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Publications from "./sections/Publications";
import WorkExperience from "./sections/WorkExperience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <WorkExperience />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
