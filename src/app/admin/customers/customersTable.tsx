
'use client'
import React, { useEffect, useState } from 'react'

// import { div } from '@/components/ui/button';
import Link from 'next/link';
import { GetAllCustomers, GetAllproductTable } from '@/lib/dashbored';
import { Eye, Mail, MoreHorizontal, Package, Pencil, Phone, ShoppingBag, Star, Trash2 } from 'lucide-react';
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
     const [href,sethref]=useState('http://localhost:8000/api/GetAllCustomers?page=1');
      useEffect(()=>{
        async function fetchdata(){
          const d=await GetAllCustomers(href);
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
              <tr className="bg-gray-800 ">
                <th className="">
                  Customers
                </th>

                <th className=" text-gray-400 dark:text-gray-100">
                  Contact
                </th>

                <th className=" text-gray-400 dark:text-gray-100">
                  Role
                </th>

                <th className="p text-gray-400 dark:text-gray-100">
                  Joined
                </th>

                <th className=" text-gray-400 dark:text-gray-100">
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
                  
                  {/* Product */}
                 <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-sm font-black text-purple-600">
                          {x.name
                            .split(" ")
                            .map(
                              (name:any) =>
                                name[0]
                            )
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>

                          <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                            {x.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-400 dark:text-gray-300">
                            Customer #{String(x.id).padStart(4, "0")}
                          </p>

                        </div>

                      </div>

                    </td>

                  {/* Category */}
                   <td className="px-6 py-5">

                      <div className="space-y-1">

                        <div className="flex items-center gap-2">

                          <Mail className="h-3.5 w-3.5 text-gray-400 dark:text-gray-300" />

                          <span className="text-xs font-medium text-gray-500 dark:text-gray-300">
                            {x.email}
                          </span>

                        </div>

                        {/* <div className="flex items-center gap-2">

                          <Phone className="h-3.5 w-3.5 text-gray-400 dark:text-gray-300" />

                          <span className="text-xs font-medium text-gray-500 dark:text-gray-300">
                            {x.phone}
                          </span>

                        </div> */}

                      </div>

                    </td>

                   {/* Orders */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        {/* <ShoppingBag className="h-4 w-4 text-purple-500" /> */}

                        <span className="text-sm font-black text-gray-900 dark:text-gray-300">
                          {x.role}
                        </span>

                      </div>

                    </td>
                     {/* Spent */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-black text-gray-900 dark:text-gray-300">
                        {/* {x.orders.subtotal} */}
                        
                      </span>

                    </td>
                      {/* Joined */}
                    <td className="px-6 py-5">

                      <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        {x.created_at}
                      </span>

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
                    className={`${link.active?'bg-purple-600 border rounded-b-md py-2 px-3 text-white':'bg-white text-black border rounded-b-md py-2 px-3'}`}
                    key={link.label}
                    onClick={()=>sethref(link.url?link.url:'http://localhost:8000/api/GetAllCustomers?page=1')}
                    dangerouslySetInnerHTML={{__html:link.label}} />
      
                    )
                    })}
                   </div>}
      </div>
  )
}

export default ProdectTable





