import { motion, useReducedMotion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-orb section-orb--purple" aria-hidden="true" />
      <div className="section-shell">
        <motion.header
          className="section-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">
            <FolderKanban size={15} aria-hidden="true" /> Selected work
          </span>
          <h2 id="projects-title">AI projects shaped around real problems.</h2>
          <p>
            A selection of intelligent systems spanning computer vision,
            agentic workflows, retrieval, automation, and full-stack AI.
          </p>
        </motion.header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
