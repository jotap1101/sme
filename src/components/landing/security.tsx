import { ShieldCheck } from "lucide-react";

export default function Security() {
  return (
    <section
      id="security"
      className="bg-secondary flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <ShieldCheck className="text-primary h-12 w-12" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Seus Dados, Protegidos
          </h2>
          <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed">
            Priorizamos sua privacidade. Todos os dados são criptografados e
            tratados com o máximo cuidado, garantindo que suas informações
            permaneçam confidenciais e seguras.
          </p>
        </div>
      </div>
    </section>
  );
}
