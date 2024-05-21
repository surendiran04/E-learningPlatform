import React from 'react'
import { useAuthContext } from "../Contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";


function Profile() {

  const { user } = useAuthContext();
  const name = user?.student_name?.mentor_name;
  const email = user?.email;
  const pass = user?.pass;
  const phone = user?.phone;
  //    <>Name:{name}</>
  //<>email:{email}</>
  //<>Phone:{phone}</>
  return (
    <>
      <div className=' flex items-center justify-center  mt-10'>
        <div className='w-full'>
          <div className="text-4xl font-bold  text-dg text-center non-italic mb-4">
            Profile
          </div>
          <div className='bg-darkb p-16 pl-24 flex flex-col gap-3'>
            <p> <span className='text-3xl text-white '>Name: </span><span className='text-3xl text-gold1 '>Harisangar</span> </p>
            <p> <span className='text-3xl text-white '>Email: </span><span className='text-3xl text-gold1 '>apharisangar@gmail.com</span> </p>
            <p> <span className='text-3xl text-white '>Phone: </span><span className='text-2xl text-gold1 '>9952878399</span> </p>
            <NavLink
              to="/courses"
              className={`
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-darkb py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2  text-white
            `}
            >
              My Courses
            </NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile