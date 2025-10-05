import Section from "../components/Section";

interface PublicationItemProps {
  title: string;
  year: string;
  venue: string;
  authors: string;
  link: string;
  summary?: string;
}

function PublicationItem({ title, year, venue, authors, link, summary }: PublicationItemProps) {
  const formattedAuthors = authors.replace(
    /Marium Ahsan/g,
    "<strong>Marium Ahsan</strong>"
  );

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-gray-900/30 backdrop-blur-md p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{year} • {venue}</p>
      <p
        className="text-sm text-gray-300 mt-2"
        dangerouslySetInnerHTML={{ __html: `Authors: ${formattedAuthors}` }}
      />
      {summary && <p className="text-sm text-gray-300 mt-2">{summary}</p>}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-500 transition-colors"
      >
        View Paper &rarr;
      </a>
    </article>
  );
}

export default function Publications() {
  return (
    <Section
      id="publications"
      bgClassName="bg-gradient-to-b from-[#0A0A0E] via-[#0E0E15] to-[#0A0A0E]"
      className="relative flex flex-col items-center justify-center text-center py-32"
    >
      {/* Headline */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">
          My
        </span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-teal-300">
          Research Works
        </span>
      </h2>

      {/* Subheading */}
      <p className="uppercase tracking-widest text-gray-400 mb-12 text-sm">
        Selected Publications
      </p>

      {/* Publications List */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <PublicationItem
          title="Convolutional Neural Network for Detecting Sleepy Eye of Students in the Classroom"
          year="2024"
          venue="Preprint"
          authors="I. Rahman, Marium Ahsan, S. B. Mahbub"
          link="https://www.researchgate.net/publication/379815258_Convolutional_Neural_Network_for_Detecting_Sleepy_Eye_of_Students_in_the_Classroom"
          summary="The mentioned method of this paper proposes a simple image classification and Sleepy Eye Detection system (SED) utilizing CNNs with Fastai library..."
        />

        <PublicationItem
          title="An Improved PWM Integrated Solar Mini Pump Controller with Perturb and Observe-Based MPPT Topology"
          year="2023"
          venue="IEEE ICEPE"
          authors="Marium Ahsan, P. Saha, Md. E. Ahamed, P. Das, M. R. Uddin, M. Hasan"
          link="https://ieeexplore.ieee.org/document/10044900"
          summary="This paper presents an automated DC motor with speed control using MPPT algorithm for maximum solar energy collection..."
        />

        <PublicationItem
          title="Cloud-Based Solar-Powered Remote Sensing and Monitoring for Severely Ill Patients"
          year="2023"
          venue="IEEE STI"
          authors="M. R. Uddin, P. Das, M. H. Rafi, Marium Ahsan, M. Hasan"
          link="https://ieeexplore.ieee.org/document/10103327"
          summary="An IoT-based health monitoring system tracks core body temperature and heart rate remotely, providing real-time access to doctors..."
        />
      </div>
    </Section>
  );
}
