export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  mark: string;
  links: {
    github: string;
    live: string;
    details: string;
  };
};

// Placeholder links: replace each "#" with the final project URL when available.
export const projects: Project[] = [
  {
    title: "LMSGuard",
    description:
      "AI-powered online examination monitoring and proctoring platform integrated with LMS and Safe Exam Browser.",
    technologies: ["FastAPI", "Next.js", "WebSockets", "OpenCV", "SQLite", "Python"],
    features: [
      "Live screen monitoring",
      "Risk scoring",
      "Unauthorized-app detection",
      "Real-time alerts",
      "Invigilator dashboard",
      "Downloadable reports",
    ],
    mark: "LG",
    links: { github: "#", live: "#", details: "#" },
  },
  {
    title: "GenRec-AI",
    description:
      "Agentic AI lab record assistant that generates structured college lab records using RAG, LLMs, and document processing.",
    technologies: ["Django", "Python", "ChromaDB", "RAG", "LLM", "OCR"],
    features: [
      "Observation upload",
      "Format detection",
      "Retrieval",
      "Content generation",
      "Validation",
      "PDF export",
    ],
    mark: "GR",
    links: { github: "#", live: "#", details: "#" },
  },
  {
    title: "Medical Assistant Chatbot",
    description:
      "Open-source LLM-based medical assistant for general healthcare support and conversational guidance.",
    technologies: ["Python", "FastAPI", "Transformers", "TinyLlama", "LangGraph"],
    features: [
      "Chatbot interface",
      "Medical query handling",
      "Context-aware responses",
      "Open-source LLM integration",
    ],
    mark: "MA",
    links: { github: "#", live: "#", details: "#" },
  },
  {
    title: "AI Multi-Agent Software Company",
    description:
      "Multi-agent system simulating a software company with CEO, architect, developer, debugger, QA, UI/UX, and DevOps agents.",
    technologies: ["Python", "Ollama", "Qwen", "Agentic AI"],
    features: ["Specialized agent roles", "Collaborative workflows", "Local model orchestration"],
    mark: "MA",
    links: { github: "#", live: "#", details: "#" },
  },
  {
    title: "Invigilation Duty Anomaly Detection",
    description:
      "Computer vision system for identifying unusual activities and monitoring exam environments.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    features: ["Activity monitoring", "Visual anomaly detection", "Exam-environment analysis"],
    mark: "AD",
    links: { github: "#", live: "#", details: "#" },
  },
  {
    title: "AI Lab Report Generator",
    description:
      "Generates formatted lab records from experiment inputs and images.",
    technologies: ["Python", "OCR", "LLM", "PDF Generation"],
    features: ["Experiment input processing", "Image text extraction", "Formatted PDF output"],
    mark: "LR",
    links: { github: "#", live: "#", details: "#" },
  },
];
