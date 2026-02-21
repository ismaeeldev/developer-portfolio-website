"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <div ref={ref} className="mx-auto max-w-2xl">
        <motion.div
          className="glass glow-border rounded-2xl p-8 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-8 text-center leading-relaxed text-muted-foreground">
            {"Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas."}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex flex-col gap-6"
          >
            {/* Name field */}
            <div className="relative">
              <motion.label
                className={`pointer-events-none absolute left-4 transition-all duration-200 ${
                  focused === "name"
                    ? "-top-2.5 text-xs text-primary"
                    : "top-3.5 text-sm text-muted-foreground"
                }`}
                animate={
                  focused === "name"
                    ? { top: -10, fontSize: "12px" }
                    : { top: 14, fontSize: "14px" }
                }
              >
                {"Your Name"}
              </motion.label>
              <input
                type="text"
                name="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:bg-white/8 focus:ring-1 focus:ring-primary/25"
                onFocus={() => setFocused("name")}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(null)
                }}
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <motion.label
                className={`pointer-events-none absolute left-4 transition-all duration-200 ${
                  focused === "email"
                    ? "-top-2.5 text-xs text-primary"
                    : "top-3.5 text-sm text-muted-foreground"
                }`}
                animate={
                  focused === "email"
                    ? { top: -10, fontSize: "12px" }
                    : { top: 14, fontSize: "14px" }
                }
              >
                {"Your Email"}
              </motion.label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:bg-white/8 focus:ring-1 focus:ring-primary/25"
                onFocus={() => setFocused("email")}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(null)
                }}
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <motion.label
                className={`pointer-events-none absolute left-4 transition-all duration-200 ${
                  focused === "message"
                    ? "-top-2.5 text-xs text-primary"
                    : "top-3.5 text-sm text-muted-foreground"
                }`}
                animate={
                  focused === "message"
                    ? { top: -10, fontSize: "12px" }
                    : { top: 14, fontSize: "14px" }
                }
              >
                {"Your Message"}
              </motion.label>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:bg-white/8 focus:ring-1 focus:ring-primary/25"
                onFocus={() => setFocused("message")}
                onBlur={(e) => {
                  if (!e.target.value) setFocused(null)
                }}
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-4 w-4" />
              {"Send Message"}
            </motion.button>
          </form>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
