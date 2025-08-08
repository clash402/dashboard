"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  delta,
  accent = "cyan",
}: {
  label: string;
  value: string;
  delta?: string;
  accent?: "cyan" | "fuchsia" | "violet" | "lime";
}) {
  const accentColor =
    accent === "fuchsia"
      ? "from-fuchsia-500"
      : accent === "violet"
      ? "from-violet-500"
      : accent === "lime"
      ? "from-lime-400"
      : "from-cyan-500";

  return (
    <Card className="relative overflow-hidden border-white/10 bg-card/60 p-4 backdrop-blur">
      <div className={cn("absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-20", `bg-gradient-to-tr ${accentColor}`)} />
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-wide">{value}</div>
      {delta ? (
        <div className="mt-2 text-xs text-foreground/70">{delta}</div>
      ) : null}
    </Card>
  );
}


