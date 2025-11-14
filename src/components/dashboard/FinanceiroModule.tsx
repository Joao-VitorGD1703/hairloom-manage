import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Users, Plus } from "lucide-react";
import { DespesaDialog } from "./dialogs/DespesaDialog";

export function FinanceiroModule() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const kpis = [
    { title: "Receita Total", value: "R$ 45.231", change: "+23.1%", trending: "up" },
    { title: "Custo Total", value: "R$ 18.500", change: "-5.2%", trending: "down" },
    { title: "Lucro Líquido", value: "R$ 26.731", change: "+31.5%", trending: "up" },
    { title: "Ticket Médio", value: "R$ 85,50", change: "+8.3%", trending: "up" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Controle Financeiro</h2>
          <p className="text-muted-foreground">Acompanhe receitas, despesas e comissões</p>
        </div>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Lançamento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              {kpi.trending === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={kpi.trending === "up" ? "text-green-500" : "text-red-500"}>
                  {kpi.change}
                </span> vs. mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Serviços Mais Vendidos</CardTitle>
            <CardDescription>Top 5 do mês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { servico: "Corte + Barba", receita: "R$ 12.450", quantidade: 125 },
                { servico: "Corte Simples", receita: "R$ 8.900", quantidade: 178 },
                { servico: "Barba Completa", receita: "R$ 5.200", quantidade: 104 },
                { servico: "Tratamento Capilar", receita: "R$ 3.800", quantidade: 38 },
                { servico: "Corte Infantil", receita: "R$ 2.100", quantidade: 60 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.servico}</p>
                    <p className="text-sm text-muted-foreground">{item.quantidade} serviços</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{item.receita}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Desempenho por Barbeiro</CardTitle>
            <CardDescription>Receita gerada no mês</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { nome: "Carlos Silva", receita: "R$ 18.900", comissao: "R$ 7.560" },
                { nome: "João Pedro", receita: "R$ 15.400", comissao: "R$ 6.160" },
                { nome: "André Costa", receita: "R$ 10.931", comissao: "R$ 4.372" },
              ].map((barbeiro, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{barbeiro.nome}</p>
                    <p className="text-sm text-muted-foreground">Comissão: {barbeiro.comissao}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{barbeiro.receita}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <DespesaDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
