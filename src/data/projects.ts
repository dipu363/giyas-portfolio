export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  featured: boolean;
  overview: string;
  features: string[];
  challenges: string[];
  solutions: string[];
};

export const projects: Project[] = [
  {
    id: "cashpilot",
    title: "CashPilot",
    category: "Personal Finance",
    description:
      "A personal finance application designed to help users manage daily expenses, savings, loans, cash flow, and financial reports.",
    technologies: [
      "Flutter",
      "Dart",
      "GetX",
      "Hive",
      "FL Chart",
    ],
    role: "Mobile Application Developer",
    featured: true,

    overview:
      "CashPilot is a personal finance application designed to make everyday money management simple. It helps users track expenses, savings, loans, cash flow, and financial reports from one place.",

    features: [
      "Daily expense tracking",
      "Savings and deposit management",
      "Loan management",
      "Cash flow tracking",
      "Monthly and yearly reports",
      "Financial analytics",
      "Local data storage",
    ],

    challenges: [
      "Managing different financial records in a single application",
      "Keeping financial data organized and easy to understand",
      "Providing useful reports from locally stored data",
    ],

    solutions: [
      "Designed modular application architecture",
      "Used GetX for application state management",
      "Used Hive for local data persistence",
      "Created reporting and analytics modules",
    ],
  },

  {
    id: "restaurant-pos",
    title: "Restaurant POS",
    category: "Restaurant Management",
    description:
      "A restaurant POS application for managing orders, payments, staff workflows, delivery, collection, sessions, and receipt printing.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Dio",
      "GetX",
    ],
    role: "UI Developer & API Integration",
    featured: true,

    overview:
      "A restaurant point-of-sale application designed to manage restaurant operations from order taking to payment and receipt printing. The system supports different staff workflows including waiter, chef, and accounts operations.",

    features: [
      "Sign In and Sign Up",
      "Dine In management",
      "Waiting orders",
      "Delivery management",
      "Collection",
      "Session management",
      "Void operations",
      "Multiple payment gateways",
      "Voucher and receipt printing",
      "Report printing",
    ],

    challenges: [
      "Managing different restaurant workflows",
      "Synchronizing information between different staff roles",
      "Integrating APIs and payment-related functionality",
      "Supporting fast order processing",
    ],

    solutions: [
      "Built reusable Flutter UI components",
      "Integrated REST APIs",
      "Implemented structured application state management",
      "Tested workflows across different restaurant operations",
    ],
  },

  {
    id: "elaj",
    title: "Elaj",
    category: "Healthcare",
    description:
      "A mobile application involving paramedic notifications, background services, local notifications, and API-based communication.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase",
      "Background Service",
    ],
    role: "Mobile Application Developer",
    featured: true,

    overview:
      "Elaj is a mobile application that includes notification-driven workflows and background communication for paramedic-related operations.",

    features: [
      "Paramedic notifications",
      "Background service",
      "Local notifications",
      "API communication",
      "Notification badge handling",
    ],

    challenges: [
      "Handling background communication",
      "Receiving and processing notifications reliably",
      "Maintaining application behavior when the app is not in the foreground",
    ],

    solutions: [
      "Implemented background service functionality",
      "Integrated local notification handling",
      "Used API-based communication for application data",
      "Handled notification state within the application",
    ],
  },
];