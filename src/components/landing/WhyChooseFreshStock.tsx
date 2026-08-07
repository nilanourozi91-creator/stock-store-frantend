"use client";

import { motion } from "motion/react";
import {
  Truck,
  Leaf,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast & Fresh Delivery",
    description:
      "Get your fresh groceries delivered quickly and safely right to your doorstep.",
  },
  {
    icon: Leaf,
    title: "100% Fresh Products",
    description:
      "We carefully select quality products to make sure every order is fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description:
      "Shop with confidence using our safe and secure payment system.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Customers",
    description:
      "Thousands of customers trust FreshStock for their everyday grocery needs.",
  },
];

export default function WhyChooseFreshStock() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Why FreshStock?
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need,
            <br />
            <span className="text-purple-600">fresh and simple.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            We make grocery shopping easier with fresh products,
            reliable delivery, secure payments, and a shopping
            experience you can trust.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 sm:p-7"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 transition-all duration-300 group-hover:bg-purple-600">
                  <Icon
                    className="h-7 w-7 text-purple-600 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-1 w-8 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}