export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  type: "education" | "experience" | "project";
  skills?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "June 2026 - Present",
    role: "AI & ML Developer",
    company: "Self-directed Research & R&D",
    description: "Developing production-minded AI applications with a focus on Agentic workflows, local LLMs (Ollama, Qwen), Computer Vision (OpenCV), and RAG systems.",
    type: "experience",
    skills: ["Agentic AI", "Computer Vision", "FastAPI", "React", "Docker"]
  },
  {
    id: 2,
    year: "June 2026",
    role: "Foundations & Credentials",
    company: "AWS & Infosys Springboard",
    description: "Successfully certified in core AI concepts, Natural Language Processing, Computer Vision, and Cloud ML foundations.",
    type: "education",
    skills: ["AWS", "Computer Vision", "NLP", "Machine Learning"]
  },
  {
    id: 3,
    year: "May 2026",
    role: "Lead Developer — LMSGuard",
    company: "AI Proctoring Platform",
    description: "Built an AI-driven online exam proctoring tool using FastAPI and OpenCV. Implemented risk-scoring algorithms, real-time alerts, and invigilator dashboards.",
    type: "project",
    skills: ["FastAPI", "OpenCV", "WebSockets", "React", "SQLite"]
  },
  {
    id: 4,
    year: "April 2026",
    role: "Lead Developer — GenRec-AI",
    company: "Agentic RAG Assistant",
    description: "Designed a RAG-based AI assistant to generate formatted lab reports from unstructured observations and notes, integrating vector databases and OCR.",
    type: "project",
    skills: ["Django", "Python", "ChromaDB", "LLMs", "RAG", "OCR"]
  },
  {
    id: 5,
    year: "2024 - 2026",
    role: "Student (AI & Computer Science)",
    company: "Engineering & Applied Sciences",
    description: "Building a rigorous academic foundation in software design, algorithms, database systems, and core machine learning methods.",
    type: "education",
    skills: ["Python", "Machine Learning", "Database Systems", "Data Structures"]
  }
];
