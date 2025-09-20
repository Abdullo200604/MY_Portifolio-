"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

interface FooterProps {
  language: "en" | "uz"
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      built: "Built with",
      by: "by Abdulloh",
      rights: "© 2024 Abdulloh. All rights reserved.",
      contact: "Let's work together",
      email: "lwcardinal12@gmail.com",
    },
    uz: {
      built: "Yaratilgan",
      by: "Abdulloh tomonidan",
      rights: "© 2024 Abdulloh. Barcha huquqlar himoyalangan.",
      contact: "Keling birga ishlaymiz",
      email: "lwcardinal12@gmail.com",
    },
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Abdullo200604", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: `mailto:${content[language].email}`, label: "Email" },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-8 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-2xl" />
        <div className="absolute bottom-8 right-1/4 w-40 h-40 bg-accent/2 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-up stagger-reveal">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-reveal">
                <h3 className="text-xl font-semibold text-foreground">{content[language].contact}</h3>
                <p className="text-muted-foreground">{content[language].email}</p>
              </div>

              <div className="flex justify-start md:justify-end">
                <div className="flex gap-4 stagger-reveal">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-background hover:bg-accent transition-all duration-300 group hover-lift parallax-fast"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-reveal">
              <p className="text-sm text-muted-foreground">{content[language].rights}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                {content[language].built} <Heart className="w-4 h-4 text-red-500 animate-pulse" />{" "}
                {content[language].by}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
