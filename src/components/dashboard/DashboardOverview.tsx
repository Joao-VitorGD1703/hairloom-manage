import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react";

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

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Visão geral da sua barbearia</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo ao Barbershop Pro</CardTitle>
          <CardDescription>
            Gerencie todos os aspectos da sua barbearia em um só lugar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Use o menu lateral para navegar entre os diferentes módulos do sistema.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">Próximos Passos</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Cadastrar barbeiros e funcionários</li>
                    <li>• Adicionar clientes ao sistema</li>
                    <li>• Configurar serviços e preços</li>
                    <li>• Criar planos de assinatura</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
