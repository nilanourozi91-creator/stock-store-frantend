
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

const product = {
  id: 1,
  name: "Fresh Avocado",
  category: "Fruits",
  price: 4.99,
  oldPrice: 6.49,
  rating: 4.9,
  reviews: 124,
  stock: 18,
  description:
    "Fresh, creamy and naturally delicious avocados. Perfect for salads, toast, smoothies or enjoying on their own.",
  emoji: "🥑",
  images: ["🥑", "🥑", "🥑", "🥑"],
};

const relatedProducts = [
  {
    id: 2,
    name: "Organic Strawberries",
    price: 5.49,
    emoji: "🍓",
    bg: "bg-red-50",
  },
  {
    id: 3,
    name: "Fresh Oranges",
    price: 3.99,
    emoji: "🍊",
    bg: "bg-orange-50",
  },
  {
    id: 8,
    name: "Fresh Lemon",
    price: 2.29,
    emoji: "🍋",
    bg: "bg-yellow-50",
  },
];

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(product.stock, current + 1)
    );
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="border-b border-gray-100">

        <div className="mx-auto max-w-7xl flex justify-between gap-2.5 px-4 py-5 sm:px-6 lg:px-8">
            
             <Link
            href="/"
            className="inline-flex border hover:bg-purple-500 hover:text-purple-50 px-2 py-1 rounded-2xl items-center gap-2 text-sm font-medium text-gray-500 transition"
          >
            <ArrowLeft className="h-4 w-4 " />
            Back to home
          </Link>
          <Link
            href="/shop"
            className="inline-flex border hover:bg-purple-500 hover:text-purple-50 px-2 py-1 rounded-2xl items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-purple-600"
          >
             Back to shop
            <ArrowRight className="h-4 w-4 " />
           
          </Link>
         
        </div>

      </div>

      {/* Product */}
      <section className="py-10 sm:py-14 lg:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Gallery */}
            <div>

              <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-green-50 sm:h-[520px]">

                <span className="text-[12rem] transition-transform duration-500 hover:scale-110 sm:text-[15rem]">
                  {product.images[selectedImage]}
                </span>

                <span className="absolute left-5 top-5 rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white">
                  Fresh
                </span>

                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition ${
                    liked
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                  }`}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      liked ? "fill-purple-600" : ""
                    }`}
                  />
                </button>

              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-3">

                {product.images.map((image, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`flex h-24 items-center justify-center rounded-2xl text-4xl transition ${
                      selectedImage === index
                        ? "border-2 border-purple-600 bg-green-50"
                        : "border border-gray-100 bg-gray-50 hover:border-purple-200"
                    }`}
                  >
                    {image}
                  </button>

                ))}

              </div>

            </div>

            {/* Information */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-semibold text-purple-600">
                {product.category}
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1">

                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                  <span className="font-bold text-gray-900">
                    {product.rating}
                  </span>

                </div>

                <span className="text-sm text-gray-400">
                  {product.reviews} customer reviews
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span className="text-sm font-medium text-green-600">
                  In stock
                </span>

              </div>

              {/* Price */}
              <div className="mt-7 flex items-end gap-3">

                <span className="text-4xl font-black text-purple-600">
                  ${product.price.toFixed(2)}
                </span>

                <span className="mb-1 text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>

                <span className="mb-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Save 23%
                </span>

              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-gray-500">
                {product.description}
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-gray-100" />

              {/* Quantity */}
              <div>

                <p className="text-sm font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="mt-3 flex items-center gap-4">

                  <div className="flex items-center rounded-xl border border-gray-200">

                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      className="flex h-11 w-11 items-center justify-center text-gray-500 transition hover:text-purple-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="flex w-10 justify-center text-sm font-bold text-gray-900">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      className="flex h-11 w-11 items-center justify-center text-gray-500 transition hover:text-purple-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>

                  </div>

                  <span className="text-xs text-gray-400">
                    {product.stock} available
                  </span>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to cart
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-purple-200 px-6 py-4 text-sm font-bold text-purple-600 transition hover:bg-purple-50"
                >
                  Buy now
                </button>

              </div>

              {/* Benefits */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-purple-50 p-4">

                  <Truck className="h-5 w-5 text-purple-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Fast delivery
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Delivered fresh
                  </p>

                </div>

                <div className="rounded-2xl bg-green-50 p-4">

                  <ShieldCheck className="h-5 w-5 text-green-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Quality guaranteed
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Fresh & reliable
                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-4">

                  <Check className="h-5 w-5 text-orange-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Easy returns
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Shop with confidence
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Product information */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Description
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                About this product
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Our fresh avocado is carefully selected to provide
                excellent taste, texture and quality. Enjoy it in
                breakfast, salads, sandwiches and your favorite meals.
              </p>

            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Freshness
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Selected with care
              </h2>

              <ul className="mt-4 space-y-3">

                {[
                  "Carefully selected",
                  "Quality checked",
                  "Freshly packed",
                  "Stored properly",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Delivery
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Fresh to your door
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                We make it easy to receive your groceries at a
                convenient time and keep your products fresh.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Related products */}
      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold text-purple-600">
                You may also like
              </p>

              <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
                Related products
              </h2>

            </div>

            <Link
              href="/shop"
              className="hidden items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 sm:flex"
            >
              View all
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>

          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                href={`/shop/${item.id}`}
                className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50"
              >

                <div
                  className={`flex h-52 items-center justify-center ${item.bg}`}
                >

                  <span className="text-8xl transition-transform duration-500 group-hover:scale-110">
                    {item.emoji}
                  </span>

                </div>

                <div className="p-5">

                  <p className="text-xs font-semibold text-purple-600">
                    FreshStock
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-purple-600">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-xl font-black text-purple-600">
                      ${item.price.toFixed(2)}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
