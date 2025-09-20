"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  language: "en" | "uz"
}

export function Navigation({ language }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("about")

  const navItems = {
    en: [
      { id: "about", label: "ABOUT" },
      { id: "experience", label: "EXPERIENCE" },
      { id: "projects", label: "PROJECTS" },
    ],
    uz: [
      { id: "about", label: "MEN HAQIMDA" },
      { id: "experience", label: "TAJRIBA" },
      { id: "projects", label: "LOYIHALAR" },
    ],
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-8 top-1/3 -translate-y-1/2 z-40 hidden lg:block">
      <div className="space-y-3">
        {navItems[language].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block text-sm font-mono tracking-wider transition-all duration-300 hover:text-primary ${
              activeSection === item.id
                ? "text-primary border-l-2 border-primary pl-4"
                : "text-muted-foreground hover:pl-2"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
