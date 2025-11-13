import { useNavigate, Routes, Route } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ClientesModule } from "@/components/dashboard/ClientesModule";
import { AgendaModule } from "@/components/dashboard/AgendaModule";
import { FuncionariosModule } from "@/components/dashboard/FuncionariosModule";
import { PlanosModule } from "@/components/dashboard/PlanosModule";
import { FinanceiroModule } from "@/components/dashboard/FinanceiroModule";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="flex items-center justify-between px-6 py-4">
              <SidebarTrigger />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/clientes" element={<ClientesModule />} />
              <Route path="/agenda" element={<AgendaModule />} />
              <Route path="/funcionarios" element={<FuncionariosModule />} />
              <Route path="/planos" element={<PlanosModule />} />
              <Route path="/financeiro" element={<FinanceiroModule />} />
              <Route path="/configuracoes" element={
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
                  <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
