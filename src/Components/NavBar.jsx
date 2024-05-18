import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import ProfilePic from '../assets/login-1.jpg'

function NavBar() {
    return (
        <header className='sticky top-0 right-0 left-0 bg-white z-auto border-b-4 border-solid border-border '>

            <section className='flex items-center justify-between relative py-2 px-8 '>
                <a href='#' className="text-3xl font-semibold pl-4 text-black">E-Learning</a>

                <form className='flex gap-2 w-4/12 py-1 px-5 rounded-lg	 bg-light-bg border-none '>
                    <input type="text" name="search-box" placeholder='search courses...' maxLength="100" className='w-full text-xl bg-inherit outline-none border-none border-light-bg 	' />
                    <div className='text-2xl'>
                        <FaSearch />
                    </div>
                </form>
                <div className='icons text-2xl text-black-100/200 bg-light-bg  rounded-lg h-2 w-2 leading-10 curser-pointer text-center mr-9 mb-6 hover-black '>
                    <FaUser />
                </div>
            </section>
        </header>
    )
}

export default NavBar