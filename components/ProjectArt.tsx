import type { Project } from "@/data/projects";

export function ProjectArt({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-art art-${project.art} ${large ? "project-art-large" : ""}`} style={{ "--art-one": project.palette[0], "--art-two": project.palette[1], "--art-three": project.palette[2] } as React.CSSProperties} role="img" aria-label={`Concept presentation for ${project.title}`}>
      <span className="crop crop-a" /><span className="crop crop-b" />
      <div className="art-sheet"><span className="art-kicker">DESIGN / {project.year}</span><strong>{project.title.split(" ")[0]}</strong><i /><small>{project.category}</small></div>
      <div className="art-chip chip-one" /><div className="art-chip chip-two" /><div className="art-ring" />
    </div>
  );
}
