
"use client";

import Link from "next/link";
import { Search, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  {
    name: "Fruits",
    slug: "fruits",
    description: "Fresh and naturally sweet fruits",
    count: 35,
    emoji: "🍎",
    background: "bg-red-50",
  },
  {
    name: "Vegetables",
    slug: "vegetables",
    description: "Fresh vegetables for every meal",
    count: 42,
    emoji: "🥦",
    background: "bg-green-50",
  },
  {
    name: "Dairy",
    slug: "dairy",
    description: "Fresh milk, cheese and more",
    count: 18,
    emoji: "🥛",
    background: "bg-blue-50",
  },
  {
    name: "Meat",
    slug: "meat",
    description: "Quality meat and protein",
    count: 24,
    emoji: "🥩",
    background: "bg-rose-50",
  },
  {
    name: "Bakery",
    slug: "bakery",
    description: "Fresh bread and baked goods",
    count: 16,
    emoji: "🍞",
    background: "bg-yellow-50",
  },
  {
    name: "Drinks",
    slug: "drinks",
    description: "Refreshing drinks and beverages",
    count: 31,
    emoji: "🥤",
    background: "bg-purple-50",
  },
  {
    name: "Snacks",
    slug: "snacks",
    description: "Delicious snacks for every moment",
    count: 28,
    emoji: "🍿",
    background: "bg-orange-50",
  },
  {
    name: "Organic",
    slug: "organic",
    description: "Healthy organic products",
    count: 21,
    emoji: "🌱",
    background: "bg-emerald-50",
  },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-600">

        {/* Decorations */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="absolute left-10 top-20 h-4 w-4 rounded-full bg-white/20" />

        <div className="absolute right-1/4 top-24 h-3 w-3 rounded-full bg-white/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Fresh products for everyone
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our
              <br />
              Fresh Categories
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
              Find everything you need in one place. From fresh fruits
              and vegetables to dairy, bakery and everyday essentials.
            </p>

          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Search */}
          <div className="mx-auto max-w-xl">

            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search categories..."
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-5 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />

            </div>

          </div>

          {/* Section heading */}
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-purple-600">
                Shop by category
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Everything fresh, organized for you.
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              {filteredCategories.length} categories
            </p>

          </div>

          {/* Cards */}
          {filteredCategories.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredCategories.map((category) => (

                <Link
                  key={category.slug}
                  href={`/shop?category=${category.slug}`}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/60"
                >

                  {/* Decoration */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                  <div className="relative">

                    {/* Icon */}
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${category.background}`}
                    >
                      {category.emoji}
                    </div>

                    {/* Content */}
                    <div className="mt-6">

                      <h3 className="text-lg font-bold text-gray-900">
                        {category.name}
                      </h3>

                      <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
                        {category.description}
                      </p>

                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

                      <span className="text-sm font-medium text-gray-400">
                        {category.count} products
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 transition-all duration-300 group-hover:bg-purple-600">
                        <ArrowRight className="h-4 w-4 text-purple-600 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                      </div>

                    </div>

                  </div>

                </Link>

              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-dashed border-gray-200 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl">
                🔍
              </div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No categories found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching for a different category.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* CTA */}
      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-purple-600 px-6 py-12 text-center shadow-xl shadow-purple-100 sm:px-10 lg:py-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative">

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to fill your basket?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
                Discover fresh products and great prices waiting for you.
              </p>

              <Link
                href="/"
                className="mt-7 mr-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home

              </Link>
              <Link
                href="/shop"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                Shop all products

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}