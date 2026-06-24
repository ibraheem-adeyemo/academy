export interface TrackModule {
  title: string;
  topics: string[];
}

export interface TrackProject {
  name: string;
  description: string;
}

export interface Track {
  slug: "frontend" | "backend" | "fullstack" | "freestack";
  title: string;
  tagline: string;
  duration: string;
  level: string;
  price: string;
  modules: TrackModule[];
  projects: TrackProject[];
  forWho: string[];
  colour: "green" | "orange";
  badge: string;
}

export const tracks: Record<
  "frontend" | "backend" | "fullstack" | "freestack",
  Track
> = {
  frontend: {
    slug: "frontend",
    title: "Frontend Engineering",
    tagline:
      "Build the interfaces the world interacts with. Learn React, TypeScript, and modern UI development from a senior engineer who has built dashboards serving 600,000+ monthly transactions.",
    duration: "3 months",
    level: "Beginner → Intermediate",
    price: "₦150,000",
    badge: "3-month programme",
    colour: "green",
    modules: [
      {
        title: "Web foundations",
        topics: [
          "HTML5 semantics",
          "CSS layout & flexbox",
          "CSS Grid",
          "Responsive design",
          "Browser DevTools",
        ],
      },
      {
        title: "JavaScript ES6+",
        topics: [
          "Variables, functions, scope",
          "Arrays & objects",
          "Async/await & promises",
          "DOM manipulation",
          "Fetch API & REST",
        ],
      },
      {
        title: "React.js",
        topics: [
          "Components & props",
          "useState & useEffect",
          "React Router",
          "Context API",
          "Custom hooks",
        ],
      },
      {
        title: "TypeScript",
        topics: [
          "Types & interfaces",
          "Generics",
          "TypeScript with React",
          "Type-safe APIs",
        ],
      },
      {
        title: "Styling & UI libraries",
        topics: [
          "Tailwind CSS",
          "Chakra UI",
          "Component design systems",
          "Dark mode implementation",
        ],
      },
      {
        title: "Professional skills",
        topics: [
          "Git & GitHub",
          "Code reviews",
          "Testing with Jest",
          "Performance optimisation",
          "Portfolio & CV prep",
        ],
      },
    ],
    projects: [
      {
        name: "Personal portfolio website",
        description:
          "A professional portfolio site built with React and Tailwind that showcases your projects and gets you hired.",
      },
      {
        name: "E-commerce product page",
        description:
          "A fully interactive shopping page with cart functionality, filters, and responsive design.",
      },
      {
        name: "Admin dashboard",
        description:
          "A multi-section dashboard with charts, tables, and role-based UI — the kind companies actually build.",
      },
    ],
    forWho: [
      "You have zero coding experience and want to start from scratch",
      "You're a designer who wants to build your own designs",
      "You've tried learning alone but kept getting stuck",
      "You want a portfolio that proves your skills to clients or employers",
      "You're ready to commit 10–15 hours per week for 3 months",
    ],
  },
  backend: {
    slug: "backend",
    title: "Backend Engineering",
    tagline:
      "Build the invisible engines that power every app you love. Learn Node.js, databases, APIs, and real-world payment systems — the skills Nigerian companies are desperate to hire for.",
    duration: "3 months",
    level: "Beginner → Intermediate",
    price: "₦150,000",
    badge: "3-month programme",
    colour: "orange",
    modules: [
      {
        title: "JavaScript & Node.js foundations",
        topics: [
          "Node.js runtime",
          "Modules & npm",
          "File system & events",
          "Async programming",
        ],
      },
      {
        title: "TypeScript for backend",
        topics: [
          "Strict typing",
          "Interfaces & enums",
          "Decorators",
          "TypeScript with Express",
        ],
      },
      {
        title: "REST APIs with Express.js",
        topics: [
          "Routing & middleware",
          "Request/response cycle",
          "Error handling",
          "API versioning",
          "Postman testing",
        ],
      },
      {
        title: "Databases",
        topics: [
          "PostgreSQL fundamentals",
          "SQL queries & joins",
          "Prisma ORM",
          "Database design & migrations",
          "Supabase",
        ],
      },
      {
        title: "Authentication & security",
        topics: [
          "JWT tokens",
          "Bcrypt password hashing",
          "RBAC (role-based access control)",
          "Rate limiting",
          "Input validation",
        ],
      },
      {
        title: "Payments & deployment",
        topics: [
          "Paystack integration",
          "Flutterwave webhooks",
          "Docker basics",
          "Deploying to Railway or Render",
          "GitHub Actions CI/CD",
        ],
      },
    ],
    projects: [
      {
        name: "RESTful API with authentication",
        description:
          "A complete API with user registration, login, JWT auth, and protected routes — the backbone of any app.",
      },
      {
        name: "Payment processing backend",
        description:
          "A backend that integrates Paystack, handles webhooks, verifies transactions, and logs payment history.",
      },
      {
        name: "Multi-role admin API",
        description:
          "An API with different permission levels for admin, merchant, and user roles — exactly what enterprise companies build.",
      },
    ],
    forWho: [
      "You have basic JavaScript knowledge and want to go deeper",
      "You love logic, systems, and problem-solving more than visual design",
      "You want to build the kind of systems that handle millions of transactions",
      "You're aiming for backend or fullstack roles at Nigerian tech companies",
      "You're ready to commit 10–15 hours per week for 3 months",
    ],
  },
  fullstack: {
    slug: "fullstack",
    title: "Fullstack Development",
    tagline:
      "Stop choosing sides. Own the entire product. In 6 months you'll go from zero to building and deploying complete web applications — frontend, backend, database, and all.",
    duration: "6 months",
    level: "Beginner → Advanced",
    price: "₦250,000",
    badge: "6-month programme",
    colour: "green",
    modules: [
      {
        title: "Months 1–3: Frontend mastery",
        topics: [
          "Everything in the Frontend track",
          "Advanced React patterns",
          "State management with Redux Toolkit",
          "Component libraries & design systems",
        ],
      },
      {
        title: "Months 4–6: Backend mastery",
        topics: [
          "Everything in the Backend track",
          "Connecting frontend to backend",
          "Full-stack authentication flows",
          "End-to-end testing",
        ],
      },
      {
        title: "Capstone: Full product build",
        topics: [
          "Architecture planning",
          "Building & deploying a complete SaaS product",
          "Code reviews & refactoring",
          "Portfolio presentation",
        ],
      },
    ],
    projects: [
      {
        name: "Fullstack marketplace app",
        description:
          "A complete marketplace with product listings, user auth, cart, and Paystack checkout — built from scratch, deployed live.",
      },
      {
        name: "Fintech dashboard",
        description:
          "A multi-role dashboard with real-time data, transaction management, and admin controls — the type of system used at companies like Interswitch.",
      },
      {
        name: "SaaS product launch",
        description:
          "Your own idea, built end to end. This is your capstone — a live product you own and can show any employer or investor.",
      },
    ],
    forWho: [
      "You want to build complete products without needing a team",
      "You're an entrepreneur who wants to build your own startup idea",
      "You want the highest earning potential as a developer",
      "You're willing to invest 6 months of serious learning",
      "You want to stand out in a crowded developer job market",
    ],
  },
  freestack: {
    slug: "freestack",
    title: "Free Stack",
    tagline:
      "Our 100% free, intensive introduction to web development. Learn the exact fundamentals our paid tracks build on, build one real project, and decide for yourself if software engineering is for you — at zero cost.",
    duration: "8 weeks",
    level: "Complete beginner",
    price: "Free",
    badge: "8-week programme",
    colour: "orange",
    modules: [
      {
        title: "Web foundations",
        topics: [
          "HTML5 semantics",
          "CSS basics & the box model",
          "Responsive layout basics",
          "Browser DevTools introduction",
        ],
      },
      {
        title: "JavaScript basics",
        topics: [
          "Variables & data types",
          "Functions & control flow",
          "DOM manipulation basics",
          "Working with events",
        ],
      },
      {
        title: "Git & GitHub basics",
        topics: [
          "Version control fundamentals",
          "Creating your first repository",
          "Pushing and tracking changes",
        ],
      },
      {
        title: "Capstone: Your first website",
        topics: [
          "Planning a simple personal webpage",
          "Building and styling it from scratch",
          "Publishing it live on the internet",
        ],
      },
    ],
    projects: [
      {
        name: "Personal landing page",
        description:
          "A simple, responsive personal webpage built with HTML, CSS, and a touch of JavaScript — your first real project, live on the internet.",
      },
    ],
    forWho: [
      "You've never written a line of code before",
      "You want to try coding before committing financially",
      "You're curious whether software engineering is the right path for you",
      "You can commit a few hours a week for 8 weeks",
      "You're open to continuing into one of our paid tracks afterward — though it's not required",
    ],
  },
};

export const trackList = Object.values(tracks);

export const WHATSAPP_LINK =
  "https://wa.me/2347035853137?text=Hi,%20I'm%20interested%20in%20TopStack%20Academy";
