import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex justify-center px-5 py-20 sm:px-0 md:py-32">
      <div className="container px-4 text-center md:px-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Impulsionando Carreiras nas{" "}
          <span className="text-primary">Salas Mineiras</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Seu hub centralizado para gerenciamento de currículos e sugestões de
          carreira com IA. Construído para conectar talentos com oportunidades
          em todo o estado de Minas Gerais.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild className="font-bold">
            <Link href="/sign-in">Comece Agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
