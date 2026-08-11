import {
  AlertTriangle,
  Package,
  TrendingDown,
  Warehouse,
} from "lucide-react";
import ReportPage from "../page";

// import ReportPage from "@/components/admin/report-page";

const data = [
  {
    product: "Fresh Apples",
    category: "Fruits",
    stock: 245,
    sold: 86,
    status: "In Stock",
    value: "$735",
  },
  {
    product: "Organic Bananas",
    category: "Fruits",
    stock: 18,
    sold: 72,
    status: "Low Stock",
    value: "$36",
  },
  {
    product: "Fresh Milk",
    category: "Dairy",
    stock: 126,
    sold: 64,
    status: "In Stock",
    value: "$378",
  },
  {
    product: "Brown Bread",
    category: "Bakery",
    stock: 8,
    sold: 58,
    status: "Low Stock",
    value: "$20",
  },
  {
    product: "Orange Juice",
    category: "Drinks",
    stock: 0,
    sold: 45,
    status: "Out of Stock",
    value: "$0",
  },
];

export default function InventoryReport() {
  return (
    <ReportPage
      title="Inventory Report"
      description="Monitor stock levels and inventory performance."
      searchPlaceholder="Search product..."
      categories={[
        "In Stock",
        "Low Stock",
        "Out of Stock",
      ]}
      categoryKey="status"
      stats={[
        {
          title: "Total Products",
          value: "184",
          change: "+6.2%",
          icon: Package,
        },
        {
          title: "Stock Value",
          value: "$42,680",
          change: "+9.8%",
          icon: Warehouse,
        },
        {
          title: "Low Stock",
          value: "18",
          change: "+4",
          positive: false,
          icon: AlertTriangle,
        },
        {
          title: "Out of Stock",
          value: "7",
          change: "-12%",
          icon: TrendingDown,
        },
      ]}
      columns={[
        { key: "product", label: "Product" },
        { key: "category", label: "Category" },
        { key: "stock", label: "Current Stock" },
        { key: "sold", label: "Sold" },
        { key: "status", label: "Status" },
        { key: "value", label: "Stock Value" },
      ]}
      data={data}
    />
  );
}