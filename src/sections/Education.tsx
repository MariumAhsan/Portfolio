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
    <Section id="education" title="Education">
      <ol className="relative border-l-2 border-gray-200 ml-4 mt-6 space-y-6">
        {educationList.map((edu, idx) => (
          <li key={idx} className="relative">
            <span className="absolute -left-4 flex h-4 w-4 items-center justify-center rounded-full bg-brand ring-4 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <a
                href={edu.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline mt-1 block"
              >
                {edu.school}
              </a>
              <p className="text-sm text-gray-500 mt-1">{edu.period} • {edu.location}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                {edu.result}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
