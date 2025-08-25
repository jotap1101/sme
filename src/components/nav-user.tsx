"use client";

import {
  IconCreditCard,
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "@/hooks/use-user";
import { authClient } from "@/lib/auth-client";
import { getInitials } from "@/utils/get-initials";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { session } = useUser();
  const router = useRouter();

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    let toastId: string | number | undefined;

    authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          toastId = toast.loading("Saindo...");
        },
        onError: (ctx) => {
          if (toastId) {
            toast.dismiss(toastId);
          }

          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          if (toastId) {
            toast.dismiss(toastId);
          }

          toast.success("Você saiu com sucesso!");
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={session.user?.image || undefined}
                  alt={session.user?.name}
                />
                <AvatarFallback className="rounded-lg">
                  {getInitials(session.user?.name)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {session.user?.name}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {session.user?.email}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={session.user?.image || undefined}
                    alt={session.user?.name}
                  />
                  <AvatarFallback className="rounded-lg">
                    {getInitials(session.user?.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {session.user?.name}
                  </span>
                  <span className="text-muted-foreground truncate text-xs">
                    {session.user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Conta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Faturamento
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <IconNotification />
                Notificações
              </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <ConfirmDialog
              trigger={
                <Button variant="ghost" className="w-full justify-start">
                  <IconLogout />
                  Sair
                </Button>
              }
              title="Tem certeza que deseja sair?"
              description="Você pode entrar novamente a qualquer momento."
              onConfirm={handleSignOut}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
