import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { differenceInDays } from "date-fns";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = new Date(searchParams.get("from") ?? Date.now() - 30 * 864e5);
  const to = new Date(searchParams.get("to") ?? Date.now());
  const days = Math.max(1, differenceInDays(to, from));
  const count = Math.min(500, days * 20);

  const orders = Array.from({ length: count }).map(() => {
    const dt = faker.date.between({ from, to });
    const total = faker.finance.amount({ min: 10, max: 500 });
    return {
      id: faker.string.alphanumeric({ length: 8 }).toUpperCase(),
      date: dt.toISOString().slice(0, 10),
      customer: faker.person.fullName(),
      total: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(total)),
      status: faker.helpers.arrayElement(["paid", "pending", "refunded"]),
    };
  });

  return NextResponse.json({ orders });
}


