import React from 'react'
import brand1 from '../assets/brand2 (1).png'
import brand2 from '../assets/brand2 (2).png'
import brand3 from '../assets/8.png'
import brand4 from '../assets/3.png'
import brand5 from '../assets/4.png'
const Apps = () => {
  return (
    <div className='bg-[#F4FAFA]'>
        <div className='max-w-container mx-auto py-8  p-4 md:p-0 '>
            <div className='py-8  md:flex justify-between'>
              {/* 1st content */}
                <div className='w-2/4'>
                <p className='text-xl font-chirvo font-medium text-[#FF7364]'>Integrations</p>

                <h1 className='font-chirvo font-bold  text-3xl  md:text-5xl text-second  w-[330px] md:w-[587px]'>Easily integrate with your favorite apps</h1>

                <p className='mt-4 font-chirvo font-medium  text-sm md:text-lg text-gray  w-[330px] md:w-[533px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>


                
                <div className='py-4  px-6 md:px-10 border-2 bg-blue rounded-md w-[196px]  mt-[20px] md:mt-[40px] border-white'>
        <p className='text-white  text-sm md:text-lg font-medium text-center'>Get Started</p>


        
    </div>



                </div>

                  {/* 2nd content */}

                <div className=' w-full md:w-2/4 mt-8 md:mt-0'>
                <div className='grid grid-cols-2'>
                <img  src={brand1}/>
                <img src={brand2}/>
                </div>

                <div className='grid  grid-cols-2 md:grid-cols-3 '>
                
                <img src={brand3}/>
                <img src={brand4}/>
                <img src={brand5}/>
                </div>

                

                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Apps