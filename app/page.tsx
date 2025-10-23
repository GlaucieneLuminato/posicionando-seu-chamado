import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MethodologySection } from "@/components/methodology-section"
import { MentorsSection } from "@/components/mentors-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TestimonialsSection />
      <MethodologySection />
      <MentorsSection />
      <ContactSection />
    </main>
  )
}