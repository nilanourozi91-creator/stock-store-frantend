
"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, ShoppingBag } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md">

        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
            <ShoppingBag className="h-5 w-5 text-purple-600" />
          </div>

          <span className="text-xl font-black text-gray-900">
            FreshStock
          </span>
        </Link>

        <div className="mt-10 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-100 sm:p-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>

          <div className="mt-6 text-center">

            <p className="text-sm font-bold text-purple-600">
              Password recovery
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-900">
              Forgot your password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your email and we'll send you a link to reset
              your password.
            </p>

          </div>

          <form className="mt-7">

            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email address
            </label>

            <div className="relative mt-2">

              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />

            </div>

            <button
              type="submit"
              className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
            >
              Send reset link
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

          </form>

          <Link
            href="/login"
            className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-purple-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>

        </div>

      </div>

    </main>
  );
}
