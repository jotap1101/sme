import LogoutButton from "@/components/authentication/logout-button";
import { requireAuth } from "@/lib/auth-guard";

export default async function Home() {
  const session = await requireAuth();

  return (
    <>
      {session && <p>Welcome back, {session.user.name}!</p>}
      <LogoutButton />
    </>
  );
}
