import React from 'react'
import CategoriesPage from './products'
import { GetAllGategories } from '@/lib/prodect.action'


async function page() {
  const data= await GetAllGategories();
  console.log(data.data);
  return (
    <div>
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis velit incidunt deleniti temporibus reprehenderit, quisquam laboriosam sed accusamus ducimus a. Commodi enim nostrum consectetur at aperiam soluta illo ipsum dolorem. */}
      {data.data.map((x:any,i:any)=>{
        <div>hello world Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tenetur voluptatibus animi nisi. Magnam ducimus est at dolores voluptates rerum pariatur nobis quas nostrum deserunt. Repellendus quod deleniti autem? Animi.{x.name}</div>
      })}
    {/* <CategoriesPage /> */}
    </div>
  )
}

export default page
