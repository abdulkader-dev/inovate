import React from 'react'
import customer from '../assets/customer.png'
const Customer = () => {
  return (
    <div className='py-8'>

        <div className='py-5 max-w-container mx-auto bg-blue rounded-3xl'>

            <div className=' md:flex  justify-between gap-[45px] p-4 md:p-0 '>

                {/* 1st content */}

                <div className=' w-full md:w-2/5  md:ml-4'>
                <img className='w-[646px]' src={customer}/>

                </div>

{/* 
               2nd content */}

                <div className=' w-full md:w-3/5'>
                <h1 className='font-bold  text-4xl md:text-5xl font-chirvo mt-8 text-white  w-[330px] md:w-[600px] mx-auto'>Trusted by 35,000+ happy customers.</h1>

                {/* content */}

                <div className=' flex justify-center mt-8  gap-[10px] md:gap-[40px]'>

                   {/* 1s content */}
                    <div>
                        <h2  className='font-bold  text-2xl md:text-5xl font-chirvo mt-8 text-white'>720+</h2>
                        <p className='font-normal text-lg font-chirvo mt-8 text-white w-[100px] md:w-[186px]'>Over 500 business powered with us</p>
                    </div>



                   {/* 2nd content */}
                    <div>
                        <h2  className='font-bold  text-2xl md:text-5xl font-chirvo mt-8 text-white'>4.9</h2>
                        <p className='font-normal  text-lg font-chirvo mt-8 text-white  w-[100px] md:w-[186px]'>Rating on google play and app store</p>
                    </div>
           {/* 3rd cotent */}
                    <div>
                        <h2  className='font-bold text-2xl md:text-5xl font-chirvo mt-8 text-white'>200+</h2>
                        <p className='font-normal text-lg font-chirvo mt-8 text-white w-[100px] md:w-[186px]'>Easily integrate with your favorite apps</p>
                    </div>

                </div>


                </div>

            </div>

        </div>

    </div>
  )
}

export default Customer