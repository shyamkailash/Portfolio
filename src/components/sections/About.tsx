import { motion } from "framer-motion";

function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="about" id="about">
      <div className="about__background" />

      <div className="about__container">
        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="about__header" variants={itemVariants}>
            <span className="section-tag">About Me</span>
            <h2>Experience & Journey</h2>
          </motion.div>

          <motion.p className="about__intro" variants={itemVariants}>
            I'm a passionate AI & Machine Learning Engineer dedicated to building
            intelligent systems that solve real-world problems. With expertise in
            Agentic AI, Computer Vision, and LLM applications, I create innovative
            solutions at the intersection of cutting-edge technology and practical
            impact.
          </motion.p>

          <motion.div className="about__highlights" variants={itemVariants}>
            <div className="highlight-card">
              <span className="highlight-number">5+</span>
              <p>Projects Completed</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">10+</span>
              <p>Technologies</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">100%</span>
              <p>Dedication</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about__image"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/images/profile.jpeg" alt="Shyam Kailash" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
