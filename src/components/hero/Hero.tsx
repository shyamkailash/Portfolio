import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import IdentityCard from "./IdentityCard";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background" />
      <div className="hero__grid" />

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__status" variants={itemVariants}>
            <span />
            Available for AI internships & collaborations
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Hi, I&apos;m <span>Shyam Kailash</span>
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            Building Intelligent <span>AI Systems.</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            Passionate AI & Machine Learning Engineer specializing in Agentic AI,
            Computer Vision, Large Language Models (LLMs), Retrieval-Augmented
            Generation (RAG), Full-Stack AI Development, and Intelligent
            Automation. Dedicated to creating innovative solutions that push the
            boundaries of AI technology.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a href="#projects" className="button button--primary">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/shyamkailash-resume.pdf"
              className="button button--secondary"
              download
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <IdentityCard />
      </div>
    </section>
  );
}

export default Hero;