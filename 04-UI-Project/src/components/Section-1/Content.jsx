import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props, idx) => {
    
  return (
    <div className='py-10 px-18 h-[87vh] flex gap-10'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Content