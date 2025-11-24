import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "../components/Section";

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      school: "Independent University, Bangladesh",
      schoolUrl: "https://iub.ac.bd/",
      period: "Jan 2020 – Jun 2024",
      location: "Dhaka, Bangladesh",
      result: "CGPA 3.32 / 4.00",
    },
    {
      degree: "Higher Secondary School Certificate (Science)",
      school: "Rajuk Uttara Model College",
      schoolUrl: "https://www.rajukcollege.edu.bd/",
      period: "Jul 2017 – May 2019",
      location: "Dhaka, Bangladesh",
      result: "GPA 5.00 / 5.00",
    },
    {
      degree: "Secondary School Certificate (Science)",
      school: "Milestone College",
      schoolUrl: "https://www.milestonecollege.com/",
      period: "Jan 2015 – Jan 2017",
      location: "Dhaka, Bangladesh",
      result: "GPA 5.00 / 5.00",
    },
  ];

  return (
    <Section
      id="education"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="relative flex flex-col items-center justify-center text-center py-24"
    >
      {/* Heading / Subheading updated to match Secret Sauce style */}
      <motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mb-10"
>
  <h2 className="text-5xl md:text-6xl font-extrabold mb-3 text-center font-[Playfair]">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
      Academic
    </span>{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
      Journey
    </span>
  </h2>

  <p className="uppercase tracking-widest text-gray-400 text-sm md:text-base mb-2 text-center">
    Building Knowledge, Step by Step
  </p>
</motion.div>


      {/* Timeline / Cards remain untouched */}
      <ol className="relative border-l-[3px] border-white-800/40 ml-4 mt-6 space-y-12 max-w-3xl text-left">
  {educationList.map((edu, idx) => (
    <motion.li
      key={idx}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Icon (responsive circle with graduation cap) */}
      <span className="absolute -left-8 sm:-left-9 md:-left-[2.35rem] flex h-10 sm:h-11 md:h-12 w-10 sm:w-11 md:w-12 items-center justify-center rounded-full border-2 border-white-800 bg-[#0A0A0E] text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] ring-4 ring-[#0A0A0E] z-10">
        <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2} />
      </span>

      {/* Content */}
      <div className="group ml-12 sm:ml-14 md:ml-16 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-md transition-all duration-300 relative overflow-hidden">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {edu.period}
          </span>
          <span className="text-xs text-gray-500">{edu.location}</span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-1 relative z-10">
          {edu.degree}
        </h3>

        <a
          href={edu.schoolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:opacity-90 text-base font-medium relative z-10"
        >
          {edu.school}
        </a>

        <div className="mt-4 flex justify-end">
          <span className="text-white font-bold text-sm relative z-10">
            {edu.result}
          </span>
        </div>
      </div>
    </motion.li>
  ))}
</ol>

    </Section>
  );
}
