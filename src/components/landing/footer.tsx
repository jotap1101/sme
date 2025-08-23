import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary flex justify-center border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Briefcase className="text-primary h-6 w-6" />
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Construído para as Salas Mineiras. © {new Date().getFullYear()}{" "}
            SME. Todos os Direitos Reservados.
          </p>
        </div>
        <div className="text-muted-foreground flex items-center gap-4 text-sm">
          <Link href="#" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}
