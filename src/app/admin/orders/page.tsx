"use client";

import {
  CheckCircle2,
  Clock3,
  Eye,
  Filter,
  MoreHorizontal,
  Package,
  Search,
  Truck,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const orders = [
  {
    id: "#FS-1048",
    customer: "Ahmad Rahimi",
    email: "ahmad@example.com",
    items: 4,
    total: "$84.50",
    payment: "Paid",
    status: "Delivered",
    date: "Aug 08, 2026",
  },
  {
    id: "#FS-1047",
    customer: "Sara Ahmadi",
    email: "sara@example.com",
    items: 7,
    total: "$126.20",
    payment: "Paid",
    status: "Shipped",
    date: "Aug 08, 2026",
  },
  {
    id: "#FS-1046",
    customer: "Mohammad Ali",
    email: "mohammad@example.com",
    items: 2,
    total: "$35.99",
    payment: "Pending",
    status: "Processing",
    date: "Aug 07, 2026",
  },
  {
    id: "#FS-1045",
    customer: "Fatima Noor",
    email: "fatima@example.com",
    items: 5,
    total: "$71.45",
    payment: "Paid",
    status: "Pending",
    date: "Aug 07, 2026",
  },
  {
    id: "#FS-1044",
    customer: "Omid Khan",
    email: "omid@example.com",
    items: 3,
    total: "$42.80",
    payment: "Failed",
    status: "Cancelled",
    date: "Aug 06, 2026",
  },
  {
    id: "#FS-1043",
    customer: "Maryam Habibi",
    email: "maryam@example.com",
    items: 8,
    total: "$149.90",
    payment: "Paid",
    status: "Delivered",
    date: "Aug 06, 2026",
  },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ||
      order.status === status;

    return matchesSearch && matchesStatus;
  });

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) =>
      order.status === "Pending" ||
      order.status === "Processing"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled"
  ).length;

  function getStatusStyle(
    orderStatus: string
  ) {
    switch (orderStatus) {
      case "Delivered":
        return "bg-green-50 text-green-600";

      case "Shipped":
        return "bg-blue-50 text-blue-600";

      case "Processing":
        return "bg-purple-50 text-purple-600";

      case "Pending":
        return "bg-yellow-50 text-yellow-700";

      case "Cancelled":
        return "bg-red-50 text-red-600";

      default:
        return "bg-gray-100 text-gray-500";
    }
  }

  function getPaymentStyle(
    payment: string
  ) {
    switch (payment) {
      case "Paid":
        return "bg-green-50 text-green-600";

      case "Pending":
        return "bg-yellow-50 text-yellow-700";

      case "Failed":
        return "bg-red-50 text-red-600";

      default:
        return "bg-gray-100 text-gray-500";
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Orders
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage and track all FreshStock orders.
          </p>

        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
        >
          <Truck className="h-4 w-4" />
          Shipping Report
        </button>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Total Orders
            </p>

            <div className="rounded-xl bg-purple-50 p-2.5">
              <Package className="h-5 w-5 text-purple-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            {totalOrders}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            All orders
          </p>

        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Pending
            </p>

            <div className="rounded-xl bg-yellow-50 p-2.5">
              <Clock3 className="h-5 w-5 text-yellow-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-yellow-600">
            {pendingOrders}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Need attention
          </p>

        </div>

        {/* Delivered */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Delivered
            </p>

            <div className="rounded-xl bg-green-50 p-2.5">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-green-600">
            {deliveredOrders}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Successfully delivered
          </p>

        </div>

        {/* Cancelled */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Cancelled
            </p>

            <div className="rounded-xl bg-red-50 p-2.5">
              <XCircle className="h-5 w-5 text-red-500" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-red-500">
            {cancelledOrders}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Cancelled orders
          </p>

        </div>

      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">

            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search order ID or customer..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
            />

          </div>

          {/* Status */}
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-600 outline-none focus:border-purple-500"
          >
            <option value="All">
              All Status
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Processing">
              Processing
            </option>

            <option value="Shipped">
              Shipped
            </option>

            <option value="Delivered">
              Delivered
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
          </select>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-bold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            <Filter className="h-4 w-4" />
            More Filters
          </button>

        </div>

      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Order
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Items
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Total
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Payment
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Date
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredOrders.map(
                (order) => (

                  <tr
                    key={order.id}
                    className="transition hover:bg-purple-50/30"
                  >

                    {/* Order */}
                    <td className="px-6 py-5">

                      <span className="font-mono text-sm font-black text-purple-600">
                        {order.id}
                      </span>

                    </td>

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          {order.customer}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {order.email}
                        </p>

                      </div>

                    </td>

                    {/* Items */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-semibold text-gray-700">
                        {order.items} items
                      </span>

                    </td>

                    {/* Total */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-black text-gray-900">
                        {order.total}
                      </span>

                    </td>

                    {/* Payment */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${getPaymentStyle(
                          order.payment
                        )}`}
                      >
                        {order.payment}
                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>

                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-medium text-gray-500">
                        {order.date}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-1">

                        <button
                          title="View order"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          title="More"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

        {/* Empty */}
        {filteredOrders.length === 0 && (
          <div className="py-16 text-center">

            <Package className="mx-auto h-9 w-9 text-gray-300" />

            <p className="mt-3 text-sm font-bold text-gray-500">
              No orders found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try changing your search or filters.
            </p>

          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium text-gray-400">
            Showing 1–6 of 126 orders
          </p>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-400">
              Previous
            </button>

            <button className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-bold text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}