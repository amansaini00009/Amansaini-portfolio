import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Social Media Branding Package",
      description:
        "Complete branding solution including logo design, Instagram templates, and highlight covers for a lifestyle brand.",
      image: "/social-media-branding-package.png",
      tags: ["Logo Design", "Social Media", "Branding"],
      type: "Design",
    },
    {
      title: "YouTube Channel Makeover",
      description: "Comprehensive channel redesign with custom thumbnails, channel art, and intro/outro animations.",
      image: "/youtube-channel-design.png",
      tags: ["YouTube", "Thumbnails", "Channel Art"],
      type: "Design",
    },
    {
      title: "Product Launch Video Campaign",
      description:
        "Created engaging promotional videos with motion graphics and storytelling for a tech product launch.",
      image: "/product-launch-video-motion-graphics.png",
      tags: ["Video Editing", "Motion Graphics", "Marketing"],
      type: "Video",
    },
    {
      title: "Restaurant Menu Design",
      description: "Modern and appetizing menu design with food photography enhancement and layout optimization.",
      image: "/restaurant-menu.png",
      tags: ["Menu Design", "Food Photography", "Print Design"],
      type: "Design",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    {project.type === "Video" ? (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="font-serif font-bold text-xl text-foreground">{project.title}</CardTitle>
                  <Badge variant={project.type === "Video" ? "default" : "secondary"}>{project.type}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
