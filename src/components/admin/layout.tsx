import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar />

      <main className="ml-64 min-h-screen">
        {children}
      </main>

    </div>
  );
}