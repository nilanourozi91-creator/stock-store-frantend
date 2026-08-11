
export type WishlistProduct = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string | null;
};

export type WishlistItem = {
  id: number;
  wishlist_id: number;
  product_id: number;
  product: WishlistProduct;
};

export type Wishlist = {
  id: number;
  user_id: number;
  items: WishlistItem[];
};

export type WishlistResponse = {
  success: boolean;
  data: Wishlist;
};
