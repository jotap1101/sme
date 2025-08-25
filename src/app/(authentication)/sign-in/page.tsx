import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { SignInForm } from "@/components/authentication/sign-in-form";
import { ToastErrorDisplay } from "@/components/authentication/toast-error-display";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Entrar | SME",
  description: "Faça login na sua conta SME",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
       <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft />
          Voltar
        </>
      </Link>
      <Suspense fallback={null}>
        <ToastErrorDisplay />
      </Suspense>

      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  );
}
