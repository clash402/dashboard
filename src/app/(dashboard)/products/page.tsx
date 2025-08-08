"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Product = { sku: string; name: string; price: string; units: number; revenue: string };

export default function ProductsPage() {
  const [rows, setRows] = React.useState<Product[]>([]);

  React.useEffect(() => {
    fetch(`/api/products`)
      .then((r) => r.json())
      .then((json) => setRows(json.products));
  }, []);

  const columns: ColumnDef<Product>[] = [
    { accessorKey: "sku", header: "SKU" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "units", header: "Units" },
    { accessorKey: "revenue", header: "Revenue" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-wider [font-family:var(--font-orbitron)]">Products</h1>
      <Card className="p-4 border-white/10 bg-card/60 backdrop-blur">
        <DataTable columns={columns} data={rows} filterPlaceholder="Search products..." csvFilename="products.csv" />
      </Card>
    </div>
  );
}


