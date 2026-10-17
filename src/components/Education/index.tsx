import React from 'react';
import { useIntl } from 'react-intl';
import { education } from '../../messages';
import UNAMLogo from '../../assets/unam.svg';

const Education: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="educacion">
      <div className="flex items-center justify-between pb-space-sm mb-space-lg bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(education.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(education.sectionIndex)}
        </span>
      </div>

      <div className="p-space-md bg-surface-container-low/50 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-surface-container-high/20 transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-sm group">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 ring-1 ring-surface-container-high transition-transform duration-300 group-hover:scale-105">
            <img src={UNAMLogo} alt="UNAM" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-space-xs mb-1 flex-wrap">
              <span className="font-label-mono-sm text-label-mono-sm text-primary font-bold uppercase">
                {formatMessage(education.degreeType)}
              </span>
              <span className="text-on-surface-variant font-label-mono-sm">•</span>
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                {formatMessage(education.years)}
              </span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface">
              {formatMessage(education.degree)}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {formatMessage(education.unam)} • {formatMessage(education.fes)}
            </p>
            <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-2 font-medium">
              {formatMessage(education.honors)}
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 self-start md:self-auto">
          <span className="px-3 py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm font-semibold text-on-surface uppercase">
            {formatMessage(education.credits)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
