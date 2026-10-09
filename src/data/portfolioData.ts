export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  project: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export interface AdditionalInfoItem {
  title: string;
  organization: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Ashwinkrishna N",
  headline: "B.Tech Artificial Intelligence and Data Science Student",
  identity: "Aspiring Software Developer",
  summary:
    "I'm a technology enthusiast with hands-on experience in Python, computer vision, deep learning, and application development. I enjoy developing practical solutions and improving software through problem-solving and continuous learning.",
  about:
    "I am currently pursuing my B.Tech in Artificial Intelligence and Data Science at National Engineering College, Kovilpatti (2023–2027). I have a strong interest in software development, Python, and AI-based applications. I focus on building practical, well-structured software solutions that solve real-world problems and continuously strive to refine my skills through hands-on project work and engineering challenges.",
  email: "ashwinkrishna0405@gmail.com",
  phone: "+91 6374613641",
  location: "Thanjavur, Tamil Nadu, India",
  college: "National Engineering College, Kovilpatti",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  period: "2023–2027",
  cgpa: "7.25",
  github: "https://github.com/2317004-rgb",
  linkedin: "https://www.linkedin.com/in/ashwinkrishna-n-04a05s06h",
  resumePath: "/Ashwinkrishna_Profile.pdf",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    category: "AI and Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    category: "Database",
    skills: ["SQL"],
  },
  {
    category: "Project Technologies",
    skills: ["OpenCV", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "ESP32"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "driver-drowsiness-detection",
    title: "Driver Drowsiness Detection System",
    description:
      "Built a real-time driver safety system using Python, OpenCV, and ESP32 to monitor alertness via Eye Aspect Ratio (EAR). Automated proactive hazard prevention through instant vibration alerts, multilingual voice prompts, and hardware safety triggers.",
    technologies: ["Python", "OpenCV", "ESP32", "Computer Vision"],
    githubUrl: "https://github.com/2317004-rgb",
  },
  {
    id: "age-invariant-face-recognition",
    title: "Age-Invariant Face Recognition for Long-Term Biometric Authentication",
    description:
      "Developed a deep learning face verification pipeline using facial landmark alignment and embedding-based cosine similarity to authenticate across significant age gaps. Benchmarked performance on UIDAI datasets using FMR, EER, and ROC curves.",
    technologies: ["Python", "Deep Learning", "Computer Vision", "Biometrics"],
    githubUrl: "https://github.com/2317004-rgb",
  },
  {
    id: "studymate-adaptive-learning",
    title: "StudyMate – AI-Powered Adaptive Learning and Study Planning Platform",
    description:
      "Architected an adaptive exam preparation platform using FastAPI, LangGraph, and PostgreSQL (pgvector) featuring autonomous web-grounded RAG. Built a dynamic feedback loop that grades quizzes semantically and automatically shifts study hours toward weak topics.",
    technologies: ["FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Python", "RAG"],
    githubUrl: "https://github.com/2317004-rgb",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Hostwire Systems Pvt. Ltd.",
    role: "Application Developer Intern",
    period: "February 2026 – April 2026",
    project: "TalkIze",
    responsibilities: [
      "Developed and enhanced user interfaces for an existing application.",
      "Improved UI alignment, consistency, and visual structure across application screens.",
      "Identified and corrected UI inconsistencies to improve application maintainability and user experience.",
      "Refined existing application components while preserving established functionality.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "National Engineering College",
    location: "Kovilpatti, Tamil Nadu",
    period: "2023 – 2027",
    grade: "CGPA 7.25",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Blossom Public School",
    location: "Thanjavur, Tamil Nadu",
    period: "2022 – 2023",
    grade: "73.4%",
  },
];

export const ADDITIONAL_INFO: AdditionalInfoItem[] = [
  {
    title: "OpenCV Workshop",
    organization: "PSG Tech",
    description:
      "Hands-on technical workshop focused on Python-based computer vision and image processing techniques.",
  },
  {
    title: "NSS Volunteering",
    organization: "National Service Scheme",
    description:
      "Student volunteer actively participating in community service drives, civic engagement, and teamwork initiatives.",
  },
];
