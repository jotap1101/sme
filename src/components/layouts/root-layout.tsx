import "../../app/globals.css";

import BaseLayout from "@/components/layouts/base-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
