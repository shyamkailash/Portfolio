import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, GraduationCap, Sparkles, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    title: "AI & Computer Science",
    description:
      "Building a strong academic foundation in machine learning, software engineering, and intelligent systems.",
  },
  {
    icon: Target,
    label: "Career Focus",
    title: "Applied AI Engineering",
    description:
      "Focused on turning research and emerging AI capabilities into reliable, useful products for real-world teams.",
  },
  {
    icon: BrainCircuit,
    label: "Current Interests",
    title: "Agentic & Multimodal AI",
    description:
      "Exploring autonomous agents, RAG, computer vision, LLM applications, and full-stack AI development.",
  },
];

const statistics = [
  { value: "5+", label: "AI projects" },
  { value: "10+", label: "Technologies" },
  { value: "4", label: "Core AI domains" },
  { value: "100%", label: "Driven to learn" },
];

function About() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__glow about__glow--cyan" aria-hidden="true" />
      <div className="about__glow about__glow--purple" aria-hidden="true" />

      <motion.div
        className="about__container"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.09 }}
      >
        <motion.header
          className="about__header"
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">
            <Sparkles size={15} aria-hidden="true" />
            About Me
          </span>
          <h2 id="about-title">
            Engineering intelligence with <span>purpose.</span>
          </h2>
          <p>
            I&apos;m Shyam Kailash, an AI and Machine Learning Engineer who enjoys
            transforming ambitious ideas into thoughtful, production-minded
            systems. I combine AI experimentation with full-stack development to
            build experiences that are technically capable, practical, and easy
            to use.
          </p>
        </motion.header>

        <div className="about__content">
          <motion.div
            className="about__story"
            variants={reveal}
            transition={{ duration: 0.55 }}
          >
            <span className="about__eyebrow">My approach</span>
            <h3>Curious by nature. Practical by design.</h3>
            <p>
              My work sits at the intersection of intelligent automation,
              human-centered product thinking, and dependable software. I care
              about understanding the problem first, choosing the right model or
              tool second, and measuring success by the value the final system
              creates.
            </p>
            <p>
              I&apos;m currently deepening my knowledge of agent workflows,
              retrieval systems, multimodal interfaces, and the engineering
              patterns that make AI applications robust beyond a prototype.
            </p>
          </motion.div>

          <div className="about__highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="about-card"
                  key={item.label}
                  variants={reveal}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <div className="about-card__icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="about__stats"
          variants={reveal}
          transition={{ duration: 0.55 }}
          aria-label="Achievement statistics"
        >
          {statistics.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
