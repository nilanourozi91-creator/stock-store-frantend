
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
            <ShieldCheck className="h-5 w-5 text-purple-600" />
          </div>

          <h1 className="mt-6 text-4xl font-black text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 6, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-gray-600">

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                1. Information we collect
              </h2>
              <p className="mt-3">
                We may collect information you provide when creating
                an account, placing an order, contacting us, or using
                FreshStock.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                2. How we use your information
              </h2>
              <p className="mt-3">
                We use your information to provide our services,
                process orders, improve the shopping experience, and
                communicate important information about your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                3. Account information
              </h2>
              <p className="mt-3">
                You are responsible for keeping your account
                information accurate and protecting your login
                credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                4. Data security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect information
                associated with your FreshStock account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">
                5. Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy,
                please contact the FreshStock team.
              </p>
            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
