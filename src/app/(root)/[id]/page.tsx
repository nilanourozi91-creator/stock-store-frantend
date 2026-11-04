
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import ProdectImg from '@/components/share/prodect-image';
import ProdectP from '@/components/landing/prodectprice';
import { ArrowLeft, ArrowRight, Check, Heart, Minus, Plus, ShieldCheck, ShoppingCart, Star, Truck } from 'lucide-react';
import Link from 'next/link';
// import { useCart } from "@/context/CartContext";
import RatingProducts from '@/components/share/rating';
import { GetAllProdects, GetAllReviews, GetSingleProdect } from '@/lib/prodect.action';
import AddTOCartBtn from './cart';

 async function Singleprodect({params}:{params:Promise<{id:number}>}) {
      // const { addToCart } = useCart();
   const {id}=await params;
   const product =await GetSingleProdect(id);
   const prodects= await GetAllProdects();
   const reviews=await GetAllReviews();
   const prodect=prodects.find((item:any)=>item.id===id);
   const productReviews = reviews.filter(
  (item: any) => Number(item.pro_id) === Number(id));
  console.log(prodect)
  return (
     <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 dark:border-gray-800">

        <div className="mx-auto max-w-7xl flex justify-between gap-2.5 px-4 py-5 sm:px-6 lg:px-8 ">
            
             <Link
            href="/"
            className="inline-flex border hover:bg-purple-500 hover:text-purple-50 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-2xl items-center gap-2 text-sm font-medium text-gray-500 transition"
          >
            <ArrowLeft className="h-4 w-4 " />
            Back to home
          </Link>
          <Link
            href="/shop"
            className="inline-flex border hover:bg-purple-500 hover:text-purple-50 dark:bg-gray-700 dark:text-white px-2 py-1 rounded-2xl items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-purple-600"
          >
             Go to shop
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

              <div className="relative flex w-[490px]  h-[520px]  items-center justify-center  sm:h-[520px]">

                <div className="mt-20">
                              <ProdectImg list={product.data.imgall}/>
                </div>

                <span className="absolute left-5 top-5 rounded-full bg-purple-600 px-4 py-2 text-xs font-bold text-white">
                  Fresh
                </span>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-semibold text-purple-600 dark:text-gray-100">
                {product.data.category.name}
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {product.data.name}
              </h1>
              {/* Rating */}
              {productReviews?<div>
                <RatingProducts data={productReviews}/>
              </div>:''}
               

              {/* Price */}
              <div className="mt-7 flex items-end gap-3">

                <span className="text-4xl font-black text-purple-600 dark:text-gray-200">
                  {/* ${product.price.toFixed(2)} */}
                  <ProdectP price={product.data.price.toString()}/>
                </span>

                <span className="mb-1 text-lg text-gray-400 line-through">
                  {/* ${product.oldPrice.toFixed(2)} */}
                </span>

                <span className="mb-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Save 23%
                </span>

              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-gray-500 dark:text-gray-200">
                {product.data.description}
              </p>
              {/* Divider */}
              <div className="my-7 h-px bg-gray-100" />

              {/* Quantity */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                  Quantity
                </p>

                <div className="pt-2 flex items-center">
                  <div className="flex items-center rounded-full ">
                    {product.data?.stock?<div>
                      <span className="flex w-20 justify-center text-sm font-bold h-7 items-center bg-green-100 rounded-full text-green-700">
                     {product.data?.stock}
                    </span>
                     <span className="text-xs text-green-300">
                      Available
                  </span>
                    </div>:<div>
                      <span className="text-xs text-red-600 bg-red-200 px-6 py-2 rounded-full">
                      Unavailable
                  </span>
                      </div>}
                  </div>

                </div>
              </div>

              {/* Buttons */}
              <AddTOCartBtn product={product}
              // onClick={() => addToCart(product)}
              />
                {/* <AddTOCartBtn product={prodect} /> */}

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
      <section className="border-y border-gray-100 bg-gray-50/50 dark:bg-gray-900/50 dark:border-none py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[1.5rem] bg-white p-6 dark:bg-gray-900 shadow-sm">

              <p className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                Description
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-200">
                About this product
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
                Our fresh avocado is carefully selected to provide
                excellent taste, texture and quality. Enjoy it in
                breakfast, salads, sandwiches and your favorite meals.
              </p>

            </div>

            <div className="rounded-[1.5rem] bg-white dark:bg-gray-900 p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                Freshness
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-200">
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
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="rounded-[1.5rem] bg-white dark:bg-gray-900  p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                Delivery
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-200">
                Fresh to your door
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
                We make it easy to receive your groceries at a
                convenient time and keep your products fresh.
              </p>

            </div>

          </div>

        </div>

      </section>


    </main>
  )
}

export default Singleprodect
