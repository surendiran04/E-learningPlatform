import React from 'react'
import { FaSearch } from "react-icons/fa";

function ViewStudents() {
  return (
    <div className=''>
      <div className="text-4xl font-bold  text-dg text-center non-italic m-4">
        Students List
      </div>
      <form class=" flex justify-evenly flex-wrap m-10">
        <div className='flex mt-3  gap-2 h-14 px-3  w-1/4 rounded-lg  border-solid border-black  border-2 bg-light-bg '>
          <input
            type="text"
            placeholder="Search"
            maxLength="100"
            className="w-full text-xl bg-inherit outline-none border-light-bg"
          />
          <div className="text-2xl mt-3">
            <FaSearch />
          </div>
        </div>
        <div className='w-1/4'>
          <label for="sort" class="text-xl font-medium text-black ml-2 mb-6  ">Sort by</label>
          <select id="sort" class="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>Students</option>
            <option value="cou">Course</option>
          </select>
        </div>
      </form>

      <div className='flex justify-center'>
        <table class="table-auto border-collapse border-black border-2	 ">
          <thead>
            <tr>
              <th className='border-black border-2 p-2 '>S.No</th>
              <th className='border-black border-2 p-2 '>Student ID</th>
              <th className='border-black border-2 p-2'>Student Name</th>
              <th className='border-black border-2 p-2'>Phone</th>
              <th className='border-black border-2 p-2'>Email</th>
              <th className='border-black border-2 p-2'>Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-black border-2 p-2' >1</td>
              <td className='border-black border-2 p-2' >4</td>
              <td className='border-black border-2 p-2'>harisangar</td>
              <td className='border-black border-2 p-2'>9952878399</td>
              <td className='border-black border-2 p-2'>apharisangar@gmail.com</td>
              <td className='border-black border-2 p-2'>Full Stack</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default ViewStudents