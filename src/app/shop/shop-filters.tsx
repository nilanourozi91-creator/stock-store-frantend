"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type ShopFiltersProps = {
  search: string;
  category: string;
  sort: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function ShopFilters({
  search,
  category,
  sort,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: ShopFiltersProps) {
  return (
    <div className="mb-8 rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="h-11 w-full rounded-full border border-gray-200 bg-white pl-11 pr-5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row">

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="h-11 w-full appearance-none rounded-full border border-gray-200 bg-white px-5 pr-10 text-sm text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 sm:w-48"
            >
              <option value="all">
                All Categories
              </option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-purple-600" />

            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="h-11 w-full appearance-none rounded-full border border-gray-200 bg-white pl-10 pr-10 text-sm text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 sm:w-52"
            >
              <option value="default">
                Sort Products
              </option>

              <option value="popular">
                Most Popular
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}