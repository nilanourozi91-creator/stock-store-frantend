'use client'
// import { cookies } from 'next/headers';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { GetUserInfomations } from '@/lib/auth.action';
import { toast } from 'sonner';
import { div } from 'framer-motion/client';
type data={
 name:string,
  email:string,
  id:Number,
}
function GetuserInfo() {
    const [data,setdata]=useState<data|null>(null);
    // get token 
     useEffect(()=>{
       const token=Cookies.get('token') as string||'';
        async function GetUsers():Promise<data> {
             return await GetUserInfomations(token); 
           }
           async function GetU() {
                setdata( await GetUsers());
              }
              GetU();
     },[])
  {
    if (data) {
        return(
            toast.message('success',{
             description: `${data.name} login successfuly.`,
              duration: 3000,
       })
        )
    }
    else{
        return (
            <div></div>
        )
    }
  }
}

export default GetuserInfo
