export type Skill = {
  name: string;
  mark: string;
};

export type SkillCategory = {
  name: string;
  accent: "cyan" | "blue" | "purple";
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    accent: "cyan",
    skills: [
      { name: "Python", mark: "Py" },
      { name: "Machine Learning", mark: "ML" },
      { name: "Deep Learning", mark: "DL" },
      { name: "Computer Vision", mark: "CV" },
      { name: "Generative AI", mark: "GA" },
      { name: "Agentic AI", mark: "AA" },
      { name: "Large Language Models", mark: "LLM" },
      { name: "Retrieval-Augmented Generation", mark: "RAG" },
    ],
  },
  {
    name: "Frontend",
    accent: "blue",
    skills: [
      { name: "React", mark: "Re" },
      { name: "TypeScript", mark: "TS" },
      { name: "JavaScript", mark: "JS" },
      { name: "HTML", mark: "H5" },
      { name: "CSS", mark: "C3" },
    ],
  },
  {
    name: "Backend",
    accent: "purple",
    skills: [
      { name: "FastAPI", mark: "FA" },
      { name: "Flask", mark: "Fl" },
      { name: "Django", mark: "Dj" },
      { name: "Node.js", mark: "Nj" },
    ],
  },
  {
    name: "Databases & Retrieval",
    accent: "blue",
    skills: [
      { name: "SQLite", mark: "SQ" },
      { name: "MySQL", mark: "My" },
      { name: "ChromaDB", mark: "Ch" },
      { name: "Vector Databases", mark: "VD" },
    ],
  },
  {
    name: "Tools & Platforms",
    accent: "cyan",
    skills: [
      { name: "Git", mark: "Gt" },
      { name: "GitHub", mark: "GH" },
      { name: "Linux", mark: "Lx" },
      { name: "VS Code", mark: "VS" },
      { name: "Ollama", mark: "Ol" },
      { name: "Docker", mark: "Dk" },
      { name: "Postman", mark: "Pm" },
    ],
  },
];
