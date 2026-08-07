import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import StatCard from "./stat-card";
import SalesChart from "./sales-chart";
import BestSellingProducts from "./best-selling-products";
import RecentOrders from "./recent-orders";
import LowStock from "./low-stock";

// import StatCard from "@/components/admin/stat-card";
// import SalesChart from "@/components/admin/sales-chart";
// import RecentOrders from "@/components/admin/recent-orders";
// import LowStock from "@/components/admin/low-stock";

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
    <div className="p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back 👋 Here's what's happening with FreshStock.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700">
          View Reports
          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}

      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">

        <SalesChart />

        <BestSellingProducts />

      </div>

      {/* Orders + Stock */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">

        <RecentOrders />

        <LowStock />

      </div>

    </div>
  );
}