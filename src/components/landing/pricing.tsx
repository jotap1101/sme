import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Planos Flexíveis para Cada Município
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Nossa plataforma é gratuita para candidatos. Oferecemos soluções
            personalizadas para que os municípios atendam às suas necessidades
            específicas.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-md shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">
                Plano Municipal
              </CardTitle>
              <CardDescription>
                Uma solução completa para gerenciar candidatos e apoiar o
                emprego local.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Banco de Currículos Seguro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Pesquisa Avançada e Filtragem de Candidatos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>
                    Análise de Currículo com IA para todos os Candidatos
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Treinamento e Suporte Dedicado para a Equipe</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  <span>Relatórios e Análises Personalizáveis</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full font-bold" size="lg">
                <Link href="#contact">Entre em Contato para um Orçamento</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
