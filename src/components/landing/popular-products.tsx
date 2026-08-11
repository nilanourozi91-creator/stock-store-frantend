'use client'
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import ProductCard from "./product-card";
import { motion } from "motion/react";
import { GetAllProdects } from "../../lib/prodect.action";
export default  function PopularProducts({prodeucts}:{prodeucts:any}) {
  console.log(prodeucts);
  return (
    <section className="bg-[#faf9f7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              <Flame className="h-4 w-4" />
              Best Sellers
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our most popular
              <br />
              <span className="text-purple-600">fresh picks.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover the products our customers love the most.
              Fresh, delicious, and ready for your next order.
            </p>
          </motion.div>

          <Link
            href="/shop"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-purple-200 hover:text-purple-600"
          >
            View all products

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {/* Products */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          { prodeucts.map((product:any) => (
            <ProductCard 
               key={product.id}
              product={product}
            />
            // <h1 key={product.id}>hello world</h1>
           ))} 
           
        </div>

      </div>

    </section>
  );
}