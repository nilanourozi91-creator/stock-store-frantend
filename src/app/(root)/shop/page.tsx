import { GetAllProdect } from '@/lib/prodect.action'
import React from 'react'
// import Products from './product';

async function page() {
 const data = await  GetAllProdect();
  return (
    <div className='h-screen w-full'>
      {/* <Products data={data.data}/> */}
    </div>
  )
}

export default page
