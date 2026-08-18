"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] dark:shadow-none dark:bg-gray-700 bg-purple-600 px-6 py-12 shadow-xl shadow-purple-200 sm:px-10 lg:px-16 lg:py-16"
        >
          {/* Background Decorations */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

          <div className="absolute right-20 top-16 h-3 w-3 rounded-full bg-white/30" />

          <div className="absolute bottom-20 right-1/3 h-5 w-5 rounded-full bg-white/20" />

          <div className="absolute left-1/3 top-10 h-2 w-2 rounded-full bg-white/20" />

          {/* Content */}

          <div className="relative mx-auto max-w-3xl text-center">

            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full dark:text-white/80 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Fresh deals in your inbox
            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white/80 text-white sm:text-4xl lg:text-5xl">
              Stay fresh,
              <br />
              stay updated.
            </h2>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-purple-100 sm:text-base dark:text-white/80">
              Subscribe to FreshStock and be the first to know about
              new products, special offers, fresh deals, and exclusive
              discounts.
            </p>

            {/* Form */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="h-14 w-full rounded-full border-0 dark:bg-gray-600 dark:text-gray-300 bg-white pl-12 pr-5 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                type="submit"
                className="group flex h-14 items-center justify-center gap-2 rounded-full dark:bg-gray-600 bg-gray-950 px-7 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-900"
              >
                Subscribe

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Privacy */}

            <p className="mt-5 text-xs text-purple-100 dark:text-white/80">
              No spam. Just fresh products, useful deals, and
              occasional FreshStock updates.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}