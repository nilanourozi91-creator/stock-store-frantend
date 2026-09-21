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
// import { useCart } from "@/context/CartContext";

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
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
            <ShoppingBag className="h-12 w-12 text-purple-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 max-w-md text-gray-500">
            You haven't added anything to your cart yet.
            Start shopping and discover our products.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Start Shopping

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">
          <Link
            href="/products"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600"
          >
            <ArrowLeft className="h-4 w-4" />

            Continue Shopping
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Shopping Cart
              </h1>

              <p className="mt-1 text-gray-500">
                {cart.length}{" "}
                {cart.length === 1 ? "item" : "items"} in
                your cart
              </p>
            </div>

            <button
              onClick={clearCart}
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition hover:text-red-700"
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

            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6"
              >
                <div className="flex gap-4">

                  {/* Image */}

                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32">
                    {item.imgall? (
                      // <img
                      //   src={item.image}
                      //   alt={item.name}
                      //   className="h-full w-full object-cover"
                      // />
                        <Image
                            src={`http://localhost:8000/storage/${item.imgall[0].img_url}`}
                            alt={item.name}
                            width={900}
                            height={900}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            unoptimized
                                  />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <ShoppingBag className="h-10 w-10 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Information */}

                  <div className="flex min-w-0 flex-1 flex-col justify-between">

                    <div className="flex justify-between gap-4">

                      <div>
                        <h2 className="truncate text-lg font-bold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                          {/* ${item.price.toFixed(2)} each */}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-gray-400 transition hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>

                    </div>

                    <div className="mt-4 flex items-center justify-between">

                      {/* Quantity */}

                      <div className="flex items-center overflow-hidden rounded-lg border text-gray-900 border-gray-200">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-3 text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>

                      </div>

                      {/* Item total */}

                      <p className="text-lg font-bold text-gray-900">
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

          </section>

          {/* ================= SUMMARY ================= */}

          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-5">

              {/* Order Summary */}

              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">

                  {/* Subtotal */}

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>

                    <span>
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Shipping */}

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>

                    <span>
                      {shipping === 0
                        ? "Free"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Discount */}

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>

                      <span>
                        -${discount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Total */}

                  <div className="border-t border-gray-200 pt-5">
                    <div className="flex items-center justify-between">

                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-purple-600">
                        ${finalTotal.toFixed(2)}
                      </span>

                    </div>
                  </div>

                </div>

                {/* Checkout */}

                <Link
                  href={`/checkout`}  
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                  {/* <div data={finalTotal.toFixed(2)}> */}
                  Proceed to Checkout
                  {/* </div> */}
                  <ArrowRight className="h-5 w-5" />
                </Link>

              </div>

              {/* ================= COUPON ================= */}

              <div className="rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex items-center gap-2">

                  <Tag className="h-5 w-5 text-purple-600" />

                  <h2 className="font-bold text-gray-900">
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
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />

                  <button
                    onClick={applyCoupon}
                    className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    Apply
                  </button>

                </div>

                {couponMessage && (
                  <p
                    className={`mt-3 text-sm ${
                      discount > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}

                <p className="mt-3 text-xs text-gray-400">
                  Try: SAVE20
                </p>

              </div>

              {/* ================= SHIPPING ================= */}

              <div className="rounded-2xl bg-purple-50 p-5">

                <div className="flex gap-3">

                  <Truck className="h-6 w-6 shrink-0 text-purple-600" />

                  <div>

                    <h3 className="font-semibold text-purple-900">
                      Free Shipping
                    </h3>

                    {total >= 50 ? (
                      <p className="mt-1 text-sm text-purple-700">
                        Congratulations! You qualify
                        for free shipping.
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-purple-700">
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
              <h2 className="text-2xl font-bold text-gray-900">
                You May Also Like
              </h2>

              <p className="mt-1 text-gray-500">
                Discover more products you might love.
              </p>
            </div>

            <Link
              href="/products"
              className="hidden items-center gap-2 font-semibold text-purple-600 sm:flex"
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
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >

                <div className="aspect-square bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="p-4">

                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 font-bold text-purple-600">
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