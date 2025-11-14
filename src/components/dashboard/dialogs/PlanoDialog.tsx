import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";

const planoSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  preco: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Preço deve ser maior que zero",
  }),
  validade: z.string().min(1, "Validade é obrigatória"),
  servicos: z.array(z.object({ nome: z.string().min(1, "Serviço obrigatório") })).min(1, "Adicione pelo menos um serviço"),
  regras: z.string().optional(),
});

type PlanoFormData = z.infer<typeof planoSchema>;

interface PlanoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plano?: PlanoFormData & { id?: number };
}

export function PlanoDialog({ open, onOpenChange, plano }: PlanoDialogProps) {
  const form = useForm<PlanoFormData>({
    resolver: zodResolver(planoSchema),
    defaultValues: plano || {
      nome: "",
      preco: "",
      validade: "30 dias",
      servicos: [{ nome: "" }],
      regras: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "servicos",
  });

  const onSubmit = (data: PlanoFormData) => {
    console.log("Plano data:", data);
    toast.success(plano?.id ? "Plano atualizado!" : "Plano criado!");
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{plano?.id ? "Editar Plano" : "Criar Novo Plano"}</DialogTitle>
          <DialogDescription>
            Configure os detalhes do plano de assinatura
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Plano</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Mensal Premium" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="preco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="150.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="validade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Validade</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 30 dias" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <FormLabel>Serviços Incluídos</FormLabel>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ nome: "" })}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Adicionar
                </Button>
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <FormField
                    control={form.control}
                    name={`servicos.${index}.nome`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input placeholder="Ex: 2x Corte de Cabelo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <FormField
              control={form.control}
              name="regras"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Regras / Condições (opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Não cumulativo, válido apenas com barbeiro X..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                {plano?.id ? "Atualizar" : "Criar Plano"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
