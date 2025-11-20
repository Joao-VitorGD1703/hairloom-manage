import { 
  Users, 
  Calendar, 
  DollarSign, 
  LayoutDashboard,
  Scissors,
  CreditCard,
  Settings,
  UserCog
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Clientes", url: "/dashboard/clientes", icon: Users },
  { title: "Agenda", url: "/dashboard/agenda", icon: Calendar },
  { title: "Funcionários", url: "/dashboard/funcionarios", icon: UserCog },
  { title: "Planos", url: "/dashboard/planos", icon: CreditCard },
  { title: "Financeiro", url: "/dashboard/financeiro", icon: DollarSign },
  { title: "Configurações", url: "/dashboard/configuracoes", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
            <Scissors className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold">Barbershop Pro</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 transition-smooth"
                      activeClassName="!bg-gold !text-black font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
