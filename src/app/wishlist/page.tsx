
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

type WishlistItem = {
  id: number;
  product_id: number;
  product: Product;
};

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  async function loadWishlist() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wishlist`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load wishlist");
      }

      const result = await response.json();

      setItems(result.data?.items || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function removeItem(productId: number) {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wishlist/${productId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setItems((current) =>
          current.filter(
            (item) =>
              item.product_id !== productId
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-sm font-semibold text-purple-600">
          Loading wishlist...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue shopping
        </Link>

        <div className="mt-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
            <Heart className="h-6 w-6 fill-purple-600 text-purple-600" />
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900">
              My Wishlist
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {items.length} saved product
              {items.length !== 1 ? "s" : ""}
            </p>
          </div>

        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[2rem] bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
              <Heart className="h-7 w-7 text-purple-600" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Save products you love and come back to them
              whenever you want.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-purple-700"
            >
              <ShoppingCart className="h-4 w-4" />
              Explore products
            </Link>

          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {items.map((item) => (

              <div
                key={item.id}
                className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm"
              >

                <div className="relative aspect-square bg-gray-100">

                  {item.product.image ? (
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Heart className="h-10 w-10 text-gray-300" />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.product_id)
                    }
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </button>

                </div>

                <div className="p-5">

                  <h2 className="font-bold text-gray-900">
                    {item.product.name}
                  </h2>

                  <p className="mt-2 text-lg font-black text-purple-600">
                    ${item.product.price}
                  </p>

                  <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-purple-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </main>
  );
}