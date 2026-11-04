
'use client'
import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
          <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="">Customers</TableHead>
      <TableHead className=""> Contact</TableHead>
      <TableHead className="">  Role</TableHead>
      <TableHead className=""> Joined</TableHead>
      <TableHead className="">  Actions</TableHead>
      {/* <TableHead className="text-right">Amount</TableHead> */}
    </TableRow>
  </TableHeader>
  <TableBody>
     {myfetchdata.map((x:any)=>(
    <TableRow key={x.id}>  
      <TableCell className='flex gap-5'>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-sm font-black text-purple-600">
          {x.name
          .split(" ")
          .map(
            (name:any) =>
              name[0]
          )
          .join("")
          .slice(0, 2)}
        </span>
       <div className='flex  flex-col'>
         <span className='font-bold'>{x.name}</span>
        <span> Customer #{String(x.id).padStart(4,"0")}</span>
       </div>
      </TableCell>
      <TableCell> {x.email}</TableCell>
      <TableCell> {x.role}</TableCell>
      <TableCell> {x.created_at}</TableCell>
      <TableCell>
        <div className="flex justify-end gap-3">

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
      </TableCell>
    </TableRow>
    ))}
  </TableBody>
</Table>

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





