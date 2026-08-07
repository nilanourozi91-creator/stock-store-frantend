
"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  Home,
  RefreshCcw,
  ShoppingBag,
} from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-4">

      {/* Decorations */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-100" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-50" />

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

        {/* Error icon */}
        <div className="mt-12">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-purple-600 shadow-xl shadow-purple-200">

            <AlertCircle className="h-12 w-12 text-white" />

          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
            Something went wrong
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Oops! Something happened.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            We couldn't load this page correctly. Please
            try again or return to the FreshStock homepage.
          </p>

        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
          >
            <RefreshCcw className="h-4 w-4" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            <Home className="h-4 w-4" />
            Back home
          </Link>

        </div>

        {/* Back */}
        <Link
          href="/shop"
          className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-purple-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Continue shopping
        </Link>

        <div className="mt-10 border-t border-gray-200 pt-6">

          <p className="text-xs text-gray-400">
            FreshStock · Fresh groceries delivered to your door.
          </p>

        </div>

      </div>

    </main>
  );
}