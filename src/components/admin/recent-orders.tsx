
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Package,
  XCircle,
} from "lucide-react";

const orders = [
  {
    id: "#FS-1024",
    customer: "Sarah Johnson",
    initials: "SJ",
    products: 4,
    total: "$86.40",
    status: "Completed",
  },
  {
    id: "#FS-1023",
    customer: "Michael Smith",
    initials: "MS",
    products: 2,
    total: "$42.90",
    status: "Processing",
  },
  {
    id: "#FS-1022",
    customer: "Emma Wilson",
    initials: "EW",
    products: 6,
    total: "$128.50",
    status: "Completed",
  },
  {
    id: "#FS-1021",
    customer: "Daniel Brown",
    initials: "DB",
    products: 3,
    total: "$54.75",
    status: "Pending",
  },
  {
    id: "#FS-1020",
    customer: "Olivia Davis",
    initials: "OD",
    products: 5,
    total: "$97.20",
    status: "Cancelled",
  },
];

function StatusBadge({
  status,
}: {
  status: string;
}) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Completed
      </span>
    );
  }

  if (status === "Processing") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600">
        <Clock3 className="h-3.5 w-3.5" />
        Processing
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-600">
        <Clock3 className="h-3.5 w-3.5" />
        Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
      <XCircle className="h-3.5 w-3.5" />
      Cancelled
    </span>
  );
}

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest customer orders
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
          <Package className="h-5 w-5 text-purple-600" />
        </div>

      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60 text-left">

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Order
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Customer
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Products
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Total
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Status
              </th>

            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {orders.map((order) => (

              <tr
                key={order.id}
                className="transition hover:bg-purple-50/30"
              >

                {/* Order */}
                <td className="px-6 py-5">

                  <Link
                    href={`/admin/orders/${order.id.replace("#FS-", "")}`}
                    className="font-semibold text-purple-600 hover:text-purple-700"
                  >
                    {order.id}
                  </Link>

                </td>

                {/* Customer */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                      {order.initials}
                    </div>

                    <span className="text-sm font-medium text-gray-900">
                      {order.customer}
                    </span>

                  </div>

                </td>

                {/* Products */}
                <td className="px-6 py-5">

                  <span className="text-sm text-gray-600">
                    {order.products}{" "}
                    {order.products === 1
                      ? "product"
                      : "products"}
                  </span>

                </td>

                {/* Total */}
                <td className="px-6 py-5">

                  <span className="text-sm font-bold text-gray-900">
                    {order.total}
                  </span>

                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <StatusBadge
                    status={order.status}
                  />
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}
      <div className="divide-y divide-gray-100 md:hidden">

        {orders.map((order) => (

          <div
            key={order.id}
            className="p-5"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                  {order.initials}
                </div>

                <div>

                  <Link
                    href={`/admin/orders/${order.id.replace("#FS-", "")}`}
                    className="text-sm font-semibold text-purple-600"
                  >
                    {order.id}
                  </Link>

                  <p className="mt-1 text-sm text-gray-900">
                    {order.customer}
                  </p>

                </div>

              </div>

              <StatusBadge
                status={order.status}
              />

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-gray-400">
                {order.products} products
              </span>

              <span className="font-bold text-gray-900">
                {order.total}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 p-4">

        <Link
          href="/admin/orders"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-50 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-100"
        >
          View all orders

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

      </div>

    </div>
  );
}
