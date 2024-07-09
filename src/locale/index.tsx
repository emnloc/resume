import esMX from "./languages/es-MX.json";
import enUS from "./languages/en-US.json";

export const languages = {
  "es-MX": esMX,
  "en-US": enUS,
};

export const languageOptions = [
  {
    value: "es-MX",
    flag: "🇲🇽",
    label: "Español",
  },
  {
    value: "en-US",
    flag: "🇺🇸",
    label: "English",
  },
]

export default languages;
