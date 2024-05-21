import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

function ViewMentors() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div className=''>
      <div className="text-4xl font-bold  text-dg text-center non-italic m-4">
        Mentors List
      </div>
      <form class=" flex justify-evenly flex-wrap m-10"
        onBlur={handleSubmit(onSubmit)}>
        <div className='flex gap-2 h-14 px-3 mt-3  w-1/4 rounded-lg  border-solid border-black  border-2 bg-light-bg '>
          <input
            type="text"
            placeholder="Search"
            maxLength="100"
            className="w-full text-xl bg-inherit outline-none border-light-bg 	"
            {...register("search")}
          />
          <div className="text-2xl mt-3">
            <FaSearch />
          </div>
        </div>
        <div className='w-1/4'>
          <label for="sort" class="text-xl font-medium text-black ml-2 mb-6  ">Sort by</label>
          <select id="sort" class="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("sort-by")}>
            <option value="mentor" >Mentors</option>
            <option value="course" selected>Course</option>
          </select>
        </div>
      </form>

      <div className='flex justify-center'>
        <table class="table-auto border-collapse border-black border-2	 ">
          <thead>
            <tr>
              <th className='border-black border-2 p-2 '>S.No</th>
              <th className='border-black border-2 p-2 '>Mentor ID</th>
              <th className='border-black border-2 p-2'>Mentor Name</th>
              <th className='border-black border-2 p-2'>Phone</th>
              <th className='border-black border-2 p-2'>Email</th>
              <th className='border-black border-2 p-2'>Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-black border-2 p-2' >1</td>
              <td className='border-black border-2 p-2' >9</td>
              <td className='border-black border-2 p-2'>striver</td>
              <td className='border-black border-2 p-2'>9814231442</td>
              <td className='border-black border-2 p-2'>striver2004@gmail.com	</td>
              <td className='border-black border-2 p-2'>ML</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>

  )
}

export default ViewMentors