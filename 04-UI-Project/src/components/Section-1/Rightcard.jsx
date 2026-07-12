import React from 'react'
import {ArrowRight} from 'lucide-react'
const Rightcard = (props) => {
  return (
    <div id='card' className='h-full w-70.5 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-fit rounded-4xl' src={props.img} alt="image"  />

        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
            <h2 className='bg-white h-5 w-5 rounded-full flex justify-center items-center'>{props.idx+1}</h2>
            <div>
                <p className="font-semibold text-white font-serif drop-shadow-lg">
                    {props.intro}
                </p>
                <div className="flex items-center justify-between mt-5">
                <button className="bg-blue-600 text-white font-medium h-10 px-5 rounded-full flex items-center justify-center whitespace-nowrap">
                    {props.tag}
                </button>

                <button className="bg-blue-600 text-white h-10 w-14 rounded-full flex items-center justify-center">
                    <ArrowRight size={20} strokeWidth={1.5} />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightcard