
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60">

      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-50 transition-transform duration-500 group-hover:scale-150" />

      <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-purple-50/60" />

      {/* Content */}
      <div className="relative">

        {/* Top */}
        <div className="flex items-start justify-between">

          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 transition-colors duration-300 group-hover:bg-purple-600">
            <Icon className="h-5 w-5 text-purple-600 transition-colors duration-300 group-hover:text-white" />
          </div>

          {/* Change */}
          <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {change}
          </div>

        </div>

        {/* Value */}
        <div className="mt-6">

          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900">
            {value}
          </h3>

        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <span className="text-xs text-gray-400">
            Compared to last month
          </span>

          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-purple-100">
            <div className="h-full w-4/5 rounded-full bg-purple-600" />
          </div>

        </div>

      </div>

    </div>
  );
}