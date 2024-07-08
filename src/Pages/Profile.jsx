import React from 'react'
import { useAuthContext } from "../Contexts/AuthContext";
import { NavLink } from "react-router-dom";


function Profile() {

  const { user,decodedToken } = useAuthContext();
  const userRole = decodedToken?.role[0] ;
  const name = user?.student_name;
  const mname = user?.mentor_name;
  const email = user?.email;
  const phone = user?.phone;
 
  return (
    <>
      <div className=' flex items-center justify-center  mt-10'>
        <div className='w-full'>
          <div className="text-4xl font-bold  text-dg text-center non-italic mb-4">
            Profile
          </div>
          <div className='bg-darkb p-16 pl-24 flex flex-col gap-3'>
            <p> <span className='text-3xl text-white '>Name: </span><span className='text-3xl text-gold1 '>{userRole=="student"?name:mname}</span> </p>
            <p> <span className='text-3xl text-white '>Email: </span><span className='text-3xl text-gold1 '>{email}</span> </p>
            <p> <span className='text-3xl text-white '>Phone: </span><span className='text-2xl text-gold1 '>{phone}</span> </p>
            <NavLink
              to="/student/mycourses"
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