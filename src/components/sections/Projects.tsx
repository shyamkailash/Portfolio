import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "LMSGuard",
    description: "Advanced learning management system with AI-powered content protection and security features.",
    technologies: ["Python", "FastAPI", "React", "Machine Learning"],
    image: "/images/projects/lmsguard.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "GenRec-AI",
    description: "Intelligent recommendation engine using generative AI and collaborative filtering.",
    technologies: ["Python", "TensorFlow", "RAG", "LLMs"],
    image: "/images/projects/genrec.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Medical AI Chatbot",
    description: "Healthcare-focused conversational AI with medical knowledge base and safety protocols.",
    technologies: ["LLMs", "RAG", "Python", "FastAPI"],
    image: "/images/projects/medical-ai.jpg",
    github: "https://github.com",
    live: "https://example.com",
  },
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 50px rgba(34, 211, 238, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__background" />

      <div className="projects__container">
        <motion.div
          className="projects__header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-tag">Projects</span>
          <h2>Featured Work</h2>
          <p>Showcasing innovative AI solutions and applications</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={projectVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
