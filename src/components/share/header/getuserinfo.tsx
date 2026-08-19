// 'use client'
// import { GetUser } from '@/lib/getuserinfo';
// import React, { useEffect, useState } from 'react'
// import LoginBtn from './login';
// import Link from 'next/link';
// import { data, div } from 'framer-motion/client';
// import { GetUserInfomations } from '@/lib/auth.action';
// import { LogIn } from 'lucide-react';
//  type User={
//     name:string,
//     id:number,
//     email:string,
//     phoneNumber:number,
//  }
// function getuserinfo() {
//    const [user ,setuser]=useState<User|null>(null);
//    //SIGN OUT
//    function handleSignOut() {
//       localStorage.removeItem('token');
//       setuser(null);
//    }
//     useEffect(()=>{
//       //  GetUser().then(setuser);
//       const token= (localStorage.getItem('token') as string)|| "";
//       async function GetUser():Promise<User> {
//          return await GetUserInfomations(token);
//       }
//       async function setu() {
//       const foundUser= await GetUser();
//       if (foundUser?.id) {
//          setuser(foundUser);
//          console.log(user);
//       }
//       else{
//          setuser(null);
//       }
//       }
   
//     },[]);

//     if (user) {
//        return(
//           <div className='flex space-x-2'>
//               <span className=' text-sm px-3 py-2 rounded-full bg-purple-600 dark:bg-purple-500 text-white'>
//                {user?.name.toLowerCase().slice(0,1)}
//               </span>
//                   <button onClick={handleSignOut}
//                    className="rounded-full px-3 bg-transparent border border-purple-500 py-2.5 text-center text-sm font-semibold text-white  dark:hover:bg-gray-700">
//                 sign out
//         </button>
//          </div>
       
//        );
//     }
//     else{
//       return(
//          <button className="rounded-full px-3 bg-transparent border border-purple-500 py-2.5 text-center text-sm font-semibold text-white  dark:hover:bg-gray-700">
//               <Link
//                 href="/login">
//                 login
//               </Link>
//         </button>
//       );
//     }
    

// }

// export default getuserinfo


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GetUserInfomations } from "@/lib/auth.action";

type User = {
  name: string;
  id: number;
  email: string;
  phoneNumber: number;
};

function GetUserInfo() {
  const [user, setUser] = useState<User | null>(null);

  // SIGN OUT
  function handleSignOut() {
    localStorage.removeItem("token");
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    async function setu() {
      try {
        if (!token) {
          setUser(null);
          return;
        }

        const foundUser = await GetUserInfomations(token);

        console.log("Found user:", foundUser);

        if (foundUser?.id) {
          setUser(foundUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to get user:", error);
        setUser(null);
      }
    }

    setu();
  }, []);

  if (user) {
    return (
      <div className="flex space-x-2 items-center">
        <span className="text-sm px-3 py-2 rounded-full bg-purple-600 dark:bg-purple-500 text-white">
          {user.name.slice(0, 1).toUpperCase()}
        </span>

        <span className="text-white">
          {user.name}
        </span>

        <button
          onClick={handleSignOut}
          className="rounded-full px-3 bg-transparent border border-purple-500 py-2.5 text-center text-sm font-semibold text-white dark:hover:bg-gray-700"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button className="rounded-full px-3 bg-transparent border border-purple-500 py-2.5 text-center text-sm font-semibold text-white dark:hover:bg-gray-700">
      <Link href="/login">
        Login
      </Link>
    </button>
  );
}

export default GetUserInfo;