export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    description:
      "Building cross-platform and native mobile applications with modern development practices.",
    skills: [
      "Flutter",
      "Dart",
      "Android Native",
      "Firebase",
      "REST API Integration",
      "WebSocket",
      "Google Maps",
      "GPS Tracking",
      "Payment Gateway",
      "GetX",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing APIs and backend services to support reliable application workflows.",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive web interfaces using modern frontend technologies.",
    skills: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Tools & Development",
    description:
      "Using professional tools and development workflows for building and maintaining applications.",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "VS Code",
      "PowerShell",
      "Bash",
      "Swagger",
    ],
  },
];

export const coreSkills = [
  {
    name: "Flutter",
    shortName: "FL",
    description: "Cross-platform mobile development",
  },
  {
    name: "Java",
    shortName: "JV",
    description: "Backend & Android development",
  },
  {
    name: "Android",
    shortName: "AD",
    description: "Native mobile application development",
  },
  {
    name: "REST API",
    shortName: "API",
    description: "Application & backend integration",
  },
];