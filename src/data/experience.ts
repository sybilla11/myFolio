export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'BILL',
    role: 'Staff Software Engineer',
    location: 'San Jose, CA',
    dates: 'Jan 2021 – Present',
    summary:
      'Own frontend architecture across international products and Banking-as-a-Service — reusable component patterns and design-system-driven development supporting 6–8+ major features per product domain. Led the internationalization framework behind the Canadian market launch and multi-currency receivables. Mentor ~6 frontend engineers.',
    tech: ['Angular', 'React', 'TypeScript', 'RxJS', 'Node.js'],
  },
  {
    company: 'Bank of America',
    role: 'Senior Application Developer — Lead Full-Stack Developer & Architect',
    location: 'Westlake Village, CA',
    dates: 'Jul 2018 – Jun 2020',
    summary:
      'Designed and delivered the end-to-end frontend architecture for a centralized Campaign Management platform, built on a microservices framework connecting Angular/React apps to backend services and enterprise data platforms. Owned database architecture; led design reviews across onshore/offshore teams.',
    tech: ['Angular', 'React', 'Java', 'Spring Boot', 'GemFire'],
  },
  {
    company: 'Intuit',
    role: 'Software Engineer',
    location: 'Woodland Hills, CA',
    dates: 'Sep 2017 – Dec 2017',
    summary: 'Backend financial data services — designed and consumed REST APIs focused on scalability and security.',
    tech: ['Java', 'REST APIs'],
  },
  {
    company: 'Vanguard',
    role: 'Java Developer',
    location: 'Charlotte, NC',
    dates: 'Mar 2015 – Oct 2016',
    summary: 'Enterprise web applications and APIs for institutional investment platforms, agile/TDD practices.',
    tech: ['Java', 'TDD'],
  },
];
