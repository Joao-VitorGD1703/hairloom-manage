import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Scissors,
  Menu,
  LogOut,
  Settings,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole] = useState<"admin" | "barber" | "client">("admin"); // Mock role

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/');
  };

  const stats = [
    {
      title: "Clientes Ativos",
      value: "1,234",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Agendamentos Hoje",
      value: "24",
      change: "+4.3%",
      icon: Calendar,
      color: "text-green-500"
    },
    {
      title: "Receita Mensal",
      value: "R$ 45.231",
      change: "+23.1%",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Taxa de Ocupação",
      value: "87%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <Scissors className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Barbershop Pro</h1>
                <p className="text-xs text-muted-foreground">
                  {userRole === "admin" && "Painel Administrativo"}
                  {userRole === "barber" && "Painel do Barbeiro"}
                  {userRole === "client" && "Minha Conta"}
                </p>
              </div>
            </div>

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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid - Only for Admin and Barber */}
        {(userRole === "admin" || userRole === "barber") && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">{stat.change}</span> vs. mês anterior
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Main Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            {(userRole === "admin" || userRole === "barber") && (
              <>
                <TabsTrigger value="clients">Clientes</TabsTrigger>
                <TabsTrigger value="schedule">Agenda</TabsTrigger>
              </>
            )}
            {userRole === "admin" && (
              <>
                <TabsTrigger value="plans">Planos</TabsTrigger>
                <TabsTrigger value="financial">Financeiro</TabsTrigger>
              </>
            )}
            {userRole === "client" && (
              <>
                <TabsTrigger value="appointments">Meus Agendamentos</TabsTrigger>
                <TabsTrigger value="history">Histórico</TabsTrigger>
              </>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bem-vindo ao Barbershop Pro</CardTitle>
                <CardDescription>
                  {userRole === "admin" && "Gerencie todos os aspectos da sua barbearia em um só lugar."}
                  {userRole === "barber" && "Acesse sua agenda, clientes e histórico de serviços."}
                  {userRole === "client" && "Agende seus cortes e acompanhe seu histórico."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Este é um preview inicial do sistema. Em breve, todos os módulos estarão completamente funcionais.
                  </p>
                  {userRole === "admin" && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="bg-muted/50">
                        <CardHeader>
                          <CardTitle className="text-base">Próximos Passos</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          <ul className="space-y-2">
                            <li>• Cadastrar barbeiros</li>
                            <li>• Configurar serviços e preços</li>
                            <li>• Criar planos de assinatura</li>
                            <li>• Configurar horários de funcionamento</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Clientes</CardTitle>
                <CardDescription>
                  Visualize e gerencie todos os seus clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Agenda</CardTitle>
                <CardDescription>
                  Gerencie os agendamentos da barbearia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plans">
            <Card>
              <CardHeader>
                <CardTitle>Planos e Assinaturas</CardTitle>
                <CardDescription>
                  Configure e gerencie planos recorrentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle>Controle Financeiro</CardTitle>
                <CardDescription>
                  Acompanhe receitas, despesas e comissões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Meus Agendamentos</CardTitle>
                <CardDescription>
                  Visualize e gerencie seus agendamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Serviços</CardTitle>
                <CardDescription>
                  Veja todos os serviços realizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Módulo em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
