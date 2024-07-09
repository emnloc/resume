import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

import useLocale from '../../hooks/useLocale';
import languages, { languageOptions } from '../../locale';

function LanguageSwitcher() {
  const { setLocale, locale } = useLocale();

  return (
    <Popover className="relative mb-6">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>{languageOptions.find((l) => l.value === locale)?.label}</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-4 z-10 mt-3 flex px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {languageOptions.map((l) => (
              <div
                key={l.value}
                onClick={() => setLocale(l.value as keyof typeof languages)}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div>{l.flag}</div>
                <div>
                  <span className="font-semibold text-gray-900">{l.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default LanguageSwitcher;
