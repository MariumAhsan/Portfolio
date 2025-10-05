import Section from "../components/Section";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const demoProjects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills with interactive UI.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/demo-portfolio.png",
    live: "https://example.com/portfolio",
    github: "https://github.com/username/portfolio",
  },
  {
    title: "AI Chatbot",
    description: "A web-based AI chatbot using OpenAI API for smart conversations.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    image: "/demo-chatbot.png",
    live: "https://example.com/chatbot",
    github: "https://github.com/username/ai-chatbot",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing e-commerce products, orders, and analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/demo-dashboard.png",
    live: "https://example.com/dashboard",
    github: "https://github.com/username/ecommerce-dashboard",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="relative flex flex-col items-center justify-center text-center py-32"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
          My
        </span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          Featured Projects
        </span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
        className="uppercase tracking-widest text-gray-400 mb-12 text-sm"
      >
        Showcasing Selected Works
      </motion.p>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((p) => (
          <Tilt
            key={p.title}
            tiltEnable={true}
            tiltMaxAngleX={0} // disables up-down tilt
            tiltMaxAngleY={10} // allows left-right tilt only
            perspective={900}
            scale={1.03}
            transitionSpeed={600}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Soft electric animated neon border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="absolute inset-0 rounded-2xl blur-[8px] bg-[conic-gradient(from_0deg,#ff00ff,#00ffff,#ff00ff)] animate-neon-glow"></div>
              <div className="absolute inset-0 rounded-2xl border border-transparent animate-neon-spin"></div>
              </div>

              {/* Inner content */}
              <div className="relative flex flex-col h-full p-4 gap-4 bg-gray-950/80 rounded-2xl z-10">
                {/* Image (top 1/3) */}
                <div className="h-1/3 bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Title + description (middle 1/3) */}
                <div className="h-1/3 flex flex-col justify-center">
                  <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{p.description}</p>
                </div>

                {/* Tech stack + links (bottom 1/3) */}
                <div className="h-1/3 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between mt-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </Section>
  );
}
