import React from 'react'
import CourseCard from "../Components/CourseCard"
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <>
    <header className='sticky top-0 right-0 left-0 bg-white z-0 border-b-2 border-solid border-black '>
            <section className='flex  relative py-4 px-8 '>
                <a href='#' className="text-3xl font-semibold pl-4 text-black">E-Learning</a>
                <form className='flex ml-60 gap-2 w-4/12 py-1 px-5 rounded-lg  border-solid border-black  border-2 bg-light-bg  '>
                    <input type="text"  placeholder='search courses...' maxLength="100" className='w-full text-xl bg-inherit outline-none border-light-bg 	' />
                    <div className='text-2xl'>
                        <FaSearch />
                    </div>
                </form>
            </section>
        </header>
    <CourseCard/>
    </>
  )
}

export default Home