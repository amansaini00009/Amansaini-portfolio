import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/abstract-geometric-portfolio-pattern.png')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/graphic-designer-headshot.png"
              alt="Aman Saini"
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary shadow-2xl animate-float"
            />
          </div>

          {/* Main Content */}
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-4 text-foreground">Aman Saini</h1>
          <h2 className="font-serif font-bold text-2xl md:text-3xl mb-6 text-primary">
            Graphic Designer & Video Editor
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into visuals that inspire
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
