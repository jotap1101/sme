"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

export const description = "An interactive area chart";

// Dados mockados para contexto de SaaS de RH
const chartData = [
  { date: "2024-04-01", candidatos: 12, vagas: 3 },
  { date: "2024-04-02", candidatos: 8, vagas: 2 },
  { date: "2024-04-03", candidatos: 15, vagas: 4 },
  { date: "2024-04-04", candidatos: 20, vagas: 5 },
  { date: "2024-04-05", candidatos: 18, vagas: 6 },
  { date: "2024-04-06", candidatos: 22, vagas: 7 },
  { date: "2024-04-07", candidatos: 17, vagas: 3 },
  { date: "2024-04-08", candidatos: 25, vagas: 8 },
  { date: "2024-04-09", candidatos: 10, vagas: 2 },
  { date: "2024-04-10", candidatos: 19, vagas: 5 },
  { date: "2024-04-11", candidatos: 23, vagas: 6 },
  { date: "2024-04-12", candidatos: 21, vagas: 5 },
  { date: "2024-04-13", candidatos: 24, vagas: 7 },
  { date: "2024-04-14", candidatos: 13, vagas: 3 },
  { date: "2024-04-15", candidatos: 11, vagas: 2 },
  { date: "2024-04-16", candidatos: 14, vagas: 4 },
  { date: "2024-04-17", candidatos: 28, vagas: 9 },
  { date: "2024-04-18", candidatos: 26, vagas: 8 },
  { date: "2024-04-19", candidatos: 16, vagas: 4 },
  { date: "2024-04-20", candidatos: 9, vagas: 2 },
  { date: "2024-04-21", candidatos: 13, vagas: 3 },
  { date: "2024-04-22", candidatos: 18, vagas: 5 },
  { date: "2024-04-23", candidatos: 14, vagas: 4 },
  { date: "2024-04-24", candidatos: 27, vagas: 8 },
  { date: "2024-04-25", candidatos: 20, vagas: 6 },
  { date: "2024-04-26", candidatos: 8, vagas: 2 },
  { date: "2024-04-27", candidatos: 26, vagas: 9 },
  { date: "2024-04-28", candidatos: 12, vagas: 3 },
  { date: "2024-04-29", candidatos: 22, vagas: 7 },
  { date: "2024-04-30", candidatos: 29, vagas: 10 },
  { date: "2024-05-01", candidatos: 15, vagas: 4 },
  { date: "2024-05-02", candidatos: 23, vagas: 7 },
  { date: "2024-05-03", candidatos: 19, vagas: 5 },
  { date: "2024-05-04", candidatos: 28, vagas: 9 },
  { date: "2024-05-05", candidatos: 32, vagas: 11 },
  { date: "2024-05-06", candidatos: 33, vagas: 12 },
  { date: "2024-05-07", candidatos: 27, vagas: 8 },
  { date: "2024-05-08", candidatos: 13, vagas: 3 },
  { date: "2024-05-09", candidatos: 18, vagas: 4 },
  { date: "2024-05-10", candidatos: 23, vagas: 7 },
  { date: "2024-05-11", candidatos: 25, vagas: 8 },
  { date: "2024-05-12", candidatos: 16, vagas: 5 },
  { date: "2024-05-13", candidatos: 15, vagas: 4 },
  { date: "2024-05-14", candidatos: 30, vagas: 10 },
  { date: "2024-05-15", candidatos: 31, vagas: 11 },
  { date: "2024-05-16", candidatos: 24, vagas: 8 },
  { date: "2024-05-17", candidatos: 33, vagas: 12 },
  { date: "2024-05-18", candidatos: 22, vagas: 7 },
  { date: "2024-05-19", candidatos: 14, vagas: 4 },
  { date: "2024-05-20", candidatos: 12, vagas: 3 },
  { date: "2024-05-21", candidatos: 7, vagas: 2 },
  { date: "2024-05-22", candidatos: 6, vagas: 1 },
  { date: "2024-05-23", candidatos: 21, vagas: 6 },
  { date: "2024-05-24", candidatos: 23, vagas: 7 },
  { date: "2024-05-25", candidatos: 17, vagas: 5 },
  { date: "2024-05-26", candidatos: 18, vagas: 4 },
  { date: "2024-05-27", candidatos: 29, vagas: 10 },
  { date: "2024-05-28", candidatos: 16, vagas: 5 },
  { date: "2024-05-29", candidatos: 8, vagas: 2 },
  { date: "2024-05-30", candidatos: 24, vagas: 8 },
  { date: "2024-05-31", candidatos: 13, vagas: 3 },
  { date: "2024-06-01", candidatos: 14, vagas: 4 },
  { date: "2024-06-02", candidatos: 31, vagas: 11 },
  { date: "2024-06-03", candidatos: 10, vagas: 2 },
  { date: "2024-06-04", candidatos: 28, vagas: 9 },
  { date: "2024-06-05", candidatos: 9, vagas: 2 },
  { date: "2024-06-06", candidatos: 23, vagas: 7 },
  { date: "2024-06-07", candidatos: 25, vagas: 8 },
  { date: "2024-06-08", candidatos: 27, vagas: 8 },
  { date: "2024-06-09", candidatos: 30, vagas: 10 },
  { date: "2024-06-10", candidatos: 12, vagas: 3 },
  { date: "2024-06-11", candidatos: 8, vagas: 2 },
  { date: "2024-06-12", candidatos: 32, vagas: 11 },
  { date: "2024-06-13", candidatos: 7, vagas: 2 },
  { date: "2024-06-14", candidatos: 29, vagas: 10 },
  { date: "2024-06-15", candidatos: 21, vagas: 6 },
  { date: "2024-06-16", candidatos: 25, vagas: 8 },
  { date: "2024-06-17", candidatos: 33, vagas: 12 },
  { date: "2024-06-18", candidatos: 11, vagas: 3 },
  { date: "2024-06-19", candidatos: 23, vagas: 7 },
  { date: "2024-06-20", candidatos: 28, vagas: 9 },
  { date: "2024-06-21", candidatos: 13, vagas: 3 },
  { date: "2024-06-22", candidatos: 22, vagas: 7 },
  { date: "2024-06-23", candidatos: 31, vagas: 11 },
  { date: "2024-06-24", candidatos: 9, vagas: 2 },
  { date: "2024-06-25", candidatos: 10, vagas: 2 },
  { date: "2024-06-26", candidatos: 28, vagas: 9 },
  { date: "2024-06-27", candidatos: 30, vagas: 10 },
  { date: "2024-06-28", candidatos: 13, vagas: 3 },
  { date: "2024-06-29", candidatos: 10, vagas: 2 },
  { date: "2024-06-30", candidatos: 28, vagas: 9 },
];

const chartConfig = {
  candidatos: {
    label: "Candidatos",
    color: "var(--primary)",
  },
  vagas: {
    label: "Vagas",
    color: "var(--secondary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Candidatos e Vagas</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total dos últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Últimos 3 meses</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Últimos 3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Selecione um valor"
            >
              <SelectValue placeholder="Últimos 3 meses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Últimos 3 meses
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 dias
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCandidatos" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-candidatos)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-candidatos)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillVagas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-vagas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-vagas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="vagas"
              type="natural"
              fill="url(#fillVagas)"
              stroke="var(--color-vagas)"
              stackId="a"
            />
            <Area
              dataKey="candidatos"
              type="natural"
              fill="url(#fillCandidatos)"
              stroke="var(--color-candidatos)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
