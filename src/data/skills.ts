export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    description:
      "Building cross-platform and native mobile applications with modern development practices.",
    skills: [
      {
        name: "Flutter",
        icon: "/images/tech/flutter.png",
      },
      {
        name: "Dart",
        icon: "/images/tech/dart.png",
      },
      {
        name: "Android Native",
        icon: "/images/tech/android.png",
      },
      {
        name: "Firebase",
        icon: "/images/tech/firebase.png",
      },
      {
        name: "REST API Integration",
        icon: "/images/tech/rest-api.png",
      },
      {
        name: "WebSocket",
        icon: "/images/tech/websocket.png",
      },
      {
        name: "Google Maps",
        icon: "/images/tech/google-maps.png",
      },
      {
        name: "GPS Tracking",
        icon: "/images/tech/gps.png",
      },
      {
        name: "Payment Gateway",
        icon: "/images/tech/payment.png",
      },
      {
        name: "GetX",
        icon: "/images/tech/getx.png",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Developing APIs and backend services to support reliable application workflows.",
    skills: [
      {
        name: "Java",
        icon: "/images/tech/java.png",
      },
      {
        name: "Spring Boot",
        icon: "/images/tech/spring-boot.png",
      },
      {
        name: "Node.js",
        icon: "/images/tech/nodejs.png",
      },
      {
        name: "REST APIs",
        icon: "/images/tech/rest-api.png",
      },
    ],
  },

  {
    title: "Frontend Development",
    description:
      "Creating responsive web interfaces using modern frontend technologies.",
    skills: [
      {
        name: "Angular",
        icon: "/images/tech/angular.png",
      },
      {
        name: "TypeScript",
        icon: "/images/tech/typescript.png",
      },
      {
        name: "HTML",
        icon: "/images/tech/html.png",
      },
      {
        name: "CSS",
        icon: "/images/tech/css.png",
      },
    ],
  },

  {
    title: "Tools & Development",
    description:
      "Using professional tools and development workflows for building and maintaining applications.",
    skills: [
      {
        name: "Git",
        icon: "/images/tech/git.png",
      },
      {
        name: "GitHub",
        icon: "/images/tech/github.png",
      },
      {
        name: "CI/CD",
        icon: "/images/tech/cicd.png",
      },
      {
        name: "VS Code",
        icon: "/images/tech/vscode.png",
      },
      {
        name: "PowerShell",
        icon: "/images/tech/powershell.png",
      },
      {
        name: "Bash",
        icon: "/images/tech/bash.png",
      },
      {
        name: "Swagger",
        icon: "/images/tech/swagger.png",
      },
    ],
  },
];

export const coreSkills = [
  {
    name: "Flutter",
    icon: "/images/tech/flutter.png",
    description: "Cross-platform mobile development",
  },
  {
    name: "Java",
    icon: "/images/tech/java.png",
    description: "Backend & Android development",
  },
  {
    name: "Android",
    icon: "/images/tech/android.png",
    description: "Native mobile application development",
  },
  {
    name: "REST API",
    icon: "/images/tech/rest-api.png",
    description: "Application & backend integration",
  },
];