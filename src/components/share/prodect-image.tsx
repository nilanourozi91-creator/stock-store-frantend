'use client'
// import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from '../../../utils'
function ProdectImg({list}:{list:any[],}) {
    console.log(list)
    const [index,setindex]=useState<any>(0)
  return (
    <div className='w-full '>
       <div>
         <Image className='w-[560px] object-cover h-[60vh] rounded-md'
           src={`http://localhost:8000/storage/${list[index].img_url}`}
           height={500}
           width={500}
           alt={`${list[index]}product`}              
           unoptimized
            ></Image>
           </div>
       <div className='flex justify-between p-3 w-full'>
            <Image className={cn('rounded-md border-2 h-40 w-40',index===0? 'border-gray-400':'')} src={`http://localhost:8000/storage/${list[0].img_url}`} onClick={()=>setindex(0)} height={100} width={100} alt={`${list[index]}product`} unoptimized></Image>
            <Image className={cn('rounded-md border-2 h-40 w-40',index===1? 'border-gray-400':'')} src={`http://localhost:8000/storage/${list[1].img_url}`} onClick={()=>setindex(1)} height={100} width={100} alt={`${list[index]}product`} unoptimized></Image>
       </div>
    </div>
   
  )
}

export default ProdectImg
