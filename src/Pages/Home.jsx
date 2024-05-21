import React from 'react'
import About from '../assets/about-img.svg'
import Header from '../Components/Header'
import { NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import LearnPic from "../assets/GroupLearning.png"
import TitleCard from "../assets/titlecard.png"
function Home() {
  return (
    <div className="">
      <Header />
      <img src={TitleCard} alt="" className='h-96' ></img>
      <div className='w-full  bg-sw py-5 grid grid-cols-2 '>
        <div className='p-20'>
          <p className=' text-lb2 home-card-p mb-2'>GET STARTED WITH E-LEARNING</p>
          <h1 className='text-6xl text-gray-900 font-bold mb-5'>Stop Dreaming,</h1>
          <h1 className='text-7xl text-gray-900 font-bold'>Start Learning</h1>
        </div>
        <div >
          <img src={LearnPic} alt="" className=' h-96' />
        </div>
      </div>
      <div className=' grid grid-cols-2 bg-gray-600  '>
        <div className=" ml-36 mt-28">
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
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none  
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
          >
            Courses
          </NavLink>
        </div>
        <div className='mr-28 mb-20 '>
          <img src={About} alt="" className="" />
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