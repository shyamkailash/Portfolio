import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Calendar, Sparkles } from "lucide-react";
import { timelineData } from "../../data/timeline";

function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap size={18} />;
      case "experience":
        return <Briefcase size={18} />;
      case "project":
        return <Code2 size={18} />;
      default:
        return <Calendar size={18} />;
    }
  };

  return (
    <section className="timeline-section" id="timeline" aria-labelledby="timeline-title">
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
            <Sparkles size={15} aria-hidden="true" /> Experience & History
          </span>
          <h2 id="timeline-title">Chronology of Development.</h2>
          <p>
            A path detailing academic milestones, technical achievements, and 
            hands-on exploration in machine learning and full-stack development.
          </p>
        </motion.header>

        <div className="timeline-container">
          <div className="timeline-spine" aria-hidden="true" />

          <div className="timeline-events">
            {timelineData.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={event.id}
                  className={`timeline-event timeline-event--${event.type} ${
                    isEven ? "timeline-event--left" : "timeline-event--right"
                  }`}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div className="timeline-event__node" aria-hidden="true">
                    <div className="timeline-event__node-ring" />
                    <div className="timeline-event__node-icon">
                      {getIcon(event.type)}
                    </div>
                  </div>

                  <div className="timeline-event__card">
                    <div className="timeline-event__header">
                      <span className="timeline-event__year">{event.year}</span>
                      <span className="timeline-event__tag-type">{event.type}</span>
                    </div>

                    <h3>{event.role}</h3>
                    <h4 className="timeline-event__company">{event.company}</h4>
                    <p>{event.description}</p>

                    {event.skills && event.skills.length > 0 && (
                      <div className="timeline-event__skills" aria-label="Skills acquired">
                        {event.skills.map((skill) => (
                          <span key={skill} className="timeline-event__skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
