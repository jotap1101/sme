import { CheckCircle, FilePlus2, Rocket } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <FilePlus2 className="text-primary h-8 w-8" />,
    title: "1. Envie Seu Currículo",
    description:
      "Crie uma conta e faça o upload do seu currículo em nossa plataforma segura.",
  },
  {
    icon: <CheckCircle className="text-primary h-8 w-8" />,
    title: "2. Receba Feedback da IA",
    description:
      "Use nossa ferramenta de IA para analisar seu currículo e receber sugestões de melhoria práticas.",
  },
  {
    icon: <Rocket className="text-primary h-8 w-8" />,
    title: "3. Conecte-se a Oportunidades",
    description:
      "Seu currículo aprimorado está pronto para ser compartilhado com empregadores através da Sala Mineira.",
  },
];

export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comece em 3 Passos Fáceis
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Siga nosso processo simples para impulsionar suas perspectivas de
            carreira.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  {step.icon}
                </div>
                <CardTitle className="font-headline">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
