"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML/CSS", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Nest.js", level: "Intermediate" },
      { name: "Express.js", level: "Advanced" },
      { name: "tRPC", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "LangChain", level: "Intermediate" },
      { name: "LangGraph", level: "Intermediate" },
      { name: "Hugging Face", level: "Beginner" },
      { name: "OpenAI API", level: "Advanced" },
      { name: "RAG Systems", level: "Intermediate" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Redis", level: "Beginner" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git/GitHub", level: "Advanced" },
    ],
  },
]

function getLevelWidth(level: string) {
  switch (level) {
    case "Expert": return "95%"
    case "Advanced": return "75%"
    case "Intermediate": return "55%"
    case "Beginner": return "35%"
    default: return "40%"
  }
}

function getLevelColor(level: string) {
  switch (level) {
    case "Expert": return "#00E5FF"
    case "Advanced": return "#00B4D8"
    case "Intermediate": return "#0096C7"
    case "Beginner": return "#0077B6"
    default: return "#0077B6"
  }
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper id="skills" title="Skills & Expertise" subtitle="Tech Stack">
      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            className="glass glass-hover glow-border rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
          >
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
              <span
                className="h-1 w-4 rounded-full"
                style={{ backgroundColor: "#00E5FF", boxShadow: "0 0 8px rgba(0,229,255,0.6)" }}
              />
              {cat.title}
            </h3>

            <div className="flex flex-col gap-4">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: catIndex * 0.15 + i * 0.05 }}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span
                      className="rounded-full px-2 py-0.5 font-mono text-[10px] font-medium"
                      style={{
                        color: getLevelColor(skill.level),
                        backgroundColor: `${getLevelColor(skill.level)}15`,
                        border: `1px solid ${getLevelColor(skill.level)}25`,
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted/50">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}80)`,
                        boxShadow: `0 0 8px ${getLevelColor(skill.level)}40`,
                      }}
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: getLevelWidth(skill.level) } : { width: "0%" }}
                      transition={{ duration: 1, delay: catIndex * 0.15 + i * 0.1 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
