"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Star, TrendingUp, Users, Award } from "lucide-react"

const experiences = [
  {
    platform: "Fiverr",
    role: "Full-Stack Developer & AI Engineer",
    duration: "2024 - Present",
    description:
      "Delivering high-quality full-stack web applications and AI-powered solutions. Specializing in MERN stack, Next.js, and LangChain-based chatbots. Consistently rated 5 stars with repeat clients.",
    highlights: ["5-Star Rated", "Top Seller Progress", "30+ Orders Completed"],
    color: "#1DBF73",
  },
  {
    platform: "Upwork",
    role: "Full-Stack Developer & AI Specialist",
    duration: "2024 - Present",
    description:
      "Building scalable enterprise platforms, API integrations, and AI-powered applications for global clients. Expert-vetted in Next.js, Nest.js, and LLM integration.",
    highlights: ["100% Job Success", "Top Rated", "Enterprise Clients"],
    color: "#14A800",
  },
  {
    platform: "COMSATS University Islamabad",
    role: "Computer Science Student",
    duration: "2022 - Present",
    description:
      "Pursuing my degree in Computer Science while actively building production-grade software. Contributing to university tech community and participating in hackathons.",
    highlights: ["Active Contributor", "Tech Community Lead", "Dean's List"],
    color: "#00E5FF",
  },
]

const freelanceStats = [
  { icon: Star, value: "5.0", label: "Average Rating", color: "#FFD700" },
  { icon: TrendingUp, value: "50+", label: "Projects Done", color: "#00E5FF" },
  { icon: Users, value: "30+", label: "Happy Clients", color: "#1DBF73" },
  { icon: Award, value: "100%", label: "Job Success", color: "#14A800" },
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My Journey">
      <div ref={ref}>
        {/* Freelance stats row */}
        <motion.div
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {freelanceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass glass-hover glow-border rounded-2xl p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <stat.icon
                className="mx-auto mb-2 h-5 w-5"
                style={{ color: stat.color }}
              />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-px">
            <motion.div
              className="h-full w-full"
              style={{
                background: "linear-gradient(180deg, #00E5FF, #00B4D8, transparent)",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style-origin="top"
            />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.platform}
              className={`relative mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-12 md:w-1/2 md:pl-0`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 flex h-3 w-3 items-center justify-center ${
                  i % 2 === 0
                    ? "left-3 md:left-auto md:-right-1.5"
                    : "left-3 md:-left-1.5"
                }`}
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 12px ${exp.color}60`,
                  }}
                />
                <div
                  className="absolute h-3 w-3 animate-ping rounded-full opacity-30"
                  style={{ backgroundColor: exp.color }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="glass glass-hover glow-border rounded-2xl p-6"
                whileHover={{ y: -4 }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{exp.platform}</h3>
                  <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium" style={{ color: exp.color }}>
                  {exp.role}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium"
                      style={{
                        color: exp.color,
                        backgroundColor: `${exp.color}10`,
                        border: `1px solid ${exp.color}20`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
