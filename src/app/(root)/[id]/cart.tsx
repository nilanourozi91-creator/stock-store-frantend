'use client'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useCart } from "@/context/CartContext";
import Link from 'next/link';
function AddTOCartBtn({product}:{product:any}) {
     const { addToCart } = useCart();
  return (
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                //    aria-label={`Add ${product.name} to cart`}
                   onClick={() => addToCart(product)}
                  className="flex flex-1  cursor-pointer items-center justify-center gap-2 rounded-xl bg-purple-600 dark:bg-purple-500 dark:shadow-none px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  
                  <ShoppingCart className="h-5 w-5" />
                  Add to cart
                </button>
 
                <Link href={`cart`}>
                <button
                  type="button"
                  className="rounded-xl border border-purple-200 px-6 py-4 text-sm font-bold text-purple-600 transition dark:border-none dark:bg-purple-500 dark:text-white hover:bg-purple-50"
                  >
                  see cart
                </button>
               </Link>

              </div>
  )
}

export default AddTOCartBtn
