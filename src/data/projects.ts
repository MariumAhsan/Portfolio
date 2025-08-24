export type Project = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
  };
  
  export const projects: Project[] = [
    { title: "Project One", description: "Short summary.", tags: ["React","TS"] },
    { title: "Project Two", description: "Short summary.", tags: ["Node","API"] },
    { title: "Project Three", description: "Short summary.", tags: ["ML","PyTorch"] },
  ];
  