import { Metadata } from "next";
import { Suspense } from "react";

import data from "@/app/(app)/dashboard/data.json";
import { ToastErrorDisplay } from "@/components/authentication/toast-error-display";
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
      <Suspense fallback={null}>
        <ToastErrorDisplay />
      </Suspense>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </MainContent>
  );
}
