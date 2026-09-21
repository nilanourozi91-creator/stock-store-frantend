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
import GetCatagory from "./getcatagory";
import CategoryTable from "./catagoryTable";


export default function CategoriesPage() {
  return (
    <div className="space-y-6 dark:bg-gray-600">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
              <FolderTree className="h-6 w-6 text-purple-600" />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                Categories
              </h1>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
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
           <GetCatagory/>
            <CategoryTable/>
     

    </div>
  );
}