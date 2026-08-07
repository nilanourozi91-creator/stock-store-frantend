
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  MapPin,
  Package,
  Phone,
  ShoppingBag,
  Truck,
} from "lucide-react";

const order = {
  id: "FS-2026-00124",
  date: "August 5, 2026",
  status: "Delivered",
  deliveredDate: "August 6, 2026",

  items: [
    {
      name: "Fresh Avocado",
      description: "Fresh and creamy avocado",
      quantity: 2,
      price: 4.99,
      emoji: "🥑",
      bg: "bg-green-50",
    },
    {
      name: "Organic Strawberries",
      description: "Sweet organic strawberries",
      quantity: 1,
      price: 5.49,
      emoji: "🍓",
      bg: "bg-red-50",
    },
    {
      name: "Organic Milk",
      description: "Fresh organic milk",
      quantity: 2,
      price: 3.49,
      emoji: "🥛",
      bg: "bg-blue-50",
    },
  ],

  subtotal: 22.45,
  delivery: 3.0,
  discount: 0,
  total: 25.45,

  address: {
    name: "Nila Nourozi",
    phone: "+93 700 000 000",
    address: "Main Street, Herat",
    city: "Herat, Afghanistan",
  },

  payment: {
    method: "Cash on Delivery",
    status: "Paid",
  },
};

const timeline = [
  {
    title: "Order delivered",
    description: "Your order has been successfully delivered.",
    date: "Aug 6, 2026 • 10:32 AM",
    completed: true,
    current: true,
    icon: CheckCircle2,
  },
  {
    title: "Out for delivery",
    description: "Your order is on its way to you.",
    date: "Aug 6, 2026 • 8:15 AM",
    completed: true,
    current: false,
    icon: Truck,
  },
  {
    title: "Order packed",
    description: "Your products have been packed and prepared.",
    date: "Aug 5, 2026 • 6:40 PM",
    completed: true,
    current: false,
    icon: Package,
  },
  {
    title: "Order confirmed",
    description: "We received and confirmed your order.",
    date: "Aug 5, 2026 • 4:22 PM",
    completed: true,
    current: false,
    icon: Check,
  },
];

export default function OrderDetailsPage() {
  return (
    <main className="min-h-screen bg-gray-50/40">

      {/* Purple header */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="absolute right-20 top-20 h-4 w-4 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">

          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-100 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to orders
          </Link>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm font-medium text-purple-200">
                Order details
              </p>

              <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
                #{order.id}
              </h1>

              <p className="mt-2 text-sm text-purple-100">
                Placed on {order.date}
              </p>

            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              {order.status}
            </span>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">

            {/* Left */}
            <div className="space-y-6">

              {/* Delivery timeline */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                    <Truck className="h-5 w-5 text-purple-600" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Delivery status
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Delivered on {order.deliveredDate}
                    </p>
                  </div>

                </div>

                <div className="mt-8">

                  {timeline.map((step, index) => {

                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="relative flex gap-4"
                      >

                        {/* Line */}
                        {index < timeline.length - 1 && (
                          <div className="absolute left-5 top-10 h-full w-px bg-purple-100" />
                        )}

                        {/* Icon */}
                        <div
                          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            step.current
                              ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="pb-7">

                          <div className="flex flex-wrap items-center gap-2">

                            <h3 className="text-sm font-bold text-gray-900">
                              {step.title}
                            </h3>

                            {step.current && (
                              <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600">
                                Current
                              </span>
                            )}

                          </div>

                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            {step.description}
                          </p>

                          <p className="mt-2 text-[10px] font-medium text-gray-400">
                            {step.date}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* Products */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white shadow-sm">

                <div className="border-b border-gray-100 px-6 py-5 sm:px-8">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                        <ShoppingBag className="h-5 w-5 text-purple-600" />
                      </div>

                      <div>
                        <h2 className="text-lg font-bold text-gray-900">
                          Order items
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                          {order.items.length} products
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="divide-y divide-gray-100">

                  {order.items.map((item) => (

                    <div
                      key={item.name}
                      className="flex items-center gap-4 px-6 py-5 sm:px-8"
                    >

                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl ${item.bg}`}
                      >
                        {item.emoji}
                      </div>

                      <div className="min-w-0 flex-1">

                        <h3 className="truncate text-sm font-bold text-gray-900">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {item.description}
                        </p>

                        <p className="mt-2 text-xs text-gray-400">
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-sm font-black text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        <p className="mt-1 text-[10px] text-gray-400">
                          ${item.price.toFixed(2)} each
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* Address */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Delivery address
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Where your order was delivered.
                    </p>
                  </div>

                </div>

                <div className="mt-6 rounded-2xl bg-gray-50 p-5">

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                      <MapPin className="h-4 w-4 text-purple-600" />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-gray-900">
                        {order.address.name}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {order.address.address}
                        <br />
                        {order.address.city}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                        <Phone className="h-3.5 w-3.5" />
                        {order.address.phone}
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <aside className="space-y-6">

              {/* Summary */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-bold text-gray-900">
                  Order summary
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${order.subtotal.toFixed(2)}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Delivery
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${order.delivery.toFixed(2)}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Discount
                    </span>

                    <span className="font-semibold text-green-600">
                      -${order.discount.toFixed(2)}
                    </span>

                  </div>

                  <div className="border-t border-gray-100 pt-4">

                    <div className="flex items-end justify-between">

                      <span className="text-sm font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-black text-purple-600">
                        ${order.total.toFixed(2)}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Payment */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                  </div>

                  <div>

                    <h2 className="text-sm font-bold text-gray-900">
                      Payment
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      {order.payment.method}
                    </p>

                  </div>

                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">

                  <span className="text-xs font-semibold text-gray-600">
                    Payment status
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {order.payment.status}
                  </span>

                </div>

              </div>

              {/* Need help */}
              <div className="rounded-[1.5rem] bg-purple-600 p-6 text-white shadow-lg shadow-purple-100">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Clock3 className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-lg font-bold">
                  Need help?
                </h2>

                <p className="mt-2 text-sm leading-6 text-purple-100">
                  Have a question about your order? Our
                  support team is ready to help.
                </p>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-purple-700 transition hover:bg-purple-50"
                >
                  Contact support
                  <ChevronRight className="h-4 w-4" />
                </button>

              </div>

              {/* Continue shopping */}
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
              >
                Continue shopping
                <ChevronRight className="h-4 w-4" />
              </Link>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}
