
"use client";

import Link from "next/link";
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

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const shipping = total >= 50 || total === 0 ? 0 : 5;

  const finalTotal = total + shipping - discount;

  function applyCoupon() {
    const code = coupon.trim().toUpperCase();

    if (code === "SAVE20") {
      const discountAmount = total * 0.2;

      setDiscount(discountAmount);
      setCouponMessage("Coupon applied! You saved 20%.");
    } else if (code === "") {
      setDiscount(0);
      setCouponMessage("Please enter a coupon code.");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  }

  /*
   * EMPTY CART
   */

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf9f7] px-4 py-12 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center rounded-[2rem] border border-gray-100 bg-white px-6 py-16 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-950/40">
            <ShoppingBag className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Your Cart is Empty
          </h1>

          <p className="mt-3 max-w-md text-gray-500 dark:text-gray-400">
            You haven't added anything to your cart yet.
            Start shopping and discover our products.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 dark:bg-purple-500 dark:shadow-none dark:hover:bg-purple-400"
          >
            Start Shopping
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f7] px-4 py-8 text-gray-900 dark:bg-gray-950 dark:text-gray-100 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <Link
            href="/shop"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h1 className="text-3xl font-bold text-gray-950 dark:text-gray-100 md:text-4xl">
                Shopping Cart
              </h1>

              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {cart.length}{" "}
                {cart.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
              Clear Cart
            </button>

          </div>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* ================= CART ITEMS ================= */}

          <section className="space-y-4 lg:col-span-2">

            {cart.map((item:any ,index:any) => (

              <div
                key={index}
                className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-none dark:hover:border-gray-700 sm:p-6"
              >

                <div className="flex gap-4">

                  {/* Image */}

                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-950 sm:h-32 sm:w-32">

                    {item.imgall?.[0]?.img_url ? (

                      <Image
                        src={`http://localhost:8000/storage/${item.imgall[0].img_url}`}
                        alt={item.name}
                        width={900}
                        height={900}
                        className="h-full w-full object-cover"
                        unoptimized
                      />

                    ) : (

                      <div className="flex h-full w-full items-center justify-center">
                        <ShoppingBag className="h-10 w-10 text-gray-300 dark:text-gray-700" />
                      </div>

                    )}

                  </div>

                  {/* Information */}

                  <div className="flex min-w-0 flex-1 flex-col justify-between">

                    <div className="flex justify-between gap-4">

                      <div className="min-w-0">

                        <h2 className="truncate text-lg font-bold text-gray-900 dark:text-gray-100">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          ${Number(item.price).toFixed(2)} each
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 text-gray-400 transition hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>

                    </div>

                    <div className="mt-4 flex items-center justify-between">

                      {/* Quantity */}

                      <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 text-gray-900 dark:border-gray-700 dark:text-gray-100">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          aria-label="Decrease quantity"
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-3 text-sm font-semibold dark:border-gray-700">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          aria-label="Increase quantity"
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Plus className="h-4 w-4" />
                        </button>

                      </div>

                      {/* Item total */}

                      <p className="text-lg font-bold text-gray-950 dark:text-gray-100">
                        $
                        {(
                          Number(item.price) *
                          item.quantity
                        ).toFixed(2)}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </section>

          {/* ================= SUMMARY ================= */}

          <aside className="lg:col-span-1">

            <div className="sticky top-6 space-y-5">

              {/* Order Summary */}

              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">

                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">

                  {/* Subtotal */}

                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>

                    <span>
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Shipping */}

                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>

                    <span>
                      {shipping === 0
                        ? "Free"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Discount */}

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>

                      <span>
                        -${discount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Total */}

                  <div className="border-t border-gray-200 pt-5 dark:border-gray-800">

                    <div className="flex items-center justify-between">

                      <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        ${finalTotal.toFixed(2)}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Checkout */}

                <Link
                  href={`/checkout`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 dark:bg-purple-500 dark:shadow-none dark:hover:bg-purple-400"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5" />
                </Link>

              </div>

              {/* ================= COUPON ================= */}

              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">

                <div className="flex items-center gap-2">

                  <Tag className="h-5 w-5 text-purple-600 dark:text-purple-400" />

                  <h2 className="font-bold text-gray-900 dark:text-gray-100">
                    Promo Code
                  </h2>

                </div>

                <div className="mt-4 flex gap-2">

                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) =>
                      setCoupon(e.target.value)
                    }
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-purple-500 dark:focus:ring-purple-950/50"
                  />

                  <button
                    type="button"
                    onClick={applyCoupon}
                    className="rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
                  >
                    Apply
                  </button>

                </div>

                {couponMessage && (
                  <p
                    className={`mt-3 text-sm ${
                      discount > 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}

                <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                  Try: SAVE20
                </p>

              </div>

              {/* ================= SHIPPING ================= */}

              <div className="rounded-[1.5rem] border border-purple-100 bg-purple-50 p-5 dark:border-purple-900/40 dark:bg-purple-950/30">

                <div className="flex gap-3">

                  <Truck className="h-6 w-6 shrink-0 text-purple-600 dark:text-purple-400" />

                  <div>

                    <h3 className="font-semibold text-purple-900 dark:text-purple-300">
                      Free Shipping
                    </h3>

                    {total >= 50 ? (

                      <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
                        Congratulations! You qualify
                        for free shipping.
                      </p>

                    ) : (

                      <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
                        Add $
                        {(50 - total).toFixed(2)}
                        {" "}more to get free shipping.
                      </p>

                    )}

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

        {/* ================= RECOMMENDED PRODUCTS ================= */}

        <section className="mt-16">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-100">
                You May Also Like
              </h2>

              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Discover more products you might love.
              </p>

            </div>

            <Link
              href="/shop"
              className="hidden items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              {
                id: 1,
                name: "Fresh Apples",
                price: 4.99,
                image: "/products/apple.jpg",
              },
              {
                id: 2,
                name: "Organic Bananas",
                price: 3.49,
                image: "/products/banana.jpg",
              },
              {
                id: 3,
                name: "Fresh Milk",
                price: 5.99,
                image: "/products/milk.jpg",
              },
              {
                id: 4,
                name: "Organic Eggs",
                price: 6.99,
                image: "/products/eggs.jpg",
              },
            ].map((product) => (

              <div
                key={product.id}
                className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none dark:hover:border-gray-700"
              >

                <div className="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-950">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-4">

                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {product.name}
                  </h3>

                  <p className="mt-1 font-bold text-purple-600 dark:text-purple-400">
                    ${product.price.toFixed(2)}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>
    </main>
  );
}
