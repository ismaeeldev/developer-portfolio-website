"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [visible, setVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    },
    [cursorX, cursorY, visible]
  )

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", () => setIsClicking(true))
    window.addEventListener("mouseup", () => setIsClicking(false))

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .cursor-glow'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [onMouseMove])

  // Re-bind on DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleHoverStart = () => setIsHovering(true)
      const handleHoverEnd = () => setIsHovering(false)
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .cursor-glow'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart)
        el.addEventListener("mouseleave", handleHoverEnd)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 56 : 36,
            height: isHovering ? 56 : 36,
            opacity: visible ? 1 : 0,
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-[#00E5FF]/40"
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(0,229,255,0.3), inset 0 0 20px rgba(0,229,255,0.1)"
              : "0 0 10px rgba(0,229,255,0.15)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 8 : 6,
            height: isHovering ? 8 : 6,
            opacity: visible ? 1 : 0,
            scale: isClicking ? 1.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-[#00E5FF]"
          style={{
            boxShadow: "0 0 12px rgba(0,229,255,0.8)",
          }}
        />
      </motion.div>
    </>
  )
}
