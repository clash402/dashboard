import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppFrame } from "@/components/app-frame";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Neon Sales Dashboard",
  description: "Neon-themed, responsive sales dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen antialiased bg-background text-foreground", inter.variable, orbitron.variable)}>
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
