import BaseLayout from "@/components/layouts/base-layout";

export function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
