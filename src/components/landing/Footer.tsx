// import Link from "next/link";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   ArrowRight,
// } from "lucide-react";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// const shopLinks = [
//   { name: "All Products", href: "/shop" },
//   { name: "Fresh Fruits", href: "/shop?category=fruits" },
//   { name: "Vegetables", href: "/shop?category=vegetables" },
//   { name: "Best Sellers", href: "/shop?sort=popular" },
//   { name: "Special Offers", href: "/shop?offers=true" },
// ];

// const companyLinks = [
//   { name: "About Us", href: "/about" },
//   { name: "Contact Us", href: "/contact" },
//   { name: "FAQ", href: "/faq" },
//   { name: "Delivery Information", href: "/delivery" },
//   { name: "Privacy Policy", href: "/privacy" },
// ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-100 bg-white">

//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//           {/* Brand */}
//           <div className="lg:col-span-1">

//             <Link
//               href="/"
//               className="inline-flex items-center gap-2"
//             >
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-200">
//                 F
//               </div>

//               <span className="text-xl font-bold tracking-tight text-gray-900">
//                 Fresh<span className="text-purple-600">Stock</span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
//               Fresh products, better prices, and a simple way to
//               shop for everything your home needs.
//             </p>

//             {/* Social */}
//             <div className="mt-6 flex items-center gap-3">

//               <Link
//                 href="#"
//                 aria-label="Facebook"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
//               >
//                 <FaFacebook className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 aria-label="Instagram"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
//               >
//                 <FaInstagram className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 aria-label="Twitter"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-purple-600 hover:text-white"
//               >
//                 <FaTwitter className="h-4 w-4" />
//               </Link>

//             </div>
//           </div>

//           {/* Shop */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900">
//               Shop
//             </h3>

//             <ul className="mt-5 space-y-3">
//               {shopLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-gray-500 transition hover:text-purple-600"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900">
//               Company
//             </h3>

//             <ul className="mt-5 space-y-3">
//               {companyLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-gray-500 transition hover:text-purple-600"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900">
//               Get in touch
//             </h3>

//             <div className="mt-5 space-y-4">

//               <div className="flex items-start gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100">
//                   <MapPin className="h-4 w-4 text-purple-600" />
//                 </div>

//                 <p className="text-sm leading-5 text-gray-500">
//                   123 Fresh Street
//                   <br />
//                   Your City, Country
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100">
//                   <Phone className="h-4 w-4 text-purple-600" />
//                 </div>

//                 <span className="text-sm text-gray-500">
//                   +1 (000) 123-4567
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100">
//                   <Mail className="h-4 w-4 text-purple-600" />
//                 </div>

//                 <span className="text-sm text-gray-500">
//                   hello@freshstock.com
//                 </span>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Mini Newsletter CTA */}
//         <div className="mt-12 overflow-hidden rounded-[1.5rem] bg-purple-50 p-6 sm:flex sm:items-center sm:justify-between sm:p-7">

//           <div>
//             <h3 className="font-semibold text-gray-900">
//               Don't miss our fresh deals
//             </h3>

//             <p className="mt-1 text-sm text-gray-500">
//               Get exclusive offers and new product updates.
//             </p>
//           </div>

//           <Link
//             href="#newsletter"
//             className="group mt-4 inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 sm:mt-0"
//           >
//             Subscribe

//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>

//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-100">

//         <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

//           <p className="text-xs text-gray-400">
//             © {new Date().getFullYear()} FreshStock. All rights reserved.
//           </p>

//           <div className="flex items-center gap-5">
//             <Link
//               href="/privacy"
//               className="text-xs text-gray-400 transition hover:text-purple-600"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms"
//               className="text-xs text-gray-400 transition hover:text-purple-600"
//             >
//               Terms & Conditions
//             </Link>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }



import Link from "next/link";
import {
// Facebook,
// Instagram,
Mail,
MapPin,
Phone,
ShoppingBag,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
return (
<footer className="border-t border-gray-100 bg-white">

  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

      {/* Brand */}
      <div>

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
            <ShoppingBag className="h-5 w-5 text-purple-600" />
          </div>

          <span className="text-xl font-black text-gray-900">
            FreshStock
          </span>
        </Link>

        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
          Fresh groceries, great prices, and a simple shopping
          experience delivered to your door.
        </p>

        <div className="mt-6 flex gap-2">

          <SocialButton>
            <FaFacebook className="h-4 w-4" />
          </SocialButton>

          <SocialButton>
        <FaInstagram className="h-4 w-4" />
          </SocialButton>

        </div>

      </div>

      {/* Shop */}
      <div>

        <h3 className="text-sm font-bold text-gray-900">
          Shop
        </h3>

        <div className="mt-5 space-y-3">

          <FooterLink href="/shop">
            All products
          </FooterLink>

          <FooterLink href="/shop">
            Fresh fruits
          </FooterLink>

          <FooterLink href="/shop">
            Vegetables
          </FooterLink>

          <FooterLink href="/shop">
            Special offers
          </FooterLink>

        </div>

      </div>

      {/* Company */}
      <div>

        <h3 className="text-sm font-bold text-gray-900">
          Company
        </h3>

        <div className="mt-5 space-y-3">

          <FooterLink href="/about">
            About us
          </FooterLink>

          <FooterLink href="/privacy">
            Privacy policy
          </FooterLink>

          <FooterLink href="/terms">
            Terms of service
          </FooterLink>

          <FooterLink href="/contact">
            Contact us
          </FooterLink>

        </div>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-sm font-bold text-gray-900">
          Contact
        </h3>

        <div className="mt-5 space-y-4">

          <div className="flex gap-3">

            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />

            <span className="text-sm text-gray-500">
              Your location
            </span>

          </div>

          <div className="flex gap-3">

            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />

            <span className="text-sm text-gray-500">
              +93 700 000 000
            </span>

          </div>

          <div className="flex gap-3">

            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />

            <span className="text-sm text-gray-500">
              hello@freshstock.com
            </span>

          </div>

        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-xs text-gray-400">
        © 2026 FreshStock. All rights reserved.
      </p>

      <p className="text-xs text-gray-400">
        Freshness delivered with care 💜
      </p>

    </div>

  </div>

</footer>
);
}

function FooterLink({
href,
children,
}: {
href: string;
children: React.ReactNode;
}) {
return (
<Link href={href} className="block text-sm text-gray-500 transition hover:text-purple-600" >
{children}
</Link>
);
}

function SocialButton({
children,
}: {
children: React.ReactNode;
}) {
return (
<button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-purple-100 hover:text-purple-600" >
{children}
</button>
);
}