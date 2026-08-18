
"use client";

import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../theme-toggle";
import Login from "../share/header/login";
import Getuserinfo from "../share/header/getuserinfo";
import LoginBtn from "../share/header/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-gray-800 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="text-2xl font-bold tracking-tight dark:text-gray-300">
            Fresh<span className="text-purple-600 dark:text-purple-500">Stock</span>
          </div>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
            Fresh food · Better living
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex dark:hover:text-purple-500">
          <Link
            href="/"
            className="text-sm font-medium text-purple-600 dark:text-purple-500 transition hover:text-purple-700 dark:hover:text-purple-500"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm font-medium dark:hover:text-purple-500  text-gray-600 transition hover:text-purple-600"
          >
            Shop
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium dark:hover:text-purple-500  text-gray-600 transition hover:text-purple-600"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium dark:hover:text-purple-500  text-gray-600 transition hover:text-purple-600"
          >
            About
          </Link>
        </nav>
          
        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* Search */}
          <button
            aria-label="Search"
            className="rounded-full p-2.5 text-gray-600 transition dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-purple-600"
          >
            <Search className="h-5 w-5" />
          </button>
           <ThemeToggle />
          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2.5 dark:hover:bg-gray-700 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
          >
            <ShoppingCart className="h-5 w-5" />

            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          {/* Login */}
          <Getuserinfo/>
          {/* Register */}
          <Link
            href="/register"
            className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 dark:hover:bg-purple-500"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 lg:hidden">
           {/* Search */}
          <button
            aria-label="Search"
            className="rounded-full p-2.5 text-gray-600 transition dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-purple-600"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative rounded-full p-2.5 text-gray-600"
          >
            <ShoppingCart className="h-5 w-5" />
              
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full p-2.5 text-gray-700 hover:bg-gray-100 "
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden dark:bg-gray-800">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-5 sm:px-6">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50  dark:hover:bg-gray-700"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50  dark:hover:bg-gray-700"
            >
              Categories
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50  dark:hover:bg-gray-700"
            >
              About
            </Link>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t pt-4">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-gray-200 py-2.5 text-sm font-medium  dark:hover:bg-gray-700"
              >
                <User className="h-4 w-4" />
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-full bg-purple-600 py-2.5 text-center text-sm font-semibold text-white  dark:hover:bg-gray-700"
              >
                Get Started
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

