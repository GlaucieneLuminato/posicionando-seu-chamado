import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen } from "lucide-react"

const mentors = [
  {
    name: "Giovanna Krejci",
    title: "Especialista em Posicionamento",
    description:
      "Com mais de 10 anos de experiência em desenvolvimento profissional, Giovanna é especialista em ajudar profissionais a descobrirem seu propósito e se posicionarem estrategicamente no mercado.",
    specializations: [
      "Posicionamento estratégico",
      "Desenvolvimento de marca pessoal",
      "Coaching executivo",
      "Análise comportamental",
    ],
    achievements: [
      "Mais de 500 profissionais mentorados",
      "Certificação internacional em coaching",
      "Palestrante em eventos corporativos",
    ],
  },
  {
    name: "Taynara Camargo",
    title: "Mentora de Propósito",
    description:
      "Especialista em descoberta de propósito e desenvolvimento humano, Taynara tem uma abordagem única para ajudar pessoas a encontrarem seu verdadeiro chamado profissional.",
    specializations: [
      "Descoberta de propósito",
      "Desenvolvimento humano",
      "Planejamento de carreira",
      "Inteligência emocional",
    ],
    achievements: [
      "Formação em Psicologia Positiva",
      "Especialização em Desenvolvimento Humano",
      "Mentora certificada internacionalmente",
    ],
  },
]

export function MentorsSection() {
  return (
    <section id="mentoras" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gold-text">Conheça suas Mentoras</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{mentor.name}</h3>
                  <p className="text-lg text-muted-foreground font-semibold">{mentor.title}</p>
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">{mentor.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Especializações
                  </h4>
                  <ul className="space-y-2">
                    {mentor.specializations.map((spec, specIndex) => (
                      <li key={specIndex} className="text-card-foreground text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Conquistas
                  </h4>
                  <ul className="space-y-2">
                    {mentor.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-card-foreground text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}