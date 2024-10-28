import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return ( 
    <div className="mt-20">
      <div className=' p-4 md:w-[70%] m-auto'>
          <p className=' bg-white hover:shadow-xl transition-all ease-linear w-32 font-semibold p-2 rounded-3xl text-center py-2'>We're hiring</p>
          
          {/*  Heading Section */}
          <div className=' mt-3 '>
            <b><h1 className='  text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl'>Be part of our <span className=' text-[#FF914D]'>mission</span></h1></b>
            <p className=' text-base md:text-lg  font-semibold mt-4'>We're looking for passionate people to join us on our mission. We value</p>
            <p className=' text-base md:text-lg font-semibold mt-1'>flat hierachies,clear communication, and full ownership and responsibility.</p>
          </div>

          {/* Jobs Tab Select  */}
          <div className=' flex flex-wrap justify-center md:justify-start gap-10 text-center items-center p-3 mt-10'>
            <p className=' w-[130px] py-2 ml-0 md:-ml-3 rounded-3xl bg-black text-white'>View All</p>
            <p className=' w-[130px] py-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all ease-linear'>Development</p>
            <p className=' w-[130px] py-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all ease-linear'>Desing</p>
            <p className=' w-[130px] py-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all ease-linear'>Marketing</p>
            <p className=' w-[130px] py-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all ease-linear'>Finance</p>
            <p className=' w-[130px] py-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all ease-linear'>Management</p>
          </div>

          {/* Job Card Section Details  */}
          <div className='   mt-7 flex flex-col gap-4 '>

            <div className=' border-gray-300 border-t-2  py-4 px-1'>
              <b><h1 className=' text-2xl'>Product Designer</h1></b>
              <p  className=' mt-2 mb-4'>We're looking for a min-level products designer to join our team.</p>
              <div className=' flex flex-col md:flex-row gap-2 mt-5'>
                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px]   border border-gray-500'>
                  <CiLocationOn size={25} />
                  <p className=' font-semibold'>100% remote</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2  w-[100%]  sm:w-[120px]   border border-gray-500'>
                  <CiClock1  size={25} />
                  <p className=' font-semibold'>Full time</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px] items-center justify-center  border border-gray-500'>
                  <p className=' font-semibold'>Apply now</p>
                  <FaArrowRight color='#FF914D'  size={25} />
                </div>
              </div>
            </div>

            <div className=' border-gray-300 border-t-2  py-4 px-1'>
              <b><h1 className=' text-2xl'>Frontend Developer (internship)</h1></b>
              <p  className=' mt-2 mb-4'>We're looking for a min-level products designer to join our team.</p>
              <div className=' flex flex-col md:flex-row gap-2 mt-5'>
                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px]   border border-gray-500'>
                  <CiLocationOn size={25} />
                  <p className=' font-semibold'>100% remote</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2  w-[100%]  sm:w-[120px]   border border-gray-500'>
                  <CiClock1  size={25} />
                  <p className=' font-semibold'>Full time</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px] items-center justify-center  border border-gray-500'>
                  <p className=' font-semibold'>Apply now</p>
                  <FaArrowRight color='#FF914D'  size={25} />
                </div>
              </div>
            </div>

            <div className=' border-gray-300 border-t-2  py-4 px-1'>
              <b><h1 className=' text-2xl'>Software Developer (internship)</h1></b>
              <p  className=' mt-2 mb-4'>We're looking for a min-level products designer to join our team.</p>
              
              {/* Job Tabs Buttons */}
              <div className=' flex flex-col md:flex-row gap-2 mt-5'>
                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px]   border border-gray-500'>
                  <CiLocationOn size={25} />
                  <p className=' font-semibold'>100% remote</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2  w-[100%]  sm:w-[120px]   border border-gray-500'>
                  <CiClock1  size={25} />
                  <p className=' font-semibold'>Full time</p>
                </div>

                <div className=' flex gap-2  py-2 rounded-3xl p-2 w-[100%]  sm:w-[160px] items-center justify-center  border border-gray-500'>
                  <p className=' font-semibold'>Apply now</p>
                  <FaArrowRight color='#FF914D'  size={25} />
                </div>
              </div>
            </div>

          </div>
          
      </div>
    </div>
  )
}

export default page