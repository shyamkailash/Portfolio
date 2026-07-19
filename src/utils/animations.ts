export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.6 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const gestureVariants = {
  whileHover: {
    y: -5,
    transition: { duration: 0.3 },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(34, 211, 238, 0.15)",
      "0 0 40px rgba(34, 211, 238, 0.3)",
      "0 0 20px rgba(34, 211, 238, 0.15)",
    ],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};
