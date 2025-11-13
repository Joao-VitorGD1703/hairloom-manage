import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PlanosModule() {
  const planos = [
    {
      id: 1,
      nome: "Mensal Premium",
      preco: "R$ 150,00",
      validade: "30 dias",
      servicos: ["2x Corte de Cabelo", "1x Barba"],
      ativos: 45
    },
    {
      id: 2,
      nome: "Trimestral VIP",
      preco: "R$ 400,00",
      validade: "90 dias",
      servicos: ["6x Corte de Cabelo", "3x Barba", "1x Tratamento Capilar"],
      ativos: 23
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Planos e Assinaturas</h2>
          <p className="text-muted-foreground">Configure e gerencie planos recorrentes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Plano
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planos.map((plano) => (
          <Card key={plano.id} className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{plano.nome}</CardTitle>
                  <CardDescription>Validade: {plano.validade}</CardDescription>
                </div>
                <Badge>{plano.ativos} ativos</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">{plano.preco}</div>
              <div>
                <p className="text-sm font-medium mb-2">Serviços Incluídos:</p>
                <ul className="space-y-1">
                  {plano.servicos.map((servico, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">• {servico}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">Editar</Button>
                <Button variant="ghost" size="sm" className="flex-1">Ver Detalhes</Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed hover:border-primary/50 transition-colors cursor-pointer flex items-center justify-center min-h-[300px]">
          <div className="text-center p-6">
            <Plus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Criar novo plano</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
