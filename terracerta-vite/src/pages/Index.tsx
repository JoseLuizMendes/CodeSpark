import { Button } from "@/_components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logoImage from "@/assets/terracerta-logo.png";
import { CloudRain, Leaf, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <img
              src={logoImage}
              alt="PlantSafe Logo"
              className="w-60 h-60 drop-shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Terra<span className="text-primary">Certa</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Monitore e previna riscos de pragas e eventos climáticos em sua
            lavoura
          </p>

          <Button
            size="lg"
            onClick={() => navigate("/analysis")}
            className="text-lg px-8 py-6 shadow-elevated hover:shadow-lg transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Leaf className="mr-2 h-5 w-5" />
            Iniciar Análise
          </Button>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="p-6 rounded-lg bg-card shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Análise Preditiva</h3>
              <p className="text-sm text-muted-foreground">
                Previsão inteligente de riscos baseada em dados climáticos e
                históricos
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proteção Avançada</h3>
              <p className="text-sm text-muted-foreground">
                Recomendações personalizadas de defensivos biológicos e químicos
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Monitoramento Climático
              </h3>
              <p className="text-sm text-muted-foreground">
                Alertas de eventos climáticos extremos e condições adversas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            PlantSafe – Previsão inteligente e manejo sustentável
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
