import { motion, useReducedMotion } from "framer-motion";
import { Braces, Sparkles } from "lucide-react";
import { skillCategories } from "../../data/skills";

function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-orb section-orb--cyan" aria-hidden="true" />
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
            <Sparkles size={15} aria-hidden="true" /> Technical toolkit
          </span>
          <h2 id="skills-title">Skills built for intelligent products.</h2>
          <p>
            A practical stack spanning AI engineering, modern application
            development, retrieval infrastructure, and developer tooling.
          </p>
        </motion.header>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              className={`skills-category skills-category--${category.accent}`}
              key={category.name}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={reveal}
              transition={{ duration: 0.5, delay: categoryIndex * 0.04 }}
            >
              <div className="skills-category__title">
                <Braces size={18} aria-hidden="true" />
                <h3>{category.name}</h3>
                <span>{category.skills.length}</span>
              </div>
              <div className="skills-category__grid">
                {category.skills.map((skill) => (
                  <motion.div
                    className="skill-tile"
                    key={skill.name}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="skill-tile__mark" aria-hidden="true">
                      {skill.mark}
                    </span>
                    <span className="skill-tile__copy">
                      <strong>{skill.name}</strong>
                      <small>{category.name}</small>
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
