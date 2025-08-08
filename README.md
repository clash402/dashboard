## Dashboard

A modern, component-driven analytics dashboard built with Next.js. It includes feature-rich pages, reusable UI components, and mock API routes to simulate real data flows.

### ✨ Features

- **📊 Overview KPIs**: Snapshot cards for key metrics (revenue, orders, customers, growth)
- **📈 Sales & Performance Charts**: Area chart for sales trends and performance insights
- **🗂️ Data Tables**: Sortable, scrollable tables with support for pagination-ready layouts
- **📅 Date Range Picker**: Filter dashboards by custom ranges
- **🧭 Structured Navigation**: Clean layout with app frame and organized sections
- **🧩 Reusable UI Kit**: Buttons, cards, dialogs, tables, tabs, menus, and more
- **🔌 API Routes (mocked)**: `/api/overview`, `/api/products`, `/api/customers`, `/api/orders`
- **⚡ Fast DX**: TypeScript, Tailwind CSS, and file-based routing with the Next.js App Router

### 📚 Pages

- **Overview** (`/(dashboard)/overview`): KPIs and high-level trends
- **Sales** (`/(dashboard)/sales`): Sales metrics and trend visualizations
- **Products** (`/(dashboard)/products`): Product performance and listings
- **Customers** (`/(dashboard)/customers`): Customer stats and recent activity
- **Performance** (`/(dashboard)/performance`): System or business performance breakdown

### 🧱 Key Components

- **`AppFrame`**: Top-level layout wrapper for dashboard navigation
- **`KpiCard`**: Compact metric card with trend indicators
- **`AreaSalesChart`**: Area chart component for sales over time
- **`DataTable`**: Flexible table with header, body, and utility helpers
- **`DateRange`**: Calendar-driven date range selector
- **`ui/*`**: A lightweight UI toolkit (buttons, inputs, cards, dialogs, tables, tabs, etc.)

### 🔌 API Endpoints (Mock)

All API routes live under `src/app/api` and return mock data for local development:

- `GET /api/overview`
- `GET /api/products`
- `GET /api/customers`
- `GET /api/orders`

### 🧰 Tech Stack

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** for styling
- **Headless UI-style components** colocated under `src/components/ui`

### 🚀 Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Additional scripts:

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # lint sources
```

### 🗂️ Project Structure

```text
src/
  app/
    (dashboard)/
      overview/        # KPIs + charts
      sales/           # sales metrics
      products/        # product insights
      customers/       # customer stats
      performance/     # performance view
    api/               # mock API routes
  components/
    charts/            # charts (e.g., area-sales)
    ui/                # buttons, cards, tables, dialogs, tabs, etc.
    app-frame.tsx
    data-table.tsx
    date-range.tsx
    kpi-card.tsx
```

### ✅ Accessibility & Quality

- **Accessible primitives** with keyboard navigation and focus states
- **Responsive** layout and components
- **Type-safe** code with clear naming and structure

---

If you have ideas to improve the dashboard, feel free to open an issue or PR in the repository.
