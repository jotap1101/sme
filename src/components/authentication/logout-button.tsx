"use client";

import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

interface LogoutProps {
  children: React.ReactNode;
  className?: string;
}

const LogoutButton = ({ children, className }: LogoutProps) => {
  const router = useRouter();

  const handleSignOut = async () => {
    let toastId: string | number | undefined;

    authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          toastId = toast.loading("Saindo...");
        },
        onError: (ctx) => {
          if (toastId) toast.dismiss(toastId);
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          if (toastId) toast.dismiss(toastId);
          toast.success("Você saiu com sucesso!");
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <div onClick={handleSignOut} className={className} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export default LogoutButton;
