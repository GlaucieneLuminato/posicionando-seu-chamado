"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mentors-hero.png"
          alt="Giovanna Krejci e Taynara Camargo"
          fill
          className="object-cover object-[center_20%] opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-60 mt-40 flex flex-col justify-start min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-shadow">
            <span className="text-foreground">Mentoria</span> <span className="gold-text">POSICIONANDO</span>
            <br />
            <span className="text-foreground">O seu Chamado!</span>
          </h1>
        </div>

        <div className="space-y-4 text-lg md:text-xl text-muted-foreground mb-8">
          <p className="font-semibold">Santa Cruz - RJ | Outubro | 10hrs - 18hrs</p>
          <p className="font-semibold text-primary">Formato: Presencial ou Online</p>
          <p>
            Ingressos via WhatsApp: <span className="text-primary font-bold">21 98351-2842</span>
          </p>
        </div>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open("https://wa.me/5521983512842", "_blank")}
        >
          Garantir Minha Vaga
        </Button>
      </div>
    </section>
  )
}