import React from 'react'
import logo1 from '../assets/Logo.png'
import { FaGofore } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-[#F7F7FC] mt-24'>
        <div className='max-w-container mx-auto  py-4 md:py-24  '>
            {/* content */}


            <div className=' md:flex justify-between p-4 md:p-0 '>

                {/* 1st content */}

                <div className=' w-full md:w-1/5'>

                <img src={logo1}/>
                <p className='text-lg font-chirvo text-gray mt-4 font-normal'>Build a modern and creative website with Innovate.</p>

                <div className='flex mt-5 gap-5'>
                <FaGofore />
                <FaFacebook />
                <FaGofore />
                <FaFacebook />

                </div>

             

                </div>


                   {/* 2nd content */}
                <div className=' w-full md:w-1/5  mt-6 md:mt-0  ml-0 md:ml-20'>
                 <h1 className='text-lg font-chirvo font-medium text-second'>Product</h1>

                 <p className='mt-5 text-gray'>Landingpages</p>
                 <p className='mt-2 text-gray'>Pricing</p>
                 <p className='mt-2 text-gray'>Benefits</p>
                 <p className='mt-2 text-gray'>Features</p>
                </div>


  {/* 3rd  content */}
                <div className=' w-full md:w-1/5 mt-6 md:mt-0  '>
                 <h1 className='text-lg font-chirvo font-medium text-second'>Company</h1>

                 <p className='mt-5 text-gray'>About</p>
                 <p className='mt-2 text-gray'>Privacy Policy</p>
                 <p className='mt-2 text-gray'>Terms & Conditions</p>
                 <p className='mt-2 text-gray'>Partners</p>
                 <p className='mt-2 text-gray'>Contact</p>
                </div>

  {/* 4th content */}
                <div className='w-full md:w-1/5 mt-6 md:mt-0'>
                 <h1 className='text-lg font-chirvo font-medium text-second'>Resources</h1>

                 <p className='mt-5 text-gray'>Landingpages</p>
                 <p className='mt-2 text-gray'>Pricing</p>
                 <p className='mt-2 text-gray'>Benefits</p>
                 <p className='mt-2 text-gray'>Features</p>
                </div>

                
                  {/* 5th content */}

                 <div className='w-full md:w-1/5 mt-6 md:mt-0 '>
                 <h1 className='text-lg font-chirvo font-medium text-second'>Get Latest Updates</h1>

                 <p className='text-lg font-chirvo text-gray mt-4 font-normal w-[285px]'>Subscribe to our newsletter and get many interesting things every week</p>

                 <div className='mt-7 relative'>
                    <input className='w-[269px]  py-4 px-4 border-gray rounded-xl border-2 outline-0'/>
                    <FaTelegramPlane  className='absolute  top-5  right-16 md:right-8 text-white bg-blue text-2xl '/>

                 </div>


                 
                </div>


            </div>

        </div>

        <p className='max-w-container mx-auto py-2'>© 2024 Innovate - All Right Reserved</p>
    </div>
  )
}

export default Footer