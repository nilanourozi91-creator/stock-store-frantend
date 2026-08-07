'use client'
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
    <section className="bg-white py-20 sm:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-600">
              Shop by category
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Everything fresh,
              <br className="sm:hidden" /> all in one place.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Explore our carefully selected categories and
              find everything you need for your everyday life.
            </p>
          </div>

          <Link
            href="/categories"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-700"
          >
            View all categories

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Categories */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group"
              >
                <Card className="h-full overflow-hidden border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-100/40">
                       <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6 }}
                       
                       >

                  <CardContent className="flex flex-col items-center p-6 text-center">

                    {/* Icon */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-50 transition-colors duration-300 group-hover:bg-purple-100">

                      <Icon className="h-9 w-9 text-purple-600 transition-transform duration-300 group-hover:scale-110" />

                    </div>

                    {/* Text */}
                    <h3 className="mt-5 text-sm font-semibold text-gray-900">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {category.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                       </motion.div >

                </Card>
              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}