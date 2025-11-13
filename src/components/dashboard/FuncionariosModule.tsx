import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function FuncionariosModule() {
  // Mock data
  const funcionarios = [
    { id: 1, nome: "Carlos Silva", tipo: "Barbeiro", comissao: "40%", contato: "(11) 98765-4321", status: "Ativo" },
    { id: 2, nome: "João Pedro", tipo: "Barbeiro", comissao: "35%", contato: "(11) 97654-3210", status: "Ativo" },
    { id: 3, nome: "Admin User", tipo: "Administrador", comissao: "-", contato: "(11) 96543-2109", status: "Ativo" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gestão de Funcionários</h2>
          <p className="text-muted-foreground">Gerencie barbeiros e administradores</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Funcionário
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Funcionários</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Comissão</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {funcionarios.map((func) => (
                <TableRow key={func.id}>
                  <TableCell className="font-medium">{func.nome}</TableCell>
                  <TableCell>
                    <Badge variant={func.tipo === "Administrador" ? "default" : "secondary"}>
                      {func.tipo}
                    </Badge>
                  </TableCell>
                  <TableCell>{func.comissao}</TableCell>
                  <TableCell>{func.contato}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-500">
                      {func.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Editar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
