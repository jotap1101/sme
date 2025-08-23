import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como a IA melhora meu currículo?",
    answer:
      "Nossa IA generativa analisa suas habilidades e experiências para identificar pontos fortes e fracos. Em seguida, fornece sugestões personalizadas sobre como descrever melhor suas conquistas, quais habilidades destacar e como adaptar seu currículo para tipos específicos de vagas, tornando-o mais atraente para os empregadores.",
  },
  {
    question: "Meus dados pessoais estão seguros na plataforma?",
    answer:
      "Com certeza. Usamos criptografia e protocolos de segurança padrão da indústria para proteger todos os dados dos usuários. Suas informações pessoais e detalhes do currículo são confidenciais e só serão compartilhados com o seu consentimento através da rede da Sala Mineira.",
  },
  {
    question: "A plataforma é acessível para pessoas com deficiência?",
    answer:
      "Sim. Estamos comprometidos com a acessibilidade e projetamos nossa plataforma para ser compatível com as diretrizes WCAG (Diretrizes de Acessibilidade para Conteúdo Web). Isso inclui recursos como compatibilidade com leitores de tela, navegação por teclado e design de alto contraste.",
  },
  {
    question: "Qual é o custo para os candidatos usarem o serviço?",
    answer:
      "A plataforma SME é totalmente gratuita para todos os candidatos e pessoas que procuram emprego. Nossa missão é capacitá-lo em sua jornada de carreira sem barreiras financeiras.",
  },
  {
    question: "Como um município pode começar a usar a SME?",
    answer:
      "Os municípios interessados em usar nossa plataforma podem começar entrando em contato com nossa equipe através do formulário de contato em nosso site. Agendaremos uma demonstração e discutiremos um plano personalizado que atenda às suas necessidades específicas e ao tamanho da sua população.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="bg-secondary flex justify-center px-5 py-12 sm:px-0 lg:py-24"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[700px] md:text-xl/relaxed">
            Encontre respostas para as perguntas mais comuns sobre nossa
            plataforma.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
