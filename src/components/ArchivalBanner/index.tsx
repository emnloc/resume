import React from 'react';
import { useIntl } from 'react-intl';
import { bannerMessages } from '../../messages';

const ArchivalBanner: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-full bg-surface-container-low p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-xl border border-surface-container-high/40 hover:border-primary/30 transition-all duration-300 shadow-[0_1px_2px_rgba(17,24,39,0.02)] animate-fade-up">
      <div className="flex items-center gap-space-sm flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          {formatMessage(bannerMessages.specimen)}
        </span>
        <span className="text-on-surface-variant font-label-mono-sm text-label-mono-sm">
          {formatMessage(bannerMessages.archiveRef)}
        </span>
        <span className="hidden sm:inline text-outline-variant font-label-mono-sm">•</span>
        <span className="text-on-surface-variant font-label-mono-sm text-label-mono-sm">
          {formatMessage(bannerMessages.protocolRef)}
        </span>
      </div>
      <div className="flex items-center gap-space-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold uppercase tracking-tight">
          {formatMessage(bannerMessages.statusAvailable)}
        </span>
      </div>
    </div>
  );
};

export default ArchivalBanner;
