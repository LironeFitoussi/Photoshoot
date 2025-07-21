import { GuideSection } from "@/components/GuideSection"
import { InfoList } from "@/components/InfoList"
import { InfoBlock } from "@/components/InfoBlock"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AiOutlineAlert, AiOutlineUser, AiOutlineSmile, AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai"
import { FaShirt, FaSun, FaMoon, FaGlassWater, FaChevronRight, FaStar } from "react-icons/fa6"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from 'react-i18next'

const galleryImages = [
  "100+Posing+Ideas (1)_page-0027.jpg",
  "100+Posing+Ideas (1)_page-0028.jpg",
  "100+Posing+Ideas (1)_page-0029.jpg",
  "100+Posing+Ideas (1)_page-0030.jpg",
  "100+Posing+Ideas (1)_page-0031.jpg",
  "100+Posing+Ideas (1)_page-0032.jpg",
  "100+Posing+Ideas (1)_page-0033.jpg",
  "100+Posing+Ideas (1)_page-0036.jpg",
  "100+Posing+Ideas (1)_page-0046.jpg",
  "100+Posing+Ideas (1)_page-0052.jpg",
  "100+Posing+Ideas (1)_page-0053.jpg",
  "100+Posing+Ideas (1)_page-0054.jpg",
  "100+Posing+Ideas (1)_page-0055.jpg",
  "100+Posing+Ideas (1)_page-0056.jpg",
  "100+Posing+Ideas (1)_page-0057.jpg",
  "100+Posing+Ideas (1)_page-0058.jpg",
  "100+Posing+Ideas (1)_page-0059.jpg",
  "100+Posing+Ideas (1)_page-0062.jpg",
  "100+Posing+Ideas (1)_page-0069.jpg",
  "100+Posing+Ideas (1)_page-0075.jpg",
  "business-headshots.webp",
  "getty_493763323_126180.jpg",
]

export function GuidePage() {
  const [openImg, setOpenImg] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 12)
  const { t, i18n } = useTranslation()
  const isHebrew = i18n.language.startsWith('he')

  return (
    <main className="w-full min-h-svh py-12 px-2 md:px-12 bg-white text-zinc-900" lang={i18n.language} dir={isHebrew ? 'rtl' : 'ltr'}>
      <Typography variant="h1" className="mb-2 flex items-center gap-2">
        <span role="img" aria-label="camera">📸</span> {t('guide.title')}
      </Typography>
      <Typography variant="lead" className="mb-4">
        {t('guide.intro')}
      </Typography>
      <div className="w-full max-w-6xl mx-auto">
        <GuideSection title={t('guide.whatToWear')} icon={<FaShirt className="w-6 h-6 text-blue-500" />}>
          <Typography variant="lead" className="mb-2">Your attire plays a crucial role in setting the professional tone of your photos. Here's what we recommend:</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Badge className="mb-2">For Men</Badge>
              <InfoList
                items={[
                  { text: <><b>Shirt:</b> Long-sleeved, button-down in solid blue, gray, or pastel. Looks professional. <span role="img" aria-label="shirt">👔</span></>, icon: <AiOutlineUser className="w-4 h-4" /> },
                  { text: <><b>OPTIONAL: Blazer/Jacket:</b> Well-fitted, neutral color (black, navy, gray) for elevated look. <span role="img" aria-label="jacket">🧥</span></>, icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
            <div>
              <Badge className="mb-2">For Women</Badge>
              <InfoList
                items={[
                  { text: <><b>Top:</b> Professional blouse or business suit in solid, neutral colors. Avoid busy patterns. <span role="img" aria-label="blouse">👗</span></>, icon: <AiOutlineUser className="w-4 h-4" /> },
                  { text: <><b>OPTIONAL: Blazer/Jacket:</b> Tailored, neutral color (black, navy, beige) for formal touch. <span role="img" aria-label="jacket">🧥</span></>, icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
          </div>
        </GuideSection>

        <GuideSection title={t('guide.grooming')} icon={<AiOutlineSmile className="w-6 h-6 text-green-500" />}>
          <Typography variant="lead" className="mb-2">Looking neat and tidy is just as important as what you wear.</Typography>
          <Badge className="mb-2">General</Badge>
          <InfoList
            items={[
              { text: <><b>Hair:</b> Clean, dry, and styled neatly. <span role="img" aria-label="hair">💇‍♂️💇‍♀️</span></>, icon: <FaStar className="w-4 h-4" /> },
              { text: <><b>Nails:</b> Clean, trimmed nails. <span role="img" aria-label="nails">💅</span></>, icon: <AiOutlineCheckCircle className="w-4 h-4" /> },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <Badge className="mb-2">For Men</Badge>
              <InfoList
                items={[
                  { text: <><b>Facial Hair:</b> Neatly trimmed. If you shave, do so the morning of the shoot. <span role="img" aria-label="beard">🧔</span></>, icon: <AiOutlineUser className="w-4 h-4" /> },
                ]}
              />
            </div>
            <div>
              <Badge className="mb-2">For Women</Badge>
              <InfoList
                items={[
                  { text: <><b>Makeup:</b> Light, natural-looking. Foundation, mascara, subtle lip color. <span role="img" aria-label="makeup">💄</span></>, icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
          </div>
        </GuideSection>

        <GuideSection title={t('guide.accessories')} icon={<FaStar className="w-6 h-6 text-yellow-500" />}>
          <Typography variant="lead" className="mb-2">Keep accessories to a minimum to maintain focus on your face and expression.</Typography>
          <InfoList
            items={[
              { text: <><b>Jewelry:</b> Simple and understated. Small earrings or a modest necklace. <span role="img" aria-label="jewelry">💍</span></>, icon: <FaStar className="w-4 h-4" /> },
              { text: <><b>Watches:</b> Sleek and professional styles. <span role="img" aria-label="watch">⌚</span></>, icon: <AiOutlineClockCircle className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <GuideSection title={t('guide.dayBefore')} icon={<FaSun className="w-6 h-6 text-orange-500" />}>
          <Typography variant="lead" className="mb-2">Prepare the day before to avoid any last-minute issues.</Typography>
          <InfoList
            items={[
              { text: <><b>Iron Your Clothes:</b> Make sure your outfit is ironed and hanging up the night before. <span role="img" aria-label="iron">👕</span></>, icon: <FaShirt className="w-4 h-4" /> },
              { text: <><b>Rest:</b> Aim for a full night's sleep. <span role="img" aria-label="sleep">😴</span></>, icon: <FaMoon className="w-4 h-4" /> },
              { text: <><b>Hydrate:</b> Drink plenty of water for clear, hydrated skin. <span role="img" aria-label="water">💧</span></>, icon: <FaGlassWater className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <GuideSection title={t('guide.dayOf')} icon={<AiOutlineSmile className="w-6 h-6 text-pink-500" />}>
          <Typography variant="lead" className="mb-2">Final tips for the day of your photoshoot.</Typography>
          <InfoList
            items={[
              { text: <><b>Arrive Early:</b> Come in at least 10-15 minutes early. <span role="img" aria-label="clock">⏰</span></>, icon: <AiOutlineClockCircle className="w-4 h-4" /> },
              { text: <><b>Bring Options:</b> Bring a couple of different tops if unsure. <span role="img" aria-label="options">👗</span></>, icon: <FaChevronRight className="w-4 h-4" /> },
              { text: <><b>Relax and Smile:</b> Be yourself! A natural smile is more engaging. <span role="img" aria-label="smile">😊</span></>, icon: <AiOutlineSmile className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <InfoBlock
          title={t('guide.remember')}
          icon={<AiOutlineAlert className="w-5 h-5 text-red-500" />}
          className="mt-8"
        >
          We want you to not only look great but also feel great in your photos. These images represent <b>your</b> professional brand. We’re looking forward to seeing you all shine! See you at the shoot! <span role="img" aria-label="wave">👋</span>
        </InfoBlock>
      </div>
      <Typography variant="h2" className="mb-2 mt-8">{t('guide.ideas')}</Typography>
      <div className="w-full overflow-x-auto pb-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 min-w-[260px] sm:min-w-[400px] md:min-w-[600px] px-1 sm:px-0">
          {visibleImages.map((img) => (
            <button
              key={img}
              type="button"
              onClick={() => { setOpenImg(img); setImgLoaded(false); }}
              className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 aspect-[3/4] relative"
              style={{ minHeight: 0 }}
            >
              <img
                src={`/IITC%20Linkedin%20Photoshoot%20Ideas/${img}`}
                alt={img}
                className="w-full h-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
                style={{ aspectRatio: '3/4', minHeight: 0 }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="text-white font-semibold text-xs">Click to enlarge</span>
              </div>
            </button>
          ))}
        </div>
        {!showAll && galleryImages.length > 12 && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
              onClick={() => setShowAll(true)}
            >
              Show more
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {openImg && (
          <Dialog open={!!openImg} onOpenChange={() => setOpenImg(null)}>
            <DialogContent className="max-w-3xl flex flex-col items-center bg-white p-0">
              <DialogTitle className="sr-only">Photoshoot Idea</DialogTitle>
              <DialogDescription className="sr-only">Enlarged preview of the selected photoshoot idea image.</DialogDescription>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full flex flex-col items-center"
              >
                <button
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-zinc-900 rounded-full p-2 shadow-lg focus:outline-none"
                  onClick={() => setOpenImg(null)}
                  aria-label="Close"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
                </button>
                <div className="flex items-center justify-center min-h-[60vh] w-full">
                  {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <svg className="animate-spin h-10 w-10 text-zinc-400" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                    </div>
                  )}
                  <img
                    src={`/IITC%20Linkedin%20Photoshoot%20Ideas/${openImg}`}
                    alt={openImg}
                    className="max-h-[80vh] w-auto max-w-[98vw] rounded-xl shadow-2xl z-10"
                    style={{ display: imgLoaded ? 'block' : 'none' }}
                    onLoad={() => setImgLoaded(true)}
                  />
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      <Separator className="mb-8" />
    </main>
  )
} 