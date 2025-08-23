import Link from "next/link";

export default function Unauthorized() {
  return (
    <main>
      <h1>401 - Não autorizado</h1>
      <p>Por favor, faça login para acessar esta página.</p>
      <Link href="/sign-in" className="text-blue-500 hover:underline">
        Fazer login
      </Link>
    </main>
  );
}
