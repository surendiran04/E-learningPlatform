import React, { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
const { VITE_BACKEND_URL } = import.meta.env;


function ViewStudents() {
  
  const [students,setStudents] = useState([]);
  const [studentsDuplicate,setStudentsDuplicate] = useState([]);


  const onSubmit = (data) => {
    const filterdata = students.filter((d) => d.student_name.toLowerCase().includes(data.search.toLowerCase()))
    setStudents(filterdata)
    if(data.search==""){
      setStudents(studentsDuplicate)
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async()=>{
    try{
        const response = await fetch(`${VITE_BACKEND_URL}/getStudent`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const result = await response.json();
        setStudents(result.data);
        setStudentsDuplicate(result.data)
    }
    catch (error){
        console.log(error.message)
    }
  }
  return (
    
    <div className=''>
      <div className="text-4xl font-bold  text-dg text-center non-italic m-4">
        Students List
      </div>
      <form class=" flex justify-evenly flex-wrap m-10"
        onKeyUp={handleSubmit(onSubmit)}
      >
        <div className='flex mt-3  gap-2 h-14 px-3  w-1/4 rounded-lg  border-solid border-black  border-2 bg-light-bg '>
          <input
            type="text"
            placeholder="Search"
            maxLength="100"
            className="w-full text-xl bg-inherit outline-none border-light-bg"
            {...register("search")}

          />
          <div className="text-2xl mt-3">
            <FaSearch />
          </div>
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
          {
            students?.map((d,i)=>(
              <tr key={i}>
              <td className='border-black border-2 p-2' >{i+1}</td>
              <td className='border-black border-2 p-2' >{d.student_id}</td>
              <td className='border-black border-2 p-2'>{d.student_name}</td>
              <td className='border-black border-2 p-2'>{d.phone}</td>
              <td className='border-black border-2 p-2'>{d.email}</td>
              <td className='border-black border-2 p-2'>{d.batch_name}</td>
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewStudents