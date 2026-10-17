import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import useLocale from '../../hooks/useLocale';
import languages, { languageOptions } from '../../locale';

const fallbackOption = {
  value: 'es-MX',
  flag: '🇲🇽',
  label: 'Español',
};

function LanguageSwitcher() {
  const { setLocale, locale } = useLocale();
  const currentLang = languageOptions.find((l) => l.value === locale) ?? fallbackOption;

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-mono text-label-mono tracking-wide focus:outline-none focus:ring-1 focus:ring-primary">
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="font-semibold uppercase text-xs">{currentLang.value.split('-')[0]}</span>
        <ChevronDownIcon aria-hidden="true" className="h-3.5 w-3.5 text-on-surface-variant" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-lg bg-surface-container-lowest p-1 shadow-lg ring-1 ring-surface-container-high transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 ease-out">
        <div className="flex flex-col gap-0.5">
          {languageOptions.map((l) => (
            <button
              key={l.value}
              type="button"
              onClick={() => setLocale(l.value as keyof typeof languages)}
              className={`flex items-center gap-2.5 w-full text-left px-2.5 py-1.5 rounded text-xs font-label-mono transition-colors ${
                l.value === locale
                  ? 'bg-surface-container text-primary font-bold'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}>
              <span className="text-base leading-none">{l.flag}</span>
              <span>{l.label}</span>
              {l.value === locale && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
              )}
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default LanguageSwitcher;
