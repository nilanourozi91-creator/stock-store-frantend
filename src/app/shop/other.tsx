   {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-3">

                {product.images.map((image, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`flex h-24 items-center justify-center rounded-2xl text-4xl transition ${
                      selectedImage === index
                        ? "border-2 border-purple-600 bg-green-50"
                        : "border border-gray-100 bg-gray-50 hover:border-purple-200"
                    }`}
                  >
                    {image}
                  </button>

                ))}

              </div>

            </div>

            {/* Information */}
            <div className="flex flex-col justify-center">

              <p className="text-sm font-semibold text-purple-600">
                {product.category}
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1">

                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                  <span className="font-bold text-gray-900">
                    {product.rating}
                  </span>

                </div>

                <span className="text-sm text-gray-400">
                  {product.reviews} customer reviews
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span className="text-sm font-medium text-green-600">
                  In stock
                </span>

              </div>

              {/* Price */}
              <div className="mt-7 flex items-end gap-3">

                <span className="text-4xl font-black text-purple-600">
                  ${product.price.toFixed(2)}
                </span>

                <span className="mb-1 text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>

                <span className="mb-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Save 23%
                </span>

              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-gray-500">
                {product.description}
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-gray-100" />

              {/* Quantity */}
              <div>

                <p className="text-sm font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="mt-3 flex items-center gap-4">

                  <div className="flex items-center rounded-xl border border-gray-200">

                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      className="flex h-11 w-11 items-center justify-center text-gray-500 transition hover:text-purple-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="flex w-10 justify-center text-sm font-bold text-gray-900">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      className="flex h-11 w-11 items-center justify-center text-gray-500 transition hover:text-purple-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>

                  </div>

                  <span className="text-xs text-gray-400">
                    {product.stock} available
                  </span>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to cart
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-purple-200 px-6 py-4 text-sm font-bold text-purple-600 transition hover:bg-purple-50"
                >
                  Buy now
                </button>

              </div>

              {/* Benefits */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-purple-50 p-4">

                  <Truck className="h-5 w-5 text-purple-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Fast delivery
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Delivered fresh
                  </p>

                </div>

                <div className="rounded-2xl bg-green-50 p-4">

                  <ShieldCheck className="h-5 w-5 text-green-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Quality guaranteed
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Fresh & reliable
                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-4">

                  <Check className="h-5 w-5 text-orange-600" />

                  <p className="mt-3 text-xs font-bold text-gray-900">
                    Easy returns
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Shop with confidence
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Product information */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Description
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                About this product
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Our fresh avocado is carefully selected to provide
                excellent taste, texture and quality. Enjoy it in
                breakfast, salads, sandwiches and your favorite meals.
              </p>

            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Freshness
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Selected with care
              </h2>

              <ul className="mt-4 space-y-3">

                {[
                  "Carefully selected",
                  "Quality checked",
                  "Freshly packed",
                  "Stored properly",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold text-purple-600">
                Delivery
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Fresh to your door
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                We make it easy to receive your groceries at a
                convenient time and keep your products fresh.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Related products */}
      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold text-purple-600">
                You may also like
              </p>

              <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
                Related products
              </h2>

            </div>

            <Link
              href="/shop"
              className="hidden items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 sm:flex"
            >
              View all
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>

          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                href={`/shop/${item.id}`}
                className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50"
              >

                <div
                  className={`flex h-52 items-center justify-center ${item.bg}`}
                >

                  <span className="text-8xl transition-transform duration-500 group-hover:scale-110">
                    {item.emoji}
                  </span>

                </div>

                <div className="p-5">

                  <p className="text-xs font-semibold text-purple-600">
                    FreshStock
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-purple-600">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-xl font-black text-purple-600">
                      ${item.price.toFixed(2)}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>
























// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ChevronDown,
//   Filter,
//   Heart,
//   Search,
//   ShoppingCart,
//   Star,
//   X,
// } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const products = [
//   {
//     id: 1,
//     name: "Fresh Avocado",
//     category: "Fruits",
//     price: 4.99,
//     oldPrice: 6.49,
//     rating: 4.9,
//     reviews: 124,
//     emoji: "🥑",
//     bg: "bg-green-50",
//     badge: "Popular",
//   },
//   {
//     id: 2,
//     name: "Organic Strawberries",
//     category: "Fruits",
//     price: 5.49,
//     oldPrice: 6.99,
//     rating: 4.8,
//     reviews: 98,
//     emoji: "🍓",
//     bg: "bg-red-50",
//     badge: "Sale",
//   },
//   {
//     id: 3,
//     name: "Fresh Oranges",
//     category: "Fruits",
//     price: 3.99,
//     oldPrice: null,
//     rating: 4.7,
//     reviews: 86,
//     emoji: "🍊",
//     bg: "bg-orange-50",
//     badge: null,
//   },
//   {
//     id: 4,
//     name: "Organic Milk",
//     category: "Dairy",
//     price: 3.49,
//     oldPrice: 4.29,
//     rating: 4.9,
//     reviews: 152,
//     emoji: "🥛",
//     bg: "bg-blue-50",
//     badge: "Popular",
//   },
//   {
//     id: 5,
//     name: "Fresh Broccoli",
//     category: "Vegetables",
//     price: 2.99,
//     oldPrice: null,
//     rating: 4.6,
//     reviews: 72,
//     emoji: "🥦",
//     bg: "bg-green-50",
//     badge: null,
//   },
//   {
//     id: 6,
//     name: "Whole Wheat Bread",
//     category: "Bakery",
//     price: 3.79,
//     oldPrice: 4.49,
//     rating: 4.8,
//     reviews: 64,
//     emoji: "🍞",
//     bg: "bg-yellow-50",
//     badge: "Sale",
//   },
//   {
//     id: 7,
//     name: "Fresh Tomatoes",
//     category: "Vegetables",
//     price: 2.49,
//     oldPrice: null,
//     rating: 4.7,
//     reviews: 91,
//     emoji: "🍅",
//     bg: "bg-red-50",
//     badge: null,
//   },
//   {
//     id: 8,
//     name: "Fresh Lemon",
//     category: "Fruits",
//     price: 2.29,
//     oldPrice: null,
//     rating: 4.6,
//     reviews: 57,
//     emoji: "🍋",
//     bg: "bg-yellow-50",
//     badge: null,
//   },
// ];

// const categories = [
//   "All",
//   "Fruits",
//   "Vegetables",
//   "Dairy",
//   "Bakery",
// ];

// export default function ShopPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);

//   const filteredProducts = useMemo(() => {
//     let result = products.filter((product) => {
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesCategory =
//         category === "All" ||
//         product.category === category;

//       return matchesSearch && matchesCategory;
//     });

//     if (sort === "price-low") {
//       result = [...result].sort(
//         (a, b) => a.price - b.price
//       );
//     }

//     if (sort === "price-high") {
//       result = [...result].sort(
//         (a, b) => b.price - a.price
//       );
//     }

//     if (sort === "rating") {
//       result = [...result].sort(
//         (a, b) => b.rating - a.rating
//       );
//     }

//     return result;
//   }, [search, category, sort]);

//   return (
//     <main className="min-h-screen bg-gray-50/40">

//       {/* Hero */}
//       <section className="relative overflow-hidden bg-purple-600">
        

//         <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

//         <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5" />

//         <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

//           <div className="max-w-2xl">

//             <p className="text-sm font-semibold text-purple-200">
//               FreshStock Shop
//             </p>

//             <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
//               Fresh products,
//               <br />
//               delivered to you.
//             </h1>

//             <p className="mt-5 text-sm leading-6 text-purple-100 sm:text-base">
//               Discover fresh groceries, quality products and
//               everyday essentials at great prices.
//             </p>

//           </div>

//         </div>
//       </section>

//       {/* Main */}
//       <section className="py-10 sm:py-14">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           {/* Search + controls */}
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

//             {/* Search */}
//             <div className="relative w-full lg:max-w-md">

//               <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search products..."
//                 className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-5 text-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
//               />

//             </div>

//             {/* Controls */}
//             <div className="flex gap-3">

//               <button
//                 type="button"
//                 onClick={() =>
//                   setShowFilters(!showFilters)
//                 }
//                 className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:text-purple-600 lg:hidden"
//               >
//                 <Filter className="h-4 w-4" />
//                 Filters
//               </button>

//               <div className="relative flex-1 lg:flex-none">

//                 <select
//                   value={sort}
//                   onChange={(event) =>
//                     setSort(event.target.value)
//                   }
//                   className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-semibold text-gray-700 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 lg:w-48"
//                 >
//                   <option value="featured">
//                     Featured
//                   </option>

//                   <option value="price-low">
//                     Price: Low to High
//                   </option>

//                   <option value="price-high">
//                     Price: High to Low
//                   </option>

//                   <option value="rating">
//                     Highest Rated
//                   </option>
//                 </select>

//                 <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

//               </div>

//             </div>

//           </div>

//           {/* Content */}
//           <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">

//             {/* Sidebar */}
//             <aside
//               className={`${
//                 showFilters ? "block" : "hidden"
//               } lg:block`}
//             >

//               <div className="sticky top-24 rounded-[1.5rem] border border-gray-100 bg-white p-5 shadow-sm">

//                 <div className="flex items-center justify-between">

//                   <h2 className="font-bold text-gray-900">
//                     Categories
//                   </h2>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setShowFilters(false)
//                     }
//                     className="lg:hidden"
//                   >
//                     <X className="h-5 w-5 text-gray-400" />
//                   </button>

//                 </div>

//                 <div className="mt-5 space-y-1">

//                   {categories.map((item) => (

//                     <button
//                       key={item}
//                       type="button"
//                       onClick={() => {
//                         setCategory(item);
//                         setShowFilters(false);
//                       }}
//                       className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
//                         category === item
//                           ? "bg-purple-600 text-white"
//                           : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
//                       }`}
//                     >
//                       {item}

//                       {category === item && (
//                         <span>✓</span>
//                       )}
//                     </button>

//                   ))}

//                 </div>

//               </div>

//             </aside>

//             {/* Products */}
//             <div>

//               <div className="mb-6 flex items-center justify-between">

//                 <div>

//                   <h2 className="text-xl font-bold text-gray-900">
//                     {category === "All"
//                       ? "All Products"
//                       : category}
//                   </h2>

//                   <p className="mt-1 text-sm text-gray-500">
//                     {filteredProducts.length} products found
//                   </p>

//                 </div>

//               </div>

//               {filteredProducts.length > 0 ? (

//                 <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

//                   {filteredProducts.map((product) => (

//                     <div
//                       key={product.id}
//                       className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50"
//                     >

//                       {/* Image */}
//                       <div
//                         className={`relative flex h-56 items-center justify-center ${product.bg}`}
//                       >

//                         <span className="text-8xl transition-transform duration-500 group-hover:scale-110">
//                           {product.emoji}
//                         </span>

//                         {product.badge && (
//                           <span className="absolute left-4 top-4 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-bold text-white">
//                             {product.badge}
//                           </span>
//                         )}

//                         <button
//                           type="button"
//                           className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-purple-600 hover:text-white"
//                         >
//                           <Heart className="h-4 w-4" />
//                         </button>

//                       </div>

//                       {/* Content */}
//                       <div className="p-5">

//                         <p className="text-xs font-semibold text-purple-600">
//                           {product.category}
//                         </p>

//                         <Link
//                           href={`/shop/${product.id}`}
//                           className="mt-1 block text-lg font-bold text-gray-900 hover:text-purple-600"
//                         >
//                           {product.name}
//                         </Link>

//                         {/* Rating */}
//                         <div className="mt-3 flex items-center gap-2">

//                           <div className="flex items-center gap-1">

//                             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

//                             <span className="text-sm font-semibold text-gray-700">
//                               {product.rating}
//                             </span>

//                           </div>

//                           <span className="text-xs text-gray-400">
//                             ({product.reviews})
//                           </span>

//                         </div>

//                         {/* Price */}
//                         <div className="mt-4 flex items-end gap-2">

//                           <span className="text-2xl font-black text-purple-600">
//                             ${product.price.toFixed(2)}
//                           </span>

//                           {product.oldPrice && (
//                             <span className="mb-1 text-sm text-gray-400 line-through">
//                               ${product.oldPrice.toFixed(2)}
//                             </span>
//                           )}

//                         </div>

//                         {/* Add */}
//                         <button
//                           type="button"
//                           className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
//                         >
//                           <ShoppingCart className="h-4 w-4" />
//                           Add to cart
//                         </button>

//                       </div>

//                     </div>

//                   ))}

//                 </div>

//               ) : (

//                 <div className="rounded-[1.5rem] border border-dashed border-gray-200 bg-white py-20 text-center">

//                   <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50">
//                     🔍
//                   </div>

//                   <h3 className="mt-4 text-lg font-bold text-gray-900">
//                     No products found
//                   </h3>

//                   <p className="mt-2 text-sm text-gray-500">
//                     Try another search or category.
//                   </p>

//                 </div>

//               )}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* Bottom CTA */}
//       <section className="pb-20">

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-purple-50 p-8 sm:p-10 lg:flex-row">

//             <div>

//               <p className="text-sm font-semibold text-purple-600">
//                 Need something special?
//               </p>

//               <h2 className="mt-1 text-2xl font-bold text-gray-900">
//                 Explore all FreshStock categories.
//               </h2>

//             </div>

//            <div className="flex gap-2">
//              <Link
//               href="/"
//               className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
//             >
//               Back

//               <ArrowLeft className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
            
//              <Link
//               href="/categories"
//               className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
//             >
//               Browse categories

//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//            </div>
//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }