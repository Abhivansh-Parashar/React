import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {

    
  return (
    <div id='right' className='h-full p-6 w-2/3 flex no-wrap overflow-x-auto justify-items-start gap-2'>
        {
            props.users.map((elem, idx) => {
                return <Rightcard img={elem.img} tag={elem.tag} intro={elem.intro} idx={idx}/>
            })
        }
    </div>
  )
}

export default RightContent