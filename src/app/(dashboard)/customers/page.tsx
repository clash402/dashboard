"use client";
import * as React from "react";
import { DateRangePicker, DateRangeValue } from "@/components/date-range";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Customer = { id: string; name: string; email: string; orders: number; ltv: string };

export default function CustomersPage() {
  const [range, setRange] = React.useState<DateRangeValue>({ from: new Date(Date.now() - 90 * 864e5), to: new Date() });
  const [rows, setRows] = React.useState<Customer[]>([]);

  React.useEffect(() => {
    const params = new URLSearchParams({ from: range.from.toISOString(), to: range.to.toISOString() });
    fetch(`/api/customers?${params.toString()}`)
      .then((r) => r.json())
      .then((json) => setRows(json.customers));
  }, [range]);

  const columns: ColumnDef<Customer>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "orders", header: "Orders" },
    { accessorKey: "ltv", header: "LTV" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-wider [font-family:var(--font-orbitron)]">Customers</h1>
        <DateRangePicker value={range} onChange={setRange} />
      </div>
      <Card className="p-4 border-white/10 bg-card/60 backdrop-blur">
        <DataTable columns={columns} data={rows} filterPlaceholder="Search customers..." csvFilename="customers.csv" />
      </Card>
    </div>
  );
}


