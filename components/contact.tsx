"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Send, Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammadismaeel.dev@gmail.com",
    href: "mailto:muhammadismaeel.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
]

const platforms = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/muhammadismaeel",
    color: "#E2E8F0",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammadismaeel",
    color: "#0A66C2",
  },
  {
    name: "Fiverr",
    icon: ArrowUpRight,
    href: "https://fiverr.com/muhammadismaeel",
    color: "#1DBF73",
  },
  {
    name: "Upwork",
    icon: ArrowUpRight,
    href: "https://upwork.com/freelancers/muhammadismaeel",
    color: "#14A800",
  },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focused, setFocused] = useState<string | null>(null)
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" })

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <SectionWrapper id="contact" title="Let's Build Something" subtitle="Contact">
      <div ref={ref} className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left column */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {"I thrive on turning innovative ideas into real-world digital solutions. Whether you need an intelligent web app, a scalable enterprise platform, or an AI-powered solution -- let's connect and make it happen."}
            </p>

            {/* Contact info */}
            <div className="mb-8 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E5FF]/8">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Platform links */}
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover glow-border flex items-center gap-3 rounded-xl p-4 transition-all"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <platform.icon className="h-4 w-4" style={{ color: platform.color }} />
                  <span className="text-sm font-medium text-foreground">{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right column -- form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass glow-border rounded-2xl p-6 lg:p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                {(["name", "email", "message"] as const).map((field) => {
                  const isTextarea = field === "message"
                  const label =
                    field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"
                  const isActive = focused === field || formValues[field] !== ""

                  return (
                    <div key={field} className="relative">
                      <motion.label
                        className="pointer-events-none absolute left-4 text-muted-foreground"
                        animate={{
                          top: isActive ? -10 : isTextarea ? 14 : 14,
                          fontSize: isActive ? "11px" : "14px",
                          color: isActive ? "#00E5FF" : "#7B8BA3",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {label}
                      </motion.label>
                      {isTextarea ? (
                        <textarea
                          name={field}
                          rows={4}
                          value={formValues[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          className="w-full resize-none rounded-xl border border-[#00E5FF]/10 bg-[#00E5FF]/3 px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary/40 focus:bg-[#00E5FF]/5 focus:shadow-[0_0_20px_rgba(0,229,255,0.08)]"
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formValues[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          className="w-full rounded-xl border border-[#00E5FF]/10 bg-[#00E5FF]/3 px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary/40 focus:bg-[#00E5FF]/5 focus:shadow-[0_0_20px_rgba(0,229,255,0.08)]"
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                        />
                      )}
                    </div>
                  )
                })}

                <motion.button
                  type="submit"
                  className="btn-neon flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="h-4 w-4" />
                  {"Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
