import { useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import ProfilePic from '../assets/student1.png'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdRoundaboutLeft } from "react-icons/md";
import { useAuthContext } from '../Contexts/AuthContext';
import { LogOut } from "lucide-react";
import '../App.css'


const Sidebar = () => {
    const { open, setOpen } = useAuthContext();
    return (
        <div className='flex flex-col  h-screen ' >
            <div className={`bg-white h-screen p-5 pt-8  duration-300 relative border-solid border-black border-r-2 `} onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}>
                <div className=' flex flex-col my-auto items-center mt'>
                    <img src={ProfilePic} alt="Profile Logo" />
                    {open &&
                        <>
                            <h3 className='text-xl font-semibold mt-2'> Arun </h3>
                            <p className='text-gray-500 text-xl m-2'>Student</p>
                            <button className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800  focus:ring-purple-300  rounded-lg text-xl  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-35   `}  >View Profile</button>
                        </>
                    }
                </div>
                <div className='flex gap-3 mb-4 mt-6' >
                    <FaHome color='black' size={32} />
                    {open && <h3 className='text-black  sedan-sc-regular text-xl' >Home</h3>}
                </div>
                <div className='flex gap-3 mb-4' >
                    <BookOpenCheck color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-xl' >Courses</h3>}
                </div>
                <div className='flex gap-3 mb-4' >
                    <FaChalkboardTeacher color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-xl' >Mentors</h3>}
                </div>

                <div className='flex gap-3 mb-4 ' >
                    <MdRoundaboutLeft color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-xl' >About</h3>}
                </div>

                <div className='flex gap-3 mb-4 ' >
                    <LogOut color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-xl' >Logout</h3>}
                </div>


            </div>

        </div >
    );
};

export default Sidebar;

// import { useState } from 'react';
// import { BsArrowLeftShort } from "react-icons/bs";

// const Sidebar = () => {
//     return (
//         <div className="flex">
//             <div className={Obg - dark - purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative }>
//         </div>
//     );
// };