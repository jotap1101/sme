import { Analytics } from "@vercel/analytics/next";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Analytics />
      <div className="min-h-screen">{children}</div>
    </>
  );
}
