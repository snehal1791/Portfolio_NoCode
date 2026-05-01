
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  challenge?: string;
  solution?: string;
  result?: string;
  highlights?: string[];
  snippets?: Record<string, string>;
  resultCards?: { label: string; value: string; color: string }[];
  isCaseStudy?: boolean;
  videoUrl?: string;
  awards?: string;
  gallery?: { url: string; caption: string }[];
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Workflow' | 'Database';
  icon: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}
