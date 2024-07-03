import { useContext } from 'react';
import { LocaleContext, LocaleContextType } from './ProviderLocale';

export default () => {
  return useContext<LocaleContextType>(LocaleContext);
};
