import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { Progress } from "@/_components/ui/progress";
import { AlertTriangle, Shield } from "lucide-react";

interface RiskMeterProps {
  value: number; // 0-100
  label?: string;
  windSpeed?: string;
  bestApplicationDate?: string;
}

export function RiskMeter({
  value,
  label = "Índice Geral de Risco",
}: RiskMeterProps) {
  const getRiskColor = (val: number) => {
    if (val < 30) return "bg-success";
    if (val < 70) return "bg-warning";
    return "bg-danger";
  };

  const getRiskLevel = (val: number) => {
    if (val < 30) return "Baixo";
    if (val < 70) return "Moderado";
    return "Alto";
  };

  const getGovernmentAlert = (val: number) => {
    if (val < 30) {
      return {
        title: "EMBRAPA - Alerta Verde",
        message: "Condições favoráveis. Monitoramento preventivo recomendado.",
        color: "success",
      };
    }
    if (val < 70) {
      return {
        title: "MAPA - Alerta Amarelo",
        message:
          "Risco moderado detectado. Considere medidas preventivas segundo Portaria MAPA nº 298/2023.",
        color: "warning",
      };
    }
    return {
      title: "MAPA - Alerta Vermelho",
      message:
        "Atenção! Risco elevado. Ação imediata necessária conforme IN MAPA nº 52/2024.",
      color: "danger",
    };
  };

  const alert = getGovernmentAlert(value);

  return (
    <Card className="shadow-card hover:shadow-elevated transition-shadow h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="w-5 h-5 text-primary" />
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Nível de Risco
            </span>
            <span className="text-2xl font-bold text-foreground">{value}%</span>
          </div>
          <Progress className={getRiskColor(value)} value={value} />
        </div>
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="text-sm font-medium text-muted-foreground">
            Status:
          </span>
          <span
            className={`text-sm font-semibold ${
              value < 30
                ? "text-success"
                : value < 70
                ? "text-warning"
                : "text-danger"
            }`}>
            {getRiskLevel(value)}
          </span>
        </div>

        {/* Government Alert */}
        <div
          className={`p-3 rounded-lg bg-gradient-to-br from-${alert.color}/10 to-${alert.color}/5 border border-${alert.color}/20`}>
          <div className="flex items-center gap-2 mb-1">
            <Shield className={`w-4 h-4 text-${alert.color}`} />
            <h4 className={`text-xs font-semibold text-${alert.color}`}>
              {alert.title}
            </h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {alert.message}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
