import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ShieldCheck, BookOpen, Zap } from "lucide-react";

function IdentityCard() {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.9, rotateY: -20 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.9 },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="identity-card-wrapper"
      variants={cardVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <motion.div
        className="identity-card-glow"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 40px rgba(34, 211, 238, 0.3)",
                  "0 0 80px rgba(34, 211, 238, 0.5)",
                  "0 0 40px rgba(34, 211, 238, 0.3)",
                ],
              }
        }
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.article
        className="identity-card"
        variants={floatVariants}
        animate={shouldReduceMotion ? undefined : "animate"}
        whileHover={{
          rotateX: -8,
          rotateY: 5,
          scale: 1.02,
        }}
        initial={{ rotateX: 0, rotateY: 0 }}
      >
        <div className="identity-card__strap">
          <div className="identity-card__clip" />
        </div>

        <motion.div
          className="identity-card__header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span>AI ENGINEER PASS</span>
          <strong>AI-2026-097</strong>
        </motion.div>

        <motion.div
          className="identity-card__photo-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src="/images/profile.jpeg"
            alt="Shyam Kailash"
            className="identity-card__photo"
          />
        </motion.div>

        <motion.div
          className="identity-card__identity"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>
            Shyam <span>Kailash</span>
          </h2>
          <p>AI & Machine Learning Engineer</p>
          <small>Full-Stack AI Developer</small>
        </motion.div>

        <motion.div
          className="identity-card__details"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="identity-card__detail">
            <BookOpen size={18} />
            <div>
              <span>Department</span>
              <p>Artificial Intelligence</p>
            </div>
          </div>

          <div className="identity-card__detail">
            <MapPin size={18} />
            <div>
              <span>Location</span>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="identity-card__detail">
            <ShieldCheck size={18} />
            <div>
              <span>Access Level</span>
              <p className="identity-card__accent">Level 5 [AI Dev]</p>
            </div>
          </div>

          <div className="identity-card__detail">
            <Zap size={18} />
            <div>
              <span>Status</span>
              <p className="identity-card__accent">Active</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="identity-card__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="identity-card__barcode" />
          <p>SK-2026-0710-AI</p>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

export default IdentityCard;
