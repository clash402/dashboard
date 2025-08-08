"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export type SalesPoint = { date: string; revenue: number; orders: number };

export function AreaSalesChart({ data }: { data: SalesPoint[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ord" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e879f9" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#e879f9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#6b7280" tickLine={false} axisLine={false} />
          <YAxis stroke="#6b7280" tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: "#0b0b12", border: "1px solid rgba(255,255,255,0.1)" }} />
          <Area type="monotone" dataKey="revenue" stroke="#22d3ee" fill="url(#rev)" strokeWidth={2} />
          <Area type="monotone" dataKey="orders" stroke="#e879f9" fill="url(#ord)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


