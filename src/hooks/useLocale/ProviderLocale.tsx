import { useState, createContext, type ReactNode, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { languages } from '../../locale/index';

type locale = keyof typeof languages;

export interface LocaleContextType {
  locale: locale;
  setLocale: (locale: locale) => void;
}

export const defaultLanguage = 'es-MX';

export const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLanguage,
  setLocale: () => null,
});

function useProvideLocale() {
    const [locale, setLocale] = useState<locale>(defaultLanguage);
  
    const updateLocale = (newLocale: locale) => {
      localStorage.setItem('locale', newLocale);
      setLocale(newLocale);
    };
  
    useEffect(() => {
      const localStorageLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') : '';
      if (localStorageLocale && localStorageLocale in languages) {
        setLocale(localStorageLocale as locale);
      }
    }, []);
  
    return {
      locale,
      setLocale: updateLocale,
    };
  }
  

export default function ProvideLocale({ children }: { children: ReactNode }) {
  const locale = useProvideLocale();
  return (
    <LocaleContext.Provider value={locale}>
      <IntlProvider locale={locale.locale} messages={languages[locale.locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
