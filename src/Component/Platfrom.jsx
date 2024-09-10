import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/v1.png'
import pic5 from '../assets/v2.png'

const Platfrom = () => {
  return (
    <div>
        <div  className=' mt-[100px]  md:mt-[450px] max-w-container mx-auto'>
            <div className=' md:flex justify-between'>
                <div className=' w-full md:w-6/12'>
                <h1 className='text-second  text-2xl md:text-5xl font-bold w-[370px]  md:w-[504px] font-Chivo p-4 md:p-0 text-center'>How simple is it to use our platform?</h1>
                </div>
                <div className=' w-full md:w-6/12'>
                <p className='text-[#645E76]  text-md  p-4 md:p-0 md:text-lg font-semibold  w-[370px] md:w-[530px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
            </div>
             
{/* 
             contest  */}

            <div className=' py-16 md:py-32  md:flex justify-between'>
                  
                  {/* 1st section */}
                <div className=' w-full md:w-1/4'>
                <img className=' mx-auto' src={pic1}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second   text-2xl font-extrabold font-chirvo '> Login or sign up to be able use our platform </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>

                </div>



                  
                  {/* dot pic */}
                 
                 <img className=' hidden md:block w-[262px] h-[58px] py-2' src={pic4}/>


                  {/* dot pic */}
                 


                {/* 2section */}


                <div className=' w-full md:w-1/4 mt-8 md:mt-0'>
                <img className='mx-auto' src={pic3}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second  text-2xl font-extrabold font-chirvo '>Connect your website with just a few click </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">Once your website is online, you can configure it, I will show you how to put your website online </p>

                </div>

                
                  {/* dot pic */}
                 

                <img className='hidden md:block  w-[262px] h-[58px] py-2' src={pic5}/>

                
                  {/* dot pic */}
                 
                  
                  {/* 3rd section */}
                <div className=' w-full md:w-1/4 mt-8 md:mt-0'>
                <img className='mx-auto' src={pic2}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second  text-2xl font-extrabold font-chirvo '> Take some sales data that you want </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">Sell your data directly: The most straightforward method is to sell your data directly to another</p>

                </div>


            </div>




        </div>
    </div>
  )
}

export default Platfrom