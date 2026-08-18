import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function LoginBtn() {
       {
        localStorage.getItem('token')  && (
          <Link
            href="/login"
            className="ml-2 flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition dark:hover:bg-gray-700 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600">
            <User className="h-4 w-4" />
            Login
          </Link>
        );
    }
}

export default LoginBtn
