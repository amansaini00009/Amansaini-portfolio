import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">Experience</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="font-serif font-bold text-2xl text-primary">
                    Freelance Graphic Designer & Video Editor
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022 – Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit">
                  Current Position
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Key Responsibilities</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Designed engaging social media posts, logos, and promotional banners for various clients
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Edited videos with smooth transitions, animations, and professional effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created comprehensive marketing materials for YouTube, Instagram, and Facebook</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with clients to understand their vision and deliver exceptional results</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Achievements</h4>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="font-semibold text-primary">50+ Projects Completed</div>
                      <div className="text-sm text-muted-foreground">
                        Successfully delivered diverse design and video projects
                      </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="font-semibold text-primary">Client Satisfaction</div>
                      <div className="text-sm text-muted-foreground">Maintained 100% client satisfaction rate</div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="font-semibold text-primary">Multi-Platform Expertise</div>
                      <div className="text-sm text-muted-foreground">
                        Created content for various social media platforms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
