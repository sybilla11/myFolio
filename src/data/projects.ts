export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  secondaryUrl?: { label: string; url: string };
  private?: boolean;
  featured?: boolean;
  /** Gradient thumbnail color until real screenshots replace it — [from, to] */
  gradient: [string, string];
  monogram: string;
}

export const projects: Project[] = [
  {
    name: 'TRVLChamp',
    description:
      'Travel companion app — trip planning, real-time currency conversion, bill scanning, and place discovery.',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: 'https://trvlchamp-web.onrender.com',
    private: true,
    featured: true,
    gradient: ['#4f46e5', '#818cf8'],
    monogram: 'TC',
  },
  {
    name: 'monster-rolodex',
    description: 'A React app featuring display cards and live search filtering.',
    tech: ['JavaScript', 'React'],
    liveUrl: 'https://sybilla11.github.io/monster-rolodex/',
    repoUrl: 'https://github.com/sybilla11/monster-rolodex',
    gradient: ['#f97316', '#fb923c'],
    monogram: 'MR',
  },
  {
    name: 'widget-depot',
    description: 'A customizable widget storefront designed for any type of storage.',
    tech: ['React'],
    liveUrl: 'https://sybilla11.github.io/widget-depot',
    repoUrl: 'https://github.com/sybilla11/widget-depot',
    gradient: ['#0ea5e9', '#38bdf8'],
    monogram: 'WD',
  },
  {
    name: 'Salt of the Earth',
    description: 'A full-stack religious app — frontend and API.',
    tech: ['TypeScript'],
    repoUrl: 'https://github.com/sybilla11/SOE-app',
    secondaryUrl: { label: 'API', url: 'https://github.com/sybilla11/SOE-api' },
    gradient: ['#059669', '#34d399'],
    monogram: 'SE',
  },
  {
    name: 'codePrepHub',
    description: 'A hub for coding interview prep resources and practice.',
    tech: ['JavaScript'],
    repoUrl: 'https://github.com/sybilla11/codePrepHub',
    gradient: ['#db2777', '#f472b6'],
    monogram: 'CP',
  },
  {
    name: 'KSPP Studio',
    description: 'A command-center dashboard with a NestJS/PostgreSQL API and a shared Angular component library.',
    tech: ['Angular', 'NestJS'],
    private: true,
    gradient: ['#7c3aed', '#a78bfa'],
    monogram: 'KS',
  },
];
