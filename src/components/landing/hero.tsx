// 'use client'
// import Link from "next/link";
// import {
//   ArrowRight,
//   Check,
//   Leaf,
//   Truck,
// } from "lucide-react";
// import { motion } from "motion/react";
// export default function Hero() {
  
//   return (
//     <section className="relative overflow-hidden bg-[#faf9f7] dark:bg-gray-800">

//       {/* Decorative background */}
//       <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-200/20" />
//       <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-green-100/50 blur-3xl dark:bg-green-200/20" />

//       <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">

//         {/* LEFT CONTENT */}
//         <div className="relative z-10 max-w-xl">

//           {/* Small badge */}
//           <motion.div
//            initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.10 }}
//           className="mb-6 inline-flex items-center gap-2 rounded-full border dark:bg-gray-600 border-green-200 dark:text-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
//             <Leaf className="h-4 w-4" />
//             Freshness you can taste
//           </motion.div>

//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//           <h1 className="text-5xl font-bold leading-[1.05] tracking-tight dark:text-white/70 text-gray-950 sm:text-6xl lg:text-7xl">
//             Fresh Food.
//             <br />

//             <span  className="text-purple-600 dark:text-purple-500">
//               Better Living.
//             </span>
//           </h1>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//            initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.10 }}
//           className="mt-6 max-w-lg text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
//             Discover fresh groceries, quality ingredients,
//             and everyday essentials delivered straight to
//             your door.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//            initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.20 }}
//           className="mt-8 flex flex-col gap-3 sm:flex-row">

//             <Link
//               href="/shop"
//               className="group inline-flex items-center justify-center gap-2 dark:shadow-none dark:bg-purple-500 rounded-full bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
//             >
//               Shop Fresh Products

//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>

//             <Link
//               href="/categories"
//               className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:bg-white/70 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
//             >
//               Explore Categories
//             </Link>

//           </motion.div>
           
//           {/* Benefits */}
//           <motion.div
//            initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.30 }}
//           className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
//                 <Check className="h-4 w-4 text-green-600 dark:text-green-500" />
//               </div>

//               <div>
//                 <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
//                   Fresh Products
//                 </p>

//                 <p className="text-xs text-gray-500 dark:text-gray-300">
//                   Carefully selected
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
//                 <Truck className="h-4 w-4 text-purple-600 dark:text-purple-500" />
//               </div>

//               <div>
//                 <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
//                   Fast Delivery
//                 </p>

//                 <p className="text-xs text-gray-500 dark:text-gray-300">
//                   Straight to your door
//                 </p>
//               </div>
//             </div>

//           </motion.div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]">

//           {/* Main image background */}
//           <div className="absolute h-[360px] w-[360px] rounded-full sm:h-[450px] sm:w-[450px] lg:h-[540px] lg:w-[540px]" />

//           {/* Main food image */}
//           <div className="relative z-10 h-[390px] w-full sm:h-[480px] lg:h-[600px]">

//            <div className=" rounded-full w-full h-full flex justify-center items-center">
//                    <video
//                   src="/images/hero-m3.mp4"
//                   autoPlay
//                    muted
//                    loop
//                    playsInline
//                    className="h-full w-full object-contain rounded-full"
//                   />
//            </div>

//           </div>

//           {/* Floating card - Fresh */}
//           <div className="absolute left-0 top-20 z-20 rounded-2xl border dark:border-gray-400 dark:bg-gray-500 border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-sm sm:left-2 lg:left-0">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
//                 <Leaf className="h-5 w-5 text-green-600 dark:text-green-500" />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Quality
//                 </p>

//                 <p className="text-sm font-bold text-gray-900">
//                   100% Fresh
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* Floating card - Delivery */}
//           <div className="absolute bottom-16 right-0 z-20 rounded-2xl border dark:bg-gray-500 dark:border-gray-400 border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-sm">

//             <div className="flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
//                 <Truck className="h-5 w-5 text-purple-600 dark:text-purple-500" />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Delivery
//                 </p>

//                 <p className="text-sm font-bold text-gray-900">
//                   Fast & Easy
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Leaf,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] dark:bg-gray-950">

      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-950/50" />

      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-green-100/50 blur-3xl dark:bg-green-950/20" />

      {/* Subtle dark mode glow */}
      <div className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl">

          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-900/60 dark:bg-green-950/40 dark:text-green-400"
          >
            <Leaf className="h-4 w-4" />
            Freshness you can taste
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 dark:text-gray-100 sm:text-6xl lg:text-7xl">
              Fresh Food.
              <br />

              <span className="text-purple-600 dark:text-purple-400">
                Better Living.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-lg text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg"
          >
            Discover fresh groceries, quality ingredients,
            and everyday essentials delivered straight to
            your door.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >

            {/* Primary */}
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 dark:bg-purple-500 dark:shadow-purple-950/30 dark:hover:bg-purple-400"
            >
              Shop Fresh Products

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary */}
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-purple-800 dark:hover:bg-purple-950/40 dark:hover:text-purple-400"
            >
              Explore Categories
            </Link>

          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >

            {/* Fresh Products */}
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Fresh Products
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Carefully selected
                </p>
              </div>

            </div>

            {/* Fast Delivery */}
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/50">
                <Truck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Fast Delivery
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Straight to your door
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]">

          {/* Main image background */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-purple-100/30 dark:bg-purple-900/20 sm:h-[450px] sm:w-[450px] lg:h-[540px] lg:w-[540px]" />

          {/* Main food image */}
          <div className="relative z-10 h-[390px] w-full sm:h-[480px] lg:h-[600px]">

            <div className="flex h-full w-full items-center justify-center rounded-full">
              <video
                src="/images/hero-m3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full rounded-full object-contain"
              />
              {/* <Image  width={1000} height={1000} alt="new"   src="/images/hero.png" /> */}
            </div>

          </div>

          {/* Floating card - Fresh */}
          <div className="absolute left-0 top-20 z-20 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95 dark:shadow-black/30 sm:left-2 lg:left-0">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950/50">
                <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Quality
                </p>

                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  100% Fresh
                </p>
              </div>

            </div>

          </div>

          {/* Floating card - Delivery */}
          <div className="absolute bottom-16 right-0 z-20 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95 dark:shadow-black/30">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/50">
                <Truck className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Delivery
                </p>

                <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  Fast & Easy
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
