import React from 'react';
import { Project, Education, Skill, PersonalTrait, WorkExperience } from './types';
import { Lightbulb, Rocket, Heart, Zap, Users, Puzzle } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Yi-Hsin (Jimmy) Lin",
  email: "lin.jimmy0127@gmail.com",
  phone: "0909679127",
  location: "Taipei, Taiwan",
  tagline: "Bridging Urban Dynamics with Generative AI & Spatial Data.",
  summary: "Aspiring Data & AI Engineer specializing in Urban AI, Agent-Based Modeling, and Large-Scale Spatial Data Engineering. Passionate about exploring urban mobility patterns through data analysis and visualization."
};

export const PROJECTS: Project[] = [
  {
    id: "green-glimpse",
    title: "Green Glimpse - Global NVDI Monitoring Platform",
    role: "Full Stack & GIS Developer",
    period: "Feb. 2024 - Jul. 2025",
    category: "Development",
    description: "A comprehensive geospatial dashboard analyzing global vegetation changes and land-cover correlations.",
    image: "https://i.ibb.co/7t0W6TXz/IMG-0979.jpg",
    imageAlignment: "object-center",
    gallery: [
      "https://i.ibb.co/7t0W6TXz/IMG-0979.jpg",
      "https://i.ibb.co/VY3nM0j9/IMG-0980.jpg",
      "https://i.ibb.co/tMVDw0yB/IMG-0981.jpg"
    ],
    highlights: [
      "Leveraged Google Earth Engine and MODIS satellite data for NDVI analysis.",
      "Architected full-stack app using Flask, Leaflet.js, and ECharts.",
      "Implemented dynamic thresholding and interactive visualizations for climate trends."
    ],
    techStack: ["Python", "Flask", "Google Earth Engine", "Leaflet.js", "ECharts"]
  },
  {
    id: "appier",
    title: "Appier - Campaign Management Operation",
    role: "CM Intern",
    period: "Mar. 2025 - Sep. 2025",
    category: "Data",
    description: "Data-driven optimization of ad targeting, bidding, and scheduling using Martech tools.",
    image: "https://i.ibb.co/mFdGkK3G/IMG-9624.jpg",
    imageAlignment: "object-center",
    gallery: [
      "https://i.ibb.co/qYM1vGmC/C908299-D-94-C3-436-E-9-EAE-24462-DF4541-A.jpg",
      "https://i.ibb.co/mFdGkK3G/IMG-9624.jpg",
      "https://i.ibb.co/Lzk2Mxhx/IMG-9656.jpg"
    ],
    highlights: [
      "Improved ROAS by 20% and ROI by 12% through rigorous metric analysis (CTR, CPM, CPA).",
      "Leveraged Martech tools and JIRA for cross-team coordination.",
      "Enhanced strategic marketing decisions through systematic project tracking."
    ],
    techStack: ["Data Analysis", "JIRA", "Martech Tools", "Excel"]
  },
  {
    id: "artthera",
    title: "ArtThera LineBot Development",
    role: "Lead Developer",
    period: "Sep. 2023 - Jun. 2024",
    category: "Development",
    description: "End-to-end development of an art therapy chatbot, managing UI/UX to database architecture.",
    image: "https://i.ibb.co/k26zhWcF/iiiiiii.png",
    imageAlignment: "object-top",
    gallery: [
      "https://i.ibb.co/k26zhWcF/iiiiiii.png",
      "https://i.ibb.co/d4SjJnfh/2025-12-26-9-29-31.png",
      "https://i.ibb.co/pvLR1tS5/ppppp-1.png"
    ],
    highlights: [
      "Spearheaded UI/UX design and database architecture.",
      "Engineered a web-scraping pipeline to automate therapeutic content collection.",
      "Provided structured and relevant therapeutic content to users."
    ],
    techStack: ["Python", "Web Scraping", "Line API", "UI/UX Design", "Database Design"]
  },
  {
    id: "nthu",
    title: "NTHU Consulting Group",
    role: "Project Member",
    period: "Aug. 2025 - Present",
    category: "Strategy",
    description: "Strategic consulting using MECE framework and quantitative analysis for market trends.",
    image: "https://i.ibb.co/211DsYZx/2025-12-26-8-38-28-1.png",
    imageAlignment: "object-center",
    gallery: [
      "https://i.ibb.co/211DsYZx/2025-12-26-8-38-28-1.png",
      "https://i.ibb.co/ynRKZg1w/2025-12-26-8-37-01.png",
      "https://i.ibb.co/DfrW6g9w/2025-12-26-8-37-27.png"
    ],
    highlights: [
      "Applied MECE framework to identify key growth levers.",
      "Utilized Fermi estimation for revenue forecasting.",
      "Secured 3rd place in case competition with actionable optimization strategies."
    ],
    techStack: ["Quantitative Analysis", "MECE Framework", "Fermi Estimation"]
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "NTHU Consulting Group",
    role: "Project Member",
    period: "Aug. 2025 - Present",
    description: "Conducted strategic market analysis using the MECE framework to identify key growth levers. Utilized Fermi estimation for quantitative revenue forecasting and developed actionable optimization strategies that secured top placement in competitive case studies."
  },
  {
    company: "Appier",
    role: "Campaign Management Intern",
    period: "Mar. 2025 - Sep. 2025",
    description: "Orchestrated daily campaign operations for key clients, utilizing advanced data analytics to refine bidding strategies. Collaborated across sales and data science teams to optimize delivery performance and generate actionable market insights."
  },
  {
    company: "Global Leadership Organization",
    role: "Marketing Strategy Committee Member",
    period: "Feb. 2025 - Jul. 2025",
    description: "Designed and executed Makerthon social media strategy through audience profiling and content planning, driving 1.3M reach and 8× engagement growth via targeted ads and short-form videos. Tracked metrics (CTR, engagement rate, view time) and optimized campaigns through data analysis, boosting brand visibility and conversion."
  }
];

export const EDUCATION: Education[] = [
  {
    school: "National Taiwan University of Science and Technology",
    degree: "Graduate Institute of Digital Learning and Education",
    period: "Sep. 2025 - Present"
  },
  {
    school: "Fu Jen Catholic University",
    degree: "Bachelor of Information Management",
    period: "Sep. 2021 - Jun. 2025",
    details: ["Relevant Coursework: Database Management, Operating Systems, Systems Analysis and Design"]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Technical & Programming",
    items: ["Python", "JavaScript", "Spark AR", "CoSpace", "Web Scraping", "Google Earth Engine"]
  },
  {
    category: "Design & Tools",
    items: ["Adobe Photoshop", "Illustrator", "Canva", "Excel", "Figma"]
  },
  {
    category: "Languages & Certs",
    items: ["Fluent Chinese", "Fluent English", "TOEIC (885 - Golden)", "Google Analytics (GA4)"]
  }
];

export const PERSONAL_TRAITS: PersonalTrait[] = [
  {
    title: "Visionary",
    description: "Full of ideas and innovative concepts for urban problems.",
    icon: "Lightbulb"
  },
  {
    title: "Creative",
    description: "Thinking outside the box to visualize complex data.",
    icon: "Rocket"
  },
  {
    title: "Passionate",
    description: "Deep enthusiasm for AI, cities, and human behavior.",
    icon: "Heart"
  },
  {
    title: "Proactive",
    description: "Active attitude towards learning new spatial technologies.",
    icon: "Zap"
  },
  {
    title: "Collaborative",
    description: "Thrive in team environments and cross-functional projects.",
    icon: "Users"
  },
  {
    title: "Problem Solver",
    description: "Analytical approach to complex engineering challenges.",
    icon: "Puzzle"
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Lightbulb': return <Lightbulb className="w-8 h-8" />;
    case 'Rocket': return <Rocket className="w-8 h-8" />;
    case 'Heart': return <Heart className="w-8 h-8" />;
    case 'Zap': return <Zap className="w-8 h-8" />;
    case 'Users': return <Users className="w-8 h-8" />;
    case 'Puzzle': return <Puzzle className="w-8 h-8" />;
    default: return <Lightbulb className="w-8 h-8" />;
  }
};