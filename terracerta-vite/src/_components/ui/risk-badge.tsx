import { cn } from "@/lib/utils";

export type RiskLevel = "low" | "medium" | "high";

interface RiskBadgeProps {
  level: RiskLevel;
  children: React.ReactNode;
  className?: string;
}

const riskStyles: Record<RiskLevel, string> = {
  low: "bg-success/10 text-success border-success/30",
  medium: "bg-warning/10 text-warning-foreground border-warning/30",
  high: "bg-danger/10 text-danger border-danger/30",
};

export function RiskBadge({ level, children, className }: RiskBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        riskStyles[level],
        className
      )}
    >
      <span className={cn(
        "w-2 h-2 rounded-full",
        level === "low" && "bg-success",
        level === "medium" && "bg-warning",
        level === "high" && "bg-danger"
      )} />
      {children}
    </span>
  );
}
