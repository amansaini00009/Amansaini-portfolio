import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, MapPin } from "lucide-react"

export default function HobbiesSection() {
  const hobbies = [
    {
      icon: Users,
      title: "Connecting with People",
      description:
        "I love meeting new people and building meaningful relationships. Networking and collaboration fuel my creativity.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: BookOpen,
      title: "Reading Books",
      description:
        "Passionate reader who enjoys exploring design theory, business books, and creative inspiration from various authors.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: MapPin,
      title: "Travelling",
      description:
        "Exploring new places and cultures provides endless inspiration for my creative work and broadens my perspective.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">
          Personal Interests
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={hobby.image || "/placeholder.svg"}
                  alt={hobby.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-lg">
                  <hobby.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">Languages</h3>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg mb-2">
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <p className="font-semibold text-foreground">English</p>
                <p className="text-sm text-muted-foreground">Fluent</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg mb-2">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <p className="font-semibold text-foreground">Hindi</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
