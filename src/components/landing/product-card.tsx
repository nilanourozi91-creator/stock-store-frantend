"use client";

import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Star,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "../../../utils";
import Image from "next/image";
// import ProductPrice from "./productprice";
import prodectprice from "./prodectprice";
import ProdectP from "./prodectprice";
import WishlistButton from "../share/Buttonwishlist";
export default function ProductCard({product}:{ product:any}) {
    // console.log(product.reviews.rating);
  return (
    <Card className="group relative overflow-hidden border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
            {product.name}
          </span>
        )}

        {/* Wishlist */}
        <div
          aria-label={`Add ${product.name} to wishlist`}
          className="">
          <div className="absolute z-50 right-3 top-3">
             <WishlistButton productId={product.id} token={''} /> </div>
        </div>

        {/* Image */}
        <Link href={`/${product.id}`}>
          {/* <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          /> */}
            <Image
              src={`http://localhost:8000/storage/${product.imgall[0].img_url}`}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              unoptimized
            />
        </Link>

        {/* Quick Add */}
        <button
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-purple-600 text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-purple-700 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
          {product.category.name}
        </p>

        <Link href={`/shop/${product.id}`}>
          <h3 className="mt-2 line-clamp-1 font-semibold text-gray-900 transition hover:text-purple-600">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">

          <div className="flex items-center">
            {Array.from({length:5},(_,index)=>{
              let fill =Math.max(
                Math.min((Number(product.reviews.rating)-index*2)/2,1),0,
              )*100;
            
              return(
                <div key={index} className='relative'>
                  <span className=' w-6  h-6'>
                       <Star className='text-yellow-500'/>
                  </span>
                   <span className=' w-6  h-6 absolute top-0 left-0 overflow-hidden'
                    style={{width:`${fill}%`}}>
                       <Star
                        className='text-yellow-500 fill-yellow-500'/>
                  </span>
                </div>
              )
            })}
          </div>

          <span className="text-xs text-gray-500">
            {product.reviews.rating}
          </span>

        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="text-lg font-bold text-gray-950">
                <ProdectP price={product.price.toString()}/>
            </span>

            {/* {product.oldPrice && ( */}
              <span className="text-sm text-gray-400 line-through">
                 20%
              </span>
            {/* )} */}

          </div>

          <ArrowUpRight className="h-5 w-5 text-gray-300 transition group-hover:text-purple-600" />

        </div>

      </div>
    </Card>
  );
}



// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import Image from 'next/image'
// import Link from 'next/link'
// // import ProdectPrice from './prodect-price'

// function ProductCard({ product }: { product: any }) {
//   return (
//     <Card className="group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//       {/* img-all*/}
//       <CardHeader className="p-0 relative bg-cover object-cover">

//         <Link href={`prodect/${product.id}`}>
//           <div className="relative w-full h-[40vh]  object-cover overflow-hidden">
//             <Image
//               src={`http://localhost:8000/storage/${product.imgall[0].img_url}`}
//               alt="product"
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//               unoptimized
//             />
//           </div>
//         </Link>

//         {/* stock-be */}
//         <span
//           className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full text-white ${
//             product.details.stock > 0 ? 'bg-green-500' : 'bg-red-500'
//           }`}
//         >
//           {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
//         </span>
//       </CardHeader>

//       {/* CONTENT */}
//       <CardContent className="p-4 space-y-2">
        
//         {/* BRAND */}
//         <p className="text-xs text-gray-500 uppercase tracking-wide">
//           {product.details.brand}
//         </p>

//         {/* NAME */}
//         <h3 className="text-sm font-semibold line-clamp-2">
//           {product.name}
//         </h3>

//         {/* PRICE + STOCK */}
//         <div className="flex items-center justify-between pt-2">
//           {/* <ProdectPrice price={product.price.toString()} /> */}

//           <span className="text-xs text-gray-500">
//             {product.stock} pcs
//           </span>
//         </div>

//       </CardContent>
//     </Card>
//   )
// }

// export default ProductCard