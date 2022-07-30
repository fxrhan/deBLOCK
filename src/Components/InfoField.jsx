import React from 'react'

export default function InfoField(props) {
    const {heading,value,icon}=props;
  return (
    
        <div className='mb-3 flex items-center gap-3.5'>
            <div className='bg-slate-100 flex justify-center items-center h-12 w-12 rounded-md'>
                {icon}
            </div>
            <div>
                <p className='font-semibold'>{heading}</p>
                <p className='text-gray-400'>{value}</p>

            </div>
        </div>
    
  )
}
