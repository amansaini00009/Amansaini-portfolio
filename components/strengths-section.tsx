import { Card, CardContent } from "@/components/ui/card"
import { Crown, Heart, Users, MessageCircle, Ear } from "lucide-react"

export default function StrengthsSection() {
  const strengths = [
    {
      icon: Crown,
      title: "Leadership",
      description:
        "Natural ability to guide teams and projects towards successful outcomes with clear vision and direction.",
    },
    {
      icon: Heart,
      title: "Dedication",
      description:
        "Unwavering commitment to delivering high-quality work and exceeding client expectations in every project.",
    },
    {
      icon: Users,
      title: "Organization",
      description:
        "Excellent project management skills with attention to detail and ability to handle multiple tasks efficiently.",
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description:
        "Clear and effective communication skills that ensure smooth collaboration with clients and team members.",
    },
    {
      icon: Ear,
      title: "Active Listening",
      description:
        "Keen ability to understand client needs and feedback, translating requirements into exceptional design solutions.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">Core Strengths</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <strength.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
