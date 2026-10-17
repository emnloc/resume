import React from 'react';
import { useIntl } from 'react-intl';
import { accreditationMessages } from '../../messages';

const Accreditation: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md animate-fade-up animation-delay-300">
      <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold tracking-wider block mb-space-md">
        {formatMessage(accreditationMessages.title)}
      </span>
      <div className="flex flex-col gap-space-sm">
        <div className="p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm transition-all duration-200 hover:translate-x-1 hover:bg-surface-container group">
          <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5 transition-transform group-hover:scale-110">verified</span>
          <div>
            <p className="font-headline-sm text-headline-sm text-on-surface">
              {formatMessage(accreditationMessages.item1Title)}
            </p>
            <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              {formatMessage(accreditationMessages.item1Desc)}
            </p>
          </div>
        </div>

        <div className="p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm transition-all duration-200 hover:translate-x-1 hover:bg-surface-container group">
          <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5 transition-transform group-hover:scale-110">shield</span>
          <div>
            <p className="font-headline-sm text-headline-sm text-on-surface">
              {formatMessage(accreditationMessages.item2Title)}
            </p>
            <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              {formatMessage(accreditationMessages.item2Desc)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
