import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre a Sala Mineira do Empreendedor
            </h2>
            <p className="text-muted-foreground mt-4 md:text-xl/relaxed">
              A Sala Mineira do Empreendedor é uma iniciativa governamental em
              Minas Gerais para fomentar o desenvolvimento econômico local,
              apoiando empreendedores e conectando quem busca emprego com
              oportunidades. Ela simplifica a burocracia e fornece recursos para
              o crescimento dos negócios.
            </p>
            <h3 className="font-headline mt-8 text-2xl font-bold tracking-tighter sm:text-3xl">
              Como Nossa Plataforma Ajuda
            </h3>
            <p className="text-muted-foreground mt-4 md:text-xl/relaxed">
              Nossa plataforma, a SME, aprimora os serviços da Sala Mineira ao
              fornecer um sistema centralizado para o gerenciamento de
              currículos. Os candidatos podem enviar seus currículos e receber
              sugestões baseadas em IA para melhorá-los, aumentando suas chances
              de serem contratados. Municípios e equipes podem gerenciar
              eficientemente os bancos de candidatos, agilizando a conexão entre
              talentos e empresas locais.
            </p>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Escritório da Sala Mineira"
              fill
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="office collaboration"
              sizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
