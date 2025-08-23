import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Município de Uberlândia",
    role: "Secretário de Desenvolvimento Econômico",
    quote:
      "A SME revolucionou a forma como conectamos candidatos a empresas locais. A ferramenta de sugestão de currículos com IA é um divisor de águas para quem procura emprego.",
    avatar: "M",
  },
  {
    name: "Ana Carolina",
    role: "Candidata de Belo Horizonte",
    quote:
      "Graças ao feedback da plataforma SME, consegui três entrevistas em uma semana! Meu currículo nunca esteve tão bom.",
    avatar: "A",
  },
  {
    name: "Prefeitura de Juiz de Fora",
    role: "Coordenador da Sala Mineira",
    quote:
      "Gerenciar nosso banco de candidatos era um desafio. Agora, com a SME, nosso fluxo de trabalho está otimizado e muito mais eficiente.",
    avatar: "P",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-secondary flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Aprovado por Municípios e Candidatos
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Veja como nossa plataforma está fazendo a diferença em Minas Gerais.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
