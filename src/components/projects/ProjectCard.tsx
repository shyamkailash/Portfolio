import { motion, useReducedMotion } from "framer-motion";
import { Folder } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      className="project-folder"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-label={`Open details for project ${project.title}`}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="project-folder__icon-container">
        <div className="project-folder__glow" aria-hidden="true" />
        <Folder className="project-folder__icon" size={62} />
      </div>
      <div className="project-folder__meta">
        <h3 className="project-folder__name">{project.title}</h3>
        <span className="project-folder__label">{project.category}</span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
