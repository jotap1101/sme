"use client";

import {
  Briefcase,
  Building2,
  Command,
  FileUser,
  HelpCircle,
  Settings,
  Users,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Command,
    },
    {
      title: "Candidatos",
      url: "/candidates",
      icon: Users,
      // isActive: true,
      // items: [
      //   {
      //     title: "Ver Candidatos",
      //     url: "/candidates",
      //   },
      //   {
      //     title: "Adicionar Candidato",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Currículos",
      url: "/resumes",
      icon: FileUser,
      // isActive: true,
      // items: [
      //   {
      //     title: "Ver Currículos",
      //     url: "#",
      //   },
      //   {
      //     title: "Adicionar Currículo",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Empresas",
      url: "#",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "Ver Empresas",
          url: "#",
        },
        {
          title: "Adicionar Empresa",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: Settings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: HelpCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Briefcase className="!size-5" />
                <span className="text-base font-semibold">SME</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
