import { RiskMeter } from "@/_components/RiskMeter";
import { Button } from "@/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { RiskBadge } from "@/_components/ui/risk-badge";
import logoImage from "@/assets/plantsafe-logo.png";
import {
  ArrowLeft,
  Bug,
  Calendar,
  CloudRain,
  Droplets,
  Shield,
  Snowflake,
  Sprout,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: userLocation, crop, phase } = location.state || {};

  // Simulated data from APIs
  const climateData = {
    temperature: 26,
    humidity: 78,
    rainfall: "Moderada",
    frost: "Sem risco",
    drought: "Baixo risco",
    wind: "21 km/h",
  };

  const pestData = [
    {
      name: "Ferrugem Asiática",
      risk: "high" as const,
      scientificName: "Phakopsora pachyrhizi",
    },
    {
      name: "Lagarta Spodoptera",
      risk: "medium" as const,
      scientificName: "Spodoptera frugiperda",
    },
  ];

  const recommendations = {
    biological: "Trichoderma harzianum",
    aplication: "Melhor data para aplicação: ",
  };

  const overallRisk = 65; // 0-100

  const dataSugeridaWeather = (() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date.toLocaleDateString("pt-BR");
  })();
  const dataSugeridaSugest = (() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date.toLocaleDateString("pt-BR");
  })();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="PlantSafe" className="w-14 h-14" />
            <div>
              <h1 className="text-xl font-bold">
                Terra<span className="text-primary">Certa</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                {userLocation} • {crop} • {phase}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate("/analysis")}
            size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Nova Análise
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard de Riscos</h2>
          <p className="text-muted-foreground">
            Análise completa da sua lavoura baseada em dados climáticos e
            detecção de pragas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Climate Data */}
          <Card className="shadow-card hover:shadow-elevated transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-primary" />
                Condições Climáticas
              </CardTitle>
              <CardDescription>
                Dados sugeridos para a data {dataSugeridaWeather}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Thermometer className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Temperatura</p>
                    <p className="text-lg font-semibold">
                      {climateData.temperature}°C
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Droplets className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Umidade</p>
                    <p className="text-lg font-semibold">
                      {climateData.humidity}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <CloudRain className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Chuva</p>
                    <p className="text-sm font-semibold">
                      {climateData.rainfall}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Snowflake className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-xs text-muted-foreground">Geada</p>
                    <p className="text-sm font-semibold text-success">
                      {climateData.frost}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Sun className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-xs text-muted-foreground">Seca</p>
                    <p className="text-sm font-semibold text-success">
                      {climateData.drought}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Wind className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-xs text-muted-foreground">Vento</p>
                    <p className="text-sm font-semibold text-success">
                      {climateData.wind}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Meter */}
          <div className="lg:col-span-1">
            <RiskMeter
              value={overallRisk}
              windSpeed={climateData.wind}
              bestApplicationDate={dataSugeridaSugest}
            />
          </div>

          {/* Pest Detection */}
          <Card className="shadow-card hover:shadow-elevated transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-primary" />
                Pragas Detectadas
              </CardTitle>
              <CardDescription>
                Análise de risco por tipo de praga
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pestData.map((pest, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{pest.name}</h4>
                    <p className="text-sm text-muted-foreground italic">
                      {pest.scientificName}
                    </p>
                  </div>
                  <RiskBadge level={pest.risk}>
                    {pest.risk === "high"
                      ? "Alto Risco"
                      : pest.risk === "medium"
                      ? "Médio Risco"
                      : "Baixo Risco"}
                  </RiskBadge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="shadow-card hover:shadow-elevated transition-shadow lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Recomendações
              </CardTitle>
              <CardDescription>Defensivos sugeridos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout className="w-5 h-5 text-success" />
                  <h4 className="font-semibold text-success">Biológico</h4>
                </div>
                <p className="text-sm">{recommendations.biological}</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-primary">Insight</h4>
                </div>
                <div className="flex space-x-1">
                  <p className="text-sm">{recommendations.aplication}</p>
                  <span className="text-sm">{dataSugeridaSugest}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate("/analysis")}
            size="lg"
            variant="outline"
            className="shadow-card hover:shadow-elevated">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Fazer Nova Análise
          </Button>
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

export default Dashboard;
