import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <main className="ml-64 min-h-screen dark:bg-gray-9500">
        {children}
      </main>

    </div>
  );
}