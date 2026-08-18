'use client'
import { GetUser } from '@/lib/getuserinfo';
import React, { useEffect, useState } from 'react'
import LoginBtn from './login';
import Link from 'next/link';
import { data } from 'framer-motion/client';
 type typeuser={
    name:string,
 }
function getuserinfo() {
   function handleSignOut() {
      localStorage.removeItem('token');
      
   }
    const [user ,setuser]=useState<typeuser|null>(null);
    useEffect(()=>{
       GetUser().then(setuser);
    },[])
     if (!user) {
        return <LoginBtn/>
     }
    else{
       return <div className='flex gap-x-3'><span className='bg-purple-600 text-white rounded-full px-3 dark:bg-purple-500 py-2'>{user?.name.toUpperCase().slice(0,1)}</span>
       <button className='bg-purple-600 text-white rounded-full px-3 dark:bg-purple-500 py-2' onClick={handleSignOut}>Sign Out</button>
        </div>
    }

}

export default getuserinfo
