"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Gerente de Marketing",
    content:
      "A mentoria transformou completamente minha visão sobre posicionamento profissional. Descobri meu verdadeiro propósito e hoje tenho clareza sobre meus objetivos de carreira.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Empreendedor",
    content:
      "Giovanna e Taynara me ajudaram a identificar minhas competências únicas e a criar uma estratégia sólida de marca pessoal. Recomendo para todos os profissionais.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Consultora",
    content:
      "O programa é excepcional! A metodologia é clara e prática. Saí da mentoria com um plano concreto para me posicionar no mercado e alcançar meus objetivos.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text">O que nossos mentorados dizem</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => window.open("https://wa.me/5521983512842", "_blank")}
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  )
}