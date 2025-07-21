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
      <Typography variant="lead" className="mb-4">
        {t('guide.intro')}
      </Typography>
      <div className="w-full max-w-6xl mx-auto">
        <GuideSection title={t('guide.whatToWear')} icon={<FaShirt className="w-6 h-6 text-blue-500" />}>
          <Typography variant="lead" className="mb-2">{t('guide.introWhatToWear')}</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Badge className="mb-2">{t('guide.whatToWearMen')}</Badge>
              <InfoList
                items={[
                  { text: t('guide.menShirt'), icon: <AiOutlineUser className="w-4 h-4" /> },
                  { text: t('guide.menBlazer'), icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
            <div>
              <Badge className="mb-2">{t('guide.whatToWearWomen')}</Badge>
              <InfoList
                items={[
                  { text: t('guide.womenTop'), icon: <AiOutlineUser className="w-4 h-4" /> },
                  { text: t('guide.womenBlazer'), icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
          </div>
        </GuideSection>

        <GuideSection title={t('guide.grooming')} icon={<AiOutlineSmile className="w-6 h-6 text-green-500" />}>
          <Typography variant="lead" className="mb-2">{t('guide.introGrooming')}</Typography>
          <Badge className="mb-2">{t('guide.groomingGeneral')}</Badge>
          <InfoList
            items={[
              { text: t('guide.groomingHair'), icon: <FaStar className="w-4 h-4" /> },
              { text: t('guide.groomingNails'), icon: <AiOutlineCheckCircle className="w-4 h-4" /> },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            <div>
              <Badge className="mb-2">{t('guide.groomingMen')}</Badge>
              <InfoList
                items={[
                  { text: t('guide.groomingFacial'), icon: <AiOutlineUser className="w-4 h-4" /> },
                ]}
              />
            </div>
            <div>
              <Badge className="mb-2">{t('guide.groomingWomen')}</Badge>
              <InfoList
                items={[
                  { text: t('guide.groomingMakeup'), icon: <FaStar className="w-4 h-4" /> },
                ]}
              />
            </div>
          </div>
        </GuideSection>

        <GuideSection title={t('guide.accessories')} icon={<FaStar className="w-6 h-6 text-yellow-500" />}>
          <Typography variant="lead" className="mb-2">{t('guide.introAccessories')}</Typography>
          <InfoList
            items={[
              { text: t('guide.accessoriesJewelry'), icon: <FaStar className="w-4 h-4" /> },
              { text: t('guide.accessoriesWatches'), icon: <AiOutlineClockCircle className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <GuideSection title={t('guide.dayBefore')} icon={<FaSun className="w-6 h-6 text-orange-500" />}>
          <Typography variant="lead" className="mb-2">{t('guide.introDayBefore')}</Typography>
          <InfoList
            items={[
              { text: t('guide.dayBeforeIron'), icon: <FaShirt className="w-4 h-4" /> },
              { text: t('guide.dayBeforeRest'), icon: <FaMoon className="w-4 h-4" /> },
              { text: t('guide.dayBeforeHydrate'), icon: <FaGlassWater className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <GuideSection title={t('guide.dayOf')} icon={<AiOutlineSmile className="w-6 h-6 text-pink-500" />}>
          <Typography variant="lead" className="mb-2">{t('guide.introDayOf')}</Typography>
          <InfoList
            items={[
              { text: t('guide.dayOfArrive'), icon: <AiOutlineClockCircle className="w-4 h-4" /> },
              { text: t('guide.dayOfOptions'), icon: <FaChevronRight className="w-4 h-4" /> },
              { text: t('guide.dayOfSmile'), icon: <AiOutlineSmile className="w-4 h-4" /> },
            ]}
          />
        </GuideSection>

        <InfoBlock
          title={t('guide.remember')}
          icon={<AiOutlineAlert className="w-5 h-5 text-red-500" />}
          className="mt-8"
        >
          {t('guide.rememberText')}
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
                       src={`/photoshoot-ideas/${img}`}
                       alt={img}
                className="w-full h-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
                style={{ aspectRatio: '3/4', minHeight: 0 }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="text-white font-semibold text-xs">{t('guide.galleryOverlay')}</span>
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
              {t('guide.showMore')}
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
                           src={`/photoshoot-ideas/${openImg}`}
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