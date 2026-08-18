'use client'

import { ArrowDownUp, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react";
function UpBtn() {
  return (
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
    >
      <button  className='bg-purple-600  dark:bg-purple-500 p-5 z-50 rounded-full absolute bottom-[60vh] right-52'>
         <Link href='#Home'>
        <ArrowUp/>
         </Link>
      </button>
    </motion.div>
  )
}

export default UpBtn
