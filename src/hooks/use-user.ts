"use client";

import { authClient } from "@/lib/auth-client";

export function useUser() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  return { session, isPending, error, refetch };
}
