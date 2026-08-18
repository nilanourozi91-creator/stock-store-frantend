"use client";

import { useMemo, useState } from "react";
import ProductCard, { Product } from "./product-card";
import ShopFilters from "./shop-filters";
type ShopContentProps = {
  products: Product[];
};

export default function ShopContent({
  products
}: ShopContentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const categories = useMemo(() => {
    return Array.from(
      new Set(products.map((product) => product.category))
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sort
    switch (sort) {
      case "popular":
        result.sort(
          (a, b) => (b.reviews ?? 0) - (a.reviews ?? 0)
        );
        break;

      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort(
          (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
        );
        break;
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <>
      <ShopFilters
        search={search}
        category={category}
        sort={sort}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      {/* Result count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {(search || category !== "all" || sort !== "default") && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("all");
              setSort("default");
            }}
            className="text-sm font-semibold text-purple-600 transition hover:text-purple-700"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
            🔍
          </div>

          <h3 className="mt-5 text-xl font-semibold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching for something else or clear your filters.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("all");
              setSort("default");
            }}
            className="mt-6 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}