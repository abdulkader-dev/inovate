import React from "react";

const Contacet = () => {
  return (
    <div className="py-8">
      <div className="max-w-container mx-auto bg-blue rounded-3xl">
        {/*  content */}

        <div className=" md:flex  py-4 md:py-24  ">
          {/* 1st content */}
          <div className="w-3/4">
            <h1 className="font-bold  text-2xl md:text-5xl font-chirvo  w-[330px] md:w-[577px] text-white ml-[10px]  md:ml-[100px]">
              Don’t find the answer? contact us for any query.
            </h1>
          </div>


            {/* 2nd content */}

          <div className=" w-full md:w-1/4  mt-4 ">
            <div className=" py-3 md:py-4  px-8md:px-10 border-2 border-comon bg-comon rounded-md  w-[120px] md:w-[200px] ml-3 md:ml-0  ">
              <p className="text-white  text-sm md:text-lg font-medium text-center">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacet;
