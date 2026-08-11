import {
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import ReportPage from "../page";

// import ReportPage from "@/components/admin/report-page";

const data = [
  {
    product: "Fresh Apples",
    category: "Fruits",
    quantity: 245,
    orders: 86,
    revenue: "$735",
    average: "$3.00",
  },
  {
    product: "Organic Bananas",
    category: "Fruits",
    quantity: 198,
    orders: 72,
    revenue: "$396",
    average: "$2.00",
  },
  {
    product: "Fresh Milk",
    category: "Dairy",
    quantity: 176,
    orders: 64,
    revenue: "$528",
    average: "$3.00",
  },
  {
    product: "Brown Bread",
    category: "Bakery",
    quantity: 154,
    orders: 58,
    revenue: "$385",
    average: "$2.50",
  },
  {
    product: "Fresh Tomatoes",
    category: "Vegetables",
    quantity: 143,
    orders: 51,
    revenue: "$429",
    average: "$3.00",
  },
];

export default function ShoppingReport() {
  return (
    <ReportPage
      title="Shopping Report"
      description="Analyze what customers are buying and how much they spend."
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
          title: "Products Purchased",
          value: "916",
          change: "+15.8%",
          icon: ShoppingBag,
        },
        {
          title: "Shopping Orders",
          value: "331",
          change: "+12.6%",
          icon: Package,
        },
        {
          title: "Shopping Revenue",
          value: "$2,957",
          change: "+16.8%",
          icon: DollarSign,
        },
        {
          title: "Average Order",
          value: "$46.63",
          change: "+5.8%",
          icon: TrendingUp,
        },
      ]}
      columns={[
        { key: "product", label: "Product" },
        { key: "category", label: "Category" },
        { key: "quantity", label: "Quantity Sold" },
        { key: "orders", label: "Orders" },
        { key: "revenue", label: "Revenue" },
        { key: "average", label: "Average Price" },
      ]}
      data={data}
    />
  );
}