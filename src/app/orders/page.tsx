
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Package,
  Search,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

const orders = [
  {
    id: "FS-2026-00124",
    date: "August 5, 2026",
    status: "Delivered",
    statusType: "delivered",
    items: [
      {
        name: "Fresh Avocado",
        quantity: 2,
        price: 4.99,
        emoji: "🥑",
        bg: "bg-green-50",
      },
      {
        name: "Organic Strawberries",
        quantity: 1,
        price: 5.49,
        emoji: "🍓",
        bg: "bg-red-50",
      },
      {
        name: "Organic Milk",
        quantity: 2,
        price: 3.49,
        emoji: "🥛",
        bg: "bg-blue-50",
      },
    ],
    total: 25.45,
  },
  {
    id: "FS-2026-00118",
    date: "July 29, 2026",
    status: "On the way",
    statusType: "shipping",
    items: [
      {
        name: "Fresh Oranges",
        quantity: 2,
        price: 3.99,
        emoji: "🍊",
        bg: "bg-orange-50",
      },
      {
        name: "Fresh Broccoli",
        quantity: 1,
        price: 2.99,
        emoji: "🥦",
        bg: "bg-green-50",
      },
    ],
    total: 10.97,
  },
  {
    id: "FS-2026-00104",
    date: "July 18, 2026",
    status: "Processing",
    statusType: "processing",
    items: [
      {
        name: "Greek Yogurt",
        quantity: 2,
        price: 4.49,
        emoji: "🥛",
        bg: "bg-blue-50",
      },
      {
        name: "Mixed Nuts",
        quantity: 1,
        price: 6.99,
        emoji: "🥜",
        bg: "bg-yellow-50",
      },
    ],
    total: 15.97,
  },
  {
    id: "FS-2026-00091",
    date: "July 10, 2026",
    status: "Delivered",
    statusType: "delivered",
    items: [
      {
        name: "Whole Wheat Bread",
        quantity: 1,
        price: 3.79,
        emoji: "🍞",
        bg: "bg-yellow-50",
      },
      {
        name: "Fresh Croissant",
        quantity: 2,
        price: 2.99,
        emoji: "🥐",
        bg: "bg-orange-50",
      },
    ],
    total: 9.77,
  },
];

const filters = [
  "All",
  "Processing",
  "On the way",
  "Delivered",
];

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesFilter =
        activeFilter === "All" ||
        order.status === activeFilter;

      const matchesSearch =
        order.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        order.items.some((item) =>
          item.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="min-h-screen bg-gray-50/40">

      {/* Header */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="absolute right-20 top-20 h-4 w-4 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-100 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            My Profile
          </Link>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            My Orders
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
            Track your FreshStock orders and view your
            previous purchases.
          </p>

        </div>
      </section>

      {/* Orders */}
      <section className="py-10 sm:py-14">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                  <Package className="h-5 w-5 text-purple-600" />
                </div>

                <div>
                  <p className="text-2xl font-black text-gray-900">
                    12
                  </p>

                  <p className="text-xs text-gray-500">
                    Total orders
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>

                <div>
                  <p className="text-2xl font-black text-gray-900">
                    10
                  </p>

                  <p className="text-xs text-gray-500">
                    Delivered
                  </p>
                </div>

              </div>

            </div>

            <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                  <Truck className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <p className="text-2xl font-black text-gray-900">
                    2
                  </p>

                  <p className="text-xs text-gray-500">
                    Active orders
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Toolbar */}
          <div className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Filters */}
              <div className="flex gap-2 overflow-x-auto pb-1">

                {filters.map((filter) => (

                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeFilter === filter
                        ? "bg-purple-600 text-white shadow-md shadow-purple-100"
                        : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    {filter}
                  </button>

                ))}

              </div>

              {/* Search */}
              <div className="relative w-full lg:max-w-xs">

                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search orders..."
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />

              </div>

            </div>

          </div>

          {/* Order list */}
          <div className="mt-6 space-y-5">

            {filteredOrders.length > 0 ? (

              filteredOrders.map((order) => (

                <div
                  key={order.id}
                  className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm"
                >

                  {/* Order header */}
                  <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <p className="text-sm font-black text-gray-900">
                            #{order.id}
                          </p>

                          <StatusBadge
                            status={order.status}
                            type={order.statusType}
                          />

                        </div>

                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">

                          <CalendarDays className="h-3.5 w-3.5" />

                          Ordered on {order.date}

                        </div>

                      </div>

                      <div className="text-left sm:text-right">

                        <p className="text-xs text-gray-500">
                          Order total
                        </p>

                        <p className="mt-1 text-lg font-black text-purple-600">
                          ${order.total.toFixed(2)}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Products */}
                  <div className="px-5 py-5 sm:px-6">

                    <div className="flex flex-wrap gap-3">

                      {order.items.map((item) => (

                        <div
                          key={item.name}
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.bg}`}
                          title={item.name}
                        >
                          {item.emoji}
                        </div>

                      ))}

                    </div>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-xs text-gray-500">

                        {order.items.length}{" "}
                        {order.items.length === 1
                          ? "product"
                          : "products"}{" "}
                        in this order

                      </p>

                      <Link
                        href={`/orders/${order.id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-purple-100 transition hover:bg-purple-700"
                      >
                        View order
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              <div className="rounded-[1.5rem] border border-gray-100 bg-white px-6 py-14 text-center shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">

                  <Search className="h-7 w-7 text-purple-600" />

                </div>

                <h2 className="mt-5 text-xl font-bold text-gray-900">
                  No orders found
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search or select a different
                  order status.
                </p>

              </div>

            )}

          </div>

          {/* Bottom CTA */}
          <div className="mt-8 rounded-[1.5rem] bg-purple-50 p-6 sm:p-7">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <ShoppingBag className="h-5 w-5 text-purple-600" />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-gray-900">
                    Looking for something fresh?
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Discover fresh products and weekly deals.
                  </p>

                </div>

              </div>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-purple-700"
              >
                Shop now
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

function StatusBadge({
  status,
  type,
}: {
  status: string;
  type: string;
}) {
  const styles = {
    delivered:
      "bg-green-50 text-green-600",
    shipping:
      "bg-blue-50 text-blue-600",
    processing:
      "bg-orange-50 text-orange-600",
  };

  const icons = {
    delivered: CheckCircle2,
    shipping: Truck,
    processing: Clock3,
  };

  const Icon =
    icons[type as keyof typeof icons] ||
    Clock3;

  const style =
    styles[type as keyof typeof styles] ||
    "bg-gray-50 text-gray-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${style}`}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}
