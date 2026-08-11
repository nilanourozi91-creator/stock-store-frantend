"use client";

import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Boxes,
  Package,
  Search,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const inventory = [
  {
    id: 1,
    name: "Fresh Apples",
    category: "Fruits",
    sku: "FR-001",
    stock: 120,
    minStock: 20,
    price: 4.99,
    value: 598.8,
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "Fruits",
    sku: "FR-002",
    stock: 85,
    minStock: 20,
    price: 3.49,
    value: 296.65,
  },
  {
    id: 3,
    name: "Fresh Milk",
    category: "Dairy",
    sku: "DA-001",
    stock: 32,
    minStock: 15,
    price: 2.99,
    value: 95.68,
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    category: "Bakery",
    sku: "BA-001",
    stock: 8,
    minStock: 15,
    price: 3.99,
    value: 31.92,
  },
  {
    id: 5,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    sku: "VE-001",
    stock: 0,
    minStock: 20,
    price: 2.49,
    value: 0,
  },
  {
    id: 6,
    name: "Orange Juice",
    category: "Beverages",
    sku: "BE-001",
    stock: 18,
    minStock: 15,
    price: 5.49,
    value: 98.82,
  },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");

  const totalProducts = inventory.length;

  const totalItems = inventory.reduce(
    (sum, item) => sum + item.stock,
    0
  );

  const inventoryValue = inventory.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const lowStock = inventory.filter(
    (item) =>
      item.stock > 0 &&
      item.stock <= item.minStock
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.stock === 0
  ).length;

  const filteredInventory = inventory.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.sku
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  function getStockPercentage(
    stock: number,
    minStock: number
  ) {
    const percentage =
      (stock / (minStock * 5)) * 100;

    return Math.min(
      Math.max(percentage, 0),
      100
    );
  }

  function getStockStatus(
    stock: number,
    minStock: number
  ) {
    if (stock === 0) {
      return {
        label: "Out of Stock",
        className:
          "bg-red-50 text-red-600",
      };
    }

    if (stock <= minStock) {
      return {
        label: "Low Stock",
        className:
          "bg-yellow-50 text-yellow-700",
      };
    }

    return {
      label: "Healthy",
      className:
        "bg-green-50 text-green-600",
    };
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
              <Boxes className="h-6 w-6 text-purple-600" />
            </div>

            <div>

              <h1 className="text-2xl font-black tracking-tight text-gray-900">
                Inventory
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Monitor and manage your product stock.
              </p>

            </div>

          </div>

        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700">
          <TrendingUp className="h-4 w-4" />
          Stock Report
        </button>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Inventory Value */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Inventory Value
            </p>

            <div className="rounded-xl bg-purple-50 p-2.5">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            ${inventoryValue.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
              }
            )}
          </p>

          <p className="mt-1 text-xs font-medium text-green-600">
            Current stock value
          </p>

        </div>

        {/* Total Items */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Total Items
            </p>

            <div className="rounded-xl bg-blue-50 p-2.5">
              <Package className="h-5 w-5 text-blue-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            {totalItems}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Units in inventory
          </p>

        </div>

        {/* Low Stock */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Low Stock
            </p>

            <div className="rounded-xl bg-yellow-50 p-2.5">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-yellow-600">
            {lowStock}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Need restocking
          </p>

        </div>

        {/* Out of Stock */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Out of Stock
            </p>

            <div className="rounded-xl bg-red-50 p-2.5">
              <Package className="h-5 w-5 text-red-500" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-red-500">
            {outOfStock}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Products unavailable
          </p>

        </div>

      </div>

      {/* Search */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by product name or SKU..."
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
          />

        </div>

      </div>

      {/* Inventory Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  SKU
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Stock Level
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

              {filteredInventory.map(
                (item) => {

                  const status =
                    getStockStatus(
                      item.stock,
                      item.minStock
                    );

                  const percentage =
                    getStockPercentage(
                      item.stock,
                      item.minStock
                    );

                  return (
                    <tr
                      key={item.id}
                      className="transition hover:bg-purple-50/30"
                    >

                      {/* Product */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
                            <Package className="h-5 w-5 text-purple-500" />
                          </div>

                          <div>

                            <p className="text-sm font-bold text-gray-900">
                              {item.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              ${item.price.toFixed(2)}
                              {" / unit"}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Category */}
                      <td className="px-6 py-5">

                        <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-600">
                          {item.category}
                        </span>

                      </td>

                      {/* SKU */}
                      <td className="px-6 py-5">

                        <span className="font-mono text-xs font-semibold text-gray-500">
                          {item.sku}
                        </span>

                      </td>

                      {/* Stock Level */}
                      <td className="px-6 py-5">

                        <div className="w-40">

                          <div className="mb-2 flex items-center justify-between">

                            <span className="text-sm font-black text-gray-900">
                              {item.stock}
                            </span>

                            <span className="text-[11px] text-gray-400">
                              Min {item.minStock}
                            </span>

                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                            <div
                              className={`h-full rounded-full ${
                                item.stock === 0
                                  ? "bg-red-500"
                                  : item.stock <=
                                      item.minStock
                                  ? "bg-yellow-500"
                                  : "bg-purple-600"
                              }`}
                              style={{
                                width: `${percentage}%`,
                              }}
                            />

                          </div>

                        </div>

                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}
                        >
                          {status.label}
                        </span>

                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2">

                          <button
                            title="Decrease stock"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                          >
                            <ArrowDown className="h-4 w-4" />
                          </button>

                          <button
                            title="Increase stock"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:border-green-200 hover:bg-green-50 hover:text-green-600"
                          >
                            <ArrowUp className="h-4 w-4" />
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                }
              )}

            </tbody>

          </table>

        </div>

        {filteredInventory.length === 0 && (
          <div className="py-16 text-center">

            <Package className="mx-auto h-8 w-8 text-gray-300" />

            <p className="mt-3 text-sm font-semibold text-gray-500">
              No inventory found
            </p>

          </div>
        )}

      </div>

    </div>
  );
}