import React from 'react';
import { useIntl } from 'react-intl';
import { footerMessages } from '../../messages';

const Footer: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <footer className="w-full bg-surface-container-lowest mt-space-xl border-t border-surface-container-high/40">
      <div className="max-w-[1120px] mx-auto px-gutter py-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant">
        <div className="flex flex-col sm:flex-row items-center gap-space-md text-center sm:text-left">
          <span className="font-label-mono text-label-mono text-on-surface">
            {formatMessage(footerMessages.copyright)}
          </span>
          <span className="hidden sm:inline font-label-mono text-label-mono text-outline-variant">|</span>
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
              {formatMessage(footerMessages.protocol)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-space-lg">
          <a
            className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant hover:text-primary transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-space-xs group"
            href="https://github.com/emnloc"
            target="_blank"
            rel="noreferrer">
            <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-12">terminal</span>
            <span>GitHub</span>
          </a>
          <a
            className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant hover:text-primary transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-space-xs group"
            href="https://www.linkedin.com/in/emmanuel-ortiz-cruz/"
            target="_blank"
            rel="noreferrer">
            <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:scale-110">share</span>
            <span>LinkedIn</span>
          </a>
          <a
            className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant hover:text-primary transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-space-xs group"
            href="mailto:emmanuel.ortiz.dev@gmail.com">
            <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:scale-110">alternate_email</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
