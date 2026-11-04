import { GetAllProdect } from '@/lib/prodect.action'
import React from 'react'
import Product from './product';


async function page() {
 const data = await  GetAllProdect();
//  console.log(data);
  return (
    <div className=''>
      <Product products={data.data}/>
    </div>
  )
}

export default page
