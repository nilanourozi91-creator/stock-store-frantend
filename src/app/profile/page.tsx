
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  Package,
  Phone,
  Save,
  ShoppingBag,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GetUser } from "@/lib/getuserinfo";
import { strict } from "assert";
 type typeuser={
    name:string,
    email:any,
    phoneNumber:Number,
    password:any,
    role:string,
    LastName?:string,
 }
export default function ProfilePage() {
    const [user ,setuser]=useState<typeuser|null>(null);
      useEffect(()=>{
          GetUser().then(setuser);
      },[])
  return (
    <main className="min-h-screen bg-gray-50/40">

      {/* Header */}
      <section className="relative overflow-hidden bg-purple-600">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

        <div className="absolute right-20 top-20 h-4 w-4 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

          <p className="text-sm font-semibold text-purple-200">
            FreshStock Account
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
            My Profile
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
            Manage your personal information, delivery
            details, and account preferences.
          </p>

        </div>
      </section>

      {/* Profile */}
      <section className="py-10 sm:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            {/* Sidebar */}
            <aside>

              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

                {/* Avatar */}
                <div className="text-center">

                  <div className="relative mx-auto h-24 w-24">

                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-purple-100 text-3xl font-black text-purple-600">
                      {user?.name.toUpperCase().slice(0,1)}
                    </div>

                    <button
                      type="button"
                      className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white bg-purple-600 text-white shadow-sm transition hover:bg-purple-700"
                    >
                      <Camera className="h-4 w-4" />
                    </button>

                  </div>

                  <h2 className="mt-5 text-lg font-bold text-gray-900">
                    {user?.name}
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    FreshStock {user?.role}
                  </p>

                </div>

                {/* Navigation */}
                <nav className="mt-7 space-y-1">

                  <Link
                    href="/profile"
                    className="flex items-center justify-between rounded-xl bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-600"
                  >
                    <span className="flex items-center gap-3">
                      <User className="h-4 w-4" />
                      Profile
                    </span>

                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/orders"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-purple-600"
                  >
                    <span className="flex items-center gap-3">
                      <Package className="h-4 w-4" />
                      My Orders
                    </span>

                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/cart"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-purple-600"
                  >
                    <span className="flex items-center gap-3">
                      <ShoppingBag className="h-4 w-4" />
                      My Cart
                    </span>

                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-purple-600"
                  >
                    <span className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      Continue Shopping
                    </span>
                  </Link>

                </nav>

              </div>

            </aside>

            {/* Main */}
            <div className="space-y-6">

              {/* Personal Information */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
                      <User className="h-5 w-5 text-purple-600" />
                    </div>

                    <div>

                      <h2 className="text-lg font-bold text-gray-900">
                        Personal Information
                      </h2>

                      <p className="mt-1 text-xs text-gray-500">
                        Update your personal details.
                      </p>

                    </div>

                  </div>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
                    <Check className="h-3.5 w-3.5" />
                    Verified account
                  </span>

                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      First name
                    </label>

                    <input
                      type="text"
                      defaultValue={`${user?.name}`}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      Last name
                    </label>

                    <input
                      type="text"
                      defaultValue={`${user?.LastName}`}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Mail className="h-4 w-4 text-gray-400" />
                      Email address
                    </label>

                    <input
                      type="email"
                      defaultValue={`${user?.email}`}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div>

                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Phone className="h-4 w-4 text-gray-400" />
                      Phone number
                    </label>
                    <input
                      type="tel"
                      defaultValue={`${user?.phoneNumber}`}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                </div>

                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  <Save className="h-4 w-4" />
                  Save changes
                </button>

              </div>

              {/* Delivery Address */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Delivery Address
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Your default delivery location.
                    </p>

                  </div>

                </div>

                <div className="mt-7 rounded-2xl border border-purple-100 bg-purple-50 p-5">

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                        <MapPin className="h-4 w-4 text-purple-600" />
                      </div>

                      <div>

                        <div className="flex flex-wrap items-center gap-2">

                          <p className="text-sm font-bold text-gray-900">
                            Home
                          </p>

                          <span className="rounded-full bg-purple-100 px-2.5 py-1 text-[10px] font-bold text-purple-600">
                            Default
                          </span>

                        </div>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Main Street, Herat
                          <br />
                          Herat, Afghanistan
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700"
                    >
                      Edit
                    </button>

                  </div>

                </div>

                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3.5 text-sm font-semibold text-gray-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
                >
                  <MapPin className="h-4 w-4" />
                  Add another address
                </button>

              </div>

              {/* Security */}
              <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100">
                    <Lock className="h-5 w-5 text-orange-600" />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Password & Security
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Keep your FreshStock account secure.
                    </p>

                  </div>

                </div>

                <div className="mt-7 space-y-4">

                  <div>

                    <label className="text-sm font-semibold text-gray-700">
                      Current password
                    </label>

                    <input
                      type="password"
                      placeholder="•••••••"
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    />

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div>

                      <label className="text-sm font-semibold text-gray-700">
                        New password
                      </label>

                      <input
                        type="password"
                        placeholder="New password"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                    <div>

                      <label className="text-sm font-semibold text-gray-700">
                        Confirm password
                      </label>

                      <input
                        type="password"
                        placeholder="Confirm password"
                        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      />

                    </div>

                  </div>

                </div>

                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3.5 text-sm font-bold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                >
                  <Lock className="h-4 w-4" />
                  Update password
                </button>

              </div>

              {/* Account stats */}
              <div className="grid gap-4 sm:grid-cols-3">

                <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <Package className="h-5 w-5 text-purple-600" />
                  </div>

                  <p className="mt-5 text-2xl font-black text-gray-900">
                    12
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Total orders
                  </p>

                </div>

                <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>

                  <p className="mt-5 text-2xl font-black text-gray-900">
                    10
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Completed orders
                  </p>

                </div>

                <div className="rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                    <ShoppingBag className="h-5 w-5 text-orange-600" />
                  </div>

                  <p className="mt-5 text-2xl font-black text-gray-900">
                    $248
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Total spent
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
