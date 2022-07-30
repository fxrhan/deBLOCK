import React from 'react'

export default function FeatureBox(props) {
  return (
    <div className="feature-box pt-3 px-6 flex flex-col items-center  basis-72 rounded-md bg-light flex-wrap h-64">
        {props.icon}
        <h2 className='feature-heading'>{props.heading}</h2>
        <p className='text-center'>{props.des}</p>

    </div>
  )
}
