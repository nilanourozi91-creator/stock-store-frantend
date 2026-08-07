"use client";

import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  CreditCard,
  Boxes,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Tags,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Inventory",
    href: "/admin/inventory",
    icon: Boxes,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white">
      <div className="flex h-full flex-col">

        {/* Logo */}

        <div className="flex h-20 items-center px-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Fresh<span className="text-purple-600">Stock</span>
            </h1>

            <p className="text-xs text-muted-foreground">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-1 px-3">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2.5
                  text-sm font-medium transition
                  ${
                    active
                      ? "bg-purple-50 text-purple-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <Icon className="h-5 w-5" />

                {item.title}
              </Link>
            );
          })}

        </nav>

        {/* Bottom */}

        <div className="border-t p-3">

          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <Settings className="h-5 w-5" />

            Settings
          </Link>

          <button
            className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            <LogOut className="h-5 w-5" />

            Logout
          </button>

        </div>

      </div>
    </aside>
  );
}