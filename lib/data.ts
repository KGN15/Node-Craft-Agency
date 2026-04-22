export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  color: string;
  features: string[];
  liveUrl?: string;
}

export const products: Product[] = [
  {
    id: "mostafiz-tradehub",
    title: "MostafizTradeHub",
    category: "B2B SaaS / Supply Chain",
    description:
      "Digitizing the traditional B2B sales pipeline for retailers and wholesalers in Bangladesh.",
    longDescription:
      "A complex B2B SaaS solution that eliminates manual bottlenecks in the sales-rep-to-retailer supply chain. It allows sales managers to monitor wholesale operations in real-time while empowering shopkeepers with independent bulk ordering and automated delivery tracking.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
    ],
    image: "/mostafiztradehub.png",
    color: "from-emerald-600 to-teal-500",
    features: [
      "B2B Ordering System",
      "Real-time Inventory Tracking",
      "Sales Rep Monitoring",
      "Delivery Pipeline Automation",
      "Multi-tenant Architecture",
      "Advanced Reporting",
    ],
    liveUrl: "https://mostafiztradehub.vercel.app",
  },
  {
    id: "3d-dog",
    title: "3D Dog",
    category: "3D Modeling / Animation",
    description:
      "A cutting-edge 3D modeling application for creating and animating realistic dog models.",
    longDescription:
      "3D Dog is a powerful 3D modeling tool designed specifically for creating detailed and realistic dog models. It features a user-friendly interface, advanced sculpting tools, and seamless integration with popular animation software.",
    tech: ["React.js", "Three.js", "CSS3", "Framer Motion"],
    image: "/3d-dog.png",
    color: "from-emerald-600 to-teal-500",
    features: [
      "3D Modeling Tools",
      "Real-time Animation",
      "User-friendly Interface",
      "Seamless Integration",
      "Advanced Sculpting",
      "Responsive Design",
    ],
    liveUrl: "https://3d-dog-mu.vercel.app/",
  },
  {
    id: "GTAVI",
    title: "GTAVI",
    category: "Paralex / GSAP",
    description:
      "A high-performance, fan-made web experience inspired by the upcoming Grand Theft Auto VI.",
    longDescription:
      "A high-performance, fan-made web experience inspired by the upcoming Grand Theft Auto VI. This project focuses on fluid motion, cinematic aesthetics, and modern web animations to bring the vibe of Leonida (Vice City) to your browser.",
    tech: ["React.js", "GSAP", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "/GTAVI.png",
    color: "from-orange-600 to-amber-500",
    features: [
      "Cinematic Web Animations",
      "Fluid Motion Design",
      "Paralex Scrolling Effects",
      "Interactive Elements",
      "High Performance Optimization",
      "Modern UI/UX with CSS3",
    ],
    liveUrl: "https://gtavi6.vercel.app/",
  },
  {
    id: "k72-clone-experience",
    title: "K72 Digital Agency Clone",
    category: "Interactive Web / Creative Agency",
    description:
      "A high-fidelity immersive web experience focusing on fluid motion, lighting effects, and premium transitions.",
    longDescription:
      "This project is a technical recreation of the K72 digital agency website. It showcases advanced frontend orchestration by combining GSAP's timeline-based animations with Framer Motion's layout transitions. The site features a custom mouse-reactive lighting system, smooth inertia scrolling, and complex SVG masking to deliver a truly premium user experience.",
    tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion", "Vite"],
    image: "/k72ca.png",
    color: "from-zinc-900 via-gray-800 to-black",
    features: [
      "Advanced GSAP ScrollTrigger Orchestration",
      "Dynamic Mouse-Follower Lighting Effects",
      "Seamless Page Transitions with Framer Motion",
      "Custom Typography & Premium Layout",
      "Performance Optimized Animation Frames",
      "Responsive & Fluid Modern UI",
    ],
    liveUrl: "https://k72-ca-clone-beta.vercel.app/",
  },
  {
    id: "minecraft-server-website",
    title: "Premium Minecraft Server Website",
    category: "Gaming / Web Platform",
    description:
      "A modern, responsive Minecraft server website with live stats, commands, store, and leaderboard system.",
    longDescription:
      "This is a premium Minecraft server website built for gaming communities. It provides live server status, player count, command guides, store integration, social links, and a leaderboard system. The UI is fully responsive and designed for a smooth gamer experience across all devices.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    image: "/premium-minecraft.png",
    color: "from-green-600 to-emerald-500",
    features: [
      "Premium UI/UX Design",
      "Live Server Stats & Player Count",
      "Minecraft Commands Guide",
      "Store / Shop Integration",
      "Community & Social Links",
      "Top Player Leaderboard",
      "Fully Responsive Layout",
    ],
    liveUrl: "https://premium-smp-mincraft.netlify.app/",
  },
  {
    id: "auth-collab-app",
    title: "SecureCollab Auth",
    category: "SaaS Utility / Security",
    description:
      "A collaborative authentication suite featuring real-time profile management and team sync.",
    longDescription:
      "This application goes beyond simple login. It is a full-scale collaborative authentication system with real-time Firestore updates. Teams can manage profiles, collaborate on shared resources, and experience seamless state persistence across multiple devices.",
    tech: ["React.js", "Firebase", "Cloudstore", "CSS3", "Framer Motion"],
    image:
      "https://i.pinimg.com/736x/7f/fe/81/7ffe8123aa920f66a18878a1cfa4df33.jpg",
    color: "from-orange-600 to-amber-500",
    features: [
      "Real-time Firestore Sync",
      "Team Collaboration Tools",
      "Dynamic Profile Editing",
      "OAuth & Email Auth",
      "State Persistence",
      "Modern UI/UX with CSS3",
    ],
    liveUrl: "https://assignment-06-react-auth-with-fireb.vercel.app/",
  },
  {
    id: "contact-management-system",
    title: "ContactFlow CMS",
    category: "Management System",
    description:
      "A full-stack CRUD application for enterprise-level contact and lead management.",
    longDescription:
      "ContactFlow is a robust full-stack solution for organizing large-scale contact databases. Featuring a clean UI and high-speed search capabilities, it allows for efficient CRUD operations and secure data storage on MongoDB.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image:
      "https://i.pinimg.com/1200x/9b/82/d4/9b82d44c34eb918abaf992d5a0d83133.jpg",
    color: "from-indigo-600 to-blue-500",
    features: [
      "Full CRUD Functionality",
      "High-speed Database Queries",
      "Contact Categorization",
      "Clean & Minimalist Interface",
      "Secure Backend API",
      "Responsive Data Tables",
    ],
    liveUrl: "https://as-5-frontend.vercel.app/",
  },
  {
    id: "reel-app",
    title: "Reel App",
    category: "Video Streaming Platform",
    description:
      "A high-performance video sharing platform with advanced role-based access and creator dashboards.",
    longDescription:
      "Reel App is a modern video-centric social platform designed for seamless content sharing. It features a robust multi-role authentication system (User, Creator, Partner) and a dedicated partner dashboard for detailed analytics. Built with MERN stack and optimized for media delivery.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ImageKit",
      "Cloudinary",
    ],
    image:
      "https://i.pinimg.com/1200x/21/37/da/2137da96723ebbef20a7b4df3e5115db.jpg",
    color: "from-purple-600 to-pink-500",
    features: [
      "Role-Based Access Control",
      "Advanced Partner Dashboard",
      "Media Optimization (ImageKit)",
      "Real-time Content Upload",
      "Secure User Authentication",
      "Responsive Video Player",
    ],
    liveUrl: "https://reelappmr.vercel.app/",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mostafijar Rahman",
    role: "Owner",
    company: "Mostafiz TradeHub",
    text: "আগে আমি দোকান দার দের সাথে খাতা কলমে মেনুয়ালি সব করতাম। কিন্তু এখন আমি NodeCraftAgnecy দের থেকে বানিয়ে নেওয়া MostafizTradeHub দিয়ে সকল কাজ করি। আর আসলেই এই ওয়েবসাইটের ফলে আমার কাজের গতি আরো ব্রিদ্ধি পেয়েছে এবং এখন সেলসো বেশি হয়। Thanks To NodeCraftAgency. ❤",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Nusrat Jahan",
    role: "Owner",
    company: "ReelApp MR",
    text: "ধন্য়বাদ NodeCtaftAgency কে আমার drem েএর প্রযেক্ট রিলস অ্য়প বানায় দেওয়া জন্য়া। আমি এখন খুবই আনন্দিত যে আমার একটা নিজ্স অ্য়প আছে।",
    rating: 4,
    avatar: "NJ",
  },
  {
    name: "Tanvir Ahmed",
    role: "Director",
    company: "BDMAX",
    text: "আসলেই তাড়া একজন ভালো service provider। আমার একটা Team Mannagement software লাগতো। তো ভাবলাম যে এদের একটা সুযগ দিয়ে দেখি। আর সত্য়ি তাড়া খুব ভালো একটা সোফটোওয়্য়ার বানইছৈ যেটা দিয়ে আমি এবং আমার টিম সহজেই কাজ শেষ করতে পারি। ",
    rating: 5,
    avatar: "TA",
  },
];

export type Plan = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  priceUSD: number;
  priceBDT: number;
  delivery: string;
  featured: boolean;
  badge?: string;
  gradient: string;
  glowColor: string;
  bonus: string[];
  extras: string[];
  discount?: number;
};

export type Feature = {
  category: string;
  items: {
    label: string;
    plans: Record<string, boolean | string>;
  }[];
};

export const plans: Plan[] = [
  {
    id: "basic",
    icon: "🔹",
    name: "Basic",
    tagline: "Personal brand / single product",
    priceUSD: 40,
    priceBDT: 5000,
    delivery: "4–7 Days",
    featured: false,
    gradient: "from-slate-600 to-slate-700",
    glowColor: "rgba(148,163,184,0.15)",
    bonus: ["Mini AI Chat Widget (FREE) 🤖"],
    extras: ["Extra Section: ৳700", "Domain: ৳2000", "Hosting (Optional)"],
    discount: 15,
  },
  {
    id: "starter",
    icon: "🔹",
    name: "Starter",
    tagline: "Small local business",
    priceUSD: 72,
    priceBDT: 9000,
    delivery: "5–10 Days",
    featured: false,
    gradient: "from-blue-700 to-blue-800",
    glowColor: "rgba(59,130,246,0.15)",
    bonus: ["AI Chat Support (FREE) 🤖"],
    extras: ["Extra Page: ৳1000/page", "Domain: ৳2000"],
    discount: 15,
  },
  {
    id: "micro",
    icon: "🔹",
    name: "Micro Biz",
    tagline: "Small shop / service provider",
    priceUSD: 100,
    priceBDT: 12000,
    delivery: "12–15 Days",
    featured: false,
    gradient: "from-cyan-600 to-blue-700",
    glowColor: "rgba(6,182,212,0.15)",
    bonus: ["AI Smart Chatbot (FREE) 🤖"],
    extras: ["Extra Page: ৳1000/page", "Domain: ৳2000", "Hosting (Optional)"],
    discount: 20,
  },
  {
    id: "business",
    icon: "🔷",
    name: "Business",
    tagline: "Growing companies",
    priceUSD: 150,
    priceBDT: 18000,
    delivery: "15–20 Days",
    featured: true,
    badge: "POPULAR",
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    glowColor: "rgba(99,102,241,0.3)",
    bonus: ["AI Chatbot Integration (FREE) 🤖"],
    extras: ["Extra Page: ৳1500/page", "Domain + Hosting (1yr): ৳5000"],
    discount: 20,
  },
  {
    id: "ecommerce",
    icon: "🛒",
    name: "Ecommerce",
    tagline: "Online business & product selling",
    priceUSD: 205,
    priceBDT: 25000,
    delivery: "20–25 Days",
    featured: false,
    gradient: "from-violet-600 to-purple-800",
    glowColor: "rgba(139,92,246,0.2)",
    bonus: ["AI Live Chat Bot (FREE) 🤖"],
    extras: ["Bulk Product Setup: Negotiable", "Domain: ৳6500"],
    discount: 20,
  },
  {
    id: "master-premium",
    icon: "💎",
    name: "Master Premium",
    tagline: "Ultra premium for serious brands",
    priceUSD: 405,
    priceBDT: 50000,
    delivery: "25-30 Days",
    featured: true,
    badge: "BEST VALUE",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    glowColor: "rgba(251,191,36,0.25)",
    bonus: [
      "Advanced AI Chatbot 🤖",
      "Free Landing Page (৳5000 value)",
      "Free Logo Design",
      "Hosting Setup Help",
    ],
    extras: [
      "Domain + Hosting: ৳8000–৳12000",
      "Custom Features: ৳3000–৳15000",
      "Mobile App: ৳20000+",
      "SEO Growth Plan: ৳7000/month",
      "Maintenance: ৳5000/month",
    ],
    discount: 20,
  },
  {
    id: "server-starter",
    icon: "🎮",
    name: "Server Starter",
    tagline: "Perfect for small game servers",
    priceUSD: 65,
    priceBDT: 8000,
    delivery: "5-7 Days",
    featured: false,
    badge: "STARTER",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.25)",
    bonus: [
      "Basic Server Website",
      "Server Info + Rules Page",
      "Discord Integration",
      "Mobile Responsive Design",
    ],
    extras: [
      "Domain + Hosting: ৳3000–৳6000",
      "Extra Page: ৳1000/page",
      "Basic SEO: ৳2000",
      "Maintenance: ৳1500/month",
    ],
    discount: 50,
  },
  {
    id: "server-growth",
    icon: "🚀",
    name: "Server Growth",
    tagline: "Grow your server & community",
    priceUSD: 145,
    priceBDT: 18000,
    delivery: "10-14 Days",
    featured: true,
    badge: "POPULAR",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.25)",
    bonus: [
      "Everything in Starter",
      "Player Stats System",
      "Admin Panel (Basic)",
      "Donation / VIP System",
      "Modern UI + Animations",
    ],
    extras: [
      "Domain + Hosting: ৳4000–৳8000",
      "Custom Features: ৳3000–৳10000",
      "SEO Setup: ৳4000",
      "Maintenance: ৳3000/month",
    ],
    discount: 50,
  },
  {
    id: "server-pro",
    icon: "💎",
    name: "Server Pro",
    tagline: "Full system for pro server owners",
    priceUSD: 280,
    priceBDT: 35000,
    delivery: "18-22 Days",
    featured: true,
    badge: "PRO",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    glowColor: "rgba(251,191,36,0.25)",
    bonus: [
      "Everything in Growth",
      "Advanced Dashboard",
      "Automated Store System",
      "Player Login System",
      "Custom API Integration",
      "Free Landing Page (৳5000 value)",
    ],
    extras: [
      "Domain + Hosting: ৳6000–৳10000",
      "Advanced Features: ৳8000–৳20000",
      "Mobile App: ৳20000+",
      "SEO Growth Plan: ৳6000/month",
      "Maintenance: ৳5000/month",
    ],
    discount: 50,
  },
];

export const featureMatrix: Feature[] = [
  {
    category: "📄 Pages & Structure",
    items: [
      {
        label: "Number of Pages",
        plans: {
          basic: "2 Page",
          starter: "3–4 Pages",
          micro: "4–5 Pages",
          business: "5–7 Pages",
          ecommerce: "∞ Dynamic (based on content)",
          "master-premium": "∞ Custom (based on content)",
          "server-starter": "3–4 Pages",
          "server-growth": "5–7 Pages",
          "server-pro": "∞ Custom (based on content)",
        },
      },
      {
        label: "Next.js Framework",
        plans: {
          basic: true,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Fully Responsive Design",
        plans: {
          basic: true,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Image Gallery Section",
        plans: {
          basic: false,
          starter: false,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Premium Figma UI Design",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
    ],
  },
  {
    category: "⚙️ Backend & System",
    items: [
      {
        label: "Backend / Server Logic",
        plans: {
          basic: false,
          starter: false,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Admin Dashboard",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: "Basic",
          ecommerce: "Full",
          "master-premium": "Advanced",
          "server-starter": "Basic",
          "server-growth": "Advanced",
          "server-pro": "Pro-Level",
        },
      },
      {
        label: "Dynamic Content Management",
        plans: {
          basic: false,
          starter: "Simple",
          micro: false,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": "Simple",
          "server-growth": "Advanced",
          "server-pro": "Pro-Level",
        },
      },
      {
        label: "Role Based System (Admin/User)",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "JWT Authentication",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "API Integration",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: "Ready",
          ecommerce: "Ready",
          "master-premium": "Full Support",
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
    ],
  },
  {
    category: "🛒 Ecommerce Features",
    items: [
      {
        label: "Product Management",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "bKash / Nagad Payment",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Order Management",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Customer Accounts",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Inventory System",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Invoice + Email System",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
    ],
  },
  {
    category: "📈 SEO & Performance",
    items: [
      {
        label: "Basic SEO Setup",
        plans: {
          basic: true,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Google Analytics",
        plans: {
          basic: false,
          starter: true,
          micro: false,
          business: true,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Speed Optimization",
        plans: {
          basic: true,
          starter: false,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "Lighthouse 90+ Score",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Advanced SEO for Google Ranking",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
    ],
  },
  {
    category: "🤝 Contact & Support",
    items: [
      {
        label: "Contact Form",
        plans: {
          basic: true,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "WhatsApp Button",
        plans: {
          basic: false,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": false,
          "server-growth": true,
          "server-pro": true,
        },
      },
      {
        label: "AI Chatbot (FREE)🤖",
        plans: {
          basic: "Mini",
          starter: "Basic",
          micro: "Smart",
          business: "Full",
          ecommerce: "Live",
          "master-premium": "Advanced",
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Post-delivery Support",
        plans: {
          basic: "14 Days",
          starter: "1 Month",
          micro: "2 Months",
          business: "3 Months",
          ecommerce: "4 Months",
          "master-premium": "6 Months",
          "server-starter": "1 Month",
          "server-growth": "3 Months",
          "server-pro": "6 Months",
        },
      },
    ],
  },
  {
    category: "🎁 Free Bonuses",
    items: [
      {
        label: "Free Landing Page",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Free Logo Design",
        plans: {
          basic: false,
          starter: false,
          micro: false,
          business: false,
          ecommerce: false,
          "master-premium": true,
          "server-starter": false,
          "server-growth": false,
          "server-pro": true,
        },
      },
      {
        label: "Hosting Setup Help",
        plans: {
          basic: true,
          starter: true,
          micro: true,
          business: true,
          ecommerce: true,
          "master-premium": true,
          "server-starter": true,
          "server-growth": true,
          "server-pro": true,
        },
      },
    ],
  },
];
