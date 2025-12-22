export type Job = {
  role: string;
  company: string;
  location: string;
  years: string;
  longDescription?: string[];
  shortDescription?: string[];
};

export type Volunteer = {
  role: string;
  company: string;
  location: string;
  years: string;
  longDescription?: string[];
};

export type Education = {
  school: string;
  program: string;
  location: string;
  years?: string;
  description?: string;
};

export const jobs: Job[] = [
  {
    role: 'Geospatial Developer / DevOps Engineer',
    company: 'HB Consultants, LLC',
    location: 'Inman, SC',
    years: '2024 - Present',
    longDescription: [],
    shortDescription: [
      'Built and deployed custom web applications using Python, JavaScript/TypeScript, Next.js, and NestJS, focusing on backend logic, API development, and responsive frontend for client needs.',
      'Managed full-stack deployments on AWS and Digital Ocean, including domain setup, hosting, CI/CD pipelines, and containerization with Docker to ensure high availability and scalability.',
      'Automated geospatial workflows for land surveyors using Python scripts and LISP routines in Civil 3D, reducing manual processing time by up to 50% and improving data accuracy.',
      'Provided DevOps consulting, including system integrations, infrastructure automation, and uptime optimization for technical operations.',
    ],
  },
  {
    role: 'Sr. CAD Technician & Workflow Engineer',
    company: 'Civil & Environmental Consultants, Inc.',
    location: 'Greenville, SC',
    years: 'November 2022 - August 2024',
    longDescription: [],
    shortDescription: [
      'Engineered automated survey workflows with Python scripting and AI tools, resulting in a 400% revenue increase through faster data processing and systems.',
      'Led Trimble systems integration and training across offices, accelerating adoption by automating data pipelines and ensuring consistent backend data handling.',
      'Optimized LiDAR data processing pipelines by 150% using standardized scripts and AI, enhancing deliverable quality and system performance.',
      'Developed CAD standards, automation scripts, and documentation; supervised teams to maintain reliable, scalable project workflows.',
    ],
  },
  {
    role: 'Sr. CAD Technician & Systems Integrator',
    company: 'EAS Professionals, Inc.',
    location: 'Greenville, SC',
    years: 'December 2017 - November 2022',
    longDescription: [],
    shortDescription: [
      'Modernized CAD systems by upgrading tools, automating workflows with scripts, and standardizing processes, boosting production speed and team efficiency.',
      'Directed hardware/software integrations and GIS deployments for geotechnical teams, creating standardized data pipelines that improved field-office coordination and autonomy.',
      'Led transition to Trimble survey systems, developing custom scripts for data processing and providing staff training to minimize downtime and enhance backend accuracy.',
      'Established automated data workflows using Python and GIS tools, enabling seamless integration between field devices and office systems.',
    ],
  },
  {
    role: 'CNC Machinist A',
    company: 'GE Verona (formerly GE Power)',
    location: 'Greenville, SC',
    years: 'May 2016 - December 2017',
    longDescription: [],
  },
  {
    role: 'CAD Specialist | 3D Machine Control Modeler',
    company: 'Azimuth Control, Inc.',
    location: 'Greenville, SC',
    years: 'May 2013 - May 2016',
    longDescription: [],
  },
  {
    role: 'Estimator | Survey CAD Technician',
    company: 'Morgan Corp.',
    location: 'Duncan, SC',
    years: 'February 2007 - May 2013',
    longDescription: [],
  },
  {
    role: 'CNC Machinist Intern',
    company: 'SEW Eurodrive',
    location: 'Lyman, SC',
    years: 'June 2006 - February 2007',
    longDescription: [],
  },
  {
    role: 'CNC Machinist',
    company: 'A. Berger',
    location: 'Spartanburg, SC',
    years: 'June 2005 - June 2006',
    longDescription: [],
  },
  {
    role: 'Assets Protection | Risk Management Associate',
    company: "Denny's",
    location: 'Spartanburg, SC',
    years: 'June 2004 - June 2005',
    longDescription: [],
  },
  {
    role: 'Unarmed Security Guard',
    company: 'Spartan Security',
    location: 'Lyman, SC',
    years: 'June 2003 - June 2004',
    longDescription: [],
  },
];

export const volunteers: Volunteer[] = [
  {
    role: 'Technical Consultant | Web Developer',
    company: 'Motlow Creek Baptist Church',
    location: 'Campobello, SC',
    years: 'January 2011 - Present',
    longDescription: [
      "As the volunteer technical consultant for Motlow Creek Baptist Church, I manage the church's audio-visual systems and digital infrastructure. I serve as the lead audio engineer for services and oversee livestream production. I maintain the network, support staff with technical issues, and manage the church's online presence. I also created backup systems to ensure reliability during services and developed documentation and training resources to enable other volunteers to assist, enhancing the sustainability of the church's tech operations.",
    ],
  },
  {
    role: 'Technical Operations & Maintenance',
    company: 'Family Farm',
    location: 'Campobello, SC',
    years:
      'January 1998 - December 2017 (with informal experience from early childhood)',
    longDescription: [
      'Starting in early childhood, I became deeply involved in the daily operations of our family farm. I operated and maintained a wide range of agricultural equipment, managed irrigation systems, and performed repairs to ensure uptime and operational efficiency. I introduced improvements to reduce downtime and applied technology solutions to streamline core processes. This long-term experience shaped my understanding of technical systems, equipment maintenance, and problem-solving under real-world conditions.',
    ],
  },
  {
    role: 'Technical Assistant | Jr. Electrician',
    company: 'B&B Repair',
    location: 'Campobello, SC',
    years: 'May 2003 - December 2006',
    longDescription: [
      'At this family-owned business, I worked hands-on with electrical, mechanical, and control systems across residential, commercial, and industrial settings. I performed electrical installations and repairs, developed preventive maintenance routines that improved equipment reliability, and supported cost-saving efforts. I also troubleshot complex systems including motor controls and PLCs, and collaborated with senior technicians to implement clear maintenance documentation and repair procedures.',
    ],
  },
];

export const educations: Education[] = [
  {
    school: 'Codecademy',
    program: 'Computer Science',
    location: 'Online',
    years: 'Ongoing',
    description:
      'A self-paced curriculum covering the basics of Computer Science. Master Python while learning data structures, algorithms, and more!',
  },
  {
    school: 'Spartanburg Community College',
    program: 'Civil Engineering Technology',
    location: 'Spartanburg, SC',
    years: 'Completed: Associates Degree',
    description:
      'Applied Science in infrastructure design, surveying, materials, and construction management',
  },
  {
    school: 'Spartanburg Community College',
    program: 'Machine Tool Technology',
    location: 'Spartanburg, SC',
    years: 'Completed: Associates Degree',
    description:
      'Applied Science in setup/operation of machine tools and computer numerical control',
  },
];
