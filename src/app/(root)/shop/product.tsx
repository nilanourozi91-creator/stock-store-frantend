
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  SlidersHorizontal,
  ArrowRight,
  Package,
  X,
} from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  stock: number;
  imgall?: string;

  category_id?: number;
  category?: {
    id: number;
    name: string;
  };
};

type Category = {
  id: number;
  name: string;
};

type ShopPageProps = {
  products?: Product[];
  categories?: Category[];
};

export default function ShopPage({
  products = [],
  categories = [],
}: ShopPageProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = Array.isArray(products) ? [...products] : [];

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category_id === Number(selectedCategory)
      );
    }

    // Sorting
    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [products, search, selectedCategory, sort]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="absolute left-10 top-20 h-4 w-4 rounded-full bg-white/20" />

        <div className="absolute right-1/4 top-24 h-3 w-3 rounded-full bg-white/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple-200">
              FreshStock Shop
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fresh products,
              <br />
              delivered to you.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
              Browse our fresh products and find everything you
              need for your everyday shopping.
            </p>

          </div>

        </div>
      </section>

      {/* Shop */}
      <section className="py-12 sm:py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Search + Sort */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full lg:max-w-xl">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search products..."
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />

            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
                <SlidersHorizontal className="h-4 w-4" />
                Sort:
              </div>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="price-low">
                  Price: Low to High
                </option>
                <option value="price-high">
                  Price: High to Low
                </option>
              </select>

            </div>

          </div>

          {/* Categories */}
          {categories.length > 0 && (

            <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

              <button
                onClick={() => setSelectedCategory("all")}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === "all"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50 dark:bg-gray-800 dark:text-gray-300"
                }`}
              >
                All Products
              </button>

              {categories.map((category) => (

                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(String(category.id))
                  }
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    selectedCategory === String(category.id)
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-600 hover:bg-purple-50 dark:bg-gray-800 dark:text-gray-300"
                  }`}
                >
                  {category.name}
                </button>

              ))}

            </div>

          )}

          {/* Heading */}
          <div className="mt-10 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold text-purple-600">
                Our products
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Fresh products for you
              </h2>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              {filteredProducts.length} products
            </p>

          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredProducts.map((product) => (

                <div
                  key={product.id}
                  className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50 dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-none"
                >

                  {/* Image */}
                  <Link
                    // href={`/shop/${product.slug || product.id}`}
                     href={`/${product.id}`}
                    className="block"
                  >

                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-purple-50 dark:bg-gray-700">

                      {product.imgall ? (
                         <Image
                              src={`http://localhost:8000/storage/${product.imgall[0].img_url}`}
                              alt={product.name}
                              width={900}
                              height={900}
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              unoptimized
                                    />

                      ) : (

                        <Package className="h-20 w-20 text-purple-300" />

                      )}

                      {/* Stock */}
                      {product.stock <= 0 && (
                        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                          Out of stock
                        </span>
                      )}

                      {product.stock > 0 && product.stock <= 5 && (
                        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                          Only {product.stock} left
                        </span>
                      )}

                    </div>

                  </Link>

                  {/* Content */}
                  <div className="p-5">

                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                      {product.category?.name || "Fresh Product"}
                    </p>

                    <Link
                      href={`/shop/${product.slug || product.id}`}
                    >

                      <h3 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900 transition hover:text-purple-600 dark:text-white">
                        {product.name}
                      </h3>

                    </Link>

                    <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500 dark:text-gray-300">
                      {product.description ||
                        `Fresh ${product.name} from FreshStock.`}
                    </p>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between">

                      <div>
                        <p className="text-xl font-black text-gray-900 dark:text-white">
                          ${Number(product.price).toFixed(2)}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {product.stock > 0
                            ? `${product.stock} available`
                            : "Currently unavailable"}
                        </p>
                      </div>

                      <button
                        disabled={product.stock <= 0}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                        title="Add to cart"
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* Empty State */
            <div className="mt-10 rounded-[1.5rem] border border-dashed border-gray-200 bg-white py-20 text-center dark:border-gray-700 dark:bg-gray-800">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-gray-700">
                <Search className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Try searching for another product or category.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>

            </div>

          )}

          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-purple-600 px-6 py-12 text-center shadow-xl shadow-purple-100 sm:px-10 dark:shadow-none">

            <h2 className="text-3xl font-bold text-white">
              Need something fresh?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-purple-100 sm:text-base">
              Explore our categories and discover fresh products
              for your everyday needs.
            </p>

            <Link
              href="/categories"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
            >
              Browse categories
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
