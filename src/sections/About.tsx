import Section from "../components/Section";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section
      id="about"
      bgClassName="bg-gradient-to-b from-[#0a0a0e] via-[#0e0e15] to-[#0a0a0e]"
      className="py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent
                         bg-gradient-to-r from-[#C026D3] via-[#14B8A6] to-[#C026D3]
                         drop-shadow-[0_0_25px_rgba(192,38,211,0.35)] tracking-wide">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am a Full-Stack Developer, passionate about building modern, aesthetic, and functional web experiences.  
            I enjoy turning complex problems into elegant solutions that are both usable and visually striking.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I thrive in collaborative and innovative environments, learning continuously and exploring the boundaries of web technologies.  
            My goal is to create web experiences that are memorable, impactful, and professional.
          </p>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative group">
            {/* Sleek Profile Card */}
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
              <div className="text-white text-center">
                <div className="text-5xl mb-2 animate-pulse">👨‍💻</div>
                <p className="text-lg font-semibold">Marium Ahsan</p>
                <p className="text-sm opacity-70">Full-Stack Developer</p>
              </div>
            </div>

            {/* Decorative Neon Blobs */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full opacity-50 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 rounded-full opacity-40 blur-xl animate-pulse delay-500"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
