import { Typography } from "@/components/ui/typography"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface InfoListItem {
  text: ReactNode
  icon?: ReactNode
}

interface InfoListProps {
  items: InfoListItem[]
  className?: string
}

export function InfoList({ items, className }: InfoListProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-start gap-2 mb-2"
          variants={{
            hidden: { opacity: 0, x: 24 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          {item.icon && <span className="mt-1">{item.icon}</span>}
          <Typography as="span">{item.text}</Typography>
        </motion.li>
      ))}
    </motion.ul>
  )
} 