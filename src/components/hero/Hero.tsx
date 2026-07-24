import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Brain, Terminal, Zap } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const particles = [
    { left: "8%", top: "18%", size: 3, delay: 0 },
    { left: "18%", top: "72%", size: 2, delay: 1.1 },
    { left: "38%", top: "12%", size: 2, delay: 2.2 },
    { left: "58%", top: "82%", size: 3, delay: 0.7 },
    { left: "73%", top: "24%", size: 2, delay: 1.8 },
    { left: "88%", top: "66%", size: 3, delay: 2.8 },
  ];
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
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -12, 0], opacity: [0.25, 0.75, 0.25] }
            }
            transition={{
              duration: 4.5,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
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
              href="https://github.com/shyamkailash"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/shyam-kailash-861240331"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:shyamkailash268@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Premium AI Engineer Hanging ID Card */}
        <div className="identity-card-wrapper">
          <div className="identity-card-glow" />

          {/* Hanging strap and clip (gentle sway animation) */}
          <motion.div
            className="identity-card-strap-container"
            animate={shouldReduceMotion ? undefined : { rotate: [-1.2, 1.2, -1.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="identity-card__strap" />
            <div className="identity-card__clip" />
          </motion.div>

          {/* ID Card (slow float animation) */}
          <motion.div
            className="identity-card"
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="identity-card__header">
              <span>Enterprise ID</span>
              <strong>ID: 2026-SK</strong>
            </div>

            <div className="identity-card__photo-container">
              <img
                src="/images/profile.jpeg"
                alt="Shyam Kailash"
                className="identity-card__photo"
              />
            </div>

            <div className="identity-card__identity">
              <h2>Shyam Kailash</h2>
              <p>AI & Machine Learning Engineer</p>
            </div>

            <div className="identity-card__details">
              <div className="identity-card__detail">
                <Brain className="identity-card__detail-icon" size={18} />
                <div>
                  <span>AI & Machine Learning</span>
                  <p>Building intelligent systems</p>
                </div>
              </div>
              <div className="identity-card__divider" />

              <div className="identity-card__detail">
                <Terminal className="identity-card__detail-icon" size={18} />
                <div>
                  <span>Full-Stack Development</span>
                  <p>React • Next.js • FastAPI</p>
                </div>
              </div>
              <div className="identity-card__divider" />

              <div className="identity-card__detail">
                <Zap className="identity-card__detail-icon" size={18} />
                <div>
                  <span>Agentic AI</span>
                  <p>LLMs • RAG • Multi-Agent Systems</p>
                </div>
              </div>
            </div>

            <div className="identity-card__footer">
              <div className="identity-card__socials">
                <a
                  href="https://github.com/shyamkailash"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shyam-kailash-861240331"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://shyamkailash.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio Website"
                >
                  <FaGlobe size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
