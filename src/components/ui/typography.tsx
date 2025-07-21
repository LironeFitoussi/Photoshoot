import { cn } from "@/lib/utils"
import * as React from "react"

type TypographyProps = React.HTMLAttributes<HTMLParagraphElement> & {
  as?: React.ElementType
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead" | "muted"
}

const shadowClass = "drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)]"

const variantClasses = {
  h1: `scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-black ${shadowClass}`,
  h2: `scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 ${shadowClass}`,
  h3: `scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 ${shadowClass}`,
  h4: `scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 ${shadowClass}`,
  h5: "scroll-m-20 text-lg font-semibold tracking-tight text-zinc-900",
  h6: "scroll-m-20 text-base font-semibold tracking-tight text-zinc-900",
  p: "leading-7 text-zinc-900 [&:not(:first-child)]:mt-6",
  lead: `text-xl text-zinc-900 font-semibold ${shadowClass}`,
  muted: "text-sm text-zinc-500"
}

export function Typography({
  as: Comp = "p",
  variant = "p",
  className,
  ...props
}: TypographyProps) {
  return <Comp className={cn(variantClasses[variant], className)} {...props} />
} 