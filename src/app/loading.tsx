import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Image width={500} height={500} src="/loading2.gif" alt='please with........'></Image>
      
    </div>
  )
}

export default Loading
