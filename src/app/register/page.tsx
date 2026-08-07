
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left - Brand */}
        <section className="relative hidden overflow-hidden bg-purple-600 lg:flex">

          {/* Decorations */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10" />

          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5" />

          <div className="absolute right-24 top-28 h-4 w-4 rounded-full bg-white/20" />

          <div className="absolute bottom-32 right-40 h-6 w-6 rounded-full bg-white/15" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-16">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <ShoppingBag className="h-5 w-5" />
              </div>

              <span className="text-xl font-black tracking-tight">
                FreshStock
              </span>
            </Link>

            {/* Main */}
            <div className="max-w-xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Join FreshStock
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white xl:text-6xl">
                Fresh choices,
                <br />
                better
                <br />
                shopping.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-purple-100">
                Create your FreshStock account and enjoy
                fresh groceries, great prices, and convenient
                delivery.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-3">

                <Benefit text="Fresh products selected for quality" />

                <Benefit text="Weekly deals and special offers" />

                <Benefit text="Simple and convenient shopping" />

                <Benefit text="Easy order tracking" />

              </div>

            </div>

            {/* Footer */}
            <p className="text-xs text-purple-200">
              © 2026 FreshStock. Freshness delivered.
            </p>

          </div>

        </section>

        {/* Right */}
        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-12">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <Link
              href="/"
              className="mb-8 flex items-center justify-center gap-3 lg:hidden"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
                <ShoppingBag className="h-5 w-5 text-purple-600" />
              </div>

              <span className="text-xl font-black text-gray-900">
                FreshStock
              </span>
            </Link>

            {/* Heading */}
            <div className="text-center sm:text-left">

              <p className="text-sm font-semibold text-purple-600">
                Get started ✨
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Join FreshStock and start shopping fresh.
              </p>

            </div>

            {/* Form */}
            <form className="mt-7 space-y-4">

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>

                <div className="relative mt-2">

                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                </div>

              </div>

              {/* Email */}
              <div>

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
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                </div>

              </div>

              {/* Phone */}
              <div>

                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-700"
                >
                  Phone number
                </label>

                <div className="relative mt-2">

                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+93 700 000 000"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <div className="relative mt-2">

                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-purple-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>

                </div>

              </div>

              {/* Confirm Password */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-gray-700"
                >
                  Confirm password
                </label>

                <div className="relative mt-2">

                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-purple-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>

                </div>

              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">

                <input
                  id="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-500"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-purple-600 hover:text-purple-700"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-purple-600 hover:text-purple-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
              >
                Create account

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                href="/login"
                className="font-bold text-purple-600 hover:text-purple-700"
              >
                Sign in
              </Link>

            </p>

            {/* Back */}
            <Link
              href="/"
              className="mx-auto mt-7 flex w-fit items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-purple-600"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Back to FreshStock
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Check className="h-3.5 w-3.5 text-white" />
      </div>

      <span className="text-sm font-medium text-purple-50">
        {text}
      </span>

    </div>
  );
}
