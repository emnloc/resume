import React from 'react';
import { useIntl } from 'react-intl';
import { projectsMessages } from '../../messages';

const ReferenceProjects: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="proyectos">
      <div className="flex items-center justify-between pb-space-sm mb-space-lg bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(projectsMessages.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(projectsMessages.sectionIndex)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {/* PROJECT 1 */}
        <div className="p-space-lg bg-surface-container-low/50 rounded-lg flex flex-col justify-between border border-surface-container-high/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md group">
          <div>
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-mono text-label-mono text-primary font-bold uppercase">
                {formatMessage(projectsMessages.p1Sub)}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface font-semibold transition-colors group-hover:bg-surface-container-high">
                {formatMessage(projectsMessages.p1Badge)}
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-2 transition-colors group-hover:text-primary">
              {formatMessage(projectsMessages.p1Title)}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              {formatMessage(projectsMessages.p1Desc)}
            </p>
          </div>
          <div className="pt-space-md flex items-center justify-between border-t border-surface-container-high/30 mt-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-semibold">
                {formatMessage(projectsMessages.p1Tech)}
              </span>
            </div>
            <a
              className="font-label-mono text-label-mono text-primary hover:underline flex items-center gap-1 font-bold group/link"
              href="https://github.com/emnloc"
              target="_blank"
              rel="noreferrer">
              <span>{formatMessage(projectsMessages.p1Action)}</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="p-space-lg bg-surface-container-low/50 rounded-lg flex flex-col justify-between border border-surface-container-high/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md group">
          <div>
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-mono text-label-mono text-primary font-bold uppercase">
                {formatMessage(projectsMessages.p2Sub)}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface font-semibold transition-colors group-hover:bg-surface-container-high">
                {formatMessage(projectsMessages.p2Badge)}
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-2 transition-colors group-hover:text-primary">
              {formatMessage(projectsMessages.p2Title)}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
              {formatMessage(projectsMessages.p2Desc)}
            </p>
          </div>
          <div className="pt-space-md flex items-center justify-between border-t border-surface-container-high/30 mt-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-semibold">
                {formatMessage(projectsMessages.p2Tech)}
              </span>
            </div>
            <a
              className="font-label-mono text-label-mono text-primary hover:underline flex items-center gap-1 font-bold group/link"
              href="https://github.com/emnloc"
              target="_blank"
              rel="noreferrer">
              <span>{formatMessage(projectsMessages.p2Action)}</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceProjects;
