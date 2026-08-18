import type { Metadata } from "next";
import "../globals.css"
import Navbar from "@/components/landing/navbar";

import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "frashStock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
