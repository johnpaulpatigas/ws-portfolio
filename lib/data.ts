export const projects = [
  {
    title: "RFID-Based Attendance System",
    description: [
      "Built an end-to-end attendance system using ESP32 and RC522 RFID for tag-based identification.",
      "Programmed ESP32 in C/C++ to read RFID UIDs, process data, and transmit attendance records via HTTP.",
      "Implemented REST API communication with Supabase using authenticated requests and RPC functions.",
      "Developed a React-based frontend to view and manage attendance logs.",
    ],
    technologies: ["ESP32", "React.js", "Supabase", "C/C++"],
    category: "Embedded Systems",
    link: "https://github.com/johnpaulpatigas/benthel-attendance",
    status: "Completed",
    sourceCode: "https://github.com/johnpaulpatigas/benthel-attendance",
  },
  {
    title: "Portfolio Website",
    description: [
      "This very portfolio website, built with Next.js and shadcn/ui.",
    ],
    technologies: ["Next.js", "TypeScript", "shadcn/ui", "TailwindCSS"],
    category: "Web Development",
    link: "/",
    status: "In Progress",
    sourceCode: "https://github.com/johnpaulpatigas/ws-portfolio",
  },
];

export const skills = [
  "JavaScript",
  "C/C++",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "Arduino",
  "ESP32",
  "Git",
  "Android Studio",
];

export const experiences = [
  {
    title: "ESL Instructor",
    company: "IZAM Academy",
    date: "January 2026",
    description: [
      "Conducted one-on-one English lessons with Korean students.",
      "Prepared personalized lesson plans and guided students through structured learning activities.",
      "Strengthened communication, instructional, and adaptive teaching skills.",
    ],
  },
  {
    title: "Research Panelist",
    company: "Marigondon National High School",
    date: "March 2025",
    description: [
      "Evaluated student research projects in technology and bioscience categories.",
      "Assessed problem statements, methodologies, and technical feasibility.",
      "Provided structured feedback and asked technical questions to test students’ understanding.",
      "Strengthened skills in technical communication, evaluation, and mentorship.",
    ],
  },
];
