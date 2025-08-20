"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const LogoutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    let toastId: string | number | undefined;

    authClient.signOut({
      fetchOptions: {
        onRequest: (ctx) => {
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
    <Button variant="outline" size="icon" onClick={handleSignOut}>
      <LogOutIcon />
    </Button>
  );
};

export default LogoutButton;
