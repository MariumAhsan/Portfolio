import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Section from "../components/Section";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail size={22} />,
      url: "mailto:mariumahsan937@gmail.com",
      label: "Send me an email",
      isExternal: false,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      url: "https://linkedin.com/in/mariumahsan",
      label: "Connect with me on LinkedIn",
      isExternal: true,
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      url: "https://github.com/mariumahsan",
      label: "View my projects on GitHub",
      isExternal: true,
    },
  ];

  return (
    <Section
      id="contact"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="py-24 flex flex-col items-center justify-center text-center"
    >
      {/* Header */}
      <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-extrabold mb-6 font-[Playfair]"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
    Get
  </span>{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
    In Touch
  </span>
</motion.h2>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.6 }}
        className="text-gray-400 mb-14 text-sm uppercase tracking-widest"
      >
        Let’s Connect, Collaborate, and Create
      </motion.p>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
      >
        <div className="space-y-6">
          {contactLinks.map((contact, idx) => (
            <a
              key={idx}
              href={contact.url}
              target={contact.isExternal ? "_blank" : undefined}
              rel={contact.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
              aria-label={contact.label}
            >
              {/* Left side: Icon + Name */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-[0_0_15px_rgba(192,38,211,0.3)] group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors duration-200">
                    {contact.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.label}</p>
                </div>
              </div>

              {/* External Arrow */}
              {contact.isExternal && (
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-fuchsia-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Divider + Message */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Always open to meaningful collaboration and creative partnerships.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
