import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Muhammad Ismaeel | Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer specializing in MERN, Next.js, Nest.js, and AI-powered applications with LangChain, LangGraph & Hugging Face. Building scalable enterprise solutions.",
  openGraph: {
    title: "Muhammad Ismaeel | Full-Stack Developer & AI Engineer",
    description:
      "Building high-performance, secure, and scalable web applications with AI integration.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
