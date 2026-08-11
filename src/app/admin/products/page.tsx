"use client";

import Link from "next/link";
import {
  Search,
  Plus,
  MoreHorizontal,
  Package,
  Pencil,
  Trash2,
  Eye,
  Filter,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    category: "Fruits",
    price: "$4.99",
    stock: 120,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "Fruits",
    price: "$3.49",
    stock: 85,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Fresh Milk",
    category: "Dairy",
    price: "$2.99",
    stock: 32,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "$3.99",
    stock: 8,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "$2.49",
    stock: 0,
    status: "Out of Stock",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your FreshStock products.
          </p>
        </div>

        <Link
          href="/admin/products/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Link>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">
              Total Products
            </p>

            <div className="rounded-xl bg-purple-50 p-2.5">
              <Package className="h-5 w-5 text-purple-600" />
            </div>
          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            248
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            In Stock
          </p>

          <p className="mt-4 text-2xl font-black text-green-600">
            214
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Low Stock
          </p>

          <p className="mt-4 text-2xl font-black text-yellow-600">
            21
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            Out of Stock
          </p>

          <p className="mt-4 text-2xl font-black text-red-500">
            13
          </p>
        </div>

      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
            />

          </div>

          {/* Category */}
          <select
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-600 outline-none focus:border-purple-500"
          >
            <option>All Categories</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Beverages</option>
          </select>

          {/* Status */}
          <select
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-600 outline-none focus:border-purple-500"
          >
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-semibold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600">
            <Filter className="h-4 w-4" />
            Filter
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Stock
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="transition hover:bg-purple-50/30"
                >

                  {/* Product */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                        <Package className="h-5 w-5 text-purple-500" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          #{product.id}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">

                    <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-600">
                      {product.category}
                    </span>

                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">

                    <span className="text-sm font-black text-gray-900">
                      {product.price}
                    </span>

                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5">

                    <span className="text-sm font-semibold text-gray-700">
                      {product.stock}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    {product.status === "In Stock" && (
                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                        In Stock
                      </span>
                    )}

                    {product.status === "Low Stock" && (
                      <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-700">
                        Low Stock
                      </span>
                    )}

                    {product.status === "Out of Stock" && (
                      <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                        Out of Stock
                      </span>
                    )}

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-1">

                      <button
                        title="View"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        title="Delete"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <button
                        title="More"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium text-gray-400">
            Showing 1–5 of 248 products
          </p>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              Previous
            </button>

            <button className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-bold text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-50">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}