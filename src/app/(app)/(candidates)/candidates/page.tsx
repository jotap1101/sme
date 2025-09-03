import { Metadata } from "next";

import data from "@/app/(app)/dashboard/data.json";
import { DataTable } from "@/components/data-table";
import { MainContent } from "@/components/main-content";

export const metadata: Metadata = {
  title: "Candidatos | SME",
  description: "Visualize os candidatos",
};

export default function CandidatesPage() {
  return (
    <MainContent titleSiteHeader="Candidatos">
      <DataTable data={data} />
    </MainContent>
  );
}
