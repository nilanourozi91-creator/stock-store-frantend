"use client";

import {
  Apple,
  Coffee,
  Edit3,
  FolderTree,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  Trash2,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    id: 1,
    name: "Fruits",
    description: "Fresh and organic fruits",
    products: 42,
    status: "Active",
    icon: Apple,
  },
  {
    id: 2,
    name: "Vegetables",
    description: "Fresh vegetables and greens",
    products: 38,
    status: "Active",
    icon: Utensils,
  },
  {
    id: 3,
    name: "Dairy",
    description: "Milk, cheese and dairy products",
    products: 24,
    status: "Active",
    icon: Package,
  },
  {
    id: 4,
    name: "Bakery",
    description: "Fresh bread and bakery items",
    products: 31,
    status: "Active",
    icon: Package,
  },
  {
    id: 5,
    name: "Beverages",
    description: "Juices, water and drinks",
    products: 27,
    status: "Active",
    icon: Coffee,
  },
  {
    id: 6,
    name: "Snacks",
    description: "Healthy snacks and packaged foods",
    products: 19,
    status: "Inactive",
    icon: Package,
  },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(
    (category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      category.description
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
              <FolderTree className="h-6 w-6 text-purple-600" />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-gray-900">
                Categories
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Organize and manage your product categories.
              </p>
            </div>

          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
        >
          <Link href="/admin/categories/create">
            Add Category
            </Link>
          <Plus className="h-4 w-4" />
        </button>

      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Total Categories
              </p>

              <p className="mt-3 text-2xl font-black text-gray-900">
                {categories.length}
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-3">
              <FolderTree className="h-5 w-5 text-purple-600" />
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Active Categories
              </p>

              <p className="mt-3 text-2xl font-black text-green-600">
                {
                  categories.filter(
                    (category) =>
                      category.status === "Active"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3">
              <Package className="h-5 w-5 text-green-600" />
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Products
              </p>

              <p className="mt-3 text-2xl font-black text-purple-600">
                {categories.reduce(
                  (total, category) =>
                    total + category.products,
                  0
                )}
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-3">
              <Package className="h-5 w-5 text-purple-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search categories..."
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
          />

        </div>

      </div>

      {/* Category Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {filteredCategories.map(
          (category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple-100 hover:shadow-md"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 transition group-hover:bg-purple-100">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>

                    <div>
                      <h2 className="font-black text-gray-900">
                        {category.name}
                      </h2>

                      <p className="mt-1 text-xs text-gray-400">
                        #{String(category.id).padStart(3, "0")}
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                </div>

                {/* Description */}
                <p className="mt-5 min-h-[40px] text-sm leading-5 text-gray-500">
                  {category.description}
                </p>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                  <div className="flex items-center gap-2">

                    <div className="rounded-lg bg-purple-50 p-2">
                      <Package className="h-4 w-4 text-purple-600" />
                    </div>

                    <div>
                      <p className="text-sm font-black text-gray-900">
                        {category.products}
                      </p>

                      <p className="text-[11px] text-gray-400">
                        Products
                      </p>
                    </div>

                  </div>

                  <span
                    className={
                      category.status === "Active"
                        ? "rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600"
                        : "rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-500"
                    }
                  >
                    {category.status}
                  </span>

                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">

                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-bold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    Edit
                  </button>

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                </div>

              </div>
            );
          }
        )}

      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="rounded-2xl border border-gray-100 bg-white py-20 text-center shadow-sm">

          <FolderTree className="mx-auto h-10 w-10 text-gray-300" />

          <h2 className="mt-4 font-black text-gray-900">
            No categories found
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Try searching for another category.
          </p>

        </div>
      )}

    </div>
  );
}