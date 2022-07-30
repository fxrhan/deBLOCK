import React, { useState } from 'react'

export default function Problem(props) {
   
    
    
  return (
    <div className='h-40 data-box w-40 bg-primary-light rounded-md text-white flex flex-col justify-center items-center py-10 px-14'>
        {props.icon}
        <h1 className='problem-heading'>{props.heading}</h1>
    </div>
  )
}
