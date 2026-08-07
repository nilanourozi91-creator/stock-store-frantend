// "use client";

// import Image from "next/image";
// import {
//   Heart,
//   ShoppingCart,
//   Star,
// } from "lucide-react";

// export type Product = {
//   id: number | string;
//   name: string;
//   slug?: string;
//   category: string;
//   price: number;
//   oldPrice?: number;
//   rating?: number;
//   reviews?: number;
//   image: string;
//   discount?: number;
// };

// type ProductCardProps = {
//   product: Product;
// };

// export default function ProductCard({
//   product,
// }: ProductCardProps) {
//   return (
//     <div className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

//       {/* Image */}
//       <div className="relative aspect-square overflow-hidden bg-gray-100">

//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         {/* Discount */}
//         {product.discount && (
//           <span className="absolute left-4 top-4 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
//             {product.discount}% OFF
//           </span>
//         )}

//         {/* Wishlist */}
//         <button
//           type="button"
//           aria-label={`Add ${product.name} to wishlist`}
//           className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md backdrop-blur-sm transition hover:bg-purple-600 hover:text-white"
//         >
//           <Heart className="h-4 w-4" />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-5">

//         <p className="text-xs font-medium text-gray-400">
//           {product.category}
//         </p>

//         <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-gray-900">
//           {product.name}
//         </h3>

//         {/* Rating */}
//         <div className="mt-3 flex items-center gap-2">

//           <div className="flex items-center gap-1">
//             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

//             <span className="text-sm font-semibold text-gray-800">
//               {product.rating ?? 0}
//             </span>
//           </div>

//           <span className="text-xs text-gray-400">
//             ({product.reviews ?? 0})
//           </span>
//         </div>

//         {/* Price + Cart */}
//         <div className="mt-4 flex items-end justify-between gap-3">

//           <div>
//             <span className="text-xl font-bold text-purple-600">
//               ${product.price.toFixed(2)}
//             </span>

//             {product.oldPrice && (
//               <span className="ml-2 text-sm text-gray-400 line-through">
//                 ${product.oldPrice.toFixed(2)}
//               </span>
//             )}
//           </div>

//           <button
//             type="button"
//             aria-label={`Add ${product.name} to cart`}
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
//           >
//             <ShoppingCart className="h-4 w-4" />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

export type Product = {
  id: number | string;
  name: string;
  slug?: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  image: string;
  discount?: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount */}
        {product.discount && (
          <span className="absolute left-4 top-4 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md backdrop-blur-sm transition hover:bg-purple-600 hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-xs font-medium text-gray-400">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-gray-800">
              {product.rating ?? 0}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({product.reviews ?? 0})
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-end justify-between gap-3">

          <div>
            <span className="text-xl font-bold text-purple-600">
              ${product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>

        </div>
      </div>
    </div>
  );
}