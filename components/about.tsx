"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Code2, Briefcase, Layers, GraduationCap, Zap, Brain } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    desc: "MERN, Next.js, Nest.js, tRPC -- end-to-end development from responsive front-ends to robust back-end systems and APIs.",
  },
  {
    icon: Brain,
    title: "AI & LLM Integration",
    desc: "LangChain, LangGraph, Hugging Face -- building intelligent, AI-powered web applications with real-world impact.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    desc: "Optimizing applications for speed, security, and reliability. Enterprise-grade architecture for scalable platforms.",
  },
  {
    icon: GraduationCap,
    title: "COMSATS University",
    desc: "Currently pursuing my degree at COMSATS University Islamabad while actively building production-grade software.",
  },
]

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Freelancing" },
  { icon: Layers, value: "50+", label: "Projects Delivered" },
  { icon: Code2, value: "15+", label: "Technologies" },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div ref={ref} className="flex flex-col gap-12">
        {/* Bio + Stats */}
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Bio text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"I'm "}
              <span className="font-semibold text-foreground">{"Muhammad Ismaeel"}</span>
              {", a Full-Stack Developer and COMSATS University Islamabad student. I specialize in building high-performance, secure, and scalable web applications -- from responsive front-end interfaces to robust back-end systems and APIs."}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {"With expertise in "}
              <span className="font-semibold text-primary">{"LLM-based applications"}</span>
              {", "}
              <span className="font-semibold text-primary">{"LangChain"}</span>
              {", "}
              <span className="font-semibold text-primary">{"LangGraph"}</span>
              {", and "}
              <span className="font-semibold text-primary">{"Hugging Face"}</span>
              {", I integrate AI and intelligent automation into web solutions, delivering interactive, data-driven experiences. I'm passionate about enterprise software, complex systems, and optimizing applications for speed and reliability."}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass glass-hover glow-border rounded-xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.div
            className="w-full shrink-0 lg:w-[420px]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass glow-border overflow-hidden rounded-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-[#00E5FF]/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">{"ismaeel@portfolio ~"}</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-xs leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  {"whoami"}
                </p>
                <p className="mt-1 text-foreground">{"Muhammad Ismaeel"}</p>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  {"cat role.txt"}
                </p>
                <p className="mt-1 text-foreground">{"Full-Stack Developer & AI Engineer"}</p>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  {"ls skills/"}
                </p>
                <p className="mt-1 text-primary/80">
                  {"MERN/ Next.js/ Nest.js/ LangChain/"}
                </p>
                <p className="text-primary/80">
                  {"LangGraph/ HuggingFace/ tRPC/ Docker/"}
                </p>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  {"cat education.txt"}
                </p>
                <p className="mt-1 text-foreground">{"COMSATS University Islamabad"}</p>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  {"echo $STATUS"}
                </p>
                <p className="mt-1 text-[#28C840]">{"Available for exciting projects"}</p>
                <p className="mt-3 text-muted-foreground">
                  <span className="text-primary">{"$ "}</span>
                  <span className="animate-pulse">{"_"}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass glass-hover glow-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E5FF]/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
