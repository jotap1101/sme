import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
        <h1>404 - Página não encontrada</h1>
        <p>Esta página não existe.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </body>
    </html>
  );
}
