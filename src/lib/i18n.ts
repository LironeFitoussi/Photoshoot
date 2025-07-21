import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      guide: {
        title: 'LinkedIn Photoshoot Guide',
        intro: 'To help you look your best and ensure we achieve consistent, high-quality images, please follow this detailed guide.',
        whatToWear: '1. What to Wear',
        grooming: '2. Grooming Tips',
        accessories: '3. Accessories',
        dayBefore: '4. Day Before the Shoot',
        dayOf: '5. Day of the Shoot',
        ideas: 'IITC Linkedin Photoshoot Ideas',
        remember: 'Remember!'
      }
    }
  },
  he: {
    translation: {
      guide: {
        title: 'מדריך צילום לינקדאין',
        intro: 'כדי שתיראו במיטבכם ונוכל להבטיח תמונות איכותיות ועקביות, אנא עקבו אחרי המדריך המפורט.',
        whatToWear: '1. מה ללבוש',
        grooming: '2. טיפים לטיפוח',
        accessories: '3. אביזרים',
        dayBefore: '4. יום לפני הצילום',
        dayOf: '5. יום הצילום',
        ideas: 'רעיונות לצילום לינקדאין IITC',
        remember: 'זכרו!'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 