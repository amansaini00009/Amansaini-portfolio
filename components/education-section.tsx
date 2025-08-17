import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Jaipur National University",
      period: "Expected 2026",
      status: "In Progress",
      description: "Currently pursuing BCA with focus on computer applications and technology",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Govt Model Sanskriti Sen Sec School, Mahendergarh",
      period: "2022",
      grade: "69%",
      status: "Completed",
    },
    {
      degree: "Secondary School Education",
      institution: "Govt Model Sanskriti Sen Sec School, Mahendergarh",
      period: "2020",
      grade: "58%",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">Education</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-serif font-bold text-xl text-foreground">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>{edu.status}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-muted-foreground">
                    {edu.description ||
                      `Completed ${edu.degree.toLowerCase()} with dedication and academic excellence.`}
                  </p>
                  {edu.grade && (
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-primary">Grade: {edu.grade}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
