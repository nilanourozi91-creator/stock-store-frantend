"use client";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useActionState, useState } from "react";
import Cookie from "js-cookie";
import { Login } from "@/lib/auth.action";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state,action]=  useActionState(Login,{
      data:'', 
      success:false,
    });
        // console.log(state);
    if (state.data !=='someting went wrong') {
      Cookie.set('token',state.data);
    }
  return (
    
    <main className="min-h-screen bg-gray-50 text-black">
    

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
                Welcome back
              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white xl:text-6xl">
                Fresh food,
                <br />
                delivered to
                <br />
                your door.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-purple-100">
                Sign in to your FreshStock account and continue
                shopping fresh groceries at great prices.
              </p>

              {/* Feature cards */}
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xl">🥑</p>
                  <p className="mt-2 text-xs font-semibold text-white">
                    Fresh products
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xl">🚚</p>
                  <p className="mt-2 text-xs font-semibold text-white">
                    Fast delivery
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xl">💜</p>
                  <p className="mt-2 text-xs font-semibold text-white">
                    Great prices
                  </p>
                </div>

              </div>

            </div>

            {/* Footer */}
            <p className="text-xs text-purple-200">
              © 2026 FreshStock. Freshness delivered.
            </p>

          </div>

        </section>

        {/* Right - Login */}
        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-12">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-10 flex items-center justify-center gap-3 lg:hidden"
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
                Welcome back 👋
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Sign in to FreshStock
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Enter your details to access your account.
              </p>

            </div>

            {/* Form */}
            <form className="mt-8 space-y-5" action={action}>
                 
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
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-purple-600 hover:text-purple-700"
                  >
                    Forgot password?
                  </Link>

                </div>

                <div className="relative mt-2">

                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    required
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              {/* Remember */}
              <div className="flex items-center gap-3">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />

                <label
                  htmlFor="remember"
                  className="text-xs text-gray-500"
                >
                  Remember me
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
              >
               {/* {pending?'please waite':'login '} */}
                   Login
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs text-gray-400">
                or
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>

            {/* Register */}
            <p className="text-center text-sm text-gray-500">

              Don't have an account?{" "}

              <Link
                href="/register"
                className="font-bold text-purple-600 hover:text-purple-700"
              >
                Create account
              </Link>

            </p>

            {/* Back */}
            <Link
              href="/"
              className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-purple-600"
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
