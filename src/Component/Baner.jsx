import React from "react";
import laptop from "../assets/lap.png";
const Baner = () => {
  return (
    <div>
      <div className="max-w-container mx-auto py-18">
        <h1 className="text-white mx-auto text-center text-[30px] md:text-[56px] font-bold md:font-normal  w-[330px] md:w-[796px]">
          Get your work done with Management Tool
        </h1>

        <p className="text-white mx-auto text-center  text-sm md:text-lg font-normal   w-[330px] md:w-[467px] py-4">
          The world's first project management platform that connects everything
        </p>

        <div className=" mx-auto  w-[330px] md:w-[480px] py-5 relative ">
          <input
            className=" py-4 md:py-5  px-0 md:px-6  w-[330px]  md:w-[480px] rounded-lg outline-none"
            placeholder="Your business email"
          />

          <div className=" py-2 md:py-3  px-4 md:px-10 border-2 bg-comon rounded-md  w-[130px] md:w-[180px] absolute  top-7 md:top-6 right-1  ">
            <p className="text-second  text-sm md:text-lg font-medium text-center">
              Try for free
            </p>
          </div>
        </div>
        
           {/* pic */}
        <div className="py-2 mx-auto ml-0 md:ml-2 mt-8 md:mt-0 "> 
            <img className=" w-[330px] md:w-[1200px]" src={laptop}/>
        </div> 
       
        
      </div>
    </div>
  );
};

export default Baner;
