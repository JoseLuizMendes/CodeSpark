import { useState } from "react";
import { Button } from "@/_components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/_components/ui/card";
import { Input } from "@/_components/ui/input";
import { Label } from "@/_components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/_components/ui/select";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Analysis = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [crop, setCrop] = useState("");
  const [phase, setPhase] = useState("");

  const handleAnalysis = () => {
    if (!location || !crop || !phase) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    toast.success("Analisando dados...", {
      description: "Buscando informações de clima e pragas"
    });

    // Simulate API call
    setTimeout(() => {
      navigate("/dashboard", {
        state: { location, crop, phase }
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">    
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Análise de Riscos</h2>
            <p className="text-muted-foreground">
              Informe os dados da sua lavoura para iniciar a análise
            </p>
          </div>

          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Dados da Lavoura
              </CardTitle>
              <CardDescription>
                Os dados serão cruzados com APIs de clima e detecção de pragas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Localização
                </Label>
                <Input
                  id="location"
                  placeholder="Ex: São Paulo, SP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop">Cultura</Label>
                <Select value={crop} onValueChange={setCrop}>
                  <SelectTrigger id="crop" className="h-11">
                    <SelectValue placeholder="Selecione a cultura" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="soja">Soja</SelectItem>
                    <SelectItem value="milho">Milho</SelectItem>
                    <SelectItem value="cafe">Café</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phase">Fase da Planta</Label>
                <Select value={phase} onValueChange={setPhase}>
                  <SelectTrigger id="phase" className="h-11">
                    <SelectValue placeholder="Selecione a fase" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="vegetativo">Vegetativo</SelectItem>
                    <SelectItem value="floracao">Floração</SelectItem>
                    <SelectItem value="frutificacao">Frutificação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t">
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Fontes de dados:</strong> As informações serão obtidas através de APIs de 
                    previsão climática e sistemas de detecção de pragas em tempo real.
                  </p>
                </div>

                <Button
                  onClick={handleAnalysis}
                  size="lg"
                  className="w-full h-12 text-base shadow-card hover:shadow-elevated transition-all"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Analisar Riscos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            PlantSafe – Previsão inteligente e manejo sustentável
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Analysis;
