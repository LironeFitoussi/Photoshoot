import { Alert } from "@/components/ui/alert"
import { Typography } from "@/components/ui/typography"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface InfoBlockProps {
  title?: string
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function InfoBlock({ title, children, icon, className }: InfoBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <Alert className="bg-white text-zinc-900 border border-zinc-100 shadow-lg rounded-3xl px-6 py-6 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          {icon}
          {title && <Typography as="span" variant="h3" className="font-bold text-zinc-900">{title}</Typography>}
        </div>
        <Typography as="div" variant="p" className="text-zinc-900 text-base leading-relaxed">
          {children}
        </Typography>
      </Alert>
    </motion.div>
  )
} 