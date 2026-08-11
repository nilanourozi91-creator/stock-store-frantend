"use client";

import {
  Eye,
  Filter,
  Mail,
  MoreHorizontal,
  Phone,
  Search,
  ShoppingBag,
  UserCheck,
  UserPlus,
  Users,
  UserX,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const customers = [
  {
    id: 1,
    name: "Ahmad Rahimi",
    email: "ahmad@example.com",
    phone: "+93 700 123 456",
    orders: 18,
    spent: "$1,248.50",
    status: "Active",
    joined: "Aug 02, 2026",
  },
  {
    id: 2,
    name: "Sara Ahmadi",
    email: "sara@example.com",
    phone: "+93 701 234 567",
    orders: 12,
    spent: "$845.20",
    status: "Active",
    joined: "Jul 28, 2026",
  },
  {
    id: 3,
    name: "Mohammad Ali",
    email: "mohammad@example.com",
    phone: "+93 702 345 678",
    orders: 8,
    spent: "$532.99",
    status: "Active",
    joined: "Jul 21, 2026",
  },
  {
    id: 4,
    name: "Fatima Noor",
    email: "fatima@example.com",
    phone: "+93 703 456 789",
    orders: 21,
    spent: "$1,675.45",
    status: "Active",
    joined: "Jul 15, 2026",
  },
  {
    id: 5,
    name: "Omid Khan",
    email: "omid@example.com",
    phone: "+93 704 567 890",
    orders: 3,
    spent: "$142.80",
    status: "Inactive",
    joined: "Jun 30, 2026",
  },
  {
    id: 6,
    name: "Maryam Habibi",
    email: "maryam@example.com",
    phone: "+93 705 678 901",
    orders: 26,
    spent: "$2,149.90",
    status: "Active",
    joined: "Jun 18, 2026",
  },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCustomers = customers.filter(
    (customer) => {
      const matchesSearch =
        customer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.phone
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        customer.status === status;

      return matchesSearch && matchesStatus;
    }
  );

  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active"
  ).length;

  const inactiveCustomers = customers.filter(
    (customer) => customer.status === "Inactive"
  ).length;

  const totalOrders = customers.reduce(
    (total, customer) =>
      total + customer.orders,
    0
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-black tracking-tight text-gray-900">
            Customers
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your FreshStock customers and their activity.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
        >
          <Link href="/admin">
          Add Customer
         </Link>
          <UserPlus className="h-4 w-4" />
        </button>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Total Customers
            </p>

            <div className="rounded-xl bg-purple-50 p-2.5">
              <Users className="h-5 w-5 text-purple-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            {customers.length}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Registered customers
          </p>

        </div>

        {/* Active */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Active Customers
            </p>

            <div className="rounded-xl bg-green-50 p-2.5">
              <UserCheck className="h-5 w-5 text-green-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-green-600">
            {activeCustomers}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Currently active
          </p>

        </div>

        {/* Inactive */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Inactive
            </p>

            <div className="rounded-xl bg-gray-100 p-2.5">
              <UserX className="h-5 w-5 text-gray-500" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-700">
            {inactiveCustomers}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Inactive accounts
          </p>

        </div>

        {/* Orders */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Customer Orders
            </p>

            <div className="rounded-xl bg-blue-50 p-2.5">
              <ShoppingBag className="h-5 w-5 text-blue-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-blue-600">
            {totalOrders}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Orders from customers
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
              placeholder="Search customer name, email or phone..."
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
              All Customers
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
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

      {/* Customer Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Contact
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Orders
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Total Spent
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Joined
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-400">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredCustomers.map(
                (customer) => (

                  <tr
                    key={customer.id}
                    className="transition hover:bg-purple-50/30"
                  >

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-sm font-black text-purple-600">
                          {customer.name
                            .split(" ")
                            .map(
                              (name) =>
                                name[0]
                            )
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>

                          <p className="text-sm font-bold text-gray-900">
                            {customer.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Customer #{String(customer.id).padStart(4, "0")}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Contact */}
                    <td className="px-6 py-5">

                      <div className="space-y-1">

                        <div className="flex items-center gap-2">

                          <Mail className="h-3.5 w-3.5 text-gray-400" />

                          <span className="text-xs font-medium text-gray-500">
                            {customer.email}
                          </span>

                        </div>

                        <div className="flex items-center gap-2">

                          <Phone className="h-3.5 w-3.5 text-gray-400" />

                          <span className="text-xs font-medium text-gray-500">
                            {customer.phone}
                          </span>

                        </div>

                      </div>

                    </td>

                    {/* Orders */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        <ShoppingBag className="h-4 w-4 text-purple-500" />

                        <span className="text-sm font-black text-gray-900">
                          {customer.orders}
                        </span>

                      </div>

                    </td>

                    {/* Spent */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-black text-gray-900">
                        {customer.spent}
                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={
                          customer.status ===
                          "Active"
                            ? "rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600"
                            : "rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-500"
                        }
                      >
                        {customer.status}
                      </span>

                    </td>

                    {/* Joined */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-medium text-gray-500">
                        {customer.joined}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-1">

                        <button
                          type="button"
                          title="View customer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
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

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="py-16 text-center">

            <Users className="mx-auto h-9 w-9 text-gray-300" />

            <p className="mt-3 text-sm font-bold text-gray-500">
              No customers found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try changing your search or filters.
            </p>

          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium text-gray-400">
            Showing 1–6 of 1,248 customers
          </p>

          <div className="flex items-center gap-2">

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-400"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-lg bg-purple-600 px-3 py-2 text-xs font-bold text-white"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            >
              2
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            >
              3
            </button>

            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}