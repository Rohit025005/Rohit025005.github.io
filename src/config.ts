export const siteConfig = {
  name: "Rohit Sarwadikar",
  title: "",
  description: "Portfolio website of Rohit Sarwadikar",
  accentColor: "#1d4ed8",
  social: {
    email: "rohitsarwadikar@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohit-sarwadikar-117234331/ ",
    github: "https://github.com/Rohit025005",
  },
  aboutMe:
    " I’m a Computer Science undergraduate who approaches engineering with structure and discipline. I focus on understanding fundamentals deeply and reasoning through problems from first principles rather than relying on surface-level solutions. I break complexity into clear components, think in terms of trade-offs, and stay persistent when problems get uncomfortable. I value clarity over noise, consistency over intensity, and steady skill-building over shortcuts. Building strong foundations. Sharpening judgment. Getting better every day.",
  skills: ["Javascript", "React", "Node.js","Express.js", "Python", "PostgreSQL","MongoDB", "Docker","C++","Java"],
  projects: [
    {
      name: "Flux CLI",
      description: " Made an AI-powered CLI tool featuring three operational modes: conversational chat, tool-augmented responses (Google Search, code execution, URL analysis), and autonomous application generation from natural language descriptions.",

      link: "https://github.com/Rohit025005/Flux-CLI",
      skills: ["Node.js", "Express", "PostgreSQL", "Next.js"," Commander.js", "BetterAuth"],
    },
    {
      name: "Reverse proxy server",
      description:
        "Implementation of a reverse proxy server, with in-memory caching of requests",
      link: "https://github.com/Rohit025005/caching-reverse-proxy",
      skills: ["Python", "HTTP", "Requests", "colorama"],
    },
    {
      name: "Postly",
      description:
        "A full stack social media platrform with real time feed,More Features like comments,like,share,and React based frontend are in progress",
      link: "https://github.com/Rohit025005/Postly",
      skills: ["FastAPI", "SQLAlchemy", "Cloudinary", "JWT", "React.js","Streamlit"],
    },
  ],
  experience: [
    {
      company: "GDG SKNCOE",
      title: "Cloud Computing Member",
      dateRange: "oct24-oct25",
      bullets: [
        "Organized and managed college seminars and  tech fest",
      ],
    }
  ],
  education: [
    {
      school: "SMT Kashibai Navale College Of Engineering",
      degree: "Bachelor of Computer Engineering,",
      dateRange: "2023 - 2027",
      achievements: [],
    },
  ],
};
