
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", sales: 4200 },
  { name: "Feb", sales: 5800 },
  { name: "Mar", sales: 4900 },
  { name: "Apr", sales: 7200 },
  { name: "May", sales: 6800 },
  { name: "Jun", sales: 8900 },
  { name: "Jul", sales: 8200 },
  { name: "Aug", sales: 10500 },
  { name: "Sep", sales: 9800 },
  { name: "Oct", sales: 11800 },
  { name: "Nov", sales: 10900 },
  { name: "Dec", sales: 13500 },
];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{
    value?: number;
  }>;
  label?: string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const value = Number(payload[0]?.value ?? 0);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl">
      <p className="text-xs font-medium text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold text-purple-600">
        ${value.toLocaleString()}
      </p>
    </div>
  );
}

export default function SalesChart() {
  return (
    <div className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Sales Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Revenue performance throughout the year
          </p>
        </div>

        {/* Period */}
        <select
          className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          defaultValue="year"
        >
          <option value="year">
            This year
          </option>

          <option value="month">
            This month
          </option>

          <option value="week">
            This week
          </option>
        </select>

      </div>

      {/* Summary */}
      <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-3">

        <div>
          <p className="text-sm text-gray-400">
            Total Revenue
          </p>

          <p className="mt-1 text-3xl font-black tracking-tight text-gray-900">
            $98,450
          </p>
        </div>

        <div className="mb-1 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          +18.6% from last year
        </div>

      </div>

      {/* Chart */}
      <div className="mt-8 h-[320px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>
              <linearGradient
                id="purpleGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#9333ea"
                  stopOpacity={0.25}
                />

                <stop
                  offset="100%"
                  stopColor="#9333ea"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#f3f4f6"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9ca3af",
                fontSize: 12,
              }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9ca3af",
                fontSize: 12,
              }}
              tickFormatter={(value) =>
                `$${value / 1000}k`
              }
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#d8b4fe",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#9333ea"
              strokeWidth={3}
              fill="url(#purpleGradient)"
              activeDot={{
                r: 6,
                strokeWidth: 3,
                stroke: "#ffffff",
                fill: "#9333ea",
              }}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}
