
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Tag,
  Truck,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "Fresh Avocado",
    category: "Fruits",
    price: 4.99,
    quantity: 2,
    emoji: "🥑",
    bg: "bg-green-50",
  },
  {
    id: 2,
    name: "Organic Strawberries",
    category: "Fruits",
    price: 5.49,
    quantity: 1,
    emoji: "🍓",
    bg: "bg-red-50",
  },
  {
    id: 4,
    name: "Organic Milk",
    category: "Dairy",
    price: 3.49,
    quantity: 2,
    emoji: "🥛",
    bg: "bg-blue-50",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQuantity = (
    id: number,
    change: number
  ) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(
                  1,
                  item.quantity + change
                ),
              }
            : item
        )
    );
  };

  const removeItem = (id: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const delivery = subtotal >= 50 || subtotal === 0 ? 0 : 5.99;

  const discount = couponApplied
    ? subtotal * 0.1
    : 0;

  const total = subtotal + delivery - discount;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "FRESH10") {
      setCouponApplied(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50/40">

      {/* Header */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

          <p className="text-sm font-semibold text-purple-200">
            FreshStock
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Your Cart
          </h1>

          <p className="mt-4 text-sm text-purple-100 sm:text-base">
            Review your fresh products before checkout.
          </p>

        </div>
      </section>

      {/* Cart */}
      <section className="py-10 sm:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {cart.length > 0 ? (

            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

              {/* Cart items */}
              <div>

                <div className="mb-5 flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Shopping Cart
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {totalItems}{" "}
                      {totalItems === 1
                        ? "item"
                        : "items"}{" "}
                      in your cart
                    </p>
                  </div>

                  <Link
                    href="/shop"
                    className="hidden items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 sm:flex"
                  >
                    Continue shopping
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>

                <div className="space-y-4">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
                    >

                      <div className="flex gap-4">

                        {/* Product */}
                        <Link
                          href={`/shop/${item.id}`}
                          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-5xl ${item.bg} sm:h-28 sm:w-28`}
                        >
                          {item.emoji}
                        </Link>

                        {/* Details */}
                        <div className="min-w-0 flex-1">

                          <div className="flex items-start justify-between gap-3">

                            <div>

                              <p className="text-xs font-semibold text-purple-600">
                                {item.category}
                              </p>

                              <Link
                                href={`/shop/${item.id}`}
                                className="mt-1 block truncate text-base font-bold text-gray-900 hover:text-purple-600 sm:text-lg"
                              >
                                {item.name}
                              </Link>

                              <p className="mt-1 text-sm font-semibold text-purple-600">
                                ${item.price.toFixed(2)}
                              </p>

                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeItem(item.id)
                              }
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>

                          </div>

                          {/* Quantity */}
                          <div className="mt-4 flex items-center justify-between">

                            <div className="flex items-center rounded-xl border border-gray-200">

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    -1
                                  )
                                }
                                className="flex h-9 w-9 items-center justify-center text-gray-500 hover:text-purple-600"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>

                              <span className="w-8 text-center text-sm font-bold text-gray-900">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    1
                                  )
                                }
                                className="flex h-9 w-9 items-center justify-center text-gray-500 hover:text-purple-600"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>

                            </div>

                            <p className="text-base font-black text-gray-900">
                              $
                              {(
                                item.price *
                                item.quantity
                              ).toFixed(2)}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

                {/* Free delivery */}
                <div className="mt-5 rounded-[1.5rem] bg-purple-50 p-5">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                      <Truck className="h-5 w-5 text-purple-600" />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-gray-900">
                        {subtotal >= 50
                          ? "You unlocked free delivery!"
                          : `Spend $${(
                              50 - subtotal
                            ).toFixed(
                              2
                            )} more for free delivery`}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Free delivery is available on
                        orders over $50.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Summary */}
              <aside>

                <div className="sticky top-24 rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

                  <h2 className="text-xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                  {/* Coupon */}
                  <div className="mt-6">

                    <p className="mb-2 text-sm font-semibold text-gray-700">
                      Have a coupon?
                    </p>

                    <div className="flex gap-2">

                      <div className="relative flex-1">

                        <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                        <input
                          type="text"
                          value={coupon}
                          onChange={(event) => {
                            setCoupon(
                              event.target.value
                            );
                            setCouponApplied(
                              false
                            );
                          }}
                          placeholder="FRESH10"
                          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        />

                      </div>

                      <button
                        type="button"
                        onClick={applyCoupon}
                        className="rounded-xl bg-gray-900 px-4 text-sm font-semibold text-white transition hover:bg-purple-600"
                      >
                        Apply
                      </button>

                    </div>

                    {couponApplied && (
                      <p className="mt-2 text-xs font-medium text-green-600">
                        Coupon applied — 10% discount.
                      </p>
                    )}

                  </div>

                  {/* Totals */}
                  <div className="my-6 h-px bg-gray-100" />

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
                          : `$${delivery.toFixed(
                              2
                            )}`}
                      </span>

                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-sm">

                        <span className="text-green-600">
                          Discount
                        </span>

                        <span className="font-semibold text-green-600">
                          -${discount.toFixed(2)}
                        </span>

                      </div>
                    )}

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

                  <Link
                    href="/checkout"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                  >
                    Proceed to checkout
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/shop"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue shopping
                  </Link>

                  {/* Trust */}
                  <div className="mt-6 rounded-2xl bg-gray-50 p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                        <ShoppingBag className="h-4 w-4 text-green-600" />
                      </div>

                      <div>

                        <p className="text-xs font-bold text-gray-900">
                          Secure shopping
                        </p>

                        <p className="mt-0.5 text-xs text-gray-500">
                          Your order is protected.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </aside>

            </div>

          ) : (

            /* Empty cart */
            <div className="mx-auto max-w-xl rounded-[2rem] border border-gray-100 bg-white px-6 py-16 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-50">

                <ShoppingBag className="h-9 w-9 text-purple-600" />

              </div>

              <h2 className="mt-6 text-2xl font-black text-gray-900">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                Looks like you haven&apos;t added anything
                to your cart yet. Discover something fresh
                from our shop.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
              >
                Start shopping
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}
