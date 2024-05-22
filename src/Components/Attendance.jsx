import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Attendance() {
    const [isLoading, setIsLoading] = useState(false);

    const attendanceBtn = (data) => {
        console.log(data);
        const target = "1";
        const student_ids = [];
        for(let a in data){
            if(data[a]===target){
                student_ids.push(a);
            }
        }
        console.log(student_ids);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-4'>Attendance</h2>
            <form className=' border-black border-2 p-4' onSubmit={handleSubmit(attendanceBtn)}>
                <div className='flex gap-3'>
                    <div className='text-xl'>1. Naren</div>
                    <input className='scale-150 accent-lime-600'
                        {...register(`${101}`, { required: "Attendance is required" })}
                        type="radio" name={101} value="1" />
                    <label for="yes">Present</label>
                    <input className='scale-150 accent-lime-600'
                        {...register(`${101}`, { required: "Attendance is required" })}
                        type="radio" name={101} value="0" />
                    <label for="no">Absent</label>
                </div>
                <div className='flex gap-3'>
                    <div className='text-xl'>2. Kavin</div>
                    <input className='scale-150 accent-lime-600'
                        {...register(`${102}`, { required: "Attendance is required" })}
                        type="radio" name={102} value="1" />
                    <label for="yes">Present</label>
                    <input className='scale-150 accent-lime-600'
                        {...register(`${102}`, { required: "Attendance is required" })}
                        type="radio" name={102} value="0" />
                    <label for="no">Absent</label>
                </div>

                <button
                    className={`
                                w-full
                                rounded-xl
                                font-bold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-4 ${isLoading
                            ? "bg-green-600  text-white"
                            : "bg-transparent border-black border-2 hover:bg-db text-darkb"
                        }`}
                    type="submit"
                // onClick={notify}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Attendance