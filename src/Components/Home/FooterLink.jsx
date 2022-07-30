import React from 'react'

export default function FooterLink(props) {
  return (
    <a href={props.link}><p className='py-1 mb-2 font-light sm:text-left text-center'>{props.title}</p></a>
  )
}