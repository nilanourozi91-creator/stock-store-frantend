'use client'
import { GetCountProdects } from '@/lib/dashbored';
import { Package } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TypeData {
  id: number;
  stock: number;
  is_active:any;
  products:any;
}

interface Product {
  id: number;
  name: string;
}

function GetCatagory() {
  const [data, setData] = useState<TypeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStockData() {
      try {
        const response = await fetch(
          'http://localhost:8000/api/catagories'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }

        const result = await response.json();

        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    getStockData();
  }, []);
const totalCategories = data.length;

const activeCategories = data.filter(
  (category) => category.is_active > 0
).length;

const totalProducts = data.reduce(
  (total, category) => total + category.products.length,
  0
);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            Total Catagory
          </p>

          <div className="rounded-xl bg-purple-50 p-2.5">
            <Package className="h-5 w-5 text-purple-600" />
          </div>
        </div>

        <p className="mt-4 text-2xl font-black text-gray-900 dark:text-white">
          {loading ? '...' : totalCategories}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Active Catagory
        </p>

        <p className="mt-4 text-2xl font-black text-green-600">
          {loading ? '...' : activeCategories}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Products
        </p>

        <p className="mt-4 text-2xl font-black text-yellow-600">
          {loading ? '...' :totalProducts}
        </p>
      </div>
    </div>
  );
}

export default GetCatagory;