
"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type WishlistButtonProps = {
  productId: number;
  initialActive?: boolean;
  token?: string;
};

export default function WishlistButton({
  productId,
  initialActive = false,
  token,
}: WishlistButtonProps) {
  const [active, setActive] = useState(initialActive);
  const [loading, setLoading] = useState(false);

  const handleWishlist = async () => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      if (active) {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/wishlist/${productId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setActive(false);
      } else {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/wishlist`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              product_id: productId,
            }),
          }
        );

        setActive(true);
      }
    } catch (error) {
      console.error(
        "Wishlist error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleWishlist}
      disabled={loading}
      aria-label={
        active
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className={`
        flex h-10 w-10 items-center justify-center
        rounded-full border shadow-sm
        transition-all duration-200
        ${
          active
            ? "border-purple-100 bg-purple-100"
            : "border-gray-100 dark:border-gray-400 bg-white dark:bg-gray-400 hover:bg-purple-50"
        }
        ${
          loading
            ? "cursor-not-allowed opacity-60"
            : ""
        }
      `}
    >
      <Heart
        className={`
          h-5 w-5 transition-all
          ${
            active
              ? "fill-purple-600  text-purple-600"
              : "text-gray-500  hover:text-purple-500"
          }
        `}
      />
    </button>
  );
}

