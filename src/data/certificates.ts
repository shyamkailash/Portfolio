export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  category: string;
  description: string;
  issueDate: string;
  certificateUrl: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "Artificial Intelligence",
    description:
      "Completed training in core artificial intelligence concepts, intelligent systems, problem-solving methods, and practical AI applications.",
    issueDate: "June 10, 2026",
    certificateUrl: "/certificates-pdf/artificial-intelligence.pdf",
    credentialUrl: "https://verify.onwingspan.com",
  },
  {
    id: 2,
    title: "Computer Vision 101",
    issuer: "Infosys Springboard",
    category: "Computer Vision",
    description:
      "Completed training in image processing, feature extraction, computer vision fundamentals, and visual AI workflows.",
    issueDate: "June 8, 2026",
    certificateUrl: "/certificates-pdf/computer-vision-101.pdf",
    credentialUrl: "https://verify.onwingspan.com",
  },
  {
    id: 3,
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    category: "AI & Machine Learning",
    description:
      "Completed foundational AWS training in machine learning and artificial intelligence concepts.",
    issueDate: "June 22, 2026",
    certificateUrl: "/certificates-pdf/fundamentals-aiml.pdf",
  },
  {
    id: 4,
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    category: "Natural Language Processing",
    description:
      "Completed training in NLP fundamentals, text processing, language understanding, and practical NLP applications.",
    issueDate: "June 4, 2026",
    certificateUrl: "/certificates-pdf/introduction-nlp.pdf",
    credentialUrl: "https://verify.onwingspan.com",
  },
];