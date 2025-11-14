import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AgendaDialog } from "./dialogs/AgendaDialog";

export function AgendaModule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Agenda</h2>
          <p className="text-muted-foreground">Gerencie os agendamentos da barbearia</p>
        </div>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Selecione uma Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Agendamentos do Dia</CardTitle>
            <CardDescription>
              {date?.toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div>
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-muted-foreground">Corte + Barba • 10:00 - 11:00</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Barbeiro: Carlos</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setSelectedAgendamento({
                        id: 1,
                        cliente: "João Silva",
                        barbeiro: "Carlos Silva",
                        servico: "Corte + Barba",
                        data: date?.toISOString().split("T")[0],
                        horario: "10:00",
                        duracao: "60",
                        status: "Confirmado"
                      });
                      setDialogOpen(true);
                    }}
                  >
                    Editar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div>
                  <p className="font-medium">Pedro Santos</p>
                  <p className="text-sm text-muted-foreground">Corte Simples • 14:00 - 14:30</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Barbeiro: João</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setSelectedAgendamento({
                        id: 2,
                        cliente: "Pedro Santos",
                        barbeiro: "João Pedro",
                        servico: "Corte Simples",
                        data: date?.toISOString().split("T")[0],
                        horario: "14:00",
                        duracao: "30",
                        status: "Agendado"
                      });
                      setDialogOpen(true);
                    }}
                  >
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AgendaDialog 
        open={dialogOpen} 
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedAgendamento(null);
        }}
        agendamento={selectedAgendamento}
      />
    </div>
  );
}
