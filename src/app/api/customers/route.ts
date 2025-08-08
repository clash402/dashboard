import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const customers = Array.from({ length: 200 }).map(() => {
    const orders = faker.number.int({ min: 1, max: 25 });
    const ltv = faker.finance.amount({ min: 50, max: 5000 });
    return {
      id: faker.string.alphanumeric({ length: 6 }).toUpperCase(),
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      orders,
      ltv: Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(ltv)),
    };
  });
  return NextResponse.json({ customers });
}


