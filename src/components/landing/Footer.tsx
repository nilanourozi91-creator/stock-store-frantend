import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UpBtn from "../upBtn";
const shopLinks = [
  { name: "All Products", href: "/shop" },
  { name: "Fresh Fruits", href: "/shop?category=fruits" },
  { name: "Vegetables", href: "/shop?category=vegetables" },
  { name: "Best Sellers", href: "/shop?sort=popular" },
  { name: "Special Offers", href: "/shop?offers=true" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Delivery Information", href: "/delivery" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:bg-gray-900 dark:border-none">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center dark:shadow-none dark:bg-purple-500 rounded-xl bg-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-200">
                F
              </div>

              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white/50">
                Fresh<span className="text-purple-600 dark:text-purple-500">Stock</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500 dark:text-gray-300">
              Fresh products, better prices, and a simple way to
              shop for everything your home needs.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-gray-500 dark:text-gray-100 bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
              >
                <FaFacebook className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center dark:bg-gray-500 dark:text-gray-100 justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center dark:bg-gray-500 dark:text-gray-100 justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
              >
                <FaTwitter className="h-4 w-4" />
              </Link>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-300 transition hover:text-purple-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:text-purple-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center dark:bg-gray-500 dark:text-gray-100 justify-center rounded-lg bg-purple-100">
                  <MapPin className="h-4 w-4 text-purple-600 dark:bg-gray-500 dark:text-gray-100" />
                </div>

                <p className="text-sm leading-5 text-gray-300">
                  Ghazni Jaghori frashStock
                  <br />
                  45 floor
                </p>
              </div>
                 
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center dark:bg-gray-500 dark:text-gray-100 justify-center rounded-lg bg-purple-100">
                  <Phone className="h-4 w-4 text-purple-600 dark:bg-gray-500 dark:text-gray-100" />
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  +93 792410628 
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center dark:bg-gray-500 dark:text-gray-100 justify-center rounded-lg bg-purple-100">
                  <Mail className="h-4 w-4 text-purple-600 dark:bg-gray-500 dark:text-gray-100" />
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  hello@freshstock.com
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Mini Newsletter CTA */}
        <div className="mt-12 overflow-hidden rounded-[1.5rem] bg-purple-50 dark:bg-gray-600 p-6 sm:flex sm:items-center sm:justify-between sm:p-7">

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Don't miss our fresh deals
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
              Get exclusive offers and new product updates.
            </p>
          </div>

          <Link
            href="#newsletter"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-purple-600 dark:shadow-none dark:bg-purple-500 dark:text-gray-200 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 sm:mt-0"
          >
            Subscribe

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
      {/* Bottom */}
      <div className="border-t relative border-gray-100">
          <UpBtn/>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-xs text-gray-400 dark:text-gray-200">
            © {new Date().getFullYear()} FreshStock. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs dark:text-gray-200 text-gray-400 transition hover:text-purple-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-gray-400 dark:text-gray-200 transition hover:text-purple-600"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
