import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';
import { FALLBACK_LOCALE } from 'src/constants';
import en from './en';
import ru from './ru';

const resources: Resource = {
    en,
    ru,
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: FALLBACK_LOCALE,
        keySeparator: false,
        resources,
    });

i18n.on('initialized', options => {
    moment.locale(options.lng);
});

i18n.on('languageChanged', lng => {
    moment.locale(lng);
});

export default i18n;
