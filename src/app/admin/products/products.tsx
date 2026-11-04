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
import Link from 'next/link';
import { GetAllproductTable } from '@/lib/dashbored';
import { Eye, MoreHorizontal, Package, Pencil, Star, Trash2 } from 'lucide-react';
import Image from 'next/image';
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
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Image</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Price</TableHead>
      <TableHead >Stock</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead>Brand</TableHead>
      <TableHead>Descreptions</TableHead>
      <TableHead >Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  
     {myfetchdata.map((x:any)=>(
    <TableRow className='' key={x.id}>
      <TableCell className="font-medium">{x.name}</TableCell>
      <TableCell className="font-medium">
        <Image
        src={`http://localhost:8000/storage/${x.imgall[0].img_url}`}
        alt={x.name}
        width={900}
        height={900}
        className="w-10 h-10"
        unoptimized
                    />
      </TableCell>
      <TableCell>{x.category.name}</TableCell>
      <TableCell>{x.price}</TableCell>
      <TableCell>{x.stock}</TableCell>
      <TableCell>{x.inventory?.quantity}</TableCell>
      <TableCell>{x.details.brand}</TableCell>
      <TableCell>{x?.description}</TableCell>
      <TableCell className="text-left">
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
