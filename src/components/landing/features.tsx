
// import {
//   Leaf,
//   Truck,
//   ShieldCheck,
//   Award,
//   ArrowRight,
// } from "lucide-react";

// const features = [
//   {
//     icon: Leaf,
//     title: "100% Fresh Products",
//     description:
//       "We carefully select fresh fruits, vegetables, dairy, and groceries every day to ensure premium quality.",
//   },
//   {
//     icon: Truck,
//     title: "Fast Delivery",
//     description:
//       "Receive your order quickly with our reliable same-day and next-day delivery service.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Secure Payments",
//     description:
//       "Shop confidently using secure online payment methods protected with modern security standards.",
//   },
//   {
//     icon: Award,
//     title: "Quality Guarantee",
//     description:
//       "Not satisfied? We guarantee product quality and provide easy returns for eligible items.",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="bg-white py-24">

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Header */}

//         <div className="mx-auto max-w-2xl text-center">

//           <span id="Home"  className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600">
//             Why Choose FreshStock
//           </span>

//           <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
//             Everything you need from a modern grocery store
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-gray-600">
//             We combine fresh products, affordable prices,
//             fast delivery, and secure shopping to create
//             the best grocery experience.
//           </p>

//         </div>

//         {/* Cards */}

//         <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

//           {features.map((feature) => {

//             const Icon = feature.icon;

//             return (

//               <div
//                 key={feature.title}
//                 className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl"
//               >

//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 transition group-hover:bg-purple-600">

//                   <Icon className="h-8 w-8 text-purple-600 transition group-hover:text-white" />

//                 </div>

//                 <h3 className="mt-8 text-xl font-bold text-gray-900">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-4 leading-7 text-gray-600">
//                   {feature.description}
//                 </p>

//                 <button className="mt-8 flex items-center gap-2 font-semibold text-purple-600 transition group-hover:gap-3">
//                   Learn More

//                   <ArrowRight className="h-4 w-4" />

//                 </button>

//               </div>

//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "motion/react";
import {
  Leaf,
  Truck,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Fresh Products",
    description:
      "We carefully select fresh fruits, vegetables, dairy, and groceries every day to ensure premium quality.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Receive your order quickly with our reliable same-day and next-day delivery service.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Shop confidently using secure online payment methods protected with modern security standards.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "Not satisfied? We guarantee product quality and provide easy returns for eligible items.",
  },
];

export default function Features() {
  return (
    <section
      id="Home"
      className="bg-[#faf9f7] py-20 dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-900/60 dark:bg-purple-950/40 dark:text-purple-400">
            Why Choose FreshStock
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Everything you need from a
            <span className="text-purple-600 dark:text-purple-400">
              {" "}
              modern grocery store
            </span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
            We combine fresh products, affordable prices, fast delivery,
            and secure shopping to create the best grocery experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none dark:hover:border-gray-700 dark:hover:shadow-purple-950/20"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 transition-all duration-300 group-hover:bg-purple-600 dark:bg-purple-950/40 dark:group-hover:bg-purple-500">
                  <Icon className="h-7 w-7 text-purple-600 transition-colors duration-300 group-hover:text-white dark:text-purple-400 dark:group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-lg font-bold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Learn More */}
                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all duration-300 group-hover:gap-3 dark:text-purple-400"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-8 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-14 dark:bg-purple-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}