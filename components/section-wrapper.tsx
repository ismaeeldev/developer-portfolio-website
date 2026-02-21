"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <div className="section-divider" />
      <section
        ref={ref}
        id={id}
        className={`relative px-6 py-24 lg:py-32 ${className}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-16 text-center">
            {subtitle && (
              <motion.p
                className="mb-3 font-mono text-xs tracking-[0.3em] text-primary uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 }}
              >
                {"// "}
                {subtitle}
              </motion.p>
            )}
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <motion.div
              className="mx-auto mt-4 h-px w-16"
              style={{
                background: "linear-gradient(90deg, transparent, #00E5FF, transparent)",
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          {children}
        </motion.div>
      </section>
    </>
  )
}
