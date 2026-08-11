import {
  CheckCircle,
  Clock,
  ShoppingCart,
  XCircle,
} from "lucide-react";
import ReportPage from "../page";

// import ReportPage from "@/components/admin/report-page";

const data = [
  {
    order: "#FS-1048",
    customer: "Ahmad Rahimi",
    status: "Completed",
    items: 4,
    total: "$84.50",
    date: "Aug 08, 2026",
  },
  {
    order: "#FS-1047",
    customer: "Sara Ahmadi",
    status: "Completed",
    items: 7,
    total: "$126.20",
    date: "Aug 08, 2026",
  },
  {
    order: "#FS-1046",
    customer: "Mohammad Ali",
    status: "Pending",
    items: 2,
    total: "$35.99",
    date: "Aug 07, 2026",
  },
  {
    order: "#FS-1045",
    customer: "Fatima Noor",
    status: "Completed",
    items: 5,
    total: "$71.45",
    date: "Aug 07, 2026",
  },
  {
    order: "#FS-1044",
    customer: "Maryam Habibi",
    status: "Cancelled",
    items: 3,
    total: "$48.00",
    date: "Aug 06, 2026",
  },
];

export default function OrdersReport() {
  return (
    <ReportPage
      title="Orders Report"
      description="Analyze order volume and order status."
      searchPlaceholder="Search order or customer..."
      categories={[
        "Completed",
        "Pending",
        "Cancelled",
      ]}
      categoryKey="status"
      stats={[
        {
          title: "Total Orders",
          value: "1,248",
          change: "+12.6%",
          icon: ShoppingCart,
        },
        {
          title: "Completed",
          value: "1,102",
          change: "+14.2%",
          icon: CheckCircle,
        },
        {
          title: "Pending",
          value: "96",
          change: "+3.8%",
          icon: Clock,
        },
        {
          title: "Cancelled",
          value: "50",
          change: "-5.2%",
          positive: false,
          icon: XCircle,
        },
      ]}
      columns={[
        { key: "order", label: "Order" },
        { key: "customer", label: "Customer" },
        { key: "status", label: "Status" },
        { key: "items", label: "Items" },
        { key: "total", label: "Total" },
        { key: "date", label: "Date" },
      ]}
      data={data}
    />
  );
}