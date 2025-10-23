import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, TrendingUp } from "lucide-react"

const achievements = [
  "Descoberta do seu propósito profissional",
  "Estratégias de posicionamento pessoal",
  "Desenvolvimento de marca pessoal",
  "Clareza sobre objetivos de carreira",
]

const methodology = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Análise de perfil comportamental",
    description: "Identificamos suas características únicas e pontos fortes",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mapeamento de competências",
    description: "Descobrimos suas habilidades e talentos naturais",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Definição de objetivos",
    description: "Criamos um plano estratégico para sua carreira",
  },
]

export function MethodologySection() {
  return (
    <section id="mentoria" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-text">Descubra seu Verdadeiro Chamado</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Mentoria Posicionando é um programa exclusivo desenvolvido para profissionais que desejam descobrir seu
            verdadeiro chamado e se posicionar estrategicamente no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* O que você vai conquistar */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">O que você vai conquistar</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Nossa Metodologia */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Nossa Metodologia</h3>
              <div className="space-y-6">
                {methodology.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}