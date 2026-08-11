// import {
//   DollarSign,
//   ShoppingCart,
//   Users,
//   Package,
//   AlertTriangle,
// } from "lucide-react";

// import { Card } from "@/components/ui/card";

// const stats = [
//   {
//     title: "Total Sales",
//     value: "$12,450",
//     change: "+12.5%",
//     icon: DollarSign,
//   },
//   {
//     title: "Total Orders",
//     value: "248",
//     change: "+8.2%",
//     icon: ShoppingCart,
//   },
//   {
//     title: "Customers",
//     value: "1,250",
//     change: "+15.4%",
//     icon: Users,
//   },
//   {
//     title: "Products",
//     value: "86",
//     change: "+4.6%",
//     icon: Package,
//   },
// ];

// export default function AdminDashboard() {
//   return (
//     <div className="p-8">

//       {/* Header */}

//       <div className="mb-8">
//         <h1 className="text-2xl font-bold tracking-tight">
//           Dashboard
//         </h1>

//         <p className="mt-1 text-sm text-muted-foreground">
//           Welcome back. Here's what's happening with FreshStock.
//         </p>
//       </div>

//       {/* Stats */}

//       <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

//         {stats.map((stat) => {

//           const Icon = stat.icon;

//           return (
//             <Card
//               key={stat.title}
//               className="p-5"
//             >
//               <div className="flex items-center justify-between">

//                 <div>
//                   <p className="text-sm text-muted-foreground">
//                     {stat.title}
//                   </p>

//                   <h2 className="mt-2 text-2xl font-bold">
//                     {stat.value}
//                   </h2>

//                   <p className="mt-2 text-xs text-green-600">
//                     {stat.change} from last month
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-purple-50 p-3">
//                   <Icon className="h-6 w-6 text-purple-600" />
//                 </div>

//               </div>
//             </Card>
//           );
//         })}

//       </div>

//       {/* Dashboard Content */}

//       <div className="mt-6 grid gap-6 lg:grid-cols-3">

//         <Card className="p-6 lg:col-span-2">
//           <h2 className="font-semibold">
//             Sales Overview
//           </h2>

//           <div className="flex h-80 items-center justify-center text-sm text-muted-foreground">
//             Sales chart will appear here
//           </div>
//         </Card>

//         <Card className="p-6">
//           <h2 className="font-semibold">
//             Low Stock
//           </h2>

//           <div className="mt-5 space-y-4">

//             {[
//               ["Basmati Rice", "4 left"],
//               ["Olive Oil", "6 left"],
//               ["Wheat Flour", "2 left"],
//               ["Green Tea", "5 left"],
//             ].map(([name, stock]) => (

//               <div
//                 key={name}
//                 className="flex items-center justify-between"
//               >
//                 <div className="flex items-center gap-3">

//                   <div className="rounded-lg bg-orange-50 p-2">
//                     <AlertTriangle className="h-4 w-4 text-orange-500" />
//                   </div>

//                   <span className="text-sm font-medium">
//                     {name}
//                   </span>

//                 </div>

//                 <span className="text-xs text-red-500">
//                   {stock}
//                 </span>

//               </div>

//             ))}

//           </div>
//         </Card>

//       </div>

//     </div>
//   );
// }



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
    <div className="min-h-full bg-gray-50/50 p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back 👋 Here&apos;s what&apos;s happening with FreshStock.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
        >
          <Link href='/admin/reports' >
           View Reports</Link>

          <ArrowUpRight className="h-4 w-4" />
        </button>

      </div>

      {/* Statistics */}
      <section className="mt-8">

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

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
