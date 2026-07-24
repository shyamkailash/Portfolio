export interface Project {
  id: string;
  title: string;
  category: "Agentic AI" | "AI / ML" | "Full Stack" | "Computer Vision" | "Python";
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "livelook",
    title: "LiveLook",
    category: "Agentic AI",
    description: "AI-powered student monitoring and examination supervision platform with real-time screen streaming, policy enforcement, alerts, and evidence capture.",
    technologies: ["FastAPI", "Next.js", "WebSockets", "Python", "OpenCV"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: true
  },
  {
    id: "genrec-ai",
    title: "GenRec-AI",
    category: "Agentic AI",
    description: "Agentic AI lab-record assistant using RAG, LLMs, document processing, validation, and PDF generation.",
    technologies: ["Django", "Python", "ChromaDB", "RAG", "OCR"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: true
  },
  {
    id: "taskora-ai",
    title: "Taskora AI",
    category: "Agentic AI",
    description: "Autonomous AI task agent that extracts, prioritizes, plans, and tracks tasks from digital workspaces.",
    technologies: ["FastAPI", "React", "LLM", "Agentic AI"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: true
  },
  {
    id: "medical-chatbot",
    title: "Medical Assistant Chatbot",
    category: "AI / ML",
    description: "Open-source LLM-based healthcare assistant with context-aware conversational guidance.",
    technologies: ["Python", "FastAPI", "TinyLlama", "LangGraph"],
    githubUrl: "https://github.com/shyamkailash/Medical_Care_Centre",
    liveUrl: "",
    featured: true
  },
  {
    id: "multi-agent-co",
    title: "AI Multi-Agent Software Company",
    category: "Agentic AI",
    description: "Multi-agent software engineering system with CEO, architect, developer, debugger, QA, UI/UX, and DevOps agents.",
    technologies: ["Python", "Ollama", "Qwen", "Multi-Agent AI"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: true
  },
  {
    id: "invigilation-anomaly",
    title: "Invigilation Anomaly Detection",
    category: "Computer Vision",
    description: "Computer vision system for identifying suspicious or unusual activities in examination environments.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: true
  },
  {
    id: "lab-report-gen",
    title: "AI Lab Report Generator",
    category: "Python",
    description: "Generates formatted academic lab reports from experiment details and uploaded observations.",
    technologies: ["Python", "OCR", "LLM", "PDF Generation"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "",
    featured: false
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Full Stack",
    description: "Premium personal developer portfolio built with React, TypeScript, Vite, and Framer Motion.",
    technologies: ["React", "TypeScript", "Vite", "Framer Motion"],
    githubUrl: "", // TODO: Add repository URL
    liveUrl: "https://shyamkailash.dev",
    featured: false
  }
];
