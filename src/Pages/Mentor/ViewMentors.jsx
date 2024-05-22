import React, { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
const { VITE_BACKEND_URL } = import.meta.env;

function ViewMentors() {

  const [mentors,setMentors] = useState([]);
  const [mentorsDuplicate,setMentorsDuplicate] = useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const filterdata = mentors.filter((d) => d.mentor_name.toLowerCase().includes(data.search.toLowerCase()))
    setMentors(filterdata)
    if(data.search==""){
      setMentors(mentorsDuplicate)
    }
  };

 
  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async()=>{
    try{
        const response = await fetch(`${VITE_BACKEND_URL}/getMentor`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const result = await response.json();
        setMentors(result.data);
        setMentorsDuplicate(result.data);
    }
    catch (error){
        console.log(error.message)
    }
  }

  return (
    <div className=''>
      <div className="text-4xl font-bold  text-dg text-center non-italic m-4">
        Mentors List
      </div>
      <form class=" flex justify-evenly flex-wrap m-10"
        onKeyUp={handleSubmit(onSubmit)}>
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
           {
            mentors?.map((d,i)=>(
              <tr key={i}>
              <td className='border-black border-2 p-2' >{i+1}</td>
              <td className='border-black border-2 p-2' >{d.mentor_id}</td>
              <td className='border-black border-2 p-2'>{d.mentor_name}</td>
              <td className='border-black border-2 p-2'>{d.phone}</td>
              <td className='border-black border-2 p-2'>{d.email}</td>
              <td className='border-black border-2 p-2'>{d.course}</td>
            </tr>
            ))
           }
            
          </tbody>
        </table>


      </div>
    </div>

  )
}

export default ViewMentors