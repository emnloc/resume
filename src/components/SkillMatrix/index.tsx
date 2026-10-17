import React from 'react';
import { useIntl } from 'react-intl';
import { skillsMessages } from '../../messages';

const SkillMatrix: React.FC = () => {
  const { formatMessage } = useIntl();

  const groups = [
    {
      title: formatMessage(skillsMessages.group1Title),
      type: formatMessage(skillsMessages.group1Type),
      highlightSkills: ['JavaScript (ES6+)', 'TypeScript', 'Node.js'],
      otherSkills: ['PHP', 'Python', 'SQL', 'C#', 'Go'],
    },
    {
      title: formatMessage(skillsMessages.group2Title),
      type: formatMessage(skillsMessages.group2Type),
      highlightSkills: ['React (18/19)', 'Next.js', 'TailwindCSS'],
      otherSkills: ['Redux / Zustand', 'WebSockets', 'HTML5 / Modern CSS', 'Vite', 'Micro-frontends'],
    },
    {
      title: formatMessage(skillsMessages.group3Title),
      type: formatMessage(skillsMessages.group3Type),
      highlightSkills: ['Design Systems', 'Component-Driven Dev'],
      otherSkills: ['Event-Driven Architecture', 'REST & GraphQL APIs', 'Fault Tolerance & Performance', 'Domain-Driven Design'],
    },
    {
      title: formatMessage(skillsMessages.group4Title),
      type: formatMessage(skillsMessages.group4Type),
      highlightSkills: ['PostgreSQL', 'Docker', 'Git / GitHub CI'],
      otherSkills: ['MySQL', 'Redis Cluster', 'Linux / Nginx', 'Webpack', 'Jest / Testing'],
    },
  ];

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="habilidades">
      <div className="flex items-center justify-between pb-space-sm mb-space-lg bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(skillsMessages.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(skillsMessages.sectionIndex)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {groups.map((group, index) => (
          <div
            key={index}
            className="p-space-md bg-surface-container-low/60 rounded-lg border border-surface-container-high/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-sm group">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface transition-colors group-hover:text-primary">
                {group.title}
              </span>
              <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold">
                {group.type}
              </span>
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {group.highlightSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-surface-container-highest font-label-mono text-label-mono text-on-surface font-semibold ring-1 ring-surface-container-high/40 transition-all duration-200 hover:scale-105 hover:bg-surface-container hover:text-primary cursor-default">
                  {skill}
                </span>
              ))}
              {group.otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-surface-container-highest font-label-mono text-label-mono text-on-surface transition-all duration-200 hover:scale-105 hover:bg-surface-container hover:text-primary cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMatrix;
