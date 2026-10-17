import React from 'react';
import { useIntl } from 'react-intl';
import { profileMessages } from '../../messages';

const ProfileCard: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md animate-fade-up animation-delay-100 group">
      <div className="flex items-start justify-between gap-space-md">
        <div>
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold tracking-widest block mb-1">
            {formatMessage(profileMessages.dossierId)}
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            {formatMessage(profileMessages.name)}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {formatMessage(profileMessages.role)}
          </p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary transition-transform duration-300 group-hover:scale-110">
          <span className="material-symbols-outlined text-2xl">memory</span>
        </div>
      </div>

      {/* POKEDEX SPECIMEN BADGE & TELEMETRY SVG */}
      <div className="mt-space-md p-space-md bg-surface-container-low rounded-lg group/hw cursor-default transition-colors hover:bg-surface-container">
        <div className="flex items-center justify-between mb-2">
          <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant font-semibold">
            {formatMessage(profileMessages.hwLabel)}
          </span>
          <span className="font-label-mono-sm text-label-mono-sm text-primary font-bold">
            {formatMessage(profileMessages.hwUnit)}
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <svg className="w-8 h-8 text-primary shrink-0 transition-transform duration-500 group-hover/hw:rotate-45" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"></circle>
            <path d="M2 16H10.5M21.5 16H30" stroke="currentColor" strokeWidth="2"></path>
            <circle cx="16" cy="16" r="5.5" stroke="currentColor" strokeWidth="2"></circle>
            <circle cx="16" cy="16" fill="currentColor" r="2.5" className="animate-pulse origin-center"></circle>
          </svg>
          <div className="flex flex-col min-w-0">
            <span className="font-label-mono text-label-mono font-bold text-on-surface truncate">
              {formatMessage(profileMessages.kernelName)}
            </span>
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              {formatMessage(profileMessages.kernelDesc)}
            </span>
          </div>
        </div>
      </div>

      {/* DIRECT CONTACT MATRIX */}
      <div className="mt-space-md flex flex-col gap-space-xs font-label-mono text-label-mono">
        <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface-container-low transition-all duration-200 hover:translate-x-1">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">pin_drop</span>
            {formatMessage(profileMessages.locationLabel)}
          </span>
          <span className="text-on-surface font-medium">
            {formatMessage(profileMessages.locationValue)}
          </span>
        </div>

        <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface-container-low transition-colors">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">mail</span>
            {formatMessage(profileMessages.emailLabel)}
          </span>
          <a
            className="text-primary hover:underline truncate max-w-[160px] font-medium"
            href="mailto:emmanuel.ortiz.dev@gmail.com"
            title="emmanuel.ortiz.dev@gmail.com">
            emmanuel.ortiz.dev
          </a>
        </div>

        <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface-container-low transition-colors">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">code</span>
            {formatMessage(profileMessages.githubLabel)}
          </span>
          <a
            className="text-on-surface hover:text-primary transition-colors font-medium"
            href="https://github.com/emnloc"
            rel="noreferrer"
            target="_blank">
            emnloc
          </a>
        </div>

        <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface-container-low transition-colors">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">work</span>
            {formatMessage(profileMessages.linkedinLabel)}
          </span>
          <a
            className="text-on-surface hover:text-primary transition-colors font-medium"
            href="https://www.linkedin.com/in/emmanuel-ortiz-cruz/"
            rel="noreferrer"
            target="_blank">
            in/emmanuel-ortiz-cruz
          </a>
        </div>

        <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-surface-container-low transition-colors">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">key</span>
            {formatMessage(profileMessages.pgpLabel)}
          </span>
          <span className="font-label-mono-sm text-label-mono-sm text-on-surface" title="4A89 77DF 1C09 88E1">
            4A89...88E1
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
