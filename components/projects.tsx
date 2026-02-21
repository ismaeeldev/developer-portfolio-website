"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github, Layers } from "lucide-react"

const projects = [
  {
    title: "CloudSync Pro",
    description:
      "A real-time cloud collaboration platform with live document editing, team workspaces, and integrated file management.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    color: "#3B82F6",
  },
  {
    title: "CryptoTracker",
    description:
      "Full-featured cryptocurrency tracking dashboard with real-time price updates, portfolio management, and advanced charting.",
    tags: ["React", "Node.js", "WebSocket", "Chart.js"],
    color: "#6366F1",
  },
  {
    title: "DevFlow",
    description:
      "An AI-powered developer workflow tool that automates code reviews, generates documentation, and manages deployments.",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    color: "#3B82F6",
  },
  {
    title: "EcoMart",
    description:
      "Sustainable e-commerce platform with carbon footprint tracking, eco-friendly product recommendations, and green delivery options.",
    tags: ["React", "Stripe", "MongoDB", "Express"],
    color: "#6366F1",
  },
  {
    title: "MindMap AI",
    description:
      "An intelligent brainstorming tool that uses AI to generate mind maps, connect ideas, and organize thoughts visually.",
    tags: ["TypeScript", "D3.js", "Next.js", "GPT-4"],
    color: "#3B82F6",
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="My Work">
      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass glow-border group flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Screenshot placeholder */}
            <div className="relative h-48 overflow-hidden bg-muted/30">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                }}
              />
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <Layers
                      className="h-8 w-8"
                      style={{ color: project.color }}
                    />
                  </div>
                  <div
                    className="h-1 w-12 rounded-full opacity-40"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex gap-3">
                  <motion.a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="glass flex h-10 w-10 items-center justify-center rounded-xl text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
