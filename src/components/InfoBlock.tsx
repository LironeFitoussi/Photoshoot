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
      <Alert className="bg-white text-black border border-zinc-100 shadow-lg rounded-xl">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          {title && <Typography as="span" variant="h4" className="text-orange-600 font-bold">{title}</Typography>}
        </div>
        <Typography as="div" variant="muted" className="text-zinc-700 font-normal">{children}</Typography>
      </Alert>
    </motion.div>
  )
} 