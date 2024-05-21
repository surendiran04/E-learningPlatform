import React from 'react'
import About from '../assets/about-img.svg'
import Header from '../Components/Header'
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";

function Home() {
  return (
    <div className="">
      <Header />
      <div className=' flex items-center gap-2  bg-gray-600 p-10 '>
        <div className='flex '>
          <img src={About} alt="" className='w-full' />
        </div>
        <div class="flex-1">
          <h3 className='text-4xl font-bold pb-4 text-white'>Why Choose Us?</h3>
          <ul class="list-none text-xl tracking-widest text-white mb-5">
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Expert-Led Courses</li>
            </div>
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Flexible Learning</li>
            </div>
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Interactive and Engaging Content</li>
            </div>
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Supportive Community</li>
            </div>
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Career Advancement</li>
            </div>
            <div className='flex gap-3 pb-5'>
              <SiTicktick className='mt-1.5' />
              <li>Satisfaction Guaranteed</li>
            </div>

          </ul>
          <NavLink
            to="/courses"
            className={` 	
                    w-full
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mb-10 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
          >
            Courses
          </NavLink>
        </div>
      </div>
      <div className=' grid grid-cols-3 my-7 gap-10 mx-7 '>
        <div className='bg-gray-200 flex  flex-col justify-center items-center py-5 '>
          <FaPhoneAlt className=' text-xl' />
          <h3 className='font-bold  text-xl'>Phone number</h3>
          <p className='font-semibold'>123-456-7890</p>
          <p className='font-semibold'>111-222-3333</p>
        </div>
        <div className='bg-gray-200 flex  flex-col justify-center items-center  '>
          <MdEmail className=' text-xl' />
          <h3 className='font-bold  text-xl '>Email address</h3>
          <p className='font-semibold'>apharisangar4@gmail.come</p>
          <p className='font-semibold'>anasbhai@gmail.come</p>
        </div>
        <div className='bg-gray-200 flex  flex-col justify-center items-center  '>
          <IoLocation className='text-2xl' />
          <h3 className='font-bold text-xl'>Office address</h3>
          <p className='font-semibold'>flat no. 1, a-1 building, </p>
          <p className='font-semibold'>jogeshwari, mumbai, india - 400104</p>
        </div>
      </div>
    </div>
  )
}

export default Home