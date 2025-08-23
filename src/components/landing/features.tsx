import { FileText, Settings, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <FileText className="text-primary h-8 w-8" />,
    title: "Gerenciamento Avançado de Currículos",
    description:
      "Faça upload, organize e gerencie currículos de candidatos de forma fácil em uma plataforma centralizada e segura.",
  },
  {
    icon: <Settings className="text-primary h-8 w-8" />,
    title: "Personalização para a Equipe",
    description:
      "Adapte a plataforma às necessidades específicas da equipe das Salas Mineiras, garantindo um fluxo de trabalho perfeito.",
  },
  {
    icon: <Sparkles className="text-primary h-8 w-8" />,
    title: "Sugestões com IA",
    description:
      "Use a IA generativa para fornecer feedback e sugestões personalizadas de currículo para os candidatos.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-secondary flex justify-center py-12 lg:py-24 px-5 sm:px-0"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Otimize Seu Processo de Contratação
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Descubra os recursos poderosos projetados para aprimorar o
            gerenciamento de currículos e o suporte ao candidato.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
