"use client"

import { Github, Linkedin, ArrowUpRight } from "lucide-react"

const links = [
  { icon: Github, href: "https://github.com/muhammadismaeel", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muhammadismaeel", label: "LinkedIn" },
  { icon: ArrowUpRight, href: "https://fiverr.com/muhammadismaeel", label: "Fiverr" },
  { icon: ArrowUpRight, href: "https://upwork.com/freelancers/muhammadismaeel", label: "Upwork" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#00E5FF]/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-sm font-medium text-foreground">
            <span className="text-gradient">{"Muhammad Ismaeel"}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {"Built with Next.js, Tailwind CSS & Framer Motion"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
