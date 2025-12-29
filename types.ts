export interface Project {
  id: string;
  title: string;
  role: string;
  period?: string;
  description: string;
  image?: string;
  imageAlignment?: string; // e.g., 'object-top', 'object-center', 'object-bottom'
  gallery?: string[];
  highlights: string[];
  techStack?: string[];
  category: 'Data' | 'Development' | 'Strategy';
  layoutAlign?: 'left' | 'right';
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalTrait {
  title: string;
  description: string;
  icon: string;
}