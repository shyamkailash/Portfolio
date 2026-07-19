import { motion, useReducedMotion } from "framer-motion";

import { certificates } from "../../data/certificates";
import CertificateCard from "./CertificateCards";

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Credentials</span>

          <h2>Certificates</h2>

          <p>
            Certifications completed in artificial intelligence, machine
            learning, computer vision, and natural language processing.
          </p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;