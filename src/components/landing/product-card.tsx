
"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Star,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import ProdectP from "./prodectprice";
import WishlistButton from "../share/Buttonwishlist";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

type ProductCardProps = {
  product: any;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
const { addToCart } = useCart();
  // add to cart 

const handleAddToCart = () => {
  addToCart(product);

  toast.success("Success!", {
    description: `${product.name} added to your cart.`,
    duration: 3000,
  });
};
  const rating = Number(product?.reviews?.rating ?? 0);

  const imageUrl = product?.imgall?.[0]?.img_url
    ? `http://localhost:8000/storage/${product.imgall[0].img_url}`
    : "/images/product-placeholder.png";

  const isInStock = Number(product?.stock ?? 0) > 0;

  return (
    <Card className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none dark:hover:border-gray-700">

      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-950">

        {/* Product Badge */}
        {product?.badge && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:bg-purple-500">
            {product.badge}
          </span>
        )}

        {/* Stock Badge */}
        <span
          className={`absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-xs font-semibold ${
            isInStock
              ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400"
          }`}
        >
          {isInStock ? "In Stock" : "Out of Stock"}
        </span>

        {/* Wishlist */}
        <div className="absolute right-3 top-3 z-30">
          <WishlistButton
            productId={product.id}
            token=""
          />
        </div>

        {/* Product Image */}
        <Link href={`/${product.id}`} className="block h-full w-full">
          <Image
            src={imageUrl}
            alt={product?.name || "Product"}
            width={900}
            height={900}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
        </Link>

        {/* Quick Add To Cart */}
        {isInStock && (
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() =>handleAddToCart()}
            className="absolute bottom-4 right-4 z-20 flex h-11 w-11 translate-y-3 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-purple-700 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-purple-500 dark:hover:bg-purple-400"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400">
          {product?.category?.name || "Fresh Product"}
        </p>

        {/* Product Name */}
        <Link href={`/shop/${product.id}`}>
          <h3 className="mt-2 line-clamp-1 font-semibold text-gray-900 transition-colors hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
            {product?.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => {
              const fill = Math.max(
                Math.min((rating - index * 2) / 2, 1),
                0
              ) * 100;

              return (
                <div
                  key={index}
                  className="relative h-4 w-4"
                >
                  {/* Empty star */}
                  <Star className="absolute h-4 w-4 text-gray-300 dark:text-gray-700" />

                  {/* Filled star */}
                  <span
                    className="absolute left-0 top-0 overflow-hidden"
                    style={{
                      width:`${fill}%`,
                    }}
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </span>
                </div>
              );
            })}
          </div>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-950 dark:text-gray-100">
              <ProdectP
                price={String(product?.price ?? 0)}
              />
            </span>

            {/* Discount */}
            {product?.discount && (
              <span className="text-sm font-medium text-red-500">
                -{product.discount}%
              </span>
            )}
          </div>

          <ArrowUpRight className="h-5 w-5 text-gray-300 transition-colors group-hover:text-purple-600 dark:text-gray-700 dark:group-hover:text-purple-400" />
        </div>

      </div>
    </Card>
  );
}