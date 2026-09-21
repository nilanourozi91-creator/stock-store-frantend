'use client'
import {
  ArrowUpRight,
  DollarSign,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";

import BestSellingProducts from "@/components/admin/best-selling-products";
import LowStock from "@/components/admin/low-stock";
import RecentOrders from "@/components/admin/recent-orders";
import SalesChart from "@/components/admin/sales-chart";
import StatCard from "@/components/admin/stat-card";
import Link from "next/link";
import CustomersReports from "@/components/admin/reports/customersReports";
import RevenueReports from "@/components/admin/reports/revenueReports";
import OrderReports from "@/components/admin/reports/orderReports";
import ProductsReport from "./reports/Products Report/page";
import GetProductReport from "@/components/admin/prodectReport";
// import GetProductReport from "@/components/admin/reports/prodectReport";

const stats = [
  {
    title: "Total Revenue",
    value: "$24,580",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "356",
    change: "+8.2%",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    value: "1,248",
    change: "+14.4%",
    icon: Users,
  },
  {
    title: "Products",
    value: "486",
    change: "+5.7%",
    icon: Package,
  },
];

  
export default function AdminDashboard() {
  return (
    <div className="min-h-full bg-gray-50/50 p-6 lg:p-8 dark:bg-gray-600 dark:text-white">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
            Welcome back 👋 Here&apos;s what&apos;s happening with FreshStock.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full dark:shadow-none dark:bg-purple-500 bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
        >
          <Link href='/admin/reports' >
           View Reports</Link>

          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      {/* Statistics */}
      <section className="mt-8">

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <RevenueReports/>
          <GetProductReport/>
          <CustomersReports/>
          <OrderReports/>
          
        </div>
      </section>
      {/* Sales + Best Selling */}
      <section className="mt-6">

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <SalesChart />
          <BestSellingProducts />
        </div>

      </section>

      {/* Orders + Low Stock */}
      <section className="mt-6">

        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">

          <RecentOrders />

          <LowStock />

        </div>

      </section>

    </div>
  );
}
