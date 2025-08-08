"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";

export default function PerformancePage() {
  const [conversion] = React.useState({ view: 100, cart: 38, checkout: 22, purchase: 12 });
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-wider [font-family:var(--font-orbitron)]">Performance</h1>
      <Card className="p-4 border-white/10 bg-card/60 backdrop-blur space-y-4">
        <Row label="Product Views" value={conversion.view} color="cyan" />
        <Row label="Added to Cart" value={conversion.cart} color="fuchsia" />
        <Row label="Checkout Started" value={conversion.checkout} color="violet" />
        <Row label="Purchased" value={conversion.purchase} color="lime" />
      </Card>
    </div>
  );
}

function Row({ label, value, color }: { label: string; value: number; color: "cyan" | "fuchsia" | "violet" | "lime" }) {
  const colorClass =
    color === "fuchsia" ? "bg-fuchsia-500" : color === "violet" ? "bg-violet-500" : color === "lime" ? "bg-lime-400" : "bg-cyan-500";
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-foreground/80">{label}</span>
        <span className="text-foreground/80">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className={`h-2 rounded-full ${colorClass} shadow-[0_0_14px]`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}


