"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Logos", "Social Media", "Thumbnails", "Motion Graphics", "Video Editing"]

  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Logo",
      category: "Logos",
      image: "/modern-tech-startup-logo.png",
      description: "Clean and modern logo design for a tech startup",
    },
    {
      id: 2,
      title: "Instagram Post Series",
      category: "Social Media",
      image: "/fashion-brand-instagram-post.png",
      description: "Cohesive Instagram post series for fashion brand",
    },
    {
      id: 3,
      title: "YouTube Thumbnail",
      category: "Thumbnails",
      image: "/tech-review-thumbnail.png",
      description: "Eye-catching thumbnail for tech review video",
    },
    {
      id: 4,
      title: "Animated Logo Reveal",
      category: "Motion Graphics",
      image: "/animated-logo-reveal.png",
      description: "Dynamic logo animation with smooth transitions",
    },
    {
      id: 5,
      title: "Product Demo Video",
      category: "Video Editing",
      image: "/placeholder.svg?height=300&width=300",
      description: "Professional product demonstration video",
    },
    {
      id: 6,
      title: "Restaurant Logo",
      category: "Logos",
      image: "/placeholder.svg?height=300&width=300",
      description: "Elegant logo design for fine dining restaurant",
    },
    {
      id: 7,
      title: "Facebook Ad Campaign",
      category: "Social Media",
      image: "/placeholder.svg?height=300&width=300",
      description: "Conversion-focused Facebook ad design",
    },
    {
      id: 8,
      title: "Gaming Thumbnail",
      category: "Thumbnails",
      image: "/placeholder.svg?height=300&width=300",
      description: "High-energy gaming video thumbnail",
    },
    {
      id: 9,
      title: "Text Animation",
      category: "Motion Graphics",
      image: "/placeholder.svg?height=300&width=300",
      description: "Kinetic typography for promotional video",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-black text-4xl md:text-5xl text-center mb-12 text-foreground">
          Portfolio Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm mb-3">{item.description}</p>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
