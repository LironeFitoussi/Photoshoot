import { useTranslation } from 'react-i18next'
import { FaLinkedin } from 'react-icons/fa6'

export function Footer() {
  const year = new Date().getFullYear()
  const { t, i18n } = useTranslation()
  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 mt-12 text-zinc-500 text-sm">
      <div className="flex items-center gap-2">
        <FaLinkedin className="w-5 h-5 text-blue-700" />
        <span>{t('guide.title')}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>&copy; {year} IITC</span>
        <span className="hidden sm:inline">|</span>
        <span>{i18n.language === 'he' ? 'כל הזכויות שמורות' : 'All rights reserved'}</span>
      </div>
    </footer>
  )
} 