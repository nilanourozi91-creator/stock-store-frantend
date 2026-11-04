// 'use client'
// import Link from "next/link";
// import {
//   ArrowRight,
//   Apple,
//   Carrot,
//   Wheat,
//   Milk,
//   Coffee,
// } from "lucide-react";
// import { motion } from "motion/react";
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";

// const categories = [
//   {
//     name: "Fresh Fruits",
//     description: "Sweet & healthy",
//     icon: Apple,
//     href: "/shop?category=fruits",
//   },
//   {
//     name: "Vegetables",
//     description: "Fresh every day",
//     icon: Carrot,
//     href: "/shop?category=vegetables",
//   },
//   {
//     name: "Rice & Grains",
//     description: "Quality grains",
//     icon: Wheat,
//     href: "/shop?category=grains",
//   },
//   {
//     name: "Dairy",
//     description: "Fresh & nutritious",
//     icon: Milk,
//     href: "/shop?category=dairy",
//   },
//   {
//     name: "Drinks",
//     description: "Refresh your day",
//     icon: Coffee,
//     href: "/shop?category=drinks",
//   },
// ];

// export default function Categories() {
//   return (
//     <section className="bg-white py-20 sm:py-24 dark:bg-gray-600">
//             {/* <div className="absolute right-32 top-32 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-200/20" />
//       <div className="absolute bottom-40 left-0 h-96 w-96 rounded-full bg-green-100/50 blur-3xl dark:bg-green-200/20" /> */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <motion.div
//            initial={{ opacity: 0, x: -20 }}
//            whileInView={{ opacity: 1, x: 0 }}
//            viewport={{ once: true }}
//            transition={{ duration: 0.6 }}
//           >
//             <p className="mb-2 text-sm font-semibold uppercase tracking-wider dark:text-purple-500 text-purple-600">
//               Shop by category
//             </p>

//             <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white/70 sm:text-4xl">
//               Everything fresh,
//               <br className="sm:hidden" /> all in one place.
//             </h2>

//             <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-200 sm:text-base">
//               Explore our carefully selected categories and
//               find everything you need for your everyday life.
//             </p>
//           </motion.div>

//           <Link
//             href="/categories"
//             className="group flex w-fit items-center gap-2 text-sm font-semibold dark:text-purple-500 text-purple-600 transition hover:text-purple-700"
//           >
//             View all categories

//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>

//         </div>

//         {/* Categories */}
//         <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

//           {categories.map((category) => {

//             const Icon = category.icon;

//             return (
//               <Link
//                 key={category.name}
//                 href={category.href}
//                 className="group"
//               >
//                 <Card className="h-full overflow-hidden dark:bg-gray-800 border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg dark:shadow-none hover:shadow-purple-100/40">
//                        <motion.div
//                        initial={{ opacity: 0, y: 20 }}
//                        whileInView={{ opacity: 1, y: 0 }}
//                        viewport={{ once: true }}
//                        transition={{ duration: 0.6 }}
                       
//                        >

//                   <CardContent className="flex flex-col items-center p-6 text-center">

//                     {/* Icon */}
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-50 dark:bg-gray-400 transition-colors duration-300 group-hover:bg-purple-100">

//                       <Icon className="h-9 w-9 text-purple-600 dark:text-purple-500 transition-transform duration-300 group-hover:scale-110" />

//                     </div>

//                     {/* Text */}
//                     <h3 className="mt-5 text-sm font-semibold text-gray-900 dark:text-gray-200">
//                       {category.name}
//                     </h3>

//                     <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
//                       {category.description}
//                     </p>

//                     {/* Arrow */}
//                     <div className="mt-4 flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       Explore
//                       <ArrowRight className="h-3.5 w-3.5" />
//                     </div>
//                   </CardContent>
//                        </motion.div >

//                 </Card>
//               </Link>
//             );
//           })}

//         </div>

//       </div>

//     </section>
//   );
// }





"use client";

import Link from "next/link";
import {
  ArrowRight,
  Apple,
  Carrot,
  Wheat,
  Milk,
  Coffee,
} from "lucide-react";
import { motion } from "motion/react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const categories = [
  {
    name: "Fresh Fruits",
    description: "Sweet & healthy",
    icon: Apple,
    href: "/shop?category=fruits",
  },
  {
    name: "Vegetables",
    description: "Fresh every day",
    icon: Carrot,
    href: "/shop?category=vegetables",
  },
  {
    name: "Rice & Grains",
    description: "Quality grains",
    icon: Wheat,
    href: "/shop?category=grains",
  },
  {
    name: "Dairy",
    description: "Fresh & nutritious",
    icon: Milk,
    href: "/shop?category=dairy",
  },
  {
    name: "Drinks",
    description: "Refresh your day",
    icon: Coffee,
    href: "/shop?category=drinks",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-20 dark:bg-gray-950 sm:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl dark:bg-purple-950/30" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl dark:bg-purple-950/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Shop by category
            </p>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:text-4xl">
              Everything fresh,
              <br className="sm:hidden" /> all in one place.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
              Explore our carefully selected categories and
              find everything you need for your everyday life.
            </p>
          </motion.div>

          {/* View All */}
          <Link
            href="/categories"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            View all categories

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    className="
                      h-full
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      border-gray-100
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-purple-100
                      hover:shadow-xl
                      hover:shadow-purple-100/40

                      dark:border-gray-800
                      dark:bg-gray-900
                      dark:shadow-none
                      dark:hover:border-purple-900/60
                      dark:hover:shadow-purple-950/20
                    "
                  >
                    <CardContent className="flex flex-col items-center p-6 text-center">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-2xl
                          bg-purple-50
                          transition-all
                          duration-300
                          group-hover:bg-purple-600
                          group-hover:shadow-lg
                          group-hover:shadow-purple-200

                          dark:bg-purple-950/40
                          dark:group-hover:bg-purple-500
                          dark:group-hover:shadow-purple-950/40
                        "
                      >
                        <Icon
                          className="
                            h-9
                            w-9
                            text-purple-600
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:text-white

                            dark:text-purple-400
                            dark:group-hover:text-white
                          "
                        />
                      </div>

                      {/* Text */}
                      <h3 className="mt-5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {category.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>

                      {/* Explore */}
                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-1
                          text-xs
                          font-semibold
                          text-purple-600
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100

                          dark:text-purple-400
                        "
                      >
                        Explore

                        <ArrowRight
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}
