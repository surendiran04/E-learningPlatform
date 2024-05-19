import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function MentorDashboard() {
    const navigate = useNavigate();



    return (
        <div>
            <div className='flex flex-col gap-3 w-full  bg-v1 p-10'>
                <h1 className='text-4xl text-white mb-4'> Hi Mentor, </h1>
                {/* grid grid-cols-2 gap-2 grid-flow-row */}
                <div className='flex justify-evenly m-10 flex-wrap  gap-20'>
                    <NavLink
                        to="/mentor/viewstudents"
                        className={`
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
                    >
                        Students
                    </NavLink>
                    <NavLink
                        to="/mentor/viewmentors"
                        className={`
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
                    >
                        Mentors
                    </NavLink>

                    <NavLink
                        to="/mentor/createcourse"
                        className={`
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
                    >
                        Create Course
                    </NavLink>

                    <NavLink
                        to="/mentor/signup"
                        className={` 	
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
                    >
                        Create Mentor
                    </NavLink>
                    <NavLink
                        to=""
                        className={` 
                    w-1/4
                    text-center
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-b2 text-white
                        `}
                    >
                        Courses
                    </NavLink>

                </div>


            </div>
        </div >
    )
}

export default MentorDashboard