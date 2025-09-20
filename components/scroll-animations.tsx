"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "parallax"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("animate-in")

              switch (animation) {
                case "fadeInUp":
                  element.classList.add("animate-fade-in-up")
                  break
                case "slideInLeft":
                  element.classList.add("animate-slide-in-left")
                  break
                case "slideInRight":
                  element.classList.add("animate-slide-in-right")
                  break
                case "scaleIn":
                  element.classList.add("animate-scale-in")
                  break
                case "parallax":
                  element.classList.add("animate-parallax")
                  break
              }
            }, delay)

            observer.unobserve(element)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [animation, delay, threshold])

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`} style={{ transform: getInitialTransform(animation) }}>
      {children}
    </div>
  )
}

function getInitialTransform(animation: string): string {
  switch (animation) {
    case "fadeInUp":
      return "translateY(30px)"
    case "slideInLeft":
      return "translateX(-30px)"
    case "slideInRight":
      return "translateX(30px)"
    case "scaleIn":
      return "scale(0.9)"
    case "parallax":
      return "translateY(20px)"
    default:
      return "translateY(30px)"
  }
}

// Parallax background component
export function ParallaxBackground({ children, speed = 0.5 }: { children: ReactNode; speed?: number }) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      element.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  )
}
