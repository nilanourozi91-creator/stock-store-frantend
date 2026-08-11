import {
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import ReportPage from "../page";
// import ReportPage from "../page";

// import ReportPage from "@/components/admin/report-page";

const data = [
  {
    product: "Fresh Apples",
    category: "Fruits",
    sold: 245,
    orders: 86,
    revenue: "$735",
    growth: "+18%",
  },
  {
    product: "Organic Bananas",
    category: "Fruits",
    sold: 198,
    orders: 72,
    revenue: "$396",
    growth: "+14%",
  },
  {
    product: "Fresh Milk",
    category: "Dairy",
    sold: 176,
    orders: 64,
    revenue: "$528",
    growth: "+12%",
  },
  {
    product: "Brown Bread",
    category: "Bakery",
    sold: 154,
    orders: 58,
    revenue: "$385",
    growth: "+9%",
  },
  {
    product: "Fresh Tomatoes",
    category: "Vegetables",
    sold: 143,
    orders: 51,
    revenue: "$429",
    growth: "+7%",
  },
];

export default function ProductsReport() {
  return (
    <ReportPage
      title="Products Report"
      description="Analyze product performance and best-selling products."
      searchPlaceholder="Search product..."
      categories={[
        "Fruits",
        "Dairy",
        "Bakery",
        "Vegetables",
      ]}
      categoryKey="category"
      stats={[
        {
          title: "Products Sold",
          value: "6,921",
          change: "+15.8%",
          icon: ShoppingBag,
        },
        {
          title: "Best Sellers",
          value: "24",
          change: "+8.4%",
          icon: TrendingUp,
        },
        {
          title: "Product Revenue",
          value: "$24,850",
          change: "+18.4%",
          icon: DollarSign,
        },
        {
          title: "Products",
          value: "184",
          change: "+6.2%",
          icon: Package,
        },
      ]}
      columns={[
        { key: "product", label: "Product" },
        { key: "category", label: "Category" },
        { key: "sold", label: "Units Sold" },
        { key: "orders", label: "Orders" },
        { key: "revenue", label: "Revenue" },
        { key: "growth", label: "Growth" },
      ]}
      data={data}
    />
  );
}