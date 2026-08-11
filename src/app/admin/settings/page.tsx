"use client";

import {
  Bell,
  Check,
  Globe,
  Lock,
  Palette,
  Save,
  Shield,
  Store,
  User,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Store");

  const tabs = [
    {
      name: "Store",
      icon: Store,
    },
    {
      name: "Profile",
      icon: User,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Security",
      icon: Shield,
    },
    {
      name: "Appearance",
      icon: Palette,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your FreshStock store and dashboard settings.
        </p>
      </div>

      {/* Layout */}
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">

        {/* Sidebar */}
        <div className="h-fit rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">

          <div className="space-y-1">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.name)
                  }
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                    active
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-500 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}

          </div>

        </div>

        {/* Content */}
        <div className="space-y-6">

          {/* Store */}
          {activeTab === "Store" && (
            <>
              <SettingsCard
                title="Store Information"
                description="Basic information about your FreshStock store."
                icon={Store}
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <InputField
                    label="Store Name"
                    defaultValue="FreshStock"
                  />

                  <InputField
                    label="Store Email"
                    defaultValue="support@freshstock.com"
                  />

                  <InputField
                    label="Phone Number"
                    defaultValue="+93 700 000 000"
                  />

                  <InputField
                    label="Website"
                    defaultValue="https://freshstock.com"
                  />

                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Store Description
                  </label>

                  <textarea
                    rows={4}
                    defaultValue="FreshStock provides fresh, high-quality food and grocery products."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
                  />
                </div>

              </SettingsCard>

              <SettingsCard
                title="Store Location"
                description="Configure your store location and regional settings."
                icon={Globe}
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <InputField
                    label="Country"
                    defaultValue="Afghanistan"
                  />

                  <InputField
                    label="City"
                    defaultValue="Kabul"
                  />

                  <InputField
                    label="Currency"
                    defaultValue="USD"
                  />

                  <InputField
                    label="Timezone"
                    defaultValue="Asia/Kabul"
                  />

                </div>

              </SettingsCard>
            </>
          )}

          {/* Profile */}
          {activeTab === "Profile" && (
            <SettingsCard
              title="Admin Profile"
              description="Manage your administrator account information."
              icon={User}
            >

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-purple-100 text-2xl font-black text-purple-600">
                  NN
                </div>

                <div>
                  <button
                    type="button"
                    className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-purple-700"
                  >
                    Change Photo
                  </button>

                  <p className="mt-2 text-xs text-gray-400">
                    JPG, PNG or WEBP. Maximum 2MB.
                  </p>
                </div>

              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                <InputField
                  label="First Name"
                  defaultValue="Nila"
                />

                <InputField
                  label="Last Name"
                  defaultValue="Nourozi"
                />

                <InputField
                  label="Email"
                  defaultValue="admin@freshstock.com"
                />

                <InputField
                  label="Phone"
                  defaultValue="+93 700 000 000"
                />

              </div>

            </SettingsCard>
          )}

          {/* Notifications */}
          {activeTab === "Notifications" && (
            <SettingsCard
              title="Notifications"
              description="Choose which notifications you want to receive."
              icon={Bell}
            >

              <div className="divide-y divide-gray-100">

                <ToggleRow
                  title="New Orders"
                  description="Receive a notification when a new order is placed."
                  defaultChecked
                />

                <ToggleRow
                  title="Low Stock"
                  description="Get notified when products reach their minimum stock."
                  defaultChecked
                />

                <ToggleRow
                  title="Payment Alerts"
                  description="Receive notifications about successful or failed payments."
                  defaultChecked
                />

                <ToggleRow
                  title="New Customers"
                  description="Get notified when a new customer registers."
                />

                <ToggleRow
                  title="Marketing Updates"
                  description="Receive FreshStock marketing and promotional updates."
                />

              </div>

            </SettingsCard>
          )}

          {/* Security */}
          {activeTab === "Security" && (
            <>
              <SettingsCard
                title="Password"
                description="Change your administrator password."
                icon={Lock}
              >

                <div className="space-y-5">

                  <InputField
                    label="Current Password"
                    type="password"
                    placeholder="Enter current password"
                  />

                  <InputField
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                  />

                  <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm new password"
                  />

                </div>

              </SettingsCard>

              <SettingsCard
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account."
                icon={Shield}
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-sm font-bold text-gray-900">
                      Two-factor authentication
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Protect your admin account with an additional verification step.
                    </p>

                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Enable
                  </button>

                </div>

              </SettingsCard>
            </>
          )}

          {/* Appearance */}
          {activeTab === "Appearance" && (
            <SettingsCard
              title="Appearance"
              description="Customize the look and feel of your dashboard."
              icon={Palette}
            >

              <div>

                <p className="text-sm font-bold text-gray-900">
                  Dashboard Theme
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Choose your preferred dashboard appearance.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">

                  <ThemeOption
                    title="Purple"
                    active
                    className="bg-purple-600"
                  />

                  <ThemeOption
                    title="Blue"
                    className="bg-blue-600"
                  />

                  <ThemeOption
                    title="Green"
                    className="bg-green-600"
                  />

                </div>

              </div>

              <div className="mt-8">

                <p className="text-sm font-bold text-gray-900">
                  Dashboard Mode
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <button
                    type="button"
                    className="rounded-2xl border-2 border-purple-600 bg-white p-5 text-left"
                  >
                    <div className="h-20 rounded-xl bg-gray-100" />

                    <p className="mt-3 text-sm font-bold text-gray-900">
                      Light
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Clean and bright dashboard.
                    </p>
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-purple-200"
                  >
                    <div className="h-20 rounded-xl bg-gray-900" />

                    <p className="mt-3 text-sm font-bold text-gray-900">
                      Dark
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Dark dashboard appearance.
                    </p>
                  </button>

                </div>

              </div>

            </SettingsCard>
          )}

          {/* Save */}
          <div className="flex justify-end">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

/* -----------------------------
   Settings Card
----------------------------- */

function SettingsCard({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

      <div className="border-b border-gray-100 px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-purple-50 p-2.5">
            <Icon className="h-5 w-5 text-purple-600" />
          </div>

          <div>

            <h2 className="text-base font-black text-gray-900">
              {title}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {description}
            </p>

          </div>

        </div>

      </div>

      <div className="p-6">
        {children}
      </div>

    </div>
  );
}

/* -----------------------------
   Input
----------------------------- */

function InputField({
  label,
  defaultValue,
  placeholder,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
      />

    </div>
  );
}

/* -----------------------------
   Toggle
----------------------------- */

function ToggleRow({
  title,
  description,
  defaultChecked = false,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] =
    useState(defaultChecked);

  return (
    <div className="flex items-center justify-between gap-6 py-5">

      <div>

        <p className="text-sm font-bold text-gray-900">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>

      </div>

      <button
        type="button"
        onClick={() => setChecked(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked
            ? "bg-purple-600"
            : "bg-gray-200"
        }`}
      >

        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            checked
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
}

/* -----------------------------
   Theme Option
----------------------------- */

function ThemeOption({
  title,
  active = false,
  className,
}: {
  title: string;
  active?: boolean;
  className: string;
}) {
  return (
    <button
      type="button"
      className={`relative rounded-2xl border-2 p-3 text-left transition ${
        active
          ? "border-purple-600"
          : "border-gray-200 hover:border-purple-200"
      }`}
    >

      <div
        className={`h-16 rounded-xl ${className}`}
      />

      <p className="mt-3 text-sm font-bold text-gray-900">
        {title}
      </p>

      {active && (
        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <Check className="h-4 w-4 text-purple-600" />
        </div>
      )}

    </button>
  );
}