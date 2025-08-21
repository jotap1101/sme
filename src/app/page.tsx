import { headers } from "next/headers";

import { LogoutButton } from "@/components/authentication/logout-button";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
    
  });

  if (!session) {
    return <p>You are not logged in</p>;
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="mb-4 text-2xl font-bold">Welcome back!</h1>
        <p className="mb-4">You are logged in as {session.user.email}</p>
        <LogoutButton />
      </div>
    </div>
  );
}
