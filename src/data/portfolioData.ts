export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Computer Vision & IoT' | 'Deep Learning & Biometrics' | 'Generative AI & LLMs';
  problemStatement: string;
  actualContribution: string;
  description: string;
  technologies: string[];
  features: string[];
  metricsOrHighlights: string[];
  visualType: 'drowsiness' | 'face_recognition' | 'studymate';
  githubUrl?: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    note?: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  project: string;
  projectDescription: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  type: 'Technical' | 'Community Service';
  description: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Ashwinkrishna N",
  shortName: "Ashwin",
  title: "AI Developer & Software Engineer",
  email: "ashwinkrishna0405@gmail.com",
  phone: "+91 6374613641",
  location: "Thanjavur, Tamil Nadu, India",
  college: "National Engineering College, Kovilpatti",
  degree: "B.Tech in Artificial Intelligence and Data Science",
  graduationYear: "2023–2027",
  cgpa: "7.25",
  github: "https://github.com/2317004-rgb",
  linkedin: "https://www.linkedin.com/in/ashwinkrishna-n-04a05s06h",
  resumePath: "/Ashwinkrishna_Profile.pdf",
  bio: "B.Tech AI & Data Science student skilled in Python, computer vision, deep learning, and LLM application development. Experienced in engineering practical AI projects involving driver fatigue monitoring, age-invariant face verification, and an adaptive AI study planner.",
  heroRoles: [
    "AI & Data Science Student",
    "AI Developer",
    "Computer Vision Enthusiast",
    "Software Developer"
  ],
  interests: [
    "Computer Vision",
    "Deep Learning",
    "LLM Application Development",
    "LangGraph Autonomous Agents",
    "Full-Stack Integration"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "driver-drowsiness",
    title: "Driver Drowsiness Detection System",
    subtitle: "Real-Time Computer Vision & IoT Safety Architecture",
    category: "Computer Vision & IoT",
    problemStatement: "Driver fatigue is a leading factor in vehicular collisions worldwide. Existing safety checks often lack real-time physiological response triggering and fail to intervene proactively before an accident occurs.",
    actualContribution: "Engineered the computer vision alertness pipeline using Eye Aspect Ratio (EAR) calculations via OpenCV and facial landmarks, integrated ESP32 hardware triggers for instant vibration feedback, and configured multilingual audio safety cues.",
    description: "Built a real-time driver safety system using Python, OpenCV, and ESP32 to monitor alertness via Eye Aspect Ratio (EAR). Automated proactive hazard prevention through instant vibration alerts, multilingual voice prompts, and hardware safety triggers.",
    technologies: ["Python", "OpenCV", "ESP32", "Computer Vision", "IoT Sensors", "EAR Algorithm"],
    features: [
      "Real-time driver alertness monitoring via webcam feed",
      "Eye Aspect Ratio (EAR) 6-point facial landmark geometric analysis",
      "Instant vibration alerts triggered through ESP32 microcontroller",
      "Multilingual voice prompts to keep driver conscious and alert",
      "Hardware safety triggers calibrated to avoid false positives"
    ],
    metricsOrHighlights: [
      "Sub-100ms real-time frame processing",
      "Dynamic EAR threshold calibration (0.25 trigger mark)",
      "Continuous eye closure tracking over consecutive frames",
      "Closed-loop IoT actuation via ESP32 serial communication"
    ],
    visualType: "drowsiness",
    githubUrl: "https://github.com/2317004-rgb",
    status: "Completed & Tested"
  },
  {
    id: "age-invariant-face",
    title: "Age-Invariant Face Recognition for Long-Term Biometric Authentication",
    subtitle: "Deep Learning Facial Landmark Alignment & Embedding Similarity",
    category: "Deep Learning & Biometrics",
    problemStatement: "Biometric identity verification systems degrade substantially when matching facial images captured across long multi-year intervals due to natural biological aging, facial restructuring, and expression variations.",
    actualContribution: "Developed a deep learning face verification pipeline using facial landmark alignment and embedding-based cosine similarity to authenticate across significant age gaps. Benchmarked performance on UIDAI datasets using FMR, EER, and ROC curves.",
    description: "Developed a deep learning face verification pipeline using facial landmark alignment and embedding-based cosine similarity to authenticate across significant age gaps. Benchmarked performance on UIDAI datasets using FMR, EER, and ROC curves.",
    technologies: ["Python", "Deep Learning", "Facial Landmark Alignment", "Cosine Similarity", "UIDAI Datasets", "Biometrics"],
    features: [
      "Robust facial landmark alignment mitigating pose and angle variance",
      "High-dimensional embedding extraction resilient to biological aging",
      "Cosine similarity vector comparator for verification thresholds",
      "Benchmarked on official UIDAI dataset benchmarks",
      "Rigorous evaluation with False Match Rate (FMR), Equal Error Rate (EER), and ROC curves"
    ],
    metricsOrHighlights: [
      "Evaluated on real-world UIDAI biometric datasets",
      "Comprehensive metric assessment: ROC curves, FMR, and EER",
      "Invariant to facial wrinkles, skin tone shifts, and cranial growth",
      "Standardized 512-dimensional facial embedding vectors"
    ],
    visualType: "face_recognition",
    githubUrl: "https://github.com/2317004-rgb",
    status: "Benchmarked on UIDAI"
  },
  {
    id: "studymate-ai",
    title: "StudyMate – AI-Powered Adaptive Learning & Study Planning Platform",
    subtitle: "Autonomous Web-Grounded RAG & Semantic Feedback Engine",
    category: "Generative AI & LLMs",
    problemStatement: "Traditional study schedules are rigid and static, failing to adapt when students struggle with specific subjects. Students waste preparation time on mastered concepts while leaving weak areas unaddressed.",
    actualContribution: "Architected the backend and AI agent system using FastAPI, LangGraph, and PostgreSQL (pgvector). Developed the autonomous web-grounded RAG workflow and dynamic feedback loop that semantically evaluates quiz answers and dynamically reallocates study hours.",
    description: "Architected an adaptive exam preparation platform using FastAPI, LangGraph, and PostgreSQL (pgvector) featuring autonomous web-grounded RAG. Built a dynamic feedback loop that grades quizzes semantically and automatically shifts study hours toward weak topics.",
    technologies: ["FastAPI", "LangGraph", "PostgreSQL", "pgvector", "RAG", "Python", "Vector Embeddings"],
    features: [
      "Adaptive exam preparation schedule generation",
      "Autonomous web-grounded Retrieval-Augmented Generation (RAG)",
      "Semantic quiz grading using LLM vector similarity rather than rigid string matching",
      "Dynamic closed-loop feedback adjusting study hours toward weaker concepts",
      "High-performance vector search in PostgreSQL with pgvector extension"
    ],
    metricsOrHighlights: [
      "LangGraph cyclic agentic decision graph",
      "pgvector similarity indexing for syllabus retrieval",
      "Autonomous web verification for up-to-date study resources",
      "Automated time-rebalancing algorithm based on quiz performance"
    ],
    visualType: "studymate",
    githubUrl: "https://github.com/2317004-rgb",
    status: "Architected & Active"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving, backend systems, and AI pipelines.",
    skills: [
      { name: "Python", level: "Core & Advanced", icon: "Python", note: "AI pipelines, OpenCV, FastAPI, Scripts" },
      { name: "Java", level: "Proficient", icon: "Coffee", note: "Object-oriented software development" },
      { name: "C", level: "Fundamental", icon: "Cpu", note: "Low-level logic & hardware interfacing" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Core domain expertise in modern artificial intelligence and data science.",
    skills: [
      { name: "Computer Vision", level: "Specialized", icon: "Eye", note: "Facial landmarks, EAR, OpenCV, Real-time feeds" },
      { name: "Deep Learning", level: "Applied", icon: "Brain", note: "Embedding vectors, Face verification, Neural nets" },
      { name: "Machine Learning", level: "Proficient", icon: "Sparkles", note: "Supervised models, Evaluation metrics (ROC, EER)" },
      { name: "LLM App Development", level: "Specialized", icon: "MessageSquare", note: "LangGraph, Autonomous agents, Prompt workflows" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational data modeling and AI vector search databases.",
    skills: [
      { name: "SQL", level: "Proficient", icon: "Database", note: "Relational schema design and querying" },
      { name: "PostgreSQL", level: "Hands-on", icon: "Server", note: "Relational database used in StudyMate" },
      { name: "pgvector", level: "Applied", icon: "Search", note: "Vector similarity search for RAG embeddings" }
    ]
  },
  {
    title: "Project & Specialized Technologies",
    description: "Specialized frameworks, hardware, and libraries utilized in engineered projects.",
    skills: [
      { name: "OpenCV", level: "Project Tech", icon: "Camera", note: "Used in Driver Drowsiness System & PSG Workshop" },
      { name: "FastAPI", level: "Project Tech", icon: "Zap", note: "High-speed async backend for StudyMate" },
      { name: "LangGraph", level: "Project Tech", icon: "GitFork", note: "Stateful agent orchestration in StudyMate" },
      { name: "RAG (Retrieval-Augmented Gen)", level: "Project Tech", icon: "Layers", note: "Web-grounded retrieval architecture" },
      { name: "ESP32", level: "Project Tech", icon: "Radio", note: "IoT microcontroller & hardware alerts" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Hostwire Systems Pvt. Ltd.",
    role: "Application Developer Intern",
    period: "FEB 2026 – APR 2026",
    project: "TalkIze – Multi-Service E-Commerce & Booking Platform",
    projectDescription: "A multi-service platform providing seamless e-commerce purchasing and on-demand booking services.",
    responsibilities: [
      "Developed and enhanced user interfaces for an existing enterprise application.",
      "Improved UI alignment, consistency, and visual structure across multiple application screens.",
      "Identified and corrected UI inconsistencies to boost maintainability and elevate user experience.",
      "Refined existing application components while strictly preserving established functionality and state management."
    ],
    technologies: ["UI/UX Architecture", "Application Development", "Component Refinement", "Visual Design"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "National Engineering College",
    location: "Kovilpatti, Tamil Nadu",
    period: "2023 – 2027",
    grade: "CGPA: 7.25",
    details: "Specializing in Machine Learning, Computer Vision, Deep Learning, and Autonomous AI systems. Actively developing applied AI projects and research-backed architectures."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Blossom Public School",
    location: "Thanjavur, Tamil Nadu",
    period: "2022 – 2023",
    grade: "Percentage: 73.4%",
    details: "Completed secondary education with strong foundations in Mathematics and Physical Sciences."
  }
];

export const ACTIVITIES: ActivityItem[] = [
  {
    title: "OpenCV Workshop",
    organization: "PSG Tech",
    type: "Technical",
    description: "Participated in hands-on workshop focused on Python-based computer vision and image processing techniques.",
    tags: ["Computer Vision", "OpenCV", "Python", "Image Processing"]
  },
  {
    title: "Student Volunteer",
    organization: "National Service Scheme (NSS)",
    type: "Community Service",
    description: "Actively contributed to civic engagement, community service drives, organizational collaboration, and teamwork initiatives.",
    tags: ["Leadership", "Community Engagement", "Teamwork", "Public Service"]
  }
];

export const STATS = [
  { label: "B.Tech Graduation", value: "2027", subtext: "Artificial Intelligence & Data Science" },
  { label: "Undergraduate CGPA", value: "7.25", subtext: "National Engineering College" },
  { label: "Core AI Projects", value: "3+", subtext: "Vision, Biometrics & LLMs" },
  { label: "Industry Internship", value: "Hostwire", subtext: "Systems Pvt. Ltd." }
];
