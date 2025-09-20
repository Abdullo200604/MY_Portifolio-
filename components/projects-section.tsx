"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

interface ProjectsSectionProps {
  language: "en" | "uz"
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "A selection of projects I've worked on recently.",
      projects: [
        {
          title: "CerifyNow",
          description:
            "A comprehensive certification platform that enables organizations to create, manage, and distribute digital certificates. Features include certificate templates, automated verification, and analytics dashboard.",
          image: "/modern-certification-platform-dashboard-with-dark-.jpg",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
          liveUrl: "https://cerifynow.vercel.app",
          githubUrl: "#",
          status: "In Development",
          category: "Project Management",
        },
        {
          title: "PDPEdu Platform",
          description:
            "Educational platform designed to streamline learning processes and improve student engagement. Managed the complete project lifecycle from conception to deployment.",
          image: "/educational-learning-platform-interface-with-moder.jpg",
          technologies: ["React", "Node.js", "MongoDB", "Express.js"],
          liveUrl: "https://pdpedu.uz",
          githubUrl: "#",
          status: "Completed",
          category: "Project Management",
        },
        {
          title: "LMS Backend System",
          description:
            "Robust Learning Management System backend with comprehensive API architecture. Handles user authentication, course management, progress tracking, and assessment systems.",
          image: "/api-documentation-interface-with-code-examples-and.jpg",
          technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
          liveUrl: "#",
          githubUrl: "https://github.com/Abdullo200604/LMS",
          status: "Ready for Frontend",
          category: "Backend Development",
        },
      ],
      viewProject: "View Project",
      viewCode: "View Code",
      categories: {
        "Project Management": "Project Management",
        "Backend Development": "Backend Development",
      },
    },
    uz: {
      title: "Asosiy Loyihalar",
      subtitle: "Yaqinda ustida ishlaganim loyihalarimdan namunalar.",
      projects: [
        {
          title: "CerifyNow",
          description:
            "Tashkilotlarga raqamli sertifikatlar yaratish, boshqarish va tarqatish imkonini beruvchi keng qamrovli sertifikatlashtirish platformasi. Sertifikat shablonlari, avtomatik tekshirish va analitika paneli kabi xususiyatlar mavjud.",
          image: "/modern-certification-platform-dashboard-with-dark-.jpg",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
          liveUrl: "https://cerifynow.vercel.app",
          githubUrl: "#",
          status: "Ishlab chiqilmoqda",
          category: "Loyiha Boshqaruvi",
        },
        {
          title: "PDPEdu Platformasi",
          description:
            "O'quv jarayonlarini soddalashtirish va talabalar faolligini oshirish uchun mo'ljallangan ta'lim platformasi. Loyihaning to'liq hayot siklini g'oyadan joylashtirish gacha boshqardim.",
          image: "/educational-learning-platform-interface-with-moder.jpg",
          technologies: ["React", "Node.js", "MongoDB", "Express.js"],
          liveUrl: "https://pdpedu.uz",
          githubUrl: "#",
          status: "Yakunlangan",
          category: "Loyiha Boshqaruvi",
        },
        {
          title: "LMS Backend Tizimi",
          description:
            "Keng qamrovli API arxitekturasi bilan mustahkam O'quv Boshqaruv Tizimi backend qismi. Foydalanuvchi autentifikatsiyasi, kurs boshqaruvi, progress kuzatuvi va baholash tizimlarini boshqaradi.",
          image: "/api-documentation-interface-with-code-examples-and.jpg",
          technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
          liveUrl: "#",
          githubUrl: "https://github.com/Abdullo200604/LMS",
          status: "Frontend uchun tayyor",
          category: "Backend Dasturlash",
        },
      ],
      viewProject: "Loyihani Ko'rish",
      viewCode: "Kodni Ko'rish",
      categories: {
        "Loyiha Boshqaruvi": "Loyiha Boshqaruvi",
        "Backend Dasturlash": "Backend Dasturlash",
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-40 right-20 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-reveal">{content[language].title}</h2>
            <p className="text-xl text-muted-foreground text-balance text-reveal">{content[language].subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 stagger-reveal">
            {content[language].projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover-lift morph-in"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 parallax-fast"
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${
                            project.status.includes("Completed") || project.status.includes("Yakunlangan")
                              ? "bg-green-500/10 text-green-400 border-green-500/20"
                              : project.status.includes("Development") || project.status.includes("chiqilmoqda")
                                ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/30 text-secondary-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.liveUrl !== "#" && (
                      <Button asChild size="sm" className="group/btn">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {content[language].viewProject}
                          <ArrowUpRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button asChild variant="outline" size="sm" className="group/btn bg-transparent">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {content[language].viewCode}
                        </a>
                      </Button>
                    )}
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
