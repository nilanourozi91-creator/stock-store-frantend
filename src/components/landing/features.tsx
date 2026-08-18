
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
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">

          <span id="Home"  className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600">
            Why Choose FreshStock
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            Everything you need from a modern grocery store
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We combine fresh products, affordable prices,
            fast delivery, and secure shopping to create
            the best grocery experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 transition group-hover:bg-purple-600">

                  <Icon className="h-8 w-8 text-purple-600 transition group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-purple-600 transition group-hover:gap-3">
                  Learn More

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}