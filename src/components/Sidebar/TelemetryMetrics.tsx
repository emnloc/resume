import React from 'react';
import { useIntl } from 'react-intl';
import { telemetryMessages } from '../../messages';

const TelemetryMetrics: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md animate-fade-up animation-delay-200">
      <div className="flex items-center justify-between mb-space-md">
        <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold tracking-wider">
          {formatMessage(telemetryMessages.title)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-semibold">
          {formatMessage(telemetryMessages.exp)}
        </span>
      </div>

      {/* TECHNICAL SPECIFICATION METERS */}
      <div className="flex flex-col gap-space-md">
        <div>
          <div className="flex items-center justify-between text-body-sm font-label-mono-sm mb-1">
            <span className="text-on-surface-variant">{formatMessage(telemetryMessages.metric1Label)}</span>
            <span className="text-on-surface font-bold">{formatMessage(telemetryMessages.metric1Val)}</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[94%] rounded-full origin-left animate-meter-fill animation-delay-300"></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-body-sm font-label-mono-sm mb-1">
            <span className="text-on-surface-variant">{formatMessage(telemetryMessages.metric2Label)}</span>
            <span className="text-on-surface font-bold">{formatMessage(telemetryMessages.metric2Val)}</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[99%] rounded-full origin-left animate-meter-fill animation-delay-400"></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-body-sm font-label-mono-sm mb-1">
            <span className="text-on-surface-variant">{formatMessage(telemetryMessages.metric3Label)}</span>
            <span className="text-on-surface font-bold">{formatMessage(telemetryMessages.metric3Val)}</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[78%] rounded-full origin-left animate-meter-fill animation-delay-500"></div>
          </div>
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE VECTOR SPARKLINE */}
      <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-sm rounded-lg group/spark cursor-default transition-colors hover:bg-surface-container">
        <div className="flex items-center justify-between mb-1">
          <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
            {formatMessage(telemetryMessages.streamLabel)}
          </span>
          <span className="font-label-mono-sm text-label-mono-sm text-primary font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            {formatMessage(telemetryMessages.streamStatus)}
          </span>
        </div>
        <svg className="w-full h-9 text-primary/80 overflow-visible" fill="none" viewBox="0 0 240 36" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 24 L20 22 L40 26 L60 14 L80 18 L100 8 L120 12 L140 4 L160 19 L180 11 L200 15 L220 7 L240 10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeDasharray="400"
            className="animate-sparkline-dash"></path>
          <path
            d="M0 24 L20 22 L40 26 L60 14 L80 18 L100 8 L120 12 L140 4 L160 19 L180 11 L200 15 L220 7 L240 10 L240 36 L0 36 Z"
            fill="currentColor"
            fillOpacity="0.08"></path>
          {/* Active telemetry node pulse */}
          <circle cx="240" cy="10" r="3" fill="currentColor" className="animate-ping origin-center opacity-75" />
          <circle cx="240" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default TelemetryMetrics;
