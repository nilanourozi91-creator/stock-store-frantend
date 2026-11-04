import Image from "next/image";
import { DatabaseCheck, Eye, LucideProps, Plus, TrendingUp } from "lucide-react";
import { div } from "framer-motion/client";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";
type pro={
  name:string,
   icon:any,
  href:string,
}
const products = [
  {
    name: "Add Products",
    icon:Plus,
    href:'/Addprodects',
  },
  {
    name: "Add Catagory",
    icon:Plus,
    href:'/AddCatagorys',
  },
  {
    name: "View Orders",
    icon:Eye,
    href:'/OrderReports',
  },
  {
    name: "View Reports",
    icon:DatabaseCheck,
    href:'/Allrepors',
  },
  
  
];

export default function BestSellingProducts() {
  return (
    <div className="rounded-[1.5rem] border border-gray-100 dark:bg-gray-900 dark:text-white dark:border-gray-800 bg-white p-6 shadow-sm">
         
      {/* Header */}
      <div className="flex items-center h-fit w-fit justify-between">

        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200">
            Best Selling
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            Top products this month
          </p>
        </div>

        {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
          <TrendingUp className="h-5 w-5 text-purple-600" />
        </div> */}

      </div>

      {/* Products */}
      <div className="mt-5 space-y-5 w-full items-center">

        {products.map((product, index) => (

        <div key={index} className=" items-center px-4 py-2 bg-gray-800/70">
          <Link href={product.href}> {product.name}</Link>
        </div>

        ))}

      </div>

      <button className="mt-6 w-full rounded-xl bg-purple-50 py-3 text-sm font-semibold dark:bg-purple-500 dark:text-white text-purple-600 transition hover:bg-purple-100">
        View all products
      </button>

    </div>
  );
}