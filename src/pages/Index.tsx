import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, DollarSign, TrendingUp, Scissors, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "CRM completo com histórico de serviços, preferências e programa de fidelidade integrado."
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Controle total da agenda de barbeiros com agendamento online para clientes e controle de faltas."
    },
    {
      icon: DollarSign,
      title: "Planos & Assinaturas",
      description: "Crie planos recorrentes e gerencie créditos de serviços de forma automática."
    },
    {
      icon: TrendingUp,
      title: "Controle Financeiro",
      description: "Acompanhe lucros, comissões de barbeiros e tenha relatórios completos em tempo real."
    },
    {
      icon: Clock,
      title: "Gestão de Tempo",
      description: "Otimize o tempo da equipe com duração de serviços e bloqueios de horário personalizados."
    },
    {
      icon: Scissors,
      title: "Para Barbearias",
      description: "Sistema desenvolvido especialmente para as necessidades específicas de barbearias modernas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                <Scissors className="h-4 w-4" />
                Sistema Completo para Barbearias
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Modernize sua{" "}
              <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
                Barbearia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Gestão completa de clientes, agenda inteligente, planos recorrentes e controle financeiro em uma única plataforma.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 shadow-gold hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/auth')}
              >
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Recursos
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-lg text-muted-foreground">
              Sistema desenvolvido especificamente para barbearias, com todos os recursos essenciais para gestão profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para transformar sua barbearia?
            </h2>
            <p className="text-xl text-muted-foreground">
              Junte-se às barbearias modernas que já otimizaram sua gestão e aumentaram seus lucros.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-gold hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/auth')}
            >
              Iniciar Teste Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Barbershop Pro. Sistema completo de gestão para barbearias.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
