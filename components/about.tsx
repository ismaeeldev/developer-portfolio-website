"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Code2, Briefcase, Layers } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Layers, value: "50+", label: "Projects Completed" },
  { icon: Code2, value: "15+", label: "Technologies Used" },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div ref={ref} className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Profile image */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass glow-border relative h-72 w-72 overflow-hidden rounded-2xl lg:h-80 lg:w-80">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <Code2 className="h-12 w-12 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{"Alex Chen"}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            {"I'm a "}
            <span className="font-semibold text-foreground">{"Full Stack Developer"}</span>
            {" based in San Francisco with over 5 years of experience building web applications. I specialize in "}
            <span className="font-semibold text-primary">{"React"}</span>
            {", "}
            <span className="font-semibold text-primary">{"Next.js"}</span>
            {", and "}
            <span className="font-semibold text-primary">{"Node.js"}</span>
            {", creating performant and scalable digital products."}
          </p>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            {"When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing about web development best practices. I believe in writing clean, maintainable code that delivers exceptional user experiences."}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass glass-hover glow-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
