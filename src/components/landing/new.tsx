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