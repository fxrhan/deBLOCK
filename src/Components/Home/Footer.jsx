import React from 'react'
import FooterLink from './FooterLink'

export default function Footer() {
    return (
        <div className='footer main-footer lg:h-80 h-max pt-5 px-20 text-white'>
            <div className='flex lg:flex-row'>
                <div className=' 2xl:w-80 2xl:mr-32 lg:w-72 lg:mr-24 lg:items-stretch flex items-center'>
                    {/* <h1 className='text-3xl mb-5 font-bold'>Noted</h1> */}
                    <p className=' lg:text-left text-lg font-medium lg:w-90 w-80 text-center text-lg mb-7'>Store Data withour fretting over security</p>
                </div>
                <div className='flex sm:flex-row lg:justify-stretch justify-around sm:items-stretch items-center'>
                    <div className='2xl:mr-64 lg:mr-24 lg:w-32 sm:mr-32'>
                        <h2 className=' sm:text-left text-center text-md mb-5 font-bold'>PRODUCT</h2>
                        <FooterLink link={"j"} title={"Home"}></FooterLink>
                        <FooterLink link={"j"} title={"Features"}></FooterLink>
                        <FooterLink link={"j"} title={"Login"}></FooterLink>
                        <FooterLink link={"j"} title={"Signup"}></FooterLink>
                        
                    </div>
                    <div className='2xl:mr-64 lg:w-32 lg:mr-24 sm:mr-32'>
                        <h2 className=' sm:text-left text-center text-md mb-5 font-bold sm:mt-0 mt-5'>BE SOCIAL</h2>
                        <FooterLink link={"j"} title={"Email"}></FooterLink>
                        <FooterLink link={"j"} title={"Twitter"}></FooterLink>
                        <FooterLink link={"j"} title={"Instagram"}></FooterLink>
                        <FooterLink link={"j"} title={"Feedback"}></FooterLink>

                    </div>
                    <div className='lg:w-32'>
                        <h2 className=' sm:text-left text-center text-md mb-5 font-bold sm:mt-0 mt-5'>CONTACT US</h2>
                        <FooterLink link={"j"} title={"Email"}></FooterLink>
                        <FooterLink link={"j"} title={"888888888"}></FooterLink>


                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-7 mb-5 text-center'>
                © DataCV™ 2022 | All rights reserved
            </div>
        </div>
    )
}