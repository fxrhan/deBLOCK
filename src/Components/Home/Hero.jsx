/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Navigate, useNavigate } from 'react-router-dom'



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Community', href: '#' },
]

export default function Example() {
  const navigate=useNavigate();
  return (
    <div className="relative bg-white overflow-hidden" style={{"paddingBottom":"43px"}}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
         
          <div className='flex w-screen mt-10'>
          <div style={{"width":"20%"}}>
                
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl " style={{"color":"#126E82",fontSize:"30px"}} >
                  DataCV
                </h1>
          </div>
          <Popover className="w-screen">
            <div className="relative px-4 sm:px-6 lg:px-8">
              
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
               
                  
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      
                    </div>
                 
               
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 flex align-items justify-between gap-x-14" style={{'width':'88%'}}>
                    <div className='flex gap-x-5 items-center'>
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                        </a>
                    ))}

                    </div>
                  <div className='flex gap-x-4'>

                    <a><div className='bg-color font-medium h-11  flex justify-center items-center rounded-md text-white auth-button' style={{'width':"132px"}} onClick={()=>{
                        navigate('/login');
                    }}>Log In</div></a>
                    <a><div className='bg-color font-medium h-11  flex justify-center items-center rounded-md text-white auth-button' style={{'width':"132px"}} onClick={()=>{
                      navigate('/register')
                    }}>Sign Up</div></a>
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
           
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl " >
                <span className="block xl:inline text-color">DataCV - A better</span>{' '}
                <span className="block text-indigo-600 xl:inline text-color">way to store</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <p>DataCV makes decentralized storage accessible for all</p>

              </p>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <p>The storage of tomorrow needs DataCV today.</p>

              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                
              </div>

             
            </div>
            
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/* <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        /> */}
      </div>
    </div>
  )
}
