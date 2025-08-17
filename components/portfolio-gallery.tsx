"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Social Media", "Thumbnails", "Video Editing"]

  const portfolioItems = [
    {
      id: 2,
      title: "Instagram Post Series",
      category: "Social Media",
      image: "/fashion-brand-instagram-post.png",
      description: "Cohesive Instagram post series for fashion brand",
      link: "https://www.instagram.com/aman.edtion/",
    },
    {
      id: 3,
      title: "YouTube Thumbnail",
      category: "Thumbnails",
      image: "/tech-review-thumbnail.png",
      description: "My Eye-Catching Thumbnails For YouTube Videos",
      link: "https://drive.google.com/drive/folders/1gk72QYLBrZ_Xkn1EJ7lUMLCLNlzcjBmn?usp=sharing",
    },
    {
      id: 5,
      title: "Product Demo Video",
      category: "Video Editing",
      image: "/my-work.png",
      description: "Some of My Video Edits",
      link: "https://drive.google.com/drive/folders/1PqO3vr72tzWtqwTuXPTJBcI3abwGTyXd?usp=sharing",
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
          {filteredItems.map((item) => {
            const card = (
              <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500"
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
            );
            return item.link ? (
              <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={item.id}>{card}</div>
            );
          })}
        </div>

        
      </div>
    </section>
  )
}
