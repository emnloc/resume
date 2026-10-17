import React from 'react';
import { useIntl } from 'react-intl';
import { experience } from '../../messages';
import jobs from './jobs';

const Experience: React.FC = () => {
  const { formatMessage, formatDate } = useIntl();

  const getBullets = (jobKey: string): string[] => {
    const bullets: string[] = [];
    const b1 = `${jobKey}Bullet1` as keyof typeof experience;
    const b2 = `${jobKey}Bullet2` as keyof typeof experience;
    const b3 = `${jobKey}Bullet3` as keyof typeof experience;

    if (experience[b1]) bullets.push(formatMessage(experience[b1]));
    if (experience[b2]) bullets.push(formatMessage(experience[b2]));
    if (experience[b3]) bullets.push(formatMessage(experience[b3]));

    return bullets;
  };

  const jobKeys = Object.keys(jobs);

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="experiencia">
      <div className="flex items-center justify-between pb-space-sm mb-space-lg bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(experience.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(experience.sectionIndex)}
        </span>
      </div>

      <div className="relative flex flex-col gap-space-xl">
        {jobKeys.map((key) => {
          const job = jobs[key];
          if (!job) return null;

          const summaryKey = key as keyof typeof experience;
          const bullets = getBullets(key);

          const fromYear = formatDate(job.from, { year: 'numeric' });
          const toYear = job.to ? formatDate(job.to, { year: 'numeric' }) : 'PRESENTE';

          return (
            <article key={key} className="flex flex-col md:flex-row gap-space-md group">
              {/* TIMELINE METADATA */}
              <div className="md:w-44 shrink-0 flex flex-col">
                <span className="font-label-mono text-label-mono text-primary font-bold transition-transform duration-200 group-hover:translate-x-0.5">
                  {fromYear} — {toYear}
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase mt-1">
                  {job.location}
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-center font-label-mono-sm text-label-mono-sm rounded bg-surface-container text-on-surface font-medium self-start md:self-auto transition-colors group-hover:bg-surface-container-high">
                  {job.badge}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="flex-1 bg-surface-container-low/60 p-space-md rounded-lg border border-surface-container-high/20 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-surface-container-low group-hover:shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-9 w-9 rounded-full bg-white object-cover ring-1 ring-surface-container-high shrink-0 transition-transform duration-300 group-hover:scale-105"
                      src={`/companies/${job.id}.jpeg`}
                      alt={job.company}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = `https://raw.githubusercontent.com/emnloc/resume/main/public/companies/${job.id}.jpeg`;
                        } else {
                          target.style.display = 'none';
                        }
                      }}
                    />
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
                        {job.title}
                      </h3>
                      <span className="font-label-mono text-label-mono text-on-surface-variant font-semibold">
                        {job.company}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface mb-space-md leading-relaxed mt-2">
                  {formatMessage(experience[summaryKey])}
                </p>

                {bullets.length > 0 && (
                  <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant mb-space-md">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-space-sm group/li">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 transition-transform duration-200 group-hover/li:scale-150"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-space-sm">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface rounded font-medium transition-all duration-200 hover:scale-105 hover:bg-surface-container-highest hover:text-primary cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
