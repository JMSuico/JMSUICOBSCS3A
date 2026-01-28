
import { StudentProfile, Skill, Milestone, Project } from './types';

export const STUDENTS: StudentProfile[] = [
  {
    id: '1',
    name: 'Jhon Mark A. Suico',
    role: 'Full Stack Engineer',
    bio: 'Specializing in scalable architecture and AI integration. Class Lead for BSCS 3-A.',
    tags: ['React', 'Node.js', 'Gemini API', 'TypeScript'],
    imageUrl: 'JMSUICO.jpg',
    portfolioUrl: '#'
  },
  {
    id: '2',
    name: 'Sarah Jane Chen',
    role: 'Frontend Specialist',
    bio: 'Passionate about creating accessible and pixel-perfect user interfaces with modern CSS.',
    tags: ['Vue', 'Tailwind', 'Figma', 'JavaScript'],
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    portfolioUrl: '#'
  },
  {
    id: '3',
    name: 'Alex Rivera',
    role: 'Backend Developer',
    bio: 'Focused on high-performance API design and database optimization strategies.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    portfolioUrl: '#'
  },
  {
    id: '4',
    name: 'Maria Santos',
    role: 'UI/UX Designer & Dev',
    bio: 'Bridging the gap between aesthetic design and functional frontend code.',
    tags: ['React', 'Three.js', 'Framer Motion', 'UI Design'],
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    portfolioUrl: '#'
  },
  {
    id: '5',
    name: 'David Wilson',
    role: 'Data Scientist',
    bio: 'BSCS student exploring the intersection of machine learning and web analytics.',
    tags: ['Python', 'Pandas', 'FastAPI', 'TensorFlow'],
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    portfolioUrl: '#'
  },
  {
    id: '6',
    name: 'Elena Rodriguez',
    role: 'Mobile Developer',
    bio: 'Crafting seamless cross-platform mobile experiences for the next generation.',
    tags: ['Flutter', 'Firebase', 'Dart', 'Kotlin'],
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    portfolioUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'PostgreSQL', level: 70, category: 'Backend' },
  { name: 'Git', level: 88, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'Tools' },
  { name: 'Leadership', level: 92, category: 'Soft Skills' }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2022',
    title: 'Hub Inception',
    description: 'The idea for a centralized class directory was born to showcase BSCS excellence.'
  },
  {
    year: '2023',
    title: 'First 20 Portfolios',
    description: 'Successfully onboarded the first wave of students with active external links.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Added Gemini-powered bio enhancement to help students stand out to recruiters.'
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    name: 'Nexus Cloud API',
    description: 'High-performance edge gateway designed for multi-region microservices synchronization.',
    githubUrl: 'https://github.com',
    tech: ['Node.js', 'Redis', 'Docker']
  },
  {
    name: 'EcoTrack Mobile',
    description: 'A cross-platform app for monitoring personal carbon footprints using real-time data.',
    githubUrl: 'https://github.com',
    tech: ['Flutter', 'Firebase', 'Dart']
  },
  {
    name: 'AI Lens Studio',
    description: 'Integrated workspace for training and fine-tuning computer vision models in the browser.',
    githubUrl: 'https://github.com',
    tech: ['React', 'TensorFlow.js', 'Python']
  }
];
