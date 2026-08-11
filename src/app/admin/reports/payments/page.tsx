import {
  CheckCircle,
  CreditCard,
  DollarSign,
  XCircle,
} from "lucide-react";
import ReportPage from "../page";

// import ReportPage from "@/components/admin/report-page";

const data = [
  {
    transaction: "#PAY-1048",
    order: "#FS-1048",
    customer: "Ahmad Rahimi",
    method: "Card",
    amount: "$84.50",
    status: "Completed",
    date: "Aug 08, 2026",
  },
  {
    transaction: "#PAY-1047",
    order: "#FS-1047",
    customer: "Sara Ahmadi",
    method: "Cash",
    amount: "$126.20",
    status: "Completed",
    date: "Aug 08, 2026",
  },
  {
    transaction: "#PAY-1046",
    order: "#FS-1046",
    customer: "Mohammad Ali",
    method: "Card",
    amount: "$35.99",
    status: "Pending",
    date: "Aug 07, 2026",
  },
  {
    transaction: "#PAY-1045",
    order: "#FS-1045",
    customer: "Fatima Noor",
    method: "Card",
    amount: "$71.45",
    status: "Completed",
    date: "Aug 07, 2026",
  },
  {
    transaction: "#PAY-1044",
    order: "#FS-1044",
    customer: "Maryam Habibi",
    method: "Cash",
    amount: "$48.00",
    status: "Failed",
    date: "Aug 06, 2026",
  },
];

export default function PaymentsReport() {
  return (
    <ReportPage
      title="Payments Report"
      description="Analyze payment transactions and revenue."
      searchPlaceholder="Search transaction or customer..."
      categories={[
        "Completed",
        "Pending",
        "Failed",
      ]}
      categoryKey="status"
      stats={[
        {
          title: "Total Revenue",
          value: "$58,200",
          change: "+18.4%",
          icon: DollarSign,
        },
        {
          title: "Successful",
          value: "1,182",
          change: "+13.8%",
          icon: CheckCircle,
        },
        {
          title: "Pending",
          value: "42",
          change: "+2.4%",
          icon: CreditCard,
        },
        {
          title: "Failed",
          value: "24",
          change: "-8.2%",
          icon: XCircle,
        },
      ]}
      columns={[
        { key: "transaction", label: "Transaction" },
        { key: "order", label: "Order" },
        { key: "customer", label: "Customer" },
        { key: "method", label: "Method" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
        { key: "date", label: "Date" },
      ]}
      data={data}
    />
  );
}