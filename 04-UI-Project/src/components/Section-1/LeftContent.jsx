import React from 'react'
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-6'>
            <h3 className='text-6xl leading-[1.1] mb-7 font-bold'>Prospective <br /><span>customer</span> <br />segmentation</h3>
            <p className='text-xl font-medium text-gray-600'>Depending on customer <br /> satisfaction and access <br /> to banking products, potential <br /> target audience can be divided <b></b> into three groups</p>
        </div>
        <div  className='text-9xl'>
            <ArrowUpRight size={90} strokeWidth={2.5} />
        </div>
    </div>
  )
}

export default LeftContent