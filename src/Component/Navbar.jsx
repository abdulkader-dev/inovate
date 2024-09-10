import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Layout/Button';
import Buttonsecond from '../Layout/Buttonsecond';
import Baner from './Baner';
import { MdOutlineVerticalDistribute } from "react-icons/md";



const Navbar = () => {
  const [open ,Setopen]=useState(false)

  return (
 <div  className='bg-covers bg-no-repeat bg-cover bg-center h-screen' >
     <div className='max-w-container mx-auto py-8'>
       <div className='flex'>
       <div className='w-1/5  pl-2 md:pl-0'>
       <img src={logo}/>
       </div>

       
        <div className='w-2/5  md:flex justify-between ml-32 py-4 hidden md:block'>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Home</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div>
          <p className='text-white text-lg font-medium'>Features</p>
        </div>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Service</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Pages</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div>
          <p className='text-white text-lg font-medium'>Blog</p>
        </div>
       
        </div>
        <div className='w-2/5  md:flex  py-2 ml-10 gap-x-10 justify-end hidden md:block'>
        <Buttonsecond/>
        <Button/>
        </div>


{/* responcive */}
        <div className=' md:hidden'>


      <div onClick={()=>Setopen(!open)}  className='md:hidden cursor-pointer pl-[220px] p-2 text-2xl bg-blue text-white'>
      <MdOutlineVerticalDistribute />
      </div>

      <div className={`${open ? "block" :"hidden"}`}>
      <div className='w-full  pl-[30%]   py-4   md:hidden'>
        <div className='flex gap-1 gap-y-2'>
          <p className='text-white  cursor-pointer  text-sm font-medium'>Home</p>
          <IoIosArrowDown  className='text-white text-md font-medium mt-1'/>
        </div>
        <div>
          <p className='text-white text-sm font-medium'>Features</p>
        </div>
        <div className='flex gap-1'>
          <p className='text-white cursor-pointer text-sm font-medium'>Service</p>
          <IoIosArrowDown  className='text-white text-sm font-medium mt-1'/>
        </div>
        <div className='flex gap-1'>
          <p className='text-white text-sm font-medium'>Pages</p>
          <IoIosArrowDown  className='text-white text-sm font-medium mt-1'/>
        </div>
        <div>
          <p className='text-white cursor-pointer text-sm font-medium'>Blog</p>
        </div>
       
        </div>
        <div className='w-2/5 flex ml-6 gap-x-4 md:hidden'>
        <Buttonsecond/>
        <Button />
        </div>
      </div>

       
        </div>







       </div>
    </div>

    <Baner/>
 </div>




  )
}

export default Navbar