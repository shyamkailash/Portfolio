import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LayoutGrid, ChevronRight, X, ExternalLink, Sparkles, FolderOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["All", "Agentic AI", "AI / ML", "Full Stack", "Computer Vision", "Python"] as const;

function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter projects by category
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  // Calculate slice limit
  const initialLimit = 6;
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, initialLimit);

  // Keyboard accessibility handler for modal escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const toggleExpand = () => {
    setIsExpanded((current) => !current);
  };

  const selectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setIsExpanded(false); // Reset expansion when changing filter
  };

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-orb section-orb--purple" aria-hidden="true" />
      <div className="section-shell">
        <motion.header
          className="section-heading"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">
            <Sparkles size={15} aria-hidden="true" /> Portfolio Archive
          </span>
          <h2 id="projects-title">Featured Work</h2>
          <p>Browse my project collection like a file explorer.</p>
        </motion.header>

        {/* File Explorer Container */}
        <div className="projects-explorer">
          {/* Breadcrumb Path Bar */}
          <div className="explorer-breadcrumbs">
            <div className="explorer-breadcrumbs__path">
              <LayoutGrid size={16} className="explorer-breadcrumbs__icon" aria-hidden="true" />
              <span>This PC</span>
              <ChevronRight size={14} aria-hidden="true" />
              <span>Portfolio</span>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="explorer-breadcrumbs__active">Projects</span>
            </div>
            <div className="explorer-breadcrumbs__count">
              <span>{filteredProjects.length} items</span>
            </div>
          </div>

          {/* Filter Categories Bar */}
          <div className="explorer-filters" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeFilter === category}
                className={`explorer-filter-btn ${activeFilter === category ? "active" : ""}`}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Folder grid */}
          <div className="explorer-grid">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => selectProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Explorer Bottom Bar & Show More Toggle */}
          <div className="explorer-footer">
            <span className="explorer-footer__info">
              Showing {displayedProjects.length} of {filteredProjects.length} projects
            </span>
            {filteredProjects.length > initialLimit && (
              <button className="button button--secondary explorer-footer__btn" onClick={toggleExpand}>
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              {/* Modal Header */}
              <div className="project-modal__header">
                <div className="project-modal__tag">
                  <FolderOpen size={16} aria-hidden="true" />
                  <span>{selectedProject.category}</span>
                </div>
                <button
                  className="project-modal__close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="project-modal__body">
                <h3 id="modal-title">{selectedProject.title}</h3>
                <p className="project-modal__description">{selectedProject.description}</p>

                {/* Tech Badges */}
                <div className="project-modal__tech-section">
                  <h4>Technologies Used</h4>
                  <div className="project-modal__tech-grid">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="project-modal__badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <div className="project-modal__actions">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__btn project-modal__btn--primary"
                    >
                      <FaGithub size={17} aria-hidden="true" />
                      GitHub Repository
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__btn project-modal__btn--secondary"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
