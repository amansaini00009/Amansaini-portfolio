import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Canva", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "PixelLab", level: 88 },
      ],
    },
    {
      title: "Video Editing",
      skills: [
        { name: "Premiere Pro", level: 90 },
        { name: "CapCut", level: 95 },
        { name: "VN", level: 85 },
      ],
    },
    {
      title: "Creative Expertise",
      skills: [
        { name: "Logo Design", level: 92 },
        { name: "Social Media Posts", level: 95 },
        { name: "Banners & Thumbnails", level: 90 },
        { name: "Motion Graphics", level: 85 },
      ],
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "Photo Retouching", level: 88 },
        { name: "Color Correction", level: 85 },
        { name: "Layout Design", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-serif font-bold text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
