"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Flame,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const offers = [
  {
    title: "Fresh Fruits",
    subtitle: "Sweet & healthy picks",
    discount: "25% OFF",
    emoji: "🍓",
    bg: "bg-pink-50",
  },
  {
    title: "Organic Vegetables",
    subtitle: "Farm fresh every day",
    discount: "20% OFF",
    emoji: "🥦",
    bg: "bg-green-50",
  },
  {
    title: "Fresh Drinks",
    subtitle: "Cool & refreshing",
    discount: "15% OFF",
    emoji: "🍊",
    bg: "bg-orange-50",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full dark:border-purple-300 border dark:bg-gray-600 dark:text-purple-500 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              <Flame className="h-4 w-4" />
              Special Offers
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 pt-3 dark:text-white/70 sm:text-4xl lg:text-5xl">
              Fresh deals,
              <br />
              <span className="text-purple-600 dark:text-purple-500">limited time.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
              Grab your favorite fresh products at special prices before
              these offers disappear.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Clock3 className="h-4 w-4 text-purple-600 dark:text-purple-500" />
            Offers updated weekly
          </div>
        </motion.div>

        {/* Main Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-purple-600 dark:bg-gray-500 dark:shadow-none p-6 shadow-xl shadow-purple-200 sm:p-8 lg:p-12"
        >
          {/* Decorations */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 left-1/2 h-80 w-80 rounded-full bg-white/5" />

          <div className="absolute right-16 top-12 h-3 w-3 rounded-full bg-white/30" />

          <div className="absolute bottom-20 right-1/3 h-5 w-5 rounded-full bg-white/20" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Content */}
            <div className="max-w-xl">

              <div className="inline-flex items-center gap-2 border dark:border-gray-300 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Limited-time special
              </div>

              <h3 className="mt-6 text-3xl dark:text-purple-500  font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Stock up on
                <br />
                <span className="text-purple-100 dark:text-purple-500 ">
                  your favorites.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-6 text-purple-100 sm:text-base">
                Save more on selected fresh groceries and everyday
                essentials. These prices won't stay forever.
              </p>

              {/* Countdown */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
                  <span className="block text-xl font-bold text-white">
                    02
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-purple-100">
                    Days
                  </span>
                </div>

                <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
                  <span className="block text-xl font-bold text-white">
                    14
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-purple-100">
                    Hours
                  </span>
                </div>

                <div className="rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
                  <span className="block text-xl font-bold text-white">
                    36
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-purple-100">
                    Minutes
                  </span>
                </div>
              </div>

              <Link
                href="/shop?offers=true"
                className="group mt-8 inline-flex items-center gap-2 rounded-full dark:text-purple-500 dark:bg-gray-400 bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                Shop special offers

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Offer Card */}
            <div className="relative flex justify-center lg:justify-end">

              <motion.div
                whileHover={{ rotate: 0, y: -5 }}
                initial={{ rotate: 3 }}
                className="relative w-full max-w-sm rounded-[2rem] dark:bg-gray-700 bg-white p-6 shadow-2xl sm:p-8"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                    <ShoppingBag className="h-6 w-6 text-purple-600 dark:text-purple-500" />
                  </div>

                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-500">
                    TODAY ONLY
                  </span>

                </div>

                {/* Discount */}
                <div className="mt-7">

                  <p className="text-sm font-medium text-gray-600">
                    Selected groceries
                  </p>

                  <div className="mt-1 flex items-end gap-2">

                    <span className="text-6xl font-black tracking-tight text-purple-600 dark:text-purple-500">
                      40%
                    </span>

                    <span className="mb-2 text-lg font-bold text-gray-900">
                      OFF
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Save up to 40% on selected products while
                    this special offer lasts.
                  </p>

                </div>

                {/* Product Emojis */}
                <div className="mt-6 grid grid-cols-3 gap-3">

                  {offers.map((offer) => (
                    <div
                      key={offer.title}
                      className={`flex h-24 flex-col items-center justify-center rounded-2xl ${offer.bg}`}
                    >
                      <span className="text-3xl">
                        {offer.emoji}
                      </span>

                      <span className="mt-2 text-[10px] font-semibold text-gray-600">
                        {offer.discount}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                  <div>
                    <p className="text-xs text-gray-400">
                      Offer ends soon
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      Don't miss out!
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 dark:bg-purple-500 text-white">
                    <Flame className="h-5 w-5" />
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Small Offer Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 rounded-2xl border dark:bg-gray-400 dark:border-gray-400 dark:shadow-none border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/40"
            >

              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${offer.bg}`}
              >
                <span className="text-3xl">
                  {offer.emoji}
                </span>
              </div>

              <div className="min-w-0">
                <h4 className="truncate text-sm font-semibold text-gray-900 dark:text-gray-400">
                  {offer.title}
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  {offer.subtitle}
                </p>

                <span className="mt-2 inline-block text-xs font-bold text-purple-600">
                  {offer.discount}
                </span>
              </div>

              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-purple-600" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}