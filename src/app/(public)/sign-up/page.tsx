import { Metadata } from "next";

import { SignUpForm } from "@/components/authentication/sign-up-form";

export const metadata: Metadata = {
  title: "Criar Conta | SME",
  description: "Crie uma nova conta na SME",
};

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
}
