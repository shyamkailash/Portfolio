import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please include at least 20 characters.";
  }
  return errors;
}

function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as keyof FormValues;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setValues(initialValues);
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-orb section-orb--cyan contact-section__orb" aria-hidden="true" />
      <motion.div
        className="contact-shell"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-intro">
          <span className="section-tag">
            <Sparkles size={15} aria-hidden="true" /> Start a conversation
          </span>
          <h2 id="contact-title">Let&apos;s Build Something Intelligent</h2>
          <p>
            Looking for an AI engineer who can connect models, product thinking,
            and reliable software? I&apos;m open to internships, collaborations, and
            ambitious projects where intelligent systems can create real value.
          </p>

          <div className="contact-links">
            <a href="mailto:shyamkailash268@gmail.com">
              <Mail size={19} aria-hidden="true" />
              <span><small>Email</small>shyamkailash268@gmail.com</span>
            </a>
            <a href="https://github.com/shyamkailash" target="_blank" rel="noreferrer">
              <FaGithub size={19} aria-hidden="true" />
              <span><small>GitHub</small>github.com/shyamkailash</span>
            </a>
            <a href="https://www.linkedin.com/in/shyam-kailash-861240331" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={19} aria-hidden="true" />
              <span><small>LinkedIn</small>linkedin.com/in/shyamkailash</span>
            </a>
            <div>
              <MapPin size={19} aria-hidden="true" />
              <span><small>Location</small>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="contact-availability">
            <span aria-hidden="true" /> Available for AI internships & Recruitments
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />
              {errors.name && <span className="contact-field__error" id="name-error">{errors.name}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />
              {errors.email && <span className="contact-field__error" id="email-error">{errors.email}</span>}
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" value={values.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} placeholder="What would you like to discuss?" />
            {errors.subject && <span className="contact-field__error" id="subject-error">{errors.subject}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={6} value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Tell me about the opportunity or project..." />
            {errors.message && <span className="contact-field__error" id="message-error">{errors.message}</span>}
          </div>

          <button className="button button--primary contact-form__submit" type="submit">
            Send Message <Send size={18} aria-hidden="true" />
          </button>

          <div className="contact-form__status" aria-live="polite">
            {submitted && (
              <span><CheckCircle2 size={18} aria-hidden="true" /> Message validated successfully. Connect a backend to deliver it.</span>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
