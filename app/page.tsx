import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import PortfolioGallery from "@/components/portfolio-gallery"
import StrengthsSection from "@/components/strengths-section"
import HobbiesSection from "@/components/hobbies-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <PortfolioGallery />
      <StrengthsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
