import React from 'react'
function UserForm() {
  return (

    <div>
       <div className="mt-6 grid gap-4 sm:grid-cols-2">
         <div className="sm:col-span-2">
           <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
             Email address
           </label>
           <input
             type="email"
             placeholder="you@example.com"
             className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
           />
         </div>
         <div>
           <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
             First name
           </label>
           <input
             type="text"
             placeholder="First name"
             className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
           />
         </div>
         <div>
           <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
             Last name
           </label>
           <input
             type="text"
             placeholder="Last name"
             className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
           />
         </div>
         <div className="sm:col-span-2">
           <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
             Phone number
           </label>
           <input
             type="tel"
             placeholder="+93 700 000 000"
             className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
           />
         </div>
    </div>
</div>
  )
}

export default UserForm
