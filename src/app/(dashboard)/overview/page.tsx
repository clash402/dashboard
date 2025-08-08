"use client";
import * as React from "react";
import { KpiCard } from "@/components/kpi-card";
import { DateRangePicker, DateRangeValue } from "@/components/date-range";
import { AreaSalesChart, SalesPoint } from "@/components/charts/area-sales";
import { Card } from "@/components/ui/card";

export default function OverviewPage() {
  const [range, setRange] = React.useState<DateRangeValue>({ from: new Date(Date.now() - 30 * 864e5), to: new Date() });
  const [data, setData] = React.useState<SalesPoint[]>([]);

  React.useEffect(() => {
    const params = new URLSearchParams({ from: range.from.toISOString(), to: range.to.toISOString() });
    fetch(`/api/overview?${params.toString()}`)
      .then((r) => r.json())
      .then((json) => setData(json.timeseries));
  }, [range]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-wider [font-family:var(--font-orbitron)]">Overview</h1>
        <DateRangePicker value={range} onChange={setRange} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <KpiCard label="Revenue" value="$128,240" delta="▲ 12.4% vs last period" accent="cyan" />
        <KpiCard label="Orders" value="8,942" delta="▲ 4.2%" accent="fuchsia" />
        <KpiCard label="AOV" value="$14.34" delta="▼ 1.1%" accent="violet" />
        <KpiCard label="Conversion Rate" value="3.84%" delta="▲ 0.3pp" accent="lime" />
        <KpiCard label="Returning Customers" value="24%" delta="▲ 1.2pp" accent="cyan" />
        <KpiCard label="Refund Rate" value="1.1%" delta="▼ 0.2pp" accent="fuchsia" />
      </div>
      <Card className="p-4 border-white/10 bg-card/60 backdrop-blur">
        <AreaSalesChart data={data} />
      </Card>
    </div>
  );
}


