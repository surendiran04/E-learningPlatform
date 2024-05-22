import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccordianVideo from "../../Components/AccordianVideo"
import Attendance from '../../Components/Attendance';

function MentorDashboard() {
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        const content = {
            1: data
        }
        console.log(content);
    };
    const sessionBtn = (e) => {
        console.log(e.target.innerHTML);
    };

    const [isLoading, setIsLoading] = useState(false);
    let notify = () => toast.warn(errors.heading?.message
        || errors.content?.message
        || errors.link?.message

    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const totalClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const attendance = 90;
    
    return (
        <div>
            <div className='flex flex-col gap-3 w-full  bg-v1 p-10'>
                <h1 className='text-4xl text-white mb-2'> Hi Mentor, </h1>
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
            {/* Course content show */}
            <div className='grid grid-cols-4 p-4 gap-8'>
                <div className='col-span-3 p-10 border-gray-900 border-2'>
                    <div className=' mb-4 '>
                        <div className="text-3xl font-semibold ">
                            Intro to HTML
                        </div>
                        <p>1/1/2024</p>
                    </div>
                    <div className='pl-4'>
                        <ul className='list-decimal text-xl'>
                            <li>Header</li>
                            <li>Footer</li>
                        </ul>
                    </div>
                </div>
                <div className='  h-80 py-7 '>
                    <h2 className='text-3xl font-semibold  mb-4'>Session Roadmap</h2>
                    <div className='grid grid-cols-3  h-full place-content-evenly pl-8 border-black border-2'>
                        {
                            totalClass.map((i) => (
                                <button className='bg-white rounded-full w-12 h-12 border-black border-2' key={i} onClick={sessionBtn} >{i}</button>
                            ))
                        }
                    </div>
                </div>
                <div className=' col-span-3 w-full p-10 border-black border-2'>
                    <h2 className='text-3xl font-semibold  mb-4'>Content Link:</h2>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className='underline text-xl text-blue-700'>Intro to HTML</a>
                </div>
                {/* Attendance */}
                <div className='h-fit '>
                    <Attendance />
                </div>
                <div className='col-span-3 w-full p-10 border-black border-2'>
                    <h2 className='text-3xl font-semibold  mb-4'>Tutorial Link:</h2>
                    <AccordianVideo />
                </div>
                {/* Course content add*/}
                <div className=' col-span-3 border-black border-2'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col m-10 w-3/4 '
                    >
                        <input
                            className=" text-xl text-black outline-none   border-solid border-black  border-2  bg-white mb-5 py-2 px-5   "
                            placeholder="Enter Heading"
                            type="text"
                            {...register("heading", { required: "Heading is required" })}
                        />
                        <textarea className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Content"
                            {...register("content", { required: "Content is required" })}
                        >
                        </textarea>
                        <input
                            className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Content Link"
                            type="text"
                            {...register("link", { required: "Content Link is required" })}
                        />
                        <button
                            className={`
                                w-full
                                rounded-xl
                                font-bold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-4 ${isLoading
                                    ? "bg-green-600  text-white"
                                    : "bg-transparent border-black border-2 hover:bg-db text-darkb"
                                }`}
                            type="submit"
                            onClick={notify}
                        >
                            Add Content
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div >
    )
}

export default MentorDashboard