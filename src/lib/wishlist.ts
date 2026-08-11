
// import { api } from "@/lib/api";
import type { WishlistResponse } from "@/types/wishlist";
import { api } from "./api";

export async function getWishlist(token: string) {
  return api<WishlistResponse>("/wishlist", {
    token,
  });
}

export async function addToWishlist(
  productId: number,
  token: string
) {
  return api("/wishlist", {
    method: "POST",
    token,
    body: JSON.stringify({
      product_id: productId,
    }),
  });
}

export async function removeFromWishlist(
  productId: number,
  token: string
) {
  return api(`/wishlist/${productId}`, {
    method: "DELETE",
    token,
  });
}
