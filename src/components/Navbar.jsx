import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-white justify-between px-10 py-6 bg-transparent backdrop-blur-sm sticky top-0 bg-black '>
       <div className='text-2xl flex items-center gap-2 ml-20'>
           <h1>BLITZ</h1>
           <h1 className='font-extralight'>GAMING</h1>

       </div>


       <div className='text-white mr-20 text-[17px] flex items-center space-x-14 cursor-pointer tracking-wide '>
           <p>About us</p>
           <p>Connect with us</p>
           <p>BGMI</p>
       </div>
    </div>
  )
}

export default Navbar


