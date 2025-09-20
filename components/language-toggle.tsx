"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  onLanguageChange: (lang: "en" | "uz") => void
  currentLang: "en" | "uz"
}

export function LanguageToggle({ onLanguageChange, currentLang }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLang === "en" ? "uz" : "en")}
      className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
    >
      <Globe className="w-4 h-4 mr-2" />
      {currentLang === "en" ? "O'zbekcha" : "English"}
    </Button>
  )
}
