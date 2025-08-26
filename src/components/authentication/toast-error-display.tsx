"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function ToastErrorDisplay() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirectTo = searchParams.get("redirectTo");
    const error = searchParams.get("error");

    if (redirectTo && error === "unauthorized") {
      toast.error("Você precisa estar logado para acessar essa página.");
    }
  }, [searchParams]);

  return null;
}