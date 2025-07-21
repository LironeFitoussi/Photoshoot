import { Card } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GuideSectionProps {
  title: string
  children: ReactNode
  icon?: ReactNode
}

export function GuideSection({ title, children, icon }: GuideSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.015, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
      className="mb-8"
    >
      <Card className="p-6 bg-white shadow-lg border border-zinc-100 rounded-2xl transition-all">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <Typography variant="h2" className="flex-1">
            {title}
          </Typography>
        </div>
        <div>{children}</div>
      </Card>
    </motion.div>
  )
} 