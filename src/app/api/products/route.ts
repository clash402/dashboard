import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const products = Array.from({ length: 150 }).map(() => {
    const price = faker.finance.amount({ min: 5, max: 200 });
    const units = faker.number.int({ min: 10, max: 5000 });
    const revenue = Number(price) * units;
    return {
      sku: faker.string.alphanumeric({ length: 8 }).toUpperCase(),
      name: faker.commerce.productName(),
      price: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(price)),
      units,
      revenue: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(revenue),
    };
  });
  return NextResponse.json({ products });
}


