'use client'
import { Star } from 'lucide-react'
import React from 'react'
function RatingProducts({data}:{data:any}) {
    // console.log(data)
  return (
    <div>
       <div className="mt-5 flex flex-wrap items-center gap-3">
                  {/* {data.map((x:any,index:Number)=>{ */}
                    {/* <div> */}
                        <div className="flex items-center gap-1">

                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      
                  <span className="font-bold text-gray-900">
                    {data[0]?.rating}
                  </span>

                </div>

                <span className="text-sm text-gray-400">
                  {data[0]?.rating} customer reviews
                </span>
                    {/* </div> */}
                {/* //   })} */}
                

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span className="text-sm font-medium text-green-600">
                  In stock
                </span>

              </div>
    </div>
  )
}

export default RatingProducts
