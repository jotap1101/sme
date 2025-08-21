import { Metadata } from "next";
import { Suspense } from "react";

import { SignInForm } from "@/components/authentication/sign-in-form";
import { ToastErrorDisplay } from "@/components/authentication/toast-error-display";

export const metadata: Metadata = {
  title: "Entrar | SME",
  description: "Faça login na sua conta SME",
};

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Suspense fallback={null}>
        <ToastErrorDisplay />
      </Suspense>

      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  );
}
