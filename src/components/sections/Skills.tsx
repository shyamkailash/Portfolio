import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "Machine Learning"],
  },
  {
    name: "Specialized AI",
    skills: ["Agentic AI", "LLMs", "RAG", "Computer Vision", "OpenCV"],
  },
  {
    name: "Backend & DevOps",
    skills: ["FastAPI", "Docker", "Linux", "Git", "REST APIs"],
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Dev"],
  },
];

function Skills() {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 12px 32px rgba(34, 211, 238, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="skills__background" />

      <div className="skills__container">
        <motion.div
          className="skills__header"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="section-tag">Skills</span>
          <h2>Technologies & Expertise</h2>
          <p>A comprehensive toolkit of technologies and frameworks</p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              variants={itemVariants}
              custom={catIndex}
            >
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-card"
                    variants={skillVariants}
                    whileHover="hover"
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
