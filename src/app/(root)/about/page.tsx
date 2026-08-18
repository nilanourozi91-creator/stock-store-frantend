
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Truck,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Freshness First",
    description:
      "We focus on quality and freshness so you can feel confident about what goes into your basket.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Trust",
    description:
      "Every product is selected with care to give you reliable quality at a fair price.",
  },
  {
    icon: Heart,
    title: "Customers Matter",
    description:
      "We build FreshStock around the people we serve and always look for ways to make shopping better.",
  },
  {
    icon: Truck,
    title: "Simple Delivery",
    description:
      "From browsing to checkout, we make getting your everyday groceries as simple as possible.",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Happy Customers",
  },
  {
    value: "500+",
    label: "Fresh Products",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-purple-600">

        {/* Background decoration */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />

        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/5" />

        <div className="absolute left-10 top-24 h-4 w-4 rounded-full bg-white/20" />

        <div className="absolute right-1/4 top-32 h-3 w-3 rounded-full bg-white/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div className="max-w-xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                About FreshStock
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fresh food.
                <br />
                Better living.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-purple-100 sm:text-lg">
                FreshStock makes everyday grocery shopping simple,
                convenient and affordable. We bring fresh products
                together in one place so you can spend less time
                searching and more time enjoying what matters.
              </p>

              <Link
                href="/shop"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                Start shopping

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

            {/* Visual */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="relative w-full max-w-md">

                {/* Main card */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                      <ShoppingBasket className="h-7 w-7 text-purple-600" />
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                      Fresh & trusted
                    </span>

                  </div>

                  <div className="mt-8">

                    <p className="text-sm font-medium text-gray-400">
                      Our promise
                    </p>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900">
                      Good food,
                      <br />
                      made simple.
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                      Quality products, fair prices and a shopping
                      experience designed around you.
                    </p>

                  </div>

                  {/* Product icons */}
                  <div className="mt-7 grid grid-cols-4 gap-3">

                    <div className="flex h-16 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                      🥑
                    </div>

                    <div className="flex h-16 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                      🍎
                    </div>

                    <div className="flex h-16 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                      🍊
                    </div>

                    <div className="flex h-16 items-center justify-center rounded-2xl bg-yellow-50 text-2xl">
                      🍋
                    </div>

                  </div>

                </div>

                {/* Floating card */}
                <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        100% Fresh
                      </p>

                      <p className="text-xs text-gray-400">
                        Quality matters
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <div>

              <p className="text-sm font-semibold text-purple-600">
                Our story
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                We believe fresh food
                <br className="hidden sm:block" />
                should be easy to find.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-gray-500 sm:text-base">

                <p>
                  FreshStock was created with a simple idea: grocery
                  shopping should be easier, faster and more enjoyable.
                </p>

                <p>
                  Instead of spending hours looking for the products
                  you need, FreshStock brings everyday essentials,
                  fresh produce and quality groceries together in one
                  convenient place.
                </p>

                <p>
                  We are building a shopping experience where quality,
                  affordability and convenience come first.
                </p>

              </div>

            </div>

            {/* Story card */}
            <div className="relative">

              <div className="rounded-[2rem] bg-purple-50 p-6 sm:p-8">

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <span className="text-4xl">🥬</span>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Fresh Produce
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500">
                      Carefully selected products for your everyday needs.
                    </p>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                    <span className="text-4xl">🛒</span>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Easy Shopping
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500">
                      Everything you need, organized in one place.
                    </p>
                  </div>

                  <div className="-mt-4 rounded-2xl bg-white p-6 shadow-sm">
                    <span className="text-4xl">💜</span>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Made for You
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500">
                      A shopping experience designed around customers.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <span className="text-4xl">🚚</span>

                    <h3 className="mt-4 font-bold text-gray-900">
                      Convenient
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500">
                      Simple ordering and convenient delivery.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold text-purple-600">
              What we stand for
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
              Everything we do is guided by a few simple principles.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 transition-colors group-hover:bg-purple-600">

                    <Icon className="h-5 w-5 text-purple-600 transition-colors group-hover:text-white" />

                  </div>

                  <h3 className="mt-6 font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[2rem] bg-purple-600 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (

              <div
                key={stat.label}
                className={`px-6 py-10 text-center sm:px-8 ${
                  index !== stats.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r sm:border-white/10 lg:border-r"
                    : ""
                }`}
              >

                <p className="text-4xl font-black tracking-tight text-white">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-purple-100">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-purple-600 px-6 py-14 text-center shadow-xl shadow-purple-100 sm:px-10 lg:py-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative mx-auto max-w-2xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Heart className="h-7 w-7 text-white" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s make grocery shopping better.
              </h2>

              <p className="mt-4 text-sm leading-6 text-purple-100 sm:text-base">
                Discover fresh products, great prices and everything
                you need for your everyday life.
              </p>

              <Link
                href="/shop"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                Explore FreshStock

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
