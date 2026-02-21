"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, ArrowDown, ChevronRight } from "lucide-react"

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "MERN Stack Expert",
  "Next.js Specialist",
  "LangChain Developer",
]

const stats = [
  { value: "2+", label: "Years Freelancing" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
]

const techStack = [
  "React", "Next.js", "Nest.js", "Node.js", "TypeScript",
  "LangChain", "LangGraph", "Hugging Face", "tRPC", "MongoDB",
  "PostgreSQL", "Tailwind CSS", "Docker", "Redis", "GraphQL",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
      id="hero"
    >
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#00E5FF]/5 blur-[160px]" />
        <div
          className="animate-pulse-glow absolute bottom-[20%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#00B4D8]/5 blur-[140px]"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/15 bg-[#00E5FF]/5 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF]" />
          </span>
          <span className="font-mono text-xs tracking-wider text-[#00E5FF]">
            {"AVAILABLE FOR HIRE"}
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {"I'm "}
            <span className="text-gradient">{"Muhammad Ismaeel"}</span>
          </h1>

          {/* Rotating role */}
          <div className="mb-8 h-12 sm:h-14">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-semibold text-foreground/70 sm:text-3xl lg:text-4xl"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {"COMSATS University Islamabad student building high-performance, secure, and scalable web applications. I specialize in "}
          <span className="font-medium text-foreground">{"MERN, Next.js & Nest.js"}</span>
          {" with deep expertise in "}
          <span className="font-medium text-primary">{"LLM-based applications, LangChain, LangGraph & Hugging Face"}</span>
          {" -- turning innovative ideas into real-world digital solutions."}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mb-10 flex max-w-md items-center justify-center gap-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="h-8 w-px bg-[#00E5FF]/10" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-neon flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {"View My Work"}
            <ChevronRight className="h-4 w-4" />
          </motion.button>

          <motion.button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-ghost flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {"Hire Me"}
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mb-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: Github, href: "https://github.com/muhammadismaeel", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/muhammadismaeel", label: "LinkedIn" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00E5FF]/10 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-0 w-full overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-4 font-mono text-xs tracking-widest text-[#00E5FF]/15 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ArrowDown className="h-5 w-5 text-primary/40" />
      </motion.div>
    </section>
  )
}
