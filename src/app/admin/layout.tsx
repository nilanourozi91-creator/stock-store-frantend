'use client'
import Sidebar from "@/components/admin/sidebar";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showText ,setShowText]=useState();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      <Sidebar setShowText={setShowText} showText={showText}/>

      <main className="ml-64 min-h-screen">
        {children}
      </main>

    </div>
  );
}