'use client';
import { Edit3, MoreHorizontal, Package, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function CategoryTable() {
  const [categories, setCategories] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          'http://localhost:8000/api/catagories'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const result = await response.json();

        setCategories(result.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    }

    getCategories();
  }, []);

  const filteredCategories = categories.filter(
    (category: any) =>
      category.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      category.description
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredCategories.map((category: any) => {
        const Icon = Package;
        const status = category.status ?? 'Active';

        return (
          <div
            key={category.id}
            className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple-100 hover:shadow-md dark:border-gray-500 dark:bg-gray-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>

                <div>
                  <h2 className="font-black text-gray-900 dark:text-gray-100">
                    {category.name}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    #{String(category.id).padStart(3, '0')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 min-h-[40px] text-sm leading-5 text-gray-500 dark:text-gray-300">
              {category.description || 'No description available'}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-purple-50 p-2">
                  <Package className="h-4 w-4 text-purple-600" />
                </div>

                <div>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-300">
                    {category.products_count ?? 0}
                  </p>

                  <p className="text-[11px] text-gray-400">
                    Products
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                {status}
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-bold text-gray-600 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 dark:text-gray-200"
              >
                <Edit3 className="h-3.5 w-3.5" />
                Edit
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryTable;