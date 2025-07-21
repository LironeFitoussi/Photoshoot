import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()
  return (
    <header className="w-full bg-white shadow-sm border-b border-zinc-100 py-3 px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <span role="img" aria-label="camera" className="text-2xl">📸</span>
        <span className="font-bold text-lg tracking-tight text-zinc-900">{t('guide.title')}</span>
      </div>
      {/* Language switcher placeholder */}
      {/* <div>Language Switcher</div> */}
    </header>
  )
} 