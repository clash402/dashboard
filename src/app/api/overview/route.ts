import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import { addDays, differenceInDays, format } from "date-fns";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = new Date(searchParams.get("from") ?? Date.now() - 30 * 864e5);
  const to = new Date(searchParams.get("to") ?? Date.now());
  const days = Math.max(1, differenceInDays(to, from));

  const timeseries = Array.from({ length: days + 1 }).map((_, i) => {
    const date = addDays(from, i);
    return {
      date: format(date, "LLL d"),
      revenue: Number(faker.finance.amount({ min: 3000, max: 9000 })),
      orders: faker.number.int({ min: 40, max: 220 }),
    };
  });

  return NextResponse.json({ timeseries });
}


