import { ArrowUpRight, Box, Boxes, BoxIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function GetProductReport() {
 const [data , setdata]=useState<{}>('');
    useEffect(()=>{
       async function latestreview(){
            const data=fetch('http://localhost:8000/api/GetCountProdects');
            const response =(await data).json();
            return response;
        }
        async function datale(){
            const newdata=await latestreview();
            setdata(newdata);
        }
        datale();
    },[]);

  return (
    <div>
       <div className="group relative overflow-hidden dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:shadow-none rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60">

      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-50 dark:bg-purple-950 transition-transform duration-500 group-hover:scale-150" />

      <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-purple-50/60 dark:bg-purple-950" />

      {/* Content */}
      <div className="relative">

        {/* Top */}
        <div className="flex items-start justify-between">

          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 transition-colors duration-300 group-hover:bg-purple-600 dark:group-hover:bg-purple-400">
            <Boxes className="h-5 w-5 text-purple-600 transition-colors duration-300 group-hover:text-white" />
          </div>

          {/* Change */}
          <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {/* {change} */}
            +5.7%
          </div>

        </div>

        {/* Value */}
        <div className="mt-6">

          <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
            {/* {title} */}
            products
          </p>

          <h3 className="mt-2 text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">
            {/* {value} */}
            {data.data}
          </h3>

        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <span className="text-xs text-gray-400 dark:text-gray-300">
            Compared to last month
          </span>

          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-purple-100">
            <div className="h-full w-4/5 rounded-full bg-purple-600" />
          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

export default GetProductReport
