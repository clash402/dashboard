"use client";
import * as React from "react";
import { DateRangePicker, DateRangeValue } from "@/components/date-range";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Order = { id: string; date: string; customer: string; total: string; status: string };

export default function SalesPage() {
  const [range, setRange] = React.useState<DateRangeValue>({ from: new Date(Date.now() - 30 * 864e5), to: new Date() });
  const [rows, setRows] = React.useState<Order[]>([]);

  React.useEffect(() => {
    const params = new URLSearchParams({ from: range.from.toISOString(), to: range.to.toISOString() });
    fetch(`/api/orders?${params.toString()}`)
      .then((r) => r.json())
      .then((json) => setRows(json.orders));
  }, [range]);

  const columns: ColumnDef<Order>[] = [
    { accessorKey: "id", header: "Order ID" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "customer", header: "Customer" },
    { accessorKey: "total", header: "Total" },
    { accessorKey: "status", header: "Status" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-wider [font-family:var(--font-orbitron)]">Sales</h1>
        <DateRangePicker value={range} onChange={setRange} />
      </div>
      <Card className="p-4 border-white/10 bg-card/60 backdrop-blur">
        <DataTable columns={columns} data={rows} filterPlaceholder="Search orders..." csvFilename="orders.csv" />
      </Card>
    </div>
  );
}


