import Section from "../components/Section";
import { projects } from "../data/projects";
// import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          // <ProjectCard key={p.title} project={p} />
          <div key={p.title} className="border rounded-xl p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
