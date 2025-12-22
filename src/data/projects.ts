import caesarCipherImage from '@/assets/images/caesar-cipher_py-project.png';

export type Project = {
  name: string;
  description?: string;
  image: string;
  imageMobile?: string;
  liveUrl: string;
  codeUrl: string;
  techStack: string[];
  category: 'demo' | 'personal' | 'client';
  source?:
    | 'tutorial'
    | 'Frontend Mentor'
    | 'freeCodeCamp'
    | 'Codecademy'
    | 'Udemy'
    | 'self-directed';
  date: Date;
  order?: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Caesar Cipher',
    image: caesarCipherImage.src,
    liveUrl: 'https://hbabb.github.io/freeCodeCamp/python/caesar_cipher/',
    codeUrl:
      'https://github.com/hbabb/freecodecamp/tree/master/python/caesar_cipher',
    techStack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'personal',
    source: 'freeCodeCamp',
    date: new Date('2025-12-21'),
    order: 1,
    featured: true,
  },
  {
    name: 'Design Portfolio',
    image: '/images/thumbnail-project-1-large.webp',
    imageMobile: '/images/thumbnail-project-1-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS'],
    category: 'demo',
    date: new Date('2025-12-16'),
  },
  {
    name: 'E-Learning Landing Page',
    image: '/images/thumbnail-project-2-large.webp',
    imageMobile: '/images/thumbnail-project-2-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS'],
    category: 'demo',
    date: new Date('2025-12-16'),
    order: 2,
    featured: true,
  },
  {
    name: 'Todo Web App',
    image: '/images/thumbnail-project-3-large.webp',
    imageMobile: '/images/thumbnail-project-3-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS', 'javascript'],
    category: 'demo',
    date: new Date('2025-12-16'),
    order: 3,
    featured: true,
  },
  {
    name: 'Entertainment Web App',
    image: '/images/thumbnail-project-4-large.webp',
    imageMobile: '/images/thumbnail-project-4-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS', 'javascript'],
    category: 'demo',
    date: new Date('2025-12-16'),
    order: 4,
    featured: true,
  },
  {
    name: 'Memory Game',
    image: '/images/thumbnail-project-5-large.webp',
    imageMobile: '/images/thumbnail-project-5-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS', 'javascript'],
    category: 'demo',
    date: new Date('2025-12-16'),
    order: 5,
    featured: true,
  },
  {
    name: 'Art Gallery Showcase',
    image: '/images/thumbnail-project-6-large.webp',
    imageMobile: '/images/thumbnail-project-6-small.webp',
    liveUrl: '/demo-project',
    codeUrl: '/demo-project',
    techStack: ['HTML', 'CSS', 'javascript'],
    category: 'demo',
    date: new Date('2025-12-16'),
    order: 6,
    featured: true,
  },
];
