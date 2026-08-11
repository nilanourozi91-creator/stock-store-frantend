"use client";

import {
  BarChart3,
  Calendar,
  Download,
  FileText,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const reports = [
  {
    title: "Sales Report",
    description: "View revenue, sales trends and total sales.",
    icon: TrendingUp,
    href: "/admin/reports/sales",
  },
  {
    title: "Orders Report",
    description: "Analyze completed, pending and cancelled orders.",
    icon: ShoppingCart,
    href: "/admin/reports/orders",
  },
  {
    title: "Products Report",
    description: "View product performance and best sellers.",
    icon: Package,
    href: "/admin/reports/products",
  },
  {
    title: "Inventory Report",
    description: "Monitor stock levels and low-stock products.",
    icon: BarChart3,
    href: "/admin/reports/inventory",
  },
  {
    title: "Customers Report",
    description: "Analyze customers, registrations and spending.",
    icon: Users,
    href: "/admin/reports/customers",
  },
  {
    title: "Payments Report",
    description: "View payment transactions and revenue.",
    icon: Wallet,
    href: "/admin/reports/payments",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Reports
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and analyze your FreshStock store performance.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
        >
          <Download className="h-4 w-4" />
          Export Report
        </button>

      </div>

      {/* Date Filter */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

          <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
            <Calendar className="h-4 w-4 text-purple-600" />
            Report Period
          </div>

          <select
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-600 outline-none focus:border-purple-500"
          >
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
            <option>Custom Range</option>
          </select>

          <button
            type="button"
            className="h-11 rounded-xl border border-gray-200 px-5 text-sm font-bold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            Apply
          </button>

        </div>

      </div>

      {/* Overview */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <ReportStat
          title="Total Sales"
          value="$24,850"
          change="+18.4%"
          icon={TrendingUp}
        />

        <ReportStat
          title="Total Orders"
          value="1,248"
          change="+12.6%"
          icon={ShoppingCart}
        />

        <ReportStat
          title="Customers"
          value="3,842"
          change="+9.2%"
          icon={Users}
        />

        <ReportStat
          title="Products Sold"
          value="6,921"
          change="+15.8%"
          icon={Package}
        />

      </div>

      {/* Report Cards */}
      <div>

        <div className="mb-4">

          <h2 className="text-lg font-black text-gray-900">
            All Reports
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Select a report to view detailed information.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {reports.map((report) => {
            const Icon = report.icon;

            return (
              <a
                key={report.title}
                href={report.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 transition group-hover:bg-purple-600">
                    <Icon className="h-6 w-6 text-purple-600 transition group-hover:text-white" />
                  </div>

                  <FileText className="h-5 w-5 text-gray-300 transition group-hover:text-purple-400" />

                </div>

                <h3 className="mt-5 text-base font-black text-gray-900">
                  {report.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {report.description}
                </p>

                <div className="mt-5 text-sm font-bold text-purple-600">
                  View Report →
                </div>

              </a>
            );
          })}

        </div>

      </div>

      {/* Quick Export */}
      <div className="rounded-2xl bg-purple-600 p-6 text-white shadow-sm">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-lg font-black">
              Need a complete report?
            </h2>

            <p className="mt-1 max-w-xl text-sm text-purple-100">
              Export your sales, orders, customers, inventory and payment
              information in one report.
            </p>

          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-600 transition hover:bg-purple-50"
          >
            <Download className="h-4 w-4" />
            Download Full Report
          </button>

        </div>

      </div>

    </div>
  );
}

function ReportStat({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <p className="text-sm font-semibold text-gray-500">
          {title}
        </p>

        <div className="rounded-xl bg-purple-50 p-2.5">
          <Icon className="h-5 w-5 text-purple-600" />
        </div>

      </div>

      <p className="mt-4 text-2xl font-black text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-bold text-green-600">
        {change} from previous period
      </p>

    </div>
  );
}