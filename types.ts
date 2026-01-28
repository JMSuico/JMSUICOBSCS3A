
export interface StudentProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  imageUrl: string;
  portfolioUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  tech: string[];
}
