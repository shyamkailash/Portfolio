import { motion, useReducedMotion } from "framer-motion";
import { Award, CalendarDays, ExternalLink, FileText } from "lucide-react";
import type { Certificate } from "../../data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="certificate-card"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="certificate-card__top">
        <div className="certificate-card__icon" aria-hidden="true">
          <Award size={26} />
        </div>

        <span className="certificate-card__category">
          {certificate.category}
        </span>
      </div>

      <div className="certificate-card__content">
        <h3>{certificate.title}</h3>

        <p className="certificate-card__issuer">
          {certificate.issuer}
        </p>

        <p className="certificate-card__description">
          {certificate.description}
        </p>

        <div className="certificate-card__date">
          <CalendarDays size={16} aria-hidden="true" />
          <span>Issued {certificate.issueDate}</span>
        </div>
      </div>

      <div className="certificate-card__actions">
        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-card__button certificate-card__button--primary"
        >
          <FileText size={17} aria-hidden="true" />
          View PDF
        </a>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card__button certificate-card__button--secondary"
          >
            Verify
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default CertificateCard;