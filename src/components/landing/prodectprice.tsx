import { div } from 'framer-motion/client';
import React from 'react'

function  ProdectP({ price }: { price:any }) {
    const [int, float] = price.split(".");
  return (
  <div>
     <span className="text-xs align-super">Afg</span>
      {int}
      <span className="text-xs align-super">
        {float ? `.${float}` : ".00"}
      </span>
  </div>
  )
}

export default ProdectP
