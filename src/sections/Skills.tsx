import { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaFigma, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, 
  SiTensorflow, SiPandas, SiPytorch, SiCplusplus, SiPhp, SiGo, SiNodedotjs, SiLaravel, SiFlutter, SiCanva
} from "react-icons/si";
import Section from "../components/Section";

// Official brand colors mapping
const skillColors = {
  // Languages & Frameworks
  "C++": "#00599C",
  PHP: "#777BB4",
  Go: "#00ADD8",
  Python: "#3776AB",
  React: "#61DAFB",
  Tailwind: "#06B6D4",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  SQL: "#003B57",
  Laravel: "#FF2D20",
  Flutter: "#02569B",

  // ML & Data
  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  Pandas: "#150458",

  // Design & Tools
  Canva: "#00C4CC",
  Figma: "#F24E1E",
  Docker: "#2496ED",
  AWS: "#FF9900",
};

export const categories = {
  "Languages & Frameworks": [
    { name: "C++", icon: <SiCplusplus className="text-4xl" style={{ color: skillColors["C++"] }} /> },
    { name: "PHP", icon: <SiPhp className="text-4xl" style={{ color: skillColors["PHP"] }} /> },
    { name: "Go", icon: <SiGo className="text-4xl" style={{ color: skillColors["Go"] }} /> },
    { name: "Python", icon: <FaPython className="text-4xl" style={{ color: skillColors["Python"] }} /> },
    { name: "React", icon: <FaReact className="text-4xl" style={{ color: skillColors["React"] }} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" style={{ color: skillColors["Next.js"] }} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl" style={{ color: skillColors["Tailwind"] }} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" style={{ color: skillColors["TypeScript"] }} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl" style={{ color: skillColors["JavaScript"] }} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl" style={{ color: skillColors["Node.js"] }} /> },
    { name: "SQL", icon: <FaGitAlt className="text-4xl" style={{ color: skillColors["SQL"] }} /> },
    { name: "Laravel", icon: <SiLaravel className="text-4xl" style={{ color: skillColors["Laravel"] }} /> },
    { name: "Flutter", icon: <SiFlutter className="text-4xl" style={{ color: skillColors["Flutter"] }} /> },
  ],
  "ML & Data": [
    { name: "TensorFlow", icon: <SiTensorflow className="text-4xl" style={{ color: skillColors["TensorFlow"] }} /> },
    { name: "PyTorch", icon: <SiPytorch className="text-4xl" style={{ color: skillColors["PyTorch"] }} /> },
    { name: "Pandas", icon: <SiPandas className="text-4xl" style={{ color: skillColors["Pandas"] }} /> },
  ],
  "Design & Tools": [
    { name: "Canva", icon: <SiCanva className="text-4xl" style={{ color: skillColors["Canva"] }} /> },
    { name: "Figma", icon: <FaFigma className="text-4xl" style={{ color: skillColors["Figma"] }} /> },
    { name: "Docker", icon: <FaDocker className="text-4xl" style={{ color: skillColors["Docker"] }} /> },
    { name: "AWS", icon: <FaAws className="text-4xl" style={{ color: skillColors["AWS"] }} /> },
  ],
};

export default function Skills() {
  const [active, setActive] = useState<keyof typeof categories>("Languages & Frameworks");

  return (
    <Section
      id="skills"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden"
    >
      {/* Headline */}
     <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-extrabold mb-8 font-[Playfair]"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
    Technology
  </span>{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
    Stack
  </span>
</motion.h2>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
        className="uppercase tracking-widest text-gray-400 mb-12 text-sm"
      >
        My Skills
      </motion.p>

      {/* Category Navbar */}
      <div className="flex justify-center space-x-8 mb-8">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat as keyof typeof categories)}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors duration-300 ${
              active === cat
                ? "border-pink-500 text-pink-400"
                : "border-transparent text-gray-500 hover:text-pink-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Horizontal Skills Rail */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center gap-6 flex-wrap overflow-visible sm:overflow-visible scrollbar-hide py-4 px-4"
      >
        {categories[active].map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.08,
              boxShadow: `0 0 15px ${skillColors[skill.name as keyof typeof skillColors]}, 0 0 30px ${skillColors[skill.name as keyof typeof skillColors]}55`
           }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex items-center justify-center w-16 h-16 bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-md border border-white/10 transition-all"
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
