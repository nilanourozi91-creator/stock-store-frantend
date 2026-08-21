// "use client";

// import { useMemo, useState } from "react";
// import ProductCard, { Product } from "./product-card";
// import ShopFilters from "./shop-filters";
// type ShopContentProps = {
//   products: Product[];
// };

// export default function ShopContent({
//   products
// }: ShopContentProps) {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [sort, setSort] = useState("default");

//   const categories = useMemo(() => {
//     return Array.from(
//       new Set(products.map((product) => product.category))
//     );
//   }, [products]);

//   const filteredProducts = useMemo(() => {
//     let result = [...products];

//     // Search
//     if (search.trim()) {
//       const query = search.toLowerCase();

//       result = result.filter((product) =>
//         product.name.toLowerCase().includes(query)
//       );
//     }

//     // Category
//     if (category !== "all") {
//       result = result.filter(
//         (product) => product.category === category
//       );
//     }

//     // Sort
//     switch (sort) {
//       case "popular":
//         result.sort(
//           (a, b) => (b.reviews ?? 0) - (a.reviews ?? 0)
//         );
//         break;

//       case "price-low":
//         result.sort((a, b) => a.price - b.price);
//         break;

//       case "price-high":
//         result.sort((a, b) => b.price - a.price);
//         break;

//       case "rating":
//         result.sort(
//           (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
//         );
//         break;
//     }

//     return result;
//   }, [products, search, category, sort]);

//   return (
//     <>
//       <ShopFilters
//         search={search}
//         category={category}
//         sort={sort}
//         categories={categories}
//         onSearchChange={setSearch}
//         onCategoryChange={setCategory}
//         onSortChange={setSort}
//       />

//       {/* Result count */}
//       <div className="mb-5 flex items-center justify-between">
//         <p className="text-sm text-gray-500">
//           Showing{" "}
//           <span className="font-semibold text-gray-900">
//             {filteredProducts.length}
//           </span>{" "}
//           products
//         </p>

//         {(search || category !== "all" || sort !== "default") && (
//           <button
//             type="button"
//             onClick={() => {
//               setSearch("");
//               setCategory("all");
//               setSort("default");
//             }}
//             className="text-sm font-semibold text-purple-600 transition hover:text-purple-700"
//           >
//             Clear filters
//           </button>
//         )}
//       </div>

//       {/* Products */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="rounded-[2rem] border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">
//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
//             🔍
//           </div>

//           <h3 className="mt-5 text-xl font-semibold text-gray-900">
//             No products found
//           </h3>

//           <p className="mt-2 text-sm text-gray-500">
//             Try searching for something else or clear your filters.
//           </p>

//           <button
//             type="button"
//             onClick={() => {
//               setSearch("");
//               setCategory("all");
//               setSort("default");
//             }}
//             className="mt-6 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
//           >
//             Clear filters
//           </button>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function increaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}