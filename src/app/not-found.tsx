
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Search,
  ShoppingBag,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-4">

      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-100" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-50" />

      <div className="absolute left-20 top-24 h-4 w-4 rounded-full bg-purple-200" />

      <div className="absolute bottom-28 right-24 h-6 w-6 rounded-full bg-purple-100" />

      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Logo */}
        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
            <ShoppingBag className="h-5 w-5 text-purple-600" />
          </div>

          <span className="text-xl font-black tracking-tight text-gray-900">
            FreshStock
          </span>
        </Link>

        {/* 404 */}
        <div className="mt-12">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-purple-600 shadow-xl shadow-purple-200">

            <Search className="h-12 w-12 text-white" />

          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Error 404
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Fresh page not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Sorry, we couldn't find the page you're looking
            for. It may have been moved, deleted, or never
            existed.
          </p>

        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
          >
            <Home className="h-4 w-4" />
            Back home

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            <ShoppingBag className="h-4 w-4" />
            Browse shop
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6">

          <p className="text-xs text-gray-400">
            FreshStock · Fresh groceries delivered to your door.
          </p>

        </div>

      </div>

    </main>
  );
}
