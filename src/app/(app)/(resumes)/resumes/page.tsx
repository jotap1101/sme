import { Metadata } from "next";

import { MainContent } from "@/components/main-content";

export const metadata: Metadata = {
  title: "Currículos | SME",
  description: "Visualize os currículos",
};

export default function ResumesPage() {
  return (
    <MainContent titleSiteHeader="Currículos">
      <div className="px-4 lg:px-6">Currículos</div>
    </MainContent>
  );
}
