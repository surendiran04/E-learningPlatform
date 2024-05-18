import React from 'react'
import MentorPic from '../assets/mentor.svg'
import thumb1 from '../assets/thumb-1.png'
function CourseCard() {
  return (
    <div className='box p-2 rounded-lg grid  w-96 border-solid border-black border-2'>

      <div className='flex items-center mb-2'>
        <img src={MentorPic} alt="photo" className='h-20 w-20 mr-2 ' />
        <div>
          <h3 className='text-xl font-semibold mt-2' >jonh deo</h3>
          <span className='text-gray-500 text-xl m-2' >21-10-2022</span>
        </div>
      </div>

      <div className='mb-2'>
        <img src={thumb1} alt="" className='h-56  rounded-xl	' />
      </div>
      <h3 className="text-2xl font-semibold mb-2" >Full Stack Development 2024</h3>
      <button className={`focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-purple-300  rounded-lg text-xl  px-5 py-2.5 mb-2 `}  >Read more</button>
    </div>
  )
}

export default CourseCard