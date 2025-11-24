import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "../components/Section";

export default function WorkExperience() {
  const experienceList = [
    {
      role: "ICT Project Manager",
      company: "6sense Technologies",
      period: "Sep 2025 – Present",
      location: "Dhaka",
      details: [
        "Managed internal projects including company website upgrades and DepShield portal.",
        "Facilitated agile project planning using Jira, Trello, Linear.",
        "Coordinated cross-functional teams and improved delivery predictability.",
      ],
    },
    {
      role: "Technical Communicator",
      company: "EBL Asset Management Ltd",
      period: "May 2025 – Aug 2025",
      location: "Dhaka",
      details: [
        "Processed 100+ share transfer requests ensuring 100% compliance.",
        "Automated NAV & portfolio updates using Google Apps Script & Sheets (80% time saved).",
        "Built a Google Form–Sheets pipeline to sort 750+ CVs, reducing manual effort.",
        "Resolved network downtime issues and optimized IT operations.",
      ],
    },
    {
      role: "Software Developer",
      company: "Systech Digital Ltd",
      period: "Feb 2024 – May 2024",
      location: "Dhaka",
      details: [
        "Developed employee management system with Laravel & Blade.",
        "Built e-commerce platform with payment gateway, coupon system, and admin panel.",
        "Improved DB performance with optimized queries & indexing.",
        "Introduced clean code practices and reusable components.",
      ],
    },
  ];

  return (
    <Section
      id="work-experience"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="relative flex flex-col items-center justify-center text-center py-24"
    >
      <motion.h2
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-6xl font-extrabold mb-6 font-[Playfair]"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
    Work
  </span>{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
    Experience
  </span>
</motion.h2>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
        className="uppercase tracking-widest text-gray-400 mb-12 text-sm"
      >
        My Professional Journey
      </motion.p>

      <ol className="relative border-l-[3px] border-white/20 ml-4 mt-6 space-y-12 max-w-3xl text-left">
  {experienceList.map((exp, idx) => (
    <motion.li
      key={idx}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Icon (responsive circle with briefcase) */}
      <span className="absolute -left-8 sm:-left-9 md:-left-[2.35rem] flex h-10 sm:h-11 md:h-12 w-10 sm:w-11 md:w-12 items-center justify-center rounded-full border-2 border-white bg-black text-purple-400 shadow-md z-10">
        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={2} />
      </span>

      {/* Content */}
      <div className="ml-12 sm:ml-14 md:ml-16">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {exp.period}
          </span>
          <span className="text-xs text-gray-500">{exp.location}</span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>

        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-medium mb-2">
          {exp.company}
        </p>

        <ul className="list-disc ps-5 space-y-1 text-gray-300 text-sm">
          {exp.details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  ))}
</ol>

    </Section>
  );
}
