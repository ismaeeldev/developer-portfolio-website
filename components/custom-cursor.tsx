"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [visible, setVisible] = useState(false)
  const isTouchDevice = useRef(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect touch device
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      isTouchDevice.current = true
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    const bindInteractiveElements = () => {
      const elements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-glow'
      )
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
        el.addEventListener("mouseenter", handleHoverStart)
        el.addEventListener("mouseleave", handleHoverEnd)
      })
    }

    bindInteractiveElements()

    const observer = new MutationObserver(() => {
      bindInteractiveElements()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      observer.disconnect()
      const elements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-glow'
      )
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY, visible])

  if (isTouchDevice.current) return null

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
        aria-hidden="true"
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
        aria-hidden="true"
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
