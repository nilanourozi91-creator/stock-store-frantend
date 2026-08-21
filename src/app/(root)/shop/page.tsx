// import React from "react";
// // import CategoriesPage from "./products";
// import { GetAllGategories, GetAllProdect } from "@/lib/prodect.action";
// import { Metadata } from "next";
// import ShopPage from "./shop";
// export const metadata: Metadata = {
//   title: "Catagories",
//   description: "frashStock",
// };
// async function Page() {
//   const response = await GetAllProdect();

//   console.log("Categories API:", response);

//   const categories = response?.data ?? [];

//   return <ShopPage data={categories} />;
// }

// export default Page;
// "use client";

// import { useCart } from "./shop-content";

// // import { useCart } from "@/context/CartContext";

// export default function CartPage() {
//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//     total,
//   } = useCart();

//   if (cart.length === 0) {
//     return <h1>Your cart is empty</h1>;
//   }

//   return (
//     <main>
//       <h1>Shopping Cart</h1>

//       {cart.map((item) => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>

//           <p>
//             ${item.price} × {item.quantity}
//           </p>

//           <button onClick={() => decreaseQuantity(item.id)}>
//             -
//           </button>

//           <span>{item.quantity}</span>

//           <button onClick={() => increaseQuantity(item.id)}>
//             +
//           </button>

//           <button onClick={() => removeFromCart(item.id)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       <h2>Total: ${total.toFixed(2)}</h2>
//     </main>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  const shipping = total >= 50 || total === 0 ? 0 : 5;
  const finalTotal = total + shipping;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
            <ShoppingBag className="h-10 w-10 text-purple-600" />
          </div>

          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mb-8 max-w-md text-gray-500">
            You haven't added anything to your shopping cart yet.
            Start shopping and add your favorite products.
          </p>

          <Link
            href="/products"
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
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
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600"
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
                {cart.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            <button
              onClick={clearCart}
              className="inline-flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-4 shadow-sm sm:p-6"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ShoppingBag className="h-10 w-10 text-gray-400" />
                    )}
                  </div>

                  {/* Product Information */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h2 className="truncate text-lg font-semibold text-gray-900">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 transition hover:text-red-500"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center rounded-lg border border-gray-200">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
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
                          className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <p className="text-lg font-bold text-gray-900">
                        $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>

                  <span>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-purple-600">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Message */}
              {total > 0 && total < 50 && (
                <div className="mt-6 rounded-xl bg-purple-50 p-4 text-sm text-purple-700">
                  Add ${(50 - total).toFixed(2)} more to get
                  free shipping!
                </div>
              )}

              {/* Checkout */}
              <Link
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/products"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}