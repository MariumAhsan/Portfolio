import Section from "../components/Section";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="home"
      bgClassName="bg-gradient-to-b from-[#0a0a0e] via-[#0e0e15] to-[#0a0a0e]"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 z-10 flex flex-col items-center"
      >
        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 font-[Playfair] bg-clip-text text-transparent
                       bg-gradient-to-r from-[#C026D3] via-[#14B8A6] to-[#C026D3]
                       tracking-wide drop-shadow-[0_0_25px_rgba(192,38,211,0.35)]">
          Marium Ahsan
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed font-[Manrope]">
          Full-Stack Developer crafting aesthetic and functional web experiences with modern technology.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/MariumAhsan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn text-white p-4 rounded-full text-2xl hover:scale-110 transition-transform duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/marium-ahsan/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn text-white p-4 rounded-full text-2xl hover:scale-110 transition-transform duration-300"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 font-semibold rounded-xl text-white relative overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#C026D3] to-[#14B8A6] opacity-80
                             group-hover:opacity-100 blur-md transition-all duration-500"></span>
            <span className="relative z-10">View Projects</span>
          </button>

          <a
            href="/Marium_Ahsan_CV.pdf"
            download
            className="px-8 py-4 font-semibold rounded-xl border border-gray-500 text-gray-300 relative overflow-hidden group hover:text-white transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#C026D3] opacity-0
                             group-hover:opacity-70 blur-md transition-all duration-500"></span>
            <span className="relative z-10">Download CV</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;