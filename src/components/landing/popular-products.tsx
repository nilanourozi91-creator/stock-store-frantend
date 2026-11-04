// 'use client'
// import Link from "next/link";
// import { ArrowRight, Flame } from "lucide-react";
// import ProductCard from "./product-card";
// import { motion } from "motion/react";
// import { GetAllProdects } from "../../lib/prodect.action";
// export default  function PopularProducts({prodeucts}:{prodeucts:any}) {
//   // console.log(prodeucts);
//   return (
//     <section className="bg-[#faf9f7] py-20 sm:py-24 dark:bg-gray-800">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="mb-3 inline-flex items-center gap-2 dark:bg-gray-700 border-purple-300 border dark:text-purple-500 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
//               <Flame className="h-4 w-4" />
//               Best Sellers
//             </div>

//             <h2 className="text-3xl font-bold tracking-tight dark:text-white/50 text-gray-900 sm:text-4xl lg:text-5xl">
//               Our most popular
//               <br />
//               <span className="text-purple-600 dark:text-purple-500">fresh picks.</span>
//             </h2>

//             <p className="mt-4 max-w-xl text-sm leading-6 dark:text-gray-300/70 text-gray-500 sm:text-base">
//               Discover the products our customers love the most.
//               Fresh, delicious, and ready for your next order.
//             </p>
//           </motion.div>

//           <Link
//             href="/shop"
//             className="group inline-flex w-fit items-center gap-2 rounded-full border dark:bg-gray-400 dark:border-gray-300 border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-purple-200 hover:text-purple-600"
//           >
//             View all products

//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>
//         {/* Products */}
//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//           { prodeucts.map((product:any) => (
//             <ProductCard 
//                key={product.id}
//               product={product}
//             />
//             // <h1 key={product.id}>hello world</h1>
//            ))} 
           
//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import ProductCard from "./product-card";
import { motion } from "motion/react";

type PopularProductsProps = {
  prodeucts: any[];
};

export default function PopularProducts({
  prodeucts,
}: PopularProductsProps) {
  return (
    <section className="bg-[#faf9f7] py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-900/60 dark:bg-purple-950/40 dark:text-purple-400">
              <Flame className="h-4 w-4" />
              Best Sellers
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:text-4xl lg:text-5xl">
              Our most popular
              <br />
              <span className="text-purple-600 dark:text-purple-400">
                fresh picks.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
              Discover the products our customers love the most.
              Fresh, delicious, and ready for your next order.
            </p>
          </motion.div>

          {/* View all button */}
          <Link
            href="/shop"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:border-purple-300 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-purple-700 dark:hover:text-purple-400"
          >
            View all products

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {Array.isArray(prodeucts) && prodeucts.length > 0 ? (
            prodeucts.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-gray-200 bg-white py-16 text-center dark:border-gray-800 dark:bg-gray-900">
              <div className="text-4xl">🛒</div>

              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                No products available
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                There are no popular products to show right now.
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}