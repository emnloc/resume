import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import Avatar from '../../assets/myAvatar.svg';
import { headerMessages } from '../../messages';
import LanguageSwitcher from '../LanguageSwitcher';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const emblemUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1UCNJfVtXfTXm2qprb-0d17eWiSFE51u6ZSbSZLSoX41QLDLLS_dEvg3-QMUN1FEzfXMEy6SZcgW3c4VLKDKmePHhGStyN03Dr9LvlveDK8MsBcgmXo5HdxXTOVlOY9gUSfu04y8T0jRi2RjK-c0-wIH4PbpzGFyaGhEWKb3usEovoearX6T4PsrE2h5Z9HKzJAyHJd7I_C684Mn-36SkzH3aWvFw32ZbiSLck8yXRgT0O6qS5TXha6wanW';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_3px_rgba(17,24,39,0.04)] border-b border-surface-container-high/40">
      <div className="h-16 max-w-[1120px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* LOGO & LAB EMBLEM */}
        <a href="#" className="flex items-center gap-space-md group focus:outline-none">
          <img
            alt="PokéDex Engineer Emblem"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={emblemUrl}
            onError={(e) => {
              // Graceful SVG fallback in case of external network constraints
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono text-label-mono text-on-surface font-bold tracking-tight uppercase">
                {formatMessage(headerMessages.title)}
              </span>
              <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold">
                {formatMessage(headerMessages.subLab)}
              </span>
            </div>
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              {formatMessage(headerMessages.manifest)}
            </span>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#sobre-mi">
            {formatMessage(headerMessages.navAbout)}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#experiencia">
            {formatMessage(headerMessages.navExperience)}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#habilidades">
            {formatMessage(headerMessages.navSkills)}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#proyectos">
            {formatMessage(headerMessages.navProjects)}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#educacion">
            {formatMessage(headerMessages.navEducation)}
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            href="#contacto">
            {formatMessage(headerMessages.navContact)}
          </a>
        </nav>

        {/* ACTIONS: STATUS, I18N, EXPORT RESUME, AVATAR */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* SYSTEM STATUS PILL */}
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container relative">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold">
              {formatMessage(headerMessages.statusActive)}
            </span>
          </div>

          {/* LANGUAGE SWITCHER */}
          <LanguageSwitcher />

          {/* RESUME EXPORT LINK */}
          <a
            href="https://drive.google.com/file/d/1HqaADYnpDTUJRyE5o0rKrICxcYQApv6O/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-mono text-label-mono px-3 py-1.5 rounded-lg uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-all hover:-translate-y-0.5 hover:shadow-sm font-semibold shrink-0">
            <span className="material-symbols-outlined text-base">download</span>
            <span className="hidden sm:inline">Exportar PDF / ATS</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* AVATAR */}
          <div className="relative flex items-center shrink-0 group">
            <img
              alt="Emmanuel Ortiz Cruz"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-high bg-surface-container-low transition-transform group-hover:scale-105"
              src={Avatar}
            />
          </div>
        </div>
      </div>

      {/* TELEMETRY SCROLL PROGRESS BAR */}
      <div
        className="h-[2px] bg-gradient-to-r from-primary via-primary-container to-primary transition-all duration-75 ease-out opacity-90"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

export default Header;
