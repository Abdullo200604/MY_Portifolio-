"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail } from "lucide-react"

interface HeroSectionProps {
  language: "en" | "uz"
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      name: "Abdulloh",
      title: "Full Stack Developer & Project Manager",
      subtitle: "I build scalable web applications and manage complex projects.",
      description:
        "I'm a developer passionate about creating efficient, user-friendly digital experiences that blend thoughtful design with robust engineering. My expertise lies at the intersection of full-stack development and project management, creating solutions that are not only technically sound but also strategically aligned with business goals.",
      currentRole: "Currently, I'm working as a",
      projectManager: "Project Manager",
      specializing:
        "specializing in web development and team coordination. I contribute to the creation and maintenance of complex systems, ensuring projects meet technical standards and business requirements while delivering exceptional user experiences.",
      experience: "In the past, I've had the opportunity to develop software across a variety of settings — from",
      agencies: "development agencies",
      and: "and",
      corporations: "large corporations",
      to: "to",
      startups: "start-ups",
      studios: "small digital product studios",
      additionally: "Additionally, I have experience in",
      backend: "backend development",
      few: "building robust server-side solutions and APIs.",
      spare:
        "In my spare time, I'm usually learning new technologies, contributing to open source projects, or working on personal development projects to stay current with the latest industry trends and best practices.",
    },
    uz: {
      name: "Abdulloh",
      title: "Full Stack Dasturchi va Loyiha Menejeri",
      subtitle: "Men kengaytiriladigan veb-ilovalar yarataman va murakkab loyihalarni boshqaraman.",
      description:
        "Men samarali, foydalanuvchi uchun qulay raqamli tajribalar yaratishga ishtiyoqli dasturchiman. Mening tajribam full-stack dasturlash va loyiha boshqaruvi kesishmasida joylashgan bo'lib, nafaqat texnik jihatdan mustahkam, balki biznes maqsadlariga ham mos keladigan yechimlar yarataman.",
      currentRole: "Hozirda men",
      projectManager: "Loyiha Menejeri",
      specializing:
        "sifatida ishlayman, veb-dasturlash va jamoa koordinatsiyasiga ixtisoslashganman. Men murakkab tizimlarni yaratish va qo'llab-quvvatlashga hissa qo'shaman, loyihalar texnik standartlar va biznes talablariga javob berishini ta'minlayman.",
      experience: "O'tmishda men turli muhitlarda dasturiy ta'minot ishlab chiqish imkoniyatiga ega bo'ldim —",
      agencies: "dasturlash agentliklaridan",
      and: "va",
      corporations: "yirik korporatsiyalardan",
      to: "tortib",
      startups: "startaplargacha",
      studios: "kichik raqamli mahsulot studiyalarigacha",
      additionally: "Bundan tashqari, menda",
      backend: "backend dasturlash",
      few: "sohasida tajriba bor, mustahkam server tomonidagi yechimlar va API'lar yarataman.",
      spare:
        "Bo'sh vaqtlarimda odatda yangi texnologiyalarni o'rganaman, ochiq kodli loyihalarga hissa qo'shaman yoki sanoatning eng so'nggi tendentsiyalari va eng yaxshi amaliyotlari bilan tanish bo'lish uchun shaxsiy loyihalar ustida ishlayman.",
    },
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Abdullo200604", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:lwcardinal12@gmail.com", label: "Email" },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 animated-background relative overflow-hidden">
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 reveal-left">
            <div className="space-y-4 text-reveal">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance parallax-medium">{content[language].name}</h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-mono">{content[language].title}</h2>
              <p className="text-lg text-muted-foreground text-pretty">{content[language].subtitle}</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 stagger-reveal">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-accent transition-all duration-300 hover-lift parallax-fast"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Detailed Description */}
          <div className="space-y-6 reveal-right">
            <div className="space-y-4 text-muted-foreground leading-relaxed stagger-reveal">
              <p className="text-pretty">{content[language].description}</p>

              <p className="text-pretty">
                {content[language].currentRole}{" "}
                <span className="text-primary font-semibold">{content[language].projectManager}</span>{" "}
                {content[language].specializing}
              </p>

              <p className="text-pretty">
                {content[language].experience}{" "}
                <span className="text-accent font-semibold">{content[language].agencies}</span> {content[language].and}{" "}
                <span className="text-accent font-semibold">{content[language].corporations}</span>{" "}
                {content[language].to} <span className="text-accent font-semibold">{content[language].startups}</span>{" "}
                {content[language].and} <span className="text-accent font-semibold">{content[language].studios}</span>.{" "}
                {content[language].additionally}{" "}
                <span className="text-primary font-semibold">{content[language].backend}</span> {content[language].few}
              </p>

              <p className="text-pretty">{content[language].spare}</p>
            </div>

            {/* Avatar */}
            <div className="flex justify-center lg:justify-start pt-6 morph-in">
              <Avatar className="w-24 h-24 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300 hover-lift">
                <AvatarImage src="/professional-developer-avatar.png" alt="Abdulloh" />
                <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
