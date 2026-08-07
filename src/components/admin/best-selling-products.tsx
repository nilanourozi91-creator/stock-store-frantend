import Image from "next/image";
import { TrendingUp } from "lucide-react";

const products = [
  {
    name: "Fresh Avocado",
    category: "Fruits",
    sales: 248,
    revenue: "$1,240",
  },
  {
    name: "Organic Orange",
    category: "Fruits",
    sales: 215,
    revenue: "$860",
  },
  {
    name: "Fresh Strawberry",
    category: "Berries",
    sales: 189,
    revenue: "$945",
  },
  {
    name: "Organic Milk",
    category: "Dairy",
    sales: 156,
    revenue: "$624",
  },
];

export default function BestSellingProducts() {
  return (
    <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Best Selling
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Top products this month
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
          <TrendingUp className="h-5 w-5 text-purple-600" />
        </div>

      </div>

      {/* Products */}
      <div className="mt-6 space-y-5">

        {products.map((product, index) => (

          <div
            key={product.name}
            className="flex items-center gap-4"
          >

            {/* Number */}
            <span className="w-5 text-sm font-bold text-gray-400">
              {index + 1}
            </span>

            {/* Image */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-xl">
              {index === 0 && "🥑"}
              {index === 1 && "🍊"}
              {index === 2 && "🍓"}
              {index === 3 && "🥛"}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-semibold text-gray-900">
                {product.name}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {product.category}
              </p>

            </div>

            {/* Sales */}
            <div className="text-right">

              <p className="text-sm font-bold text-gray-900">
                {product.sales}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                sold
              </p>

            </div>

          </div>

        ))}

      </div>

      <button className="mt-6 w-full rounded-xl bg-purple-50 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-100">
        View all products
      </button>

    </div>
  );
}