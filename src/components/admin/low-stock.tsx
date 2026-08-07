
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Package,
} from "lucide-react";

const products = [
  {
    name: "Organic Milk",
    category: "Dairy",
    stock: 4,
    maxStock: 40,
    status: "Critical",
  },
  {
    name: "Fresh Avocado",
    category: "Fruits",
    stock: 7,
    maxStock: 40,
    status: "Low",
  },
  {
    name: "Strawberry",
    category: "Berries",
    stock: 11,
    maxStock: 50,
    status: "Low",
  },
  {
    name: "Orange Juice",
    category: "Drinks",
    stock: 16,
    maxStock: 50,
    status: "Warning",
  },
];

function getStatusStyles(status: string) {
  switch (status) {
    case "Critical":
      return {
        badge: "bg-red-50 text-red-600",
        bar: "bg-red-500",
      };

    case "Low":
      return {
        badge: "bg-orange-50 text-orange-600",
        bar: "bg-orange-500",
      };

    default:
      return {
        badge: "bg-yellow-50 text-yellow-600",
        bar: "bg-yellow-500",
      };
  }
}

export default function LowStock() {
  return (
    <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Low Stock
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Products that need attention
            </p>
          </div>

        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
          {products.length} Alerts
        </span>

      </div>

      {/* Products */}
      <div className="mt-6 space-y-5">

        {products.map((product) => {

          const styles = getStatusStyles(
            product.status
          );

          const percentage = Math.min(
            (product.stock / product.maxStock) * 100,
            100
          );

          return (
            <div
              key={product.name}
              className="rounded-2xl border border-gray-100 p-4 transition hover:border-purple-100 hover:bg-purple-50/20"
            >

              {/* Product top */}
              <div className="flex items-center justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                    <Package className="h-5 w-5 text-purple-600" />
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-sm font-semibold text-gray-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {product.category}
                    </p>

                  </div>

                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${styles.badge}`}
                >
                  {product.status}
                </span>

              </div>

              {/* Stock */}
              <div className="mt-4">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-xs text-gray-400">
                    Stock level
                  </span>

                  <span className="text-xs font-bold text-gray-700">
                    {product.stock} left
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                  <div
                    className={`h-full rounded-full transition-all ${styles.bar}`}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Footer */}
      <Link
        href="/admin/inventory"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-50 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-100"
      >
        Manage inventory

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

    </div>
  );
}