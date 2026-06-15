export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  process: string[];
  techStack: string[];
}

export interface Solution {
  id: string;
  industry: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  techStack: string[];
  metrics?: string;
  link?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  clientFeedback: {
    comment: string;
    author: string;
    designation: string;
    avatar: string;
  };
}

export interface PricePlan {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: string;
  requirements: string[];
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}
