"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ChartBar,
  Users,
  Package,
  Gauge,
  LineChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function AppFrame({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    if (stored) setCollapsed(stored === "1");
  }, []);
  React.useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  return (
    <div className="relative">
      {/* Neon background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.cyan.500),transparent_60%)] blur-3xl opacity-30" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.500),transparent_60%)] blur-3xl opacity-25" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.violet.500),transparent_60%)] blur-3xl opacity-25" />
      </div>

      <div className={cn("grid min-h-screen grid-cols-1 md:grid-cols-[260px_1fr] transition-[grid-template-columns] duration-300", collapsed && "md:grid-cols-[80px_1fr]")}> 
        <aside className="hidden md:block border-r border-border/50 bg-card/40 backdrop-blur-md">
          <div className="sticky top-0 h-screen px-3 py-4">
            <div className={cn("mb-4 flex items-center", collapsed ? "justify-center" : "justify-between px-3")}> 
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-fuchsia-500 shadow-[0_0_24px_theme(colors.cyan.500/60%)]" />
                {!collapsed && (
                  <span className="font-bold text-base tracking-wider text-white/90 [font-family:var(--font-orbitron)]">
                    NEON DASH
                  </span>
                )}
              </div>
              {!collapsed && (
                <button
                  aria-label="Collapse sidebar"
                  onClick={() => setCollapsed(true)}
                  className="rounded-md p-1.5 text-foreground/70 hover:bg-white/5 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {collapsed && (
                <button
                  aria-label="Expand sidebar"
                  onClick={() => setCollapsed(false)}
                  className="rounded-md p-1.5 text-foreground/70 hover:bg-white/5 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

            <nav className="space-y-1 text-sm">
              <NavItem href="/overview" label="Overview" icon={<LayoutDashboard className="h-4 w-4" />} collapsed={collapsed} />
              <NavItem href="/sales" label="Sales" icon={<ChartBar className="h-4 w-4" />} collapsed={collapsed} />
              <NavItem href="/customers" label="Customers" icon={<Users className="h-4 w-4" />} collapsed={collapsed} />
              <NavItem href="/products" label="Products" icon={<Package className="h-4 w-4" />} collapsed={collapsed} />
              <NavItem href="/performance" label="Performance" icon={<Gauge className="h-4 w-4" />} collapsed={collapsed} />
            </nav>
            {!collapsed && (
              <div className="absolute bottom-4 left-6 right-6 text-xs text-muted-foreground/70">
                <p className="[font-family:var(--font-inter)]">en-US • USD</p>
              </div>
            )}
          </div>
        </aside>
        <main className="relative">
          <header className="sticky top-0 z-20 border-b border-border/50 bg-background/60 backdrop-blur-md md:hidden">
            <div className="flex items-center gap-2 px-4 py-3">
              <LineChart className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold tracking-wider [font-family:var(--font-orbitron)]">NEON DASH</span>
            </div>
            <div className="flex w-full overflow-x-auto pb-2 [scrollbar-width:none]">
              <div className="flex min-w-max gap-2 px-4">
                <MobileNavLink href="/overview" label="Overview" />
                <MobileNavLink href="/sales" label="Sales" />
                <MobileNavLink href="/customers" label="Customers" />
                <MobileNavLink href="/products" label="Products" />
                <MobileNavLink href="/performance" label="Performance" />
              </div>
            </div>
          </header>
          <div className="p-4 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, label, icon, collapsed }: { href: string; label: string; icon: React.ReactNode; collapsed: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-2 rounded-md px-3 py-2 text-foreground/80 transition",
        "hover:bg-white/5 hover:text-white shadow-[0_0_0_0_theme(colors.cyan.500/0%)] hover:shadow-[0_0_8px_theme(colors.cyan.500/40%)]",
        collapsed && "justify-center"
      )}
      title={collapsed ? label : undefined}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-white/10 bg-background/60 px-3 py-1.5 text-xs text-foreground/80 shadow-[0_0_6px_theme(colors.fuchsia.500/25%)] backdrop-blur"
    >
      {label}
    </Link>
  );
}


