import { Metadata } from "next";

import data from "@/app/(app)/dashboard/data.json";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { MainContent } from "@/components/main-content";
import { SectionCards } from "@/components/section-cards";

export const metadata: Metadata = {
  title: "Dashboard | SME",
  description: "Visualize seu desempenho e métricas",
};

export default function DashboardPage() {
  return (
    <MainContent titleSiteHeader="Dashboard">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </MainContent>
  );
}
