export interface Job {
  id: string;
  title: string;
  company: string;
  from: string;
  to: string;
  location: string;
  badge: string;
  tech: string[];
}

export const jobs: Record<string, Job> = {
  compago: {
    id: 'compago',
    title: 'Senior Frontend Developer',
    company: 'Compago',
    from: '2023-02-01T00:00Z',
    to: '2024-06-30T00:00Z',
    location: 'Sede Central / Remoto',
    badge: 'FULL-TIME STAFF',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'REST APIs'],
  },
  bitso: {
    id: 'bitso',
    title: 'Senior React Engineer',
    company: 'Bitso',
    from: '2020-08-01T00:00Z',
    to: '2022-11-30T00:00Z',
    location: 'CDMX / Remoto',
    badge: 'SENIOR ENGINEER',
    tech: ['React 18', 'TypeScript', 'WebSockets', 'Redux', 'Jest', 'Micro-frontends'],
  },
  wondersauce: {
    id: 'wondersauce',
    title: 'Senior Frontend Developer',
    company: 'Wondersauce',
    from: '2020-06-01T00:00Z',
    to: '2020-10-30T00:00Z',
    location: 'NYC / Remoto',
    badge: 'SENIOR CONTRACTOR',
    tech: ['React', 'JavaScript ES6+', 'CSS Modules', 'Component Library', 'Figma'],
  },
  boletia: {
    id: 'boletia',
    title: 'Lead Frontend Developer',
    company: 'Boletia',
    from: '2017-06-01T00:00Z',
    to: '2020-03-30T00:00Z',
    location: 'CDMX HQ',
    badge: 'LEAD ARCHITECT',
    tech: ['React', 'Next.js', 'Design Systems', 'Ruby on Rails', 'PostgreSQL', 'Webpack'],
  },
  expansion: {
    id: 'expansion',
    title: 'Senior Software Engineer',
    company: 'Grupo Expansión',
    from: '2014-12-01T00:00Z',
    to: '2017-06-30T00:00Z',
    location: 'CDMX',
    badge: 'SENIOR ENGINEER',
    tech: ['WordPress', 'PHP', 'Java', 'MySQL', 'High-Traffic CMS', 'Varnish'],
  },
  globant: {
    id: 'globant',
    title: 'SSr Adv Web UI Developer',
    company: 'Globant',
    from: '2014-06-01T00:00Z',
    to: '2014-12-30T00:00Z',
    location: 'CDMX Labs',
    badge: 'CONSULTANT',
    tech: ['React', 'Backbone.js', 'Drupal', 'SVN', 'JavaScript'],
  },
  bnn: {
    id: 'bnn',
    title: 'Senior Developer',
    company: 'BNN Mexico',
    from: '2010-09-01T00:00Z',
    to: '2014-06-30T00:00Z',
    location: 'CDMX HQ',
    badge: 'DEVELOPER',
    tech: ['PHP', 'C#', '.NET', 'MySQL', 'SQL Server', 'ActionScript'],
  },
  voit: {
    id: 'voit',
    title: 'Multimedia Developer',
    company: 'Voit',
    from: '2009-08-01T00:00Z',
    to: '2010-09-30T00:00Z',
    location: 'CDMX Lab',
    badge: 'DEVELOPER',
    tech: ['CodeIgniter', 'PHP', 'MySQL', 'Flash', 'Interactive Media'],
  },
};

export default jobs;

