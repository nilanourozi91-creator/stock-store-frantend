"use client";

import Link from "next/link";
import {
ChevronRight,
Heart,
LogOut,
MapPin,
Package,
Settings,
ShoppingBag,
User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GetUser } from "@/lib/getuserinfo";
 type typeuser={
    name:string,
    email:any,
 }
export default function AccountPage() {
      const [user,setuser]=useState<typeuser|null>(null);
       useEffect(()=>{
           GetUser().then(setuser);
       },[])
return (
<main className="min-h-screen bg-gray-50">

  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

    {/* Header */}
    <div>
      <p className="text-sm font-bold text-purple-600">
        My account
      </p>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
        Welcome back 👋
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Manage your account, orders, and preferences.
      </p>
    </div>

    {/* Profile card */}
    <div className="mt-8 rounded-[2rem] bg-purple-600 p-6 shadow-xl shadow-purple-100 sm:p-8">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-xl font-black text-white">
            {user?.name.toUpperCase().slice(0,1)}
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              {user?.name}
            </h2>

            <p className="mt-1 text-sm text-purple-100">
              {user?.email}
            </p>
          </div>

        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50">
          <Settings className="h-4 w-4" />
          <Link href={'/profile'}>
          
          Edit profile
          </Link>
        </button>

      </div>

    </div>

    {/* Account grid */}
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      <AccountCard
        icon={Package}
        title="My orders"
        description="Track your recent orders"
        href="/orders"
      />

      <AccountCard
        icon={MapPin}
        title="Addresses"
        description="Manage your delivery addresses"
        href="/account/addresses"
      />

      <AccountCard
        icon={Heart}
        title="Wishlist"
        description="Products you saved"
        href="/wishlist"
      />

      <AccountCard
        icon={User}
        title="Personal information"
        description="Update your account details"
        href="/account/profile"
      />

      <AccountCard
        icon={ShoppingBag}
        title="Shopping cart"
        description="View items in your cart"
        href="/cart"
      />

      <AccountCard
        icon={Settings}
        title="Settings"
        description="Manage your preferences"
        href="/account/settings"
      />

    </div>

    {/* Logout */}
    <div className="mt-8">

      <button className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-5 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50">
        <LogOut className="h-4 w-4" />
        Sign out
      </button>

    </div>

  </div>

</main>

);
}

function AccountCard({
icon: Icon,
title,
description,
href,
}: {
icon: React.ElementType;
title: string;
description: string;
href: string;
}) {
return (
<Link href={href} className="group flex items-center justify-between rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple-100 hover:shadow-lg hover:shadow-purple-50" >
<div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
      <Icon className="h-5 w-5 text-purple-600" />
    </div>

    <div>
      <h3 className="text-sm font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </div>

  </div>

  <ChevronRight className="h-4 w-4 text-gray-300 transition group-hover:translate-x-1 group-hover:text-purple-600" />

</Link>

);
}