"use client";

import { motion } from "motion/react";
import {
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    avatar: "SJ",
    review:
      "FreshStock has completely changed the way I shop for groceries. Everything arrives fresh, carefully packed, and right on time.",
    rating: 5,
  },
  {
    name: "Michael Anderson",
    role: "Verified Customer",
    avatar: "MA",
    review:
      "The quality is excellent and the prices are even better. I especially love the weekly deals and how easy it is to order.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Verified Customer",
    avatar: "EC",
    review:
      "I ordered fresh fruits and vegetables for my family and was really impressed. FreshStock is now my go-to grocery store.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50/70 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            <Sparkles className="h-4 w-4" />
            Customer Stories
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Loved by shoppers,
            <br />
            <span className="text-purple-600">
              trusted every day.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            See why customers choose FreshStock for fresh products,
            great prices, and a better grocery shopping experience.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 sm:p-8"
            >
              {/* Quote decoration */}
              <div className="absolute right-6 top-6 opacity-10">
                <Quote className="h-16 w-16 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="relative flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>

              {/* Review */}
              <p className="relative mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                “{testimonial.review}”
              </p>

              {/* Customer */}
              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">

                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  {testimonial.avatar}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Purple accent */}
              <div className="absolute bottom-0 left-8 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">
              4.9/5
            </span>{" "}
            from thousands of happy customers
          </p>
        </motion.div>

      </div>
    </section>
  );
}