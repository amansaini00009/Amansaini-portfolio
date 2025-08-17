import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/creative-workspace.png" alt="Creative workspace" className="rounded-lg shadow-lg w-full" />
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a passionate graphic designer and video editor with a keen eye for detail and a love for
                    transforming creative ideas into compelling visual stories. My journey in design began with a
                    fascination for how visuals can communicate powerful messages and evoke emotions.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    With expertise in both static and motion graphics, I specialize in creating engaging content for
                    social media, branding materials, and video productions. I believe that great design is not just
                    about aesthetics—it's about solving problems and creating meaningful connections.
                  </p>

                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold text-primary mb-2">Career Goal</p>
                    <p className="text-foreground">
                      Seeking opportunities to enhance my abilities while contributing to company growth through
                      innovative design solutions and creative excellence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
