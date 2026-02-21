"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github, ChevronRight, Bot, ShoppingCart, MessageSquare, BarChart3, Shield, Workflow } from "lucide-react"

const projects = [
  {
    title: "AI Chat Platform",
    description:
      "Enterprise-grade AI chatbot platform built with LangChain and LangGraph. Features RAG-based document Q&A, multi-model support (GPT-4, Claude, Llama), conversation memory, and real-time streaming responses.",
    tags: ["Next.js", "LangChain", "LangGraph", "OpenAI", "Pinecone", "tRPC"],
    icon: Bot,
    category: "AI",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "Full-stack multi-vendor marketplace with Stripe payments, real-time order tracking, inventory management, admin dashboard, and SEO-optimized product pages. Handles 10K+ products.",
    tags: ["Next.js", "Nest.js", "MongoDB", "Stripe", "Redis", "Docker"],
    icon: ShoppingCart,
    category: "Full-Stack",
    live: "#",
    github: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Notion-like workspace with real-time collaborative editing, nested pages, drag-and-drop blocks, permissions system, and WebSocket-powered live presence indicators.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "tRPC", "Tailwind"],
    icon: MessageSquare,
    category: "Full-Stack",
    live: "#",
    github: "#",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "Intelligent analytics platform with AI-powered insights, natural language querying of data, automated report generation, and interactive data visualizations with D3.js.",
    tags: ["Next.js", "Hugging Face", "D3.js", "PostgreSQL", "Prisma"],
    icon: BarChart3,
    category: "AI",
    live: "#",
    github: "#",
  },
  {
    title: "Auth & RBAC System",
    description:
      "Production-ready authentication microservice with JWT/OAuth2, role-based access control, rate limiting, session management, and comprehensive audit logging for enterprise apps.",
    tags: ["Nest.js", "PostgreSQL", "Redis", "Docker", "JWT", "OAuth2"],
    icon: Shield,
    category: "Backend",
    live: "#",
    github: "#",
  },
  {
    title: "AI Workflow Automation",
    description:
      "No-code AI workflow builder using LangGraph for orchestrating complex multi-step AI agent pipelines. Supports branching logic, human-in-the-loop, and external API integrations.",
    tags: ["Next.js", "LangGraph", "LangChain", "Python", "FastAPI", "Redis"],
    icon: Workflow,
    category: "AI",
    live: "#",
    github: "#",
  },
]

const categories = ["All", "AI", "Full-Stack", "Backend"]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="My Work">
      <div ref={ref}>
        {/* Filter tabs */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="projectFilter"
                  className="absolute inset-0 rounded-lg border border-[#00E5FF]/20 bg-[#00E5FF]/5"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass glow-border group flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                {/* Project header */}
                <div className="relative border-b border-[#00E5FF]/5 p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00E5FF]/8 transition-colors group-hover:bg-[#00E5FF]/15">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full border border-[#00E5FF]/15 bg-[#00E5FF]/5 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                {/* Tags + links */}
                <div className="flex flex-1 flex-col justify-between p-6 pt-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#00E5FF]/10 bg-[#00E5FF]/5 px-2 py-0.5 font-mono text-[10px] text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.live}
                      className="btn-neon flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      {"Demo"}
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="btn-ghost flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <Github className="h-3 w-3" />
                      {"Code"}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/muhammadismaeel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
            whileHover={{ scale: 1.05, x: 4 }}
          >
            {"View All on GitHub"}
            <ChevronRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
