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
import { useEffect, useState } from "react";
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
 
import Getstock from "./getstock";
import ProdectTable from "./products";

export default function ProductsPage() {
      

  return (
    <div className="space-y-6 dark:bg-gray-600">

      {/* Header */}
      <div className="flex  flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
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
    <Getstock/>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-100 dark:border-gray-500 dark:bg-gray-700 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..." 
              className="h-11 w-full rounded-xl border border-gray-200 dark:border-gray-500 dark:bg-gray-700 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
            />

          </div>

          {/* Category */}
          <select
            className="h-11 rounded-xl border dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-600 outline-none focus:border-purple-500"
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
            className="h-11 rounded-xl border border-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 bg-gray-50 px-4 text-sm font-medium text-gray-600 outline-none focus:border-purple-500"
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
       <ProdectTable/>
    </div>
  );
}