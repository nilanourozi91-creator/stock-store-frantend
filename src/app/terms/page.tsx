
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to FreshStock
        </Link>

        <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
            <FileText className="h-5 w-5 text-purple-600" />
          </div>

          <h1 className="mt-6 text-4xl font-black text-gray-900">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 6, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-gray-600">

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                1. Using FreshStock
              </h2>
              <p className="mt-3">
                By using FreshStock, you agree to use the service
                responsibly and provide accurate information when
                creating an account or placing an order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                2. Products and prices
              </h2>
              <p className="mt-3">
                Product availability, descriptions, and prices may
                change. We aim to keep product information accurate
                and up to date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                3. Orders
              </h2>
              <p className="mt-3">
                Orders are subject to product availability and
                confirmation. Additional information may be required
                to complete an order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                4. Accounts
              </h2>
              <p className="mt-3">
                You are responsible for maintaining the security of
                your account and the information associated with it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                5. Changes to these terms
              </h2>
              <p className="mt-3">
                FreshStock may update these terms when necessary.
                Updated terms will be published on this page.
              </p>
            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
