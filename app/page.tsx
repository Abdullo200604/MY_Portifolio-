"use client"

import { useState, useEffect } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "uz">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference
    const savedLang = localStorage.getItem("portfolio-language") as "en" | "uz"
    if (savedLang) {
      setLanguage(savedLang)
    }

    const initializeScrollAnimations = () => {
      // Intersection Observer for reveal animations
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view")
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "-50px 0px -50px 0px",
        },
      )

      // Observe all reveal elements
      const revealElements = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .morph-in, .text-reveal, .stagger-reveal, .section-transition",
      )
      revealElements.forEach((el) => revealObserver.observe(el))

      // Parallax scrolling effect
      const handleParallax = () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll(".parallax-slow, .parallax-medium, .parallax-fast")

        parallaxElements.forEach((element) => {
          const speed = element.classList.contains("parallax-slow")
            ? 0.2
            : element.classList.contains("parallax-medium")
              ? 0.5
              : 0.8
          const yPos = -(scrolled * speed)
          element.style.transform = `translateY(${yPos}px)`
        })
      }

      // Smooth scroll for navigation links
      const enhanceNavigation = () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          })
        })
      }

      // Add scroll listener for parallax
      window.addEventListener("scroll", handleParallax, { passive: true })

      enhanceNavigation()

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleParallax)
        revealObserver.disconnect()
      }
    }

    if (mounted) {
      const cleanup = initializeScrollAnimations()
      return cleanup
    }
  }, [mounted])

  const handleLanguageChange = (lang: "en" | "uz") => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <main className="min-h-screen bg-background section-scroll">
      <LanguageToggle onLanguageChange={handleLanguageChange} currentLang={language} />
      <Navigation language={language} />

      <section className="section-transition">
        <HeroSection language={language} />
      </section>

      <section className="section-transition">
        <ExperienceSection language={language} />
      </section>

      <section className="section-transition">
        <ProjectsSection language={language} />
      </section>

      <section className="section-transition">
        <Footer language={language} />
      </section>
    </main>
  )
}
