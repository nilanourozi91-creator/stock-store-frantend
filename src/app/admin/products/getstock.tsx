'use client'
import { Package } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TypeData {
  id: number;
  stock: number;
}

function GetStock() {
  const [data, setData] = useState<TypeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStockData() {
      try {
        const response = await fetch(
          'http://localhost:8000/api/GetDataSingle'
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

  const totalProducts = data.length;

  const inStock = data.filter((product) => product.stock > 0).length;

  const lowStock = data.filter(
    (product) => product.stock > 0 && product.stock <= 10
  ).length;

  const outOfStock = data.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            Total Products
          </p>

          <div className="rounded-xl bg-purple-50 p-2.5">
            <Package className="h-5 w-5 text-purple-600" />
          </div>
        </div>

        <p className="mt-4 text-2xl font-black text-gray-900 dark:text-white">
          {loading ? '...' : totalProducts}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          In Stock
        </p>

        <p className="mt-4 text-2xl font-black text-green-600">
          {loading ? '...' : inStock}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Low Stock
        </p>

        <p className="mt-4 text-2xl font-black text-yellow-600">
          {loading ? '...' : lowStock}
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500 dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          Out of Stock
        </p>

        <p className="mt-4 text-2xl font-black text-red-500">
          {loading ? '...' : outOfStock}
        </p>
      </div>
    </div>
  );
}

export default GetStock;