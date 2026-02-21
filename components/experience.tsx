"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Building2 } from "lucide-react"

const experiences = [
  {
    company: "TechNova Inc.",
    role: "Senior Full Stack Developer",
    duration: "2023 - Present",
    description:
      "Leading the development of a next-generation SaaS platform serving 50K+ users. Architecting microservices, mentoring junior developers, and driving technical decisions across the stack.",
  },
  {
    company: "DigitalCraft Studios",
    role: "Full Stack Developer",
    duration: "2021 - 2023",
    description:
      "Built and maintained multiple client-facing web applications using React and Node.js. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
  },
  {
    company: "StartupLab",
    role: "Frontend Developer",
    duration: "2020 - 2021",
    description:
      "Developed responsive web interfaces for early-stage startups. Collaborated with designers to translate Figma mockups into pixel-perfect, accessible React components.",
  },
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My Journey"
    >
      <div ref={ref} className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className={`relative mb-12 last:mb-0 md:w-1/2 ${
              i % 2 === 0
                ? "md:pr-12"
                : "md:ml-auto md:pl-12"
            } pl-10 md:pl-0`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-6 flex h-4 w-4 items-center justify-center ${
                i % 2 === 0
                  ? "left-0 md:left-auto md:-right-2"
                  : "left-0 md:-left-2"
              }`}
            >
              <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-primary/30" />
            </div>

            {/* Card */}
            <div className="glass glass-hover glow-border rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary">{exp.role}</p>
                </div>
              </div>
              <p className="mb-3 font-mono text-xs tracking-wide text-muted-foreground">
                {exp.duration}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
