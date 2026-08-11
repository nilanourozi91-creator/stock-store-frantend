"use client";

import {
  CheckCircle2,
  CreditCard,
  DollarSign,
  Eye,
  Filter,
  MoreHorizontal,
  Search,
  XCircle,
  Clock3,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const payments = [
  {
    id: "#PAY-2081",
    order: "#FS-1048",
    customer: "Ahmad Rahimi",
    method: "Visa",
    amount: "$84.50",
    status: "Completed",
    date: "Aug 08, 2026",
  },
  {
    id: "#PAY-2080",
    order: "#FS-1047",
    customer: "Sara Ahmadi",
    method: "Mastercard",
    amount: "$126.20",
    status: "Completed",
    date: "Aug 08, 2026",
  },
  {
    id: "#PAY-2079",
    order: "#FS-1046",
    customer: "Mohammad Ali",
    method: "Cash",
    amount: "$35.99",
    status: "Pending",
    date: "Aug 07, 2026",
  },
  {
    id: "#PAY-2078",
    order: "#FS-1045",
    customer: "Fatima Noor",
    method: "Visa",
    amount: "$71.45",
    status: "Completed",
    date: "Aug 07, 2026",
  },
  {
    id: "#PAY-2077",
    order: "#FS-1044",
    customer: "Omid Khan",
    method: "Mastercard",
    amount: "$42.80",
    status: "Failed",
    date: "Aug 06, 2026",
  },
  {
    id: "#PAY-2076",
    order: "#FS-1043",
    customer: "Maryam Habibi",
    method: "Visa",
    amount: "$149.90",
    status: "Completed",
    date: "Aug 06, 2026",
  },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredPayments = payments.filter(
    (payment) => {
      const matchesSearch =
        payment.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        payment.order
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        payment.customer
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        payment.status === status;

      return matchesSearch && matchesStatus;
    }
  );

  const completed = payments.filter(
    (payment) => payment.status === "Completed"
  );

  const pending = payments.filter(
    (payment) => payment.status === "Pending"
  );

  const failed = payments.filter(
    (payment) => payment.status === "Failed"
  );

  const revenue = completed.reduce(
    (total, payment) =>
      total +
      Number(
        payment.amount.replace("$", "")
      ),
    0
  );

  const pendingAmount = pending.reduce(
    (total, payment) =>
      total +
      Number(
        payment.amount.replace("$", "")
      ),
    0
  );

  function getStatusStyle(
    paymentStatus: string
  ) {
    switch (paymentStatus) {
      case "Completed":
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
            Payments
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Monitor transactions and payment activity.
          </p>

        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
        >
          <Wallet className="h-4 w-4" />
          Payment Report
        </button>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Revenue */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Total Revenue
            </p>

            <div className="rounded-xl bg-purple-50 p-2.5">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-gray-900">
            ${revenue.toFixed(2)}
          </p>

          <p className="mt-1 text-xs font-medium text-green-600">
            Successful payments
          </p>

        </div>

        {/* Completed */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Completed
            </p>

            <div className="rounded-xl bg-green-50 p-2.5">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-green-600">
            {completed.length}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Successful transactions
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
            {pending.length}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            ${pendingAmount.toFixed(2)} awaiting
          </p>

        </div>

        {/* Failed */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-500">
              Failed
            </p>

            <div className="rounded-xl bg-red-50 p-2.5">
              <XCircle className="h-5 w-5 text-red-500" />
            </div>

          </div>

          <p className="mt-4 text-2xl font-black text-red-500">
            {failed.length}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Failed transactions
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
              placeholder="Search payment, order or customer..."
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

            <option value="Completed">
              Completed
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Failed">
              Failed
            </option>
          </select>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-bold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>

        </div>

      </div>

      {/* Payments Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Payment
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Order
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Method
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                  Amount
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

              {filteredPayments.map(
                (payment) => (

                  <tr
                    key={payment.id}
                    className="transition hover:bg-purple-50/30"
                  >

                    {/* Payment */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                          <CreditCard className="h-4 w-4 text-purple-600" />
                        </div>

                        <span className="font-mono text-xs font-bold text-purple-600">
                          {payment.id}
                        </span>

                      </div>

                    </td>

                    {/* Order */}
                    <td className="px-6 py-5">

                      <span className="font-mono text-xs font-semibold text-gray-500">
                        {payment.order}
                      </span>

                    </td>

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-bold text-gray-900">
                        {payment.customer}
                      </span>

                    </td>

                    {/* Method */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100">
                          <CreditCard className="h-3.5 w-3.5 text-gray-500" />
                        </div>

                        <span className="text-sm font-semibold text-gray-600">
                          {payment.method}
                        </span>

                      </div>

                    </td>

                    {/* Amount */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-black text-gray-900">
                        {payment.amount}
                      </span>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>

                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-medium text-gray-500">
                        {payment.date}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex justify-end gap-1">

                        <button
                          type="button"
                          title="View payment"
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
        {filteredPayments.length === 0 && (
          <div className="py-16 text-center">

            <CreditCard className="mx-auto h-9 w-9 text-gray-300" />

            <p className="mt-3 text-sm font-bold text-gray-500">
              No payments found
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Try changing your search or filters.
            </p>

          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs font-medium text-gray-400">
            Showing 1–6 of 248 payments
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