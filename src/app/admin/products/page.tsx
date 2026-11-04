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
    <div className="space-y-6 dark:bg-gray-950">

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
      {/* Table */}
      <ProdectTable/>
    </div>
  );
}