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
        whatToWearMen: 'For Men',
        whatToWearWomen: 'For Women',
        menShirt: 'Shirt: Long-sleeved, button-down in solid blue, gray, or pastel. Looks professional.',
        menBlazer: 'OPTIONAL: Blazer/Jacket: Well-fitted, neutral color (black, navy, gray) for elevated look.',
        womenTop: 'Top: Professional blouse or business suit in solid, neutral colors. Avoid busy patterns.',
        womenBlazer: 'OPTIONAL: Blazer/Jacket: Tailored, neutral color (black, navy, beige) for formal touch.',
        introWhatToWear: 'Your attire plays a crucial role in setting the professional tone of your photos. Here\'s what we recommend:',
        grooming: '2. Grooming Tips',
        groomingGeneral: 'General',
        groomingHair: 'Hair: Clean, dry, and styled neatly.',
        groomingNails: 'Nails: Clean, trimmed nails.',
        groomingMen: 'For Men',
        groomingFacial: 'Facial Hair: Neatly trimmed. If you shave, do so the morning of the shoot.',
        groomingWomen: 'For Women',
        groomingMakeup: 'Makeup: Light, natural-looking. Foundation, mascara, subtle lip color.',
        introGrooming: 'Looking neat and tidy is just as important as what you wear.',
        accessories: '3. Accessories',
        accessoriesJewelry: 'Jewelry: Simple and understated. Small earrings or a modest necklace.',
        accessoriesWatches: 'Watches: Sleek and professional styles.',
        introAccessories: 'Keep accessories to a minimum to maintain focus on your face and expression.',
        dayBefore: '4. Day Before the Shoot',
        dayBeforeIron: 'Iron Your Clothes: Make sure your outfit is ironed and hanging up the night before.',
        dayBeforeRest: 'Rest: Aim for a full night\'s sleep.',
        dayBeforeHydrate: 'Hydrate: Drink plenty of water for clear, hydrated skin.',
        introDayBefore: 'Prepare the day before to avoid any last-minute issues.',
        dayOf: '5. Day of the Shoot',
        dayOfArrive: 'Arrive Early: Come in at least 10-15 minutes early.',
        dayOfOptions: 'Bring Options: Bring a couple of different tops if unsure.',
        dayOfSmile: 'Relax and Smile: Be yourself! A natural smile is more engaging.',
        introDayOf: 'Final tips for the day of your photoshoot.',
        ideas: 'IITC Linkedin Photoshoot Ideas',
        remember: 'Remember!',
        rememberText: 'We want you to not only look great but also feel great in your photos. These images represent your professional brand. We’re looking forward to seeing you all shine! See you at the shoot! 👋',
        galleryOverlay: 'Click to enlarge',
        showMore: 'Show more'
      }
    }
  },
  he: {
    translation: {
      guide: {
        title: 'מדריך צילום לינקדאין',
        intro: 'כדי שתיראו במיטבכם ונוכל להבטיח תמונות איכותיות ועקביות, אנא עקבו אחרי המדריך המפורט.',
        whatToWear: '1. מה ללבוש',
        whatToWearMen: 'לגברים',
        whatToWearWomen: 'לנשים',
        menShirt: 'חולצה: חולצה מכופתרת עם שרוול ארוך בצבעים חלקים כמו כחול, אפור או פסטל. נראית מקצועית.',
        menBlazer: 'אופציונלי: בלייזר/ז\'קט: מחויט, בצבע ניטרלי (שחור, כחול כהה, אפור) למראה ייצוגי.',
        womenTop: 'חולצה: חולצה מקצועית או חליפה עסקית בצבעים חלקים וניטרליים. להימנע מהדפסים בולטים.',
        womenBlazer: 'אופציונלי: בלייזר/ז\'קט: מחויט, בצבע ניטרלי (שחור, כחול כהה, בז\'׳) למראה פורמלי.',
        introWhatToWear: 'הלבוש שלכם קובע את הרושם המקצועי בתמונות. הנה ההמלצות שלנו:',
        grooming: '2. טיפים לטיפוח',
        groomingGeneral: 'כללי',
        groomingHair: 'שיער: נקי, יבש ומסודר.',
        groomingNails: 'ציפורניים: נקיות וגזורות.',
        groomingMen: 'לגברים',
        groomingFacial: 'זקן/שפם: מסודר. אם מתגלחים, לעשות זאת בבוקר הצילום.',
        groomingWomen: 'לנשים',
        groomingMakeup: 'איפור: עדין וטבעי. מייקאפ, מסקרה ושפתון עדין.',
        introGrooming: 'להיראות מסודרים חשוב לא פחות מהלבוש.',
        accessories: '3. אביזרים',
        accessoriesJewelry: 'תכשיטים: פשוטים ולא בולטים. עגילים קטנים או שרשרת עדינה.',
        accessoriesWatches: 'שעונים: סגנון מקצועי ואלגנטי.',
        introAccessories: 'להמעיט באביזרים כדי לשמור על מיקוד בפנים ובביטוי.',
        dayBefore: '4. יום לפני הצילום',
        dayBeforeIron: 'גיהוץ בגדים: לדאוג שהבגדים מגוהצים ותלויים ערב לפני.',
        dayBeforeRest: 'מנוחה: לישון טוב בלילה שלפני.',
        dayBeforeHydrate: 'להתייבש: לשתות הרבה מים לעור בריא.',
        introDayBefore: 'להתכונן יום לפני כדי להימנע מבעיות של הרגע האחרון.',
        dayOf: '5. יום הצילום',
        dayOfArrive: 'להגיע מוקדם: להגיע 10-15 דקות לפני הזמן.',
        dayOfOptions: 'להביא אפשרויות: אם לא בטוחים, להביא כמה חולצות.',
        dayOfSmile: 'להירגע ולחייך: להיות אתם! חיוך טבעי נראה טוב יותר.',
        introDayOf: 'טיפים אחרונים ליום הצילום.',
        ideas: 'רעיונות לצילום לינקדאין IITC',
        remember: 'זכרו!',
        rememberText: 'אנחנו רוצים שתיראו טוב ותרגישו טוב בצילומים. התמונות האלו מייצגות את המותג המקצועי שלכם. מחכים לראות אתכם זורחים! נתראה בצילומים 👋',
        galleryOverlay: 'לחצו להגדלה',
        showMore: 'הצג עוד'
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