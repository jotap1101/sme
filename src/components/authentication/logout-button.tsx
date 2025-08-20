"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const LogoutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    let toastId: string | number | undefined;

    authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          toastId = toast.loading("Saindo...");
        },
        onError: (ctx) => {
          if (toastId) {
            toast.dismiss(toastId);
          }

          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          if (toastId) {
            toast.dismiss(toastId);
          }

          toast.success("Você saiu com sucesso!");
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <ConfirmDialog
      trigger={
        <Button variant="outline" size="icon">
          <LogOutIcon />
        </Button>
      }
      title="Tem certeza que deseja sair?"
      description="Você pode entrar novamente a qualquer momento."
      onConfirm={handleSignOut}
    />
  );
};
