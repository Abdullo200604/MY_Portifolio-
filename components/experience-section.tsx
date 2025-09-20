"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"

interface ExperienceSectionProps {
  language: "en" | "uz"
}

export function ExperienceSection({ language }: ExperienceSectionProps) {
  const content = {
    en: {
      title: "Experience",
      experiences: [
        {
          period: "2024 — PRESENT",
          role: "Project Manager",
          company: "CerifyNow",
          link: "https://cerifynow.vercel.app",
          description:
            "Leading project development and team coordination for a certification platform. Managing full project lifecycle from planning to deployment, ensuring quality standards and timely delivery.",
          technologies: ["Next.js", "TypeScript", "Project Management", "Team Leadership"],
        },
        {
          period: "2023 — 2024",
          role: "Project Manager",
          company: "PDPEdu",
          link: "https://pdpedu.uz",
          description:
            "Managed educational platform development projects, coordinating between development teams and stakeholders. Implemented agile methodologies and improved project delivery efficiency.",
          technologies: ["React", "Node.js", "MongoDB", "Agile", "Scrum"],
        },
        {
          period: "2023 — PRESENT",
          role: "Backend Developer",
          company: "LMS Platform",
          link: "https://github.com/Abdullo200604/LMS",
          description:
            "Developed comprehensive Learning Management System backend with robust API architecture. Built scalable server-side solutions handling user management, course delivery, and assessment systems.",
          technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
        },
      ],
    },
    uz: {
      title: "Tajriba",
      experiences: [
        {
          period: "2024 — HOZIR",
          role: "Loyiha Menejeri",
          company: "CerifyNow",
          link: "https://cerifynow.vercel.app",
          description:
            "Sertifikatlashtirish platformasi uchun loyiha ishlab chiqish va jamoa koordinatsiyasini boshqaraman. Rejalashtirish dan joylashtirish gacha bo'lgan to'liq loyiha hayot siklini boshqaraman, sifat standartlari va o'z vaqtida yetkazib berishni ta'minlayman.",
          technologies: ["Next.js", "TypeScript", "Loyiha Boshqaruvi", "Jamoa Rahbarligi"],
        },
        {
          period: "2023 — 2024",
          role: "Loyiha Menejeri",
          company: "PDPEdu",
          link: "https://pdpedu.uz",
          description:
            "Ta'lim platformasi ishlab chiqish loyihalarini boshqardim, dasturlash jamoalari va manfaatdor tomonlar o'rtasida koordinatsiya qildim. Agile metodologiyalarini joriy qildim va loyiha yetkazib berish samaradorligini oshirdim.",
          technologies: ["React", "Node.js", "MongoDB", "Agile", "Scrum"],
        },
        {
          period: "2023 — HOZIR",
          role: "Backend Dasturchi",
          company: "LMS Platformasi",
          link: "https://github.com/Abdullo200604/LMS",
          description:
            "Mustahkam API arxitekturasi bilan keng qamrovli O'quv Boshqaruv Tizimi backend qismini ishlab chiqdim. Foydalanuvchilarni boshqarish, kurs yetkazib berish va baholash tizimlarini boshqaradigan kengaytiriladigan server tomonidagi yechimlar yaratdim.",
          technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
        },
      ],
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 parallax-medium">
        <div className="absolute top-32 left-16 w-56 h-56 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-16 w-72 h-72 bg-accent/4 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 reveal-up text-reveal">{content[language].title}</h2>

          <div className="space-y-8 stagger-reveal">
            {content[language].experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:bg-card/50 transition-all duration-300 border-border/50 hover-lift morph-in"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Period */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground parallax-fast">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-accent font-medium">{exp.company}</span>
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors hover-lift"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
