'use client'
import React, { useEffect, useState } from 'react'

// import { div } from '@/components/ui/button';
import Link from 'next/link';
import { GetAllproductTable } from '@/lib/dashbored';
import { Eye, MoreHorizontal, Package, Pencil, Star, Trash2 } from 'lucide-react';
interface prodectreview{
 id:number,
 name:string,
 prodect_id:Number,
 user_id:Number,
 created_at:Date,
 updated_at:Date,
 comment:any
}
function ProdectTable() {
     const [myfetchdata ,setdata]=useState<{}[]|null|any>(null);
     const [links ,setlink]=useState<{
        url:string,
        label:string,
         page:number,
        active:boolean,

     }[]|null>(null);
     const [href,sethref]=useState('http://localhost:8000/api/GetAllprodects?page=1');
      useEffect(()=>{
        async function fetchdata(){
          const d=await GetAllproductTable(href);
          setdata(d.data);
          setlink(d.links)
        }
    
        fetchdata();
      },[href])
      if (!myfetchdata) {
        return;

      }
  return (
  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px]">

            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70 dark:bg-gray-800">

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Stock
                </th>

                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-100">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {myfetchdata.map((x:any)=>(
                <tr
                  key={x.id}
                  className="transition hover:bg-purple-50/30 "
                >
                   <td>{x.name}</td>
                  {/* Product */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                        <Package className="h-5 w-5 text-purple-500" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-200">
                          {x.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          #{x.id}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">

                    <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-600">
                      {x.category.name}
                    </span>

                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">

                    <span className="text-sm font-black text-gray-900 dark:text-gray-300">
                      {x.price}
                    </span>

                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5">

                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {x.stock}
                    </span>

                  </td>

                  {/* Status */}
                   <td className="px-6 py-5">

                    {x.stock >=12 && (
                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
                        In Stock
                      </span>
                    )}

                    {x.stock <=10 && (
                      <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-700">
                        Low Stock
                      </span>
                    )}

                    {x.stock ==0  && (
                      <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                        Out of Stock
                      </span>
                    )}

                  </td>
                     
                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-1">

                      <button
                        title="View"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-purple-600"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        title="Delete"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <button
                        title="More"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
            {links && 
                  <div className='w-full max-w-5xl mx-auto flex gap-4 justify-center items-center my-7'>
                   {links.map((link,indx)=>{
                    return(
                       
                    <button
                    className={`${link.active?'bg-black border rounded-b-md py-2 px-3 text-white':'bg-white border rounded-b-md py-2 px-3'}`}
                    key={link.label}
                    onClick={()=>sethref(link.url?link.url:'http://localhost:8000/api/GetAllprodects?page=1')}
                    dangerouslySetInnerHTML={{__html:link.label}} />
      
                    )
                    })}
                   </div>}
      </div>
  )
}

export default ProdectTable
