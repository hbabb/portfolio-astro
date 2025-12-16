export type Skill = {
  name: string;
  icon: string;
  domain:
    | 'os'
    | 'software'
    | 'cloud'
    | 'dev'
    | 'languages'
    | 'frameworks'
    | 'database';
  proficiency: 'expert' | 'proficient' | 'familiar';
};

export type GroupBy = 'domain' | 'proficiency';

export type GroupedSkills = Record<string, Skill[]>;

export const groupLabels: Record<string, string> = {
  os: 'Operating Systems',
  software: 'Professional Software',
  cloud: 'Cloud Services',
  dev: 'Development Tools',
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  database: 'Databases',
};

export const skills: Skill[] = [
  // Operating Systems
  {
    name: 'Windows',
    icon: 'skill-icons:windows-dark',
    domain: 'os',
    proficiency: 'expert',
  },
  {
    name: 'MacOS',
    icon: 'skill-icons:apple-dark',
    domain: 'os',
    proficiency: 'proficient',
  },
  {
    name: 'Kali Linux',
    icon: 'skill-icons:kali-dark',
    domain: 'os',
    proficiency: 'familiar',
  },
  {
    name: 'Ubuntu',
    icon: 'skill-icons:ubuntu-dark',
    domain: 'os',
    proficiency: 'expert',
  },
  {
    name: 'Debian',
    icon: 'skill-icons:debian-dark',
    domain: 'os',
    proficiency: 'proficient',
  },
  {
    name: 'Arch Linux',
    icon: 'skill-icons:arch-dark',
    domain: 'os',
    proficiency: 'proficient',
  },

  // Professional Software
  {
    name: 'Trimble',
    icon: 'simple-icons:trimble',
    domain: 'software',
    proficiency: 'expert',
  },
  {
    name: 'QGIS',
    icon: 'cib:qgis',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Revit',
    icon: 'simple-icons:autodeskrevit',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'AutoCAD',
    icon: 'skill-icons:autocad-dark',
    domain: 'software',
    proficiency: 'expert',
  },
  {
    name: 'SketchUp',
    icon: 'simple-icons:sketchup',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Blender',
    icon: 'skill-icons:blender-dark',
    domain: 'software',
    proficiency: 'familiar',
  },
  {
    name: 'Adobe Photoshop',
    icon: 'skill-icons:photoshop',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Adobe Illustrator',
    icon: 'skill-icons:illustrator',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Adobe InDesign',
    icon: 'logos:adobe-indesign',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Adobe Premiere',
    icon: 'skill-icons:premiere',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Adobe After Effects',
    icon: 'skill-icons:aftereffects',
    domain: 'software',
    proficiency: 'familiar',
  },
  {
    name: 'Adobe Lightroom',
    icon: 'logos:adobe-lightroom',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Figma',
    icon: 'skill-icons:figma-dark',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Affinity Publisher',
    icon: 'vscode-icons:file-type-affinitypublisher',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Affinity Photo',
    icon: 'vscode-icons:file-type-affinityphoto',
    domain: 'software',
    proficiency: 'proficient',
  },
  {
    name: 'Affinity Designer',
    icon: 'vscode-icons:file-type-affinitydesigner',
    domain: 'software',
    proficiency: 'proficient',
  },

  // Cloud Platforms
  {
    name: 'Amazon Web Services (AWS)',
    icon: 'skill-icons:aws-dark',
    domain: 'cloud',
    proficiency: 'familiar',
  },
  {
    name: 'Microsoft Azure',
    icon: 'skill-icons:azure-dark',
    domain: 'cloud',
    proficiency: 'familiar',
  },
  {
    name: 'Google Cloud Platform (GCP)',
    icon: 'skill-icons:gcp-dark',
    domain: 'cloud',
    proficiency: 'familiar',
  },
  {
    name: 'Digital Ocean',
    icon: 'logos:digital-ocean',
    domain: 'cloud',
    proficiency: 'proficient',
  },
  {
    name: 'Hostinger',
    icon: 'simple-icons:hostinger',
    domain: 'cloud',
    proficiency: 'proficient',
  },
  {
    name: 'Vercel',
    icon: 'skill-icons:vercel-dark',
    domain: 'cloud',
    proficiency: 'proficient',
  },
  {
    name: 'Netlify',
    icon: 'logos:netlify-icon',
    domain: 'cloud',
    proficiency: 'proficient',
  },

  // Development Tools
  {
    name: 'Neovim',
    icon: 'skill-icons:neovim-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Visual Studio Code',
    icon: 'skill-icons:vscode-dark',
    domain: 'dev',
    proficiency: 'expert',
  },
  {
    name: 'IntelliJ IDEA',
    icon: 'skill-icons:idea-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'PyCharm',
    icon: 'skill-icons:pycharm-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'WebStorm',
    icon: 'skill-icons:webstorm-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Sublime Text',
    icon: 'skill-icons:sublime-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Notion',
    icon: 'skill-icons:notion-dark',
    domain: 'dev',
    proficiency: 'familiar',
  },
  {
    name: 'Obsidian',
    icon: 'skill-icons:obsidian-dark',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Git',
    icon: 'skill-icons:git',
    domain: 'dev',
    proficiency: 'expert',
  },
  {
    name: 'GitHub',
    icon: 'skill-icons:github-dark',
    domain: 'dev',
    proficiency: 'expert',
  },
  {
    name: 'Docker',
    icon: 'skill-icons:docker',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Postman',
    icon: 'skill-icons:postman',
    domain: 'dev',
    proficiency: 'proficient',
  },
  {
    name: 'Sentry',
    icon: 'skill-icons:sentry',
    domain: 'dev',
    proficiency: 'familiar',
  },

  // Languages
  {
    name: 'Arduino',
    icon: 'skill-icons:arduino',
    domain: 'languages',
    proficiency: 'familiar',
  },
  {
    name: 'Bash',
    icon: 'skill-icons:bash-dark',
    domain: 'languages',
    proficiency: 'proficient',
  },
  {
    name: 'HTML5',
    icon: 'skill-icons:html',
    domain: 'languages',
    proficiency: 'expert',
  },
  {
    name: 'CSS3',
    icon: 'skill-icons:css',
    domain: 'languages',
    proficiency: 'expert',
  },
  {
    name: 'JavaScript',
    icon: 'skill-icons:javascript',
    domain: 'languages',
    proficiency: 'proficient',
  },
  {
    name: 'TypeScript',
    icon: 'skill-icons:typescript',
    domain: 'languages',
    proficiency: 'proficient',
  },
  {
    name: 'Python',
    icon: 'skill-icons:python-dark',
    domain: 'languages',
    proficiency: 'proficient',
  },
  {
    name: 'Lua',
    icon: 'skill-icons:lua-dark',
    domain: 'languages',
    proficiency: 'familiar',
  },
  {
    name: 'Markdown',
    icon: 'skill-icons:markdown-dark',
    domain: 'languages',
    proficiency: 'expert',
  },

  // Frameworks
  {
    name: 'Angular',
    icon: 'skill-icons:angular-dark',
    domain: 'frameworks',
    proficiency: 'familiar',
  },
  {
    name: 'Astro',
    icon: 'skill-icons:astro',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'React',
    icon: 'skill-icons:react-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'Node.js',
    icon: 'skill-icons:nodejs-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'Express.js',
    icon: 'skill-icons:expressjs-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'Tailwind CSS',
    icon: 'skill-icons:tailwindcss-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'Sass',
    icon: 'skill-icons:sass',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'NestJS',
    icon: 'skill-icons:nestjs-dark',
    domain: 'frameworks',
    proficiency: 'familiar',
  },
  {
    name: 'Vite',
    icon: 'skill-icons:vite-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'Next.js',
    icon: 'skill-icons:nextjs-dark',
    domain: 'frameworks',
    proficiency: 'proficient',
  },
  {
    name: 'FastAPI',
    icon: 'skill-icons:fastapi',
    domain: 'frameworks',
    proficiency: 'familiar',
  },
  {
    name: 'Jest',
    icon: 'skill-icons:jest',
    domain: 'frameworks',
    proficiency: 'familiar',
  },
  {
    name: 'Vitest',
    icon: 'skill-icons:vitest-dark',
    domain: 'frameworks',
    proficiency: 'familiar',
  },

  // Databases
  {
    name: 'MongoDB',
    icon: 'skill-icons:mongodb',
    domain: 'database',
    proficiency: 'familiar',
  },
  {
    name: 'PostgreSQL',
    icon: 'skill-icons:postgresql-dark',
    domain: 'database',
    proficiency: 'proficient',
  },
  {
    name: 'NeonDB',
    icon: 'logos:neon-icon',
    domain: 'database',
    proficiency: 'proficient',
  },
  {
    name: 'SQLite',
    icon: 'skill-icons:sqlite',
    domain: 'database',
    proficiency: 'familiar',
  },
  {
    name: 'TursoDB',
    icon: 'simple-icons:turso',
    domain: 'database',
    proficiency: 'familiar',
  },
  {
    name: 'MySQL',
    icon: 'skill-icons:mysql-dark',
    domain: 'database',
    proficiency: 'familiar',
  },
];
