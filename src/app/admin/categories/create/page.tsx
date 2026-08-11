"use client";

import Link from "next/link";
import { ArrowLeft, ImagePlus, Save, X } from "lucide-react";
import { useState } from "react";

export default function CreateCategoryPage() {
  const [imagePreview, setImagePreview] =
    useState<string | null>(null);

  const [imageName, setImageName] =
    useState("");

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageName(file.name);

    const url = URL.createObjectURL(file);

    setImagePreview(url);
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <Link
            href="/admin/categories"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <div>

            <h1 className="text-2xl font-black tracking-tight text-gray-900">
              Add Category
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Create a new product category for FreshStock.
            </p>

          </div>

        </div>

      </div>

      {/* Form */}
      <form className="space-y-6">

        {/* Basic Information */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="text-base font-black text-gray-900">
              Basic Information
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Enter the basic information for this category.
            </p>

          </div>

          <div className="grid gap-5 p-6">

            {/* Category Name */}
            <div>

              <label className="mb-2 block text-sm font-bold text-gray-700">
                Category Name
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="e.g. Fresh Fruits"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />

            </div>

            {/* Slug */}
            <div>

              <label className="mb-2 block text-sm font-bold text-gray-700">
                Slug
              </label>

              <input
                type="text"
                name="slug"
                placeholder="fresh-fruits"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />

              <p className="mt-2 text-xs text-gray-400">
                Used in the category URL.
              </p>

            </div>

            {/* Description */}
            <div>

              <label className="mb-2 block text-sm font-bold text-gray-700">
                Description
              </label>

              <textarea
                name="description"
                rows={5}
                placeholder="Describe this category..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />

            </div>

          </div>

        </div>

        {/* Category Image */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="text-base font-black text-gray-900">
              Category Image
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Add an image to represent this category.
            </p>

          </div>

          <div className="p-6">

            <label
              htmlFor="category-image"
              className="group relative flex min-h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 transition hover:border-purple-400 hover:bg-purple-50"
            >

              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Category preview"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">

                    <div className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-gray-700">
                      Change Image
                    </div>

                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                    <ImagePlus className="h-7 w-7 text-purple-600" />
                  </div>

                  <p className="mt-4 text-sm font-bold text-gray-700">
                    Upload category image
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    PNG, JPG or WEBP up to 2MB
                  </p>
                </>
              )}

              <input
                id="category-image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>

            {imageName && (
              <div className="mt-3 flex items-center justify-between rounded-xl bg-purple-50 px-4 py-3">

                <p className="truncate text-xs font-semibold text-purple-700">
                  {imageName}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setImageName("");
                  }}
                  className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-purple-500 hover:bg-purple-100"
                >
                  <X className="h-4 w-4" />
                </button>

              </div>
            )}

          </div>

        </div>

        {/* Settings */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">

            <h2 className="text-base font-black text-gray-900">
              Category Settings
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Configure how this category behaves.
            </p>

          </div>

          <div className="space-y-5 p-6">

            {/* Active */}
            <div className="flex items-center justify-between gap-6">

              <div>

                <p className="text-sm font-bold text-gray-900">
                  Active Category
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Customers can see products in this category.
                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />

            </div>

            {/* Featured */}
            <div className="flex items-center justify-between gap-6 border-t border-gray-100 pt-5">

              <div>

                <p className="text-sm font-bold text-gray-900">
                  Featured Category
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Show this category in featured sections.
                </p>

              </div>

              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />

            </div>

          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <Link
            href="/admin/categories"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 text-sm font-bold text-gray-600 transition hover:bg-gray-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 text-sm font-bold text-white shadow-sm transition hover:bg-purple-700"
          >
            <Save className="h-4 w-4" />
            Create Category
          </button>

        </div>

      </form>

    </div>
  );
}