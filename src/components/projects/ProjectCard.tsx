import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-panel"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="project-panel__visual" aria-hidden="true">
        <div className="project-panel__grid" />
        <span>{project.mark}</span>
        <Code2 size={26} />
      </div>

      <div className="project-panel__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-panel__tech" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <ul className="project-panel__features">
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={14} aria-hidden="true" /> {feature}
            </li>
          ))}
        </ul>

        <div className="project-panel__actions">
          <a href={project.links.github} aria-label={`${project.title} GitHub repository`}>
            <FaGithub size={17} aria-hidden="true" /> GitHub
          </a>
          <a href={project.links.live} aria-label={`${project.title} live demo`}>
            <ArrowUpRight size={17} aria-hidden="true" /> Live Demo
          </a>
          <a href={project.links.details} aria-label={`View ${project.title} details`}>
            Details
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
