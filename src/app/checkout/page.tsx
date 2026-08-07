
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  MapPin,
  ShoppingBag,
  Truck,
} from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Fresh Avocado",
    price: 4.99,
    quantity: 2,
    emoji: "🥑",
    bg: "bg-green-50",
  },
  {
    id: 2,
    name: "Organic Strawberries",
    price: 5.49,
    quantity: 1,
    emoji: "🍓",
    bg: "bg-red-50",
  },
  {
    id: 4,
    name: "Organic Milk",
    price: 3.49,
    quantity: 2,
    emoji: "🥛",
    bg: "bg-blue-50",
  },
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 50 ? 0 : 5.99;

  const discount = subtotal * 0.1;

  const total = subtotal + delivery - discount;

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-gray-50/40">

        <section className="relative overflow-hidden bg-purple-600">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">

              <Check className="h-10 w-10 text-purple-600" />

            </div>

            <h1 className="mt-7 text-4xl font-black text-white sm:text-5xl">
              Order placed!
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
              Thank you for shopping with FreshStock.
              Your order has been received successfully.
            </p>

          </div>

        </section>

        <section className="px-4 py-12">

          <div className="mx-auto max-w-xl rounded-[2rem] border border-gray-100 bg-white p-8 text-center shadow-sm">

            <div className="rounded-2xl bg-purple-50 p-5">

              <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                Order number
              </p>

              <p className="mt-2 text-2xl font-black text-gray-900">
                #FS-2026-00124
              </p>

            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              We&apos;ll prepare your fresh products and
              deliver them to the address you provided.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/shop"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 py-3.5 text-sm font-bold text-white transition hover:bg-purple-700"
              >
                Continue shopping
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/"
                className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Back home
              </Link>

            </div>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/40">

      {/* Header */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-100 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to cart
          </Link>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-purple-100 sm:text-base">
            Complete your order securely.
          </p>

        </div>

      </section>

      {/* Checkout */}
      <section className="py-10 sm:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* Form */}
            <div className="space-y-6">

              {/* Contact */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                    <ShoppingBag className="h-5 w-5 text-purple-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Contact information
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      We&apos;ll use this to send your order updates.
                    </p>

                  </div>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="sm:col-span-2">

                    <label className="text-sm font-semibold text-gray-700">
                      Email address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      First name
                    </label>

                    <input
                      type="text"
                      placeholder="First name"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      Last name
                    </label>

                    <input
                      type="text"
                      placeholder="Last name"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div className="sm:col-span-2">

                    <label className="text-sm font-semibold text-gray-700">
                      Phone number
                    </label>

                    <input
                      type="tel"
                      placeholder="+93 700 000 000"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                </div>

              </div>

              {/* Delivery */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Delivery address
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Where should we deliver your order?
                    </p>

                  </div>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="sm:col-span-2">

                    <label className="text-sm font-semibold text-gray-700">
                      Address
                    </label>

                    <input
                      type="text"
                      placeholder="Street address"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="City"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      Province
                    </label>

                    <input
                      type="text"
                      placeholder="Province"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div className="sm:col-span-2">

                    <label className="text-sm font-semibold text-gray-700">
                      Delivery instructions
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Apartment, landmark, or other instructions..."
                      className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                </div>

              </div>

              {/* Delivery method */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
                    <Truck className="h-5 w-5 text-orange-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Delivery method
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Choose how you want to receive your order.
                    </p>

                  </div>

                </div>

                <div className="mt-6">

                  <label className="flex cursor-pointer items-center justify-between rounded-2xl border-2 border-purple-600 bg-purple-50 p-4">

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                        <Truck className="h-5 w-5 text-purple-600" />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          Standard delivery
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          1–2 business days
                        </p>

                      </div>

                    </div>

                    <span className="text-sm font-bold text-purple-600">
                      {delivery === 0
                        ? "FREE"
                        : `$${delivery.toFixed(2)}`}
                    </span>

                  </label>

                </div>

              </div>

              {/* Payment */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Payment method
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Choose your preferred payment method.
                    </p>

                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  {/* Card */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("card")
                    }
                    className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left transition ${
                      paymentMethod === "card"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-100 hover:border-purple-200"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <CreditCard className="h-5 w-5 text-purple-600" />

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          Credit / Debit Card
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Visa, Mastercard and other cards
                        </p>

                      </div>

                    </div>

                    {paymentMethod === "card" && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}

                  </button>

                  {/* Cash */}
                  <button
                    type="button"
                    onClick={() =>
                      setPaymentMethod("cash")
                    }
                    className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left transition ${
                      paymentMethod === "cash"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-100 hover:border-purple-200"
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <div className="text-xl">
                        💵
                      </div>

                      <div>

                        <p className="text-sm font-bold text-gray-900">
                          Cash on delivery
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Pay when your order arrives
                        </p>

                      </div>

                    </div>

                    {paymentMethod === "cash" && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}

                  </button>

                </div>

                {/* Card fields */}
                {paymentMethod === "card" && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">

                    <div className="sm:col-span-2">

                      <label className="text-sm font-semibold text-gray-700">
                        Card number
                      </label>

                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                    <div>

                      <label className="text-sm font-semibold text-gray-700">
                        Expiry date
                      </label>

                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                    <div>

                      <label className="text-sm font-semibold text-gray-700">
                        CVC
                      </label>

                      <input
                        type="text"
                        placeholder="123"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                  </div>
                )}

              </div>

            </div>

            {/* Summary */}
            <aside>

              <div className="sticky top-24 rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold text-gray-900">
                  Your order
                </h2>

                {/* Items */}
                <div className="mt-6 space-y-4">

                  {cartItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-3"
                    >

                      <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${item.bg}`}
                      >
                        {item.emoji}

                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                          {item.quantity}
                        </span>

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-gray-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          ${item.price.toFixed(2)} each
                        </p>

                      </div>

                      <span className="text-sm font-bold text-gray-900">
                        $
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="my-6 h-px bg-gray-100" />

                {/* Totals */}
                <div className="space-y-4">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Delivery
                    </span>

                    <span className="font-semibold text-gray-900">
                      {delivery === 0
                        ? "Free"
                        : `$${delivery.toFixed(2)}`}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-green-600">
                      Discount
                    </span>

                    <span className="font-semibold text-green-600">
                      -${discount.toFixed(2)}
                    </span>

                  </div>

                </div>

                <div className="my-6 h-px bg-gray-100" />

                <div className="flex items-center justify-between">

                  <span className="font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-black text-purple-600">
                    ${total.toFixed(2)}
                  </span>

                </div>

                <button
                  type="button"
                  onClick={() => setOrderPlaced(true)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  Place order
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

                  <Lock className="h-3.5 w-3.5" />

                  Secure checkout

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}