import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { contactMessages } from '../../messages';

const Contact: React.FC = () => {
  const { formatMessage } = useIntl();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setIsSent(true);
    }, 450);
  };

  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-[0_1px_3px_rgba(17,24,39,0.04)] border border-surface-container-high/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md scroll-mt-24 animate-fade-up"
      id="contacto">
      <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low px-space-md py-space-xs rounded-lg">
        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
          {formatMessage(contactMessages.sectionBadge)}
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant font-medium">
          {formatMessage(contactMessages.sectionIndex)}
        </span>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
        {formatMessage(contactMessages.intro)}
      </p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-space-md" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="c-name">
            {formatMessage(contactMessages.nameLabel)}
          </label>
          <input
            className="w-full px-3 py-2 bg-surface-container-low rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 border border-transparent focus:border-primary"
            id="c-name"
            placeholder={formatMessage(contactMessages.namePlaceholder)}
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="c-email">
            {formatMessage(contactMessages.emailLabel)}
          </label>
          <input
            className="w-full px-3 py-2 bg-surface-container-low rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 border border-transparent focus:border-primary"
            id="c-email"
            placeholder={formatMessage(contactMessages.emailPlaceholder)}
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-1">
          <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="c-subject">
            {formatMessage(contactMessages.subjectLabel)}
          </label>
          <input
            className="w-full px-3 py-2 bg-surface-container-low rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 border border-transparent focus:border-primary"
            id="c-subject"
            placeholder={formatMessage(contactMessages.subjectPlaceholder)}
            required
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-1">
          <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="c-message">
            {formatMessage(contactMessages.messageLabel)}
          </label>
          <textarea
            className="w-full px-3 py-2 bg-surface-container-low rounded font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none border border-transparent focus:border-primary"
            id="c-message"
            placeholder={formatMessage(contactMessages.messagePlaceholder)}
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-space-md pt-2">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono-sm text-label-mono-sm">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>{formatMessage(contactMessages.securityText)}</span>
          </div>
          <button
            disabled={isTransmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-mono text-label-mono px-space-xl py-2.5 rounded uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm font-semibold disabled:opacity-75 cursor-pointer"
            type="submit">
            <span className={`material-symbols-outlined text-base ${isTransmitting ? 'animate-spin' : ''}`}>
              {isTransmitting ? 'sync' : 'send'}
            </span>
            <span>{isTransmitting ? 'TRANSMITTING...' : formatMessage(contactMessages.submitButton)}</span>
          </button>
        </div>
      </form>

      {isSent && (
        <div className="mt-space-md p-space-md rounded bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-space-sm border border-emerald-500/30 animate-fade-up shadow-sm">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
          </span>
          <span>{formatMessage(contactMessages.uplinkSuccess)}</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
