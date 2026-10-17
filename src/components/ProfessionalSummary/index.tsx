import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import messages, { summaryMessages } from '../../messages';

const ProfessionalSummary: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="sobre-mi">
      <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(summaryMessages.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(summaryMessages.sectionIndex)}
        </span>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-space-md">
        <FormattedMessage
          id={messages.aboutDescription.id}
          defaultMessage={messages.aboutDescription.defaultMessage}
          values={{
            bold: (chunks) => <strong className="font-semibold text-on-surface">{chunks}</strong>,
          }}
        />
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
        <div className="p-space-md bg-surface-container-low rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container hover:shadow-sm group cursor-default border border-transparent hover:border-surface-container-high">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold block mb-1">
            {formatMessage(summaryMessages.spec1Title)}
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface block transition-colors group-hover:text-primary">
            {formatMessage(summaryMessages.spec1Name)}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 block">
            {formatMessage(summaryMessages.spec1Desc)}
          </span>
        </div>

        <div className="p-space-md bg-surface-container-low rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container hover:shadow-sm group cursor-default border border-transparent hover:border-surface-container-high">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold block mb-1">
            {formatMessage(summaryMessages.spec2Title)}
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface block transition-colors group-hover:text-primary">
            {formatMessage(summaryMessages.spec2Name)}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 block">
            {formatMessage(summaryMessages.spec2Desc)}
          </span>
        </div>

        <div className="p-space-md bg-surface-container-low rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container hover:shadow-sm group cursor-default border border-transparent hover:border-surface-container-high">
          <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold block mb-1">
            {formatMessage(summaryMessages.spec3Title)}
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface block transition-colors group-hover:text-primary">
            {formatMessage(summaryMessages.spec3Name)}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 block">
            {formatMessage(summaryMessages.spec3Desc)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
