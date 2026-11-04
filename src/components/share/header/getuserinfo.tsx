import { GetUserInfomations } from '@/lib/auth.action';
import { GetUser } from '@/lib/getuserinfo';
import Link from 'next/link';
import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { div } from 'framer-motion/client';
type user={
  name:string,
  email:string,
  id:Number,
}
function GetUserInfo() {
  const [user,setuser]=useState<user|null>(null);
  useEffect(()=>{
    const token= Cookie.get('token')as string||'';
    async function GetUsers():Promise<user> {
      return await GetUserInfomations(token); 
    }
    async function GetU() {
      setuser( await GetUser());
    }
    GetU();
  },[]);
  //LOG OUT SECTION---------------
    function handleLogOut() {
    // localStorage.removeItem("token");
    Cookie.remove('token');
    setuser(null);

  }
 {
     if (user) {
      return(
          <div className='flex gap-x-3'>
            <span className='text-sm w-10 h-10 justify-center items-center flex  rounded-full border border-purple-500 dark:bg-purple-500 bg-purple-600 text-black dark:text-white'>
               {user.name.toUpperCase().slice(0,1)}
            </span>
            <button
               onClick={handleLogOut}
             className='border border-purple-500 px-3 py-2 rounded-full cursor-pointer'>Sign out</button>
          </div>
      );
     }
     else{
      return(
         <div className='flex gap-x-3'>
            <button 
            className="rounded-full border border-purple-600 py-2.5 px-3 text-center text-sm font-semibold  text-purple-700 dark:text-white  dark:hover:bg-purple-500
           ">
            <Link href={'/login'}>sign in</Link>
           </button>
            <Link
            href="/register"
            className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400"
          >
            Get Started
          </Link>
         </div>
      );
     }
 }
}

export default GetUserInfo
