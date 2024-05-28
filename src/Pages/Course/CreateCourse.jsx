import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { VITE_BACKEND_URL } = import.meta.env;

function CreateCourse() {
    const [isLoading, setIsLoading] = useState(false);
    let notify = () => toast.warn(errors.coursename?.message
        || errors.tagline?.message
        || errors.discription?.message
        || errors.syllabus?.message
        || errors.coursefees?.message
        || errors.mentorname?.message
        || errors.projects?.message
        || errors.assessments?.message
        || errors.duration?.message
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const projectString =data.project;
        data.project=JSON.parse(`[${projectString}]`);
        const syllabusString=data.syllabus;
        data.syllabus=JSON.parse(`[${syllabusString}]`);
        const assessmentString=data.assessments;
        data.assessments=JSON.parse(`[${assessmentString}]`);
        handleInput(data);
<<<<<<< HEAD
        console.log(data);
        // reset();
=======
        reset();
>>>>>>> c6c0587555ab8a009c23edb9861f19dcd28222af
    };
    const handleInput = async (data) => {
        try {
          setIsLoading(true);
          const response = await fetch(`${VITE_BACKEND_URL}/createCourse`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (result.success) {
            toast.success(result.message);
          } else {
            toast.info(result.message);
          }
        } catch (error) {
          toast.error(error.message);
    
        }
        finally {
          setIsLoading(false);
        }
      };

    return (
        <div className="container flex items-center justify-center gap-10  bg-gray-200 ">
            <div className='w-2/5'>
                <div
                    className="text-3xl font-extrabold  text-bl text-center non-italic"
                >
                    Create Course
                </div>
                <div className="p-4">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col '
                    >
                        <input
                            className=" text-xl text-black outline-none   border-solid border-black  border-2  bg-white mb-5 py-2 px-5   "
                            placeholder="Enter Course Name"
                            type="text"
                            {...register("course_name", { required: "Course name is required" })}
                            disabled={isLoading}
                        />

                        <input
                            className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Tagline"
                            type="text"
                            {...register("tagline", { required: "Course Tagline is required" })}
                            disabled={isLoading}
                        />
                        <textarea className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Description"
                            {...register("description", { required: "Course description is required" })}
                            disabled={isLoading}>

                        </textarea>
                        <textarea className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Syllabus"
                            {...register("syllabus", { required: "Course syllabus is required" })}
                            disabled={isLoading}>
                        </textarea>

                        <div className='flex flex-col gap-1 border-solid border-black border-2 p-3 pl-5 mb-5'>
                            <p className="text-black font-semibold text-xl mb-2 ">
                                Course Duration
                            </p>
                            <div className='flex flex-row gap-3'>
                                <input className='scale-150 accent-lime-600'
                                    {...register("duration", { required: "Duration is required" })}
                                    type="radio" name="duration" value="3-months" />
                                <label for="3-months">3 Months</label>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <input className='scale-150 accent-lime-600'
                                    {...register("duration", { required: "Duration is required" })}
                                    type="radio" name="duration" value="4-months" />
                                <label for="4-months">4 Months</label>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <input className='scale-150	accent-lime-600	'
                                    {...register("duration", { required: "Duration is required" })}
                                    type="radio" name="duration" value="6-months" />
                                <label for="6-months">6 Months</label>
                            </div>
                        </div>
                        <input
                            className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Fee"
                            type="number"
                            {...register("fees", { required: "Fee is required" })}
                            disabled={isLoading}
                        />
                        <input
                            className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Mentor Name"
                            type="text"
                            {...register("mentor_name", { required: "Mentor name is required" })}
                            disabled={isLoading}
                        />
                        <textarea className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Projects"
                            {...register("project", { required: "Projects is required" })}
                            disabled={isLoading}>

                        </textarea>
                        <textarea className=" text-xl text-black outline-none   border-solid border-black bg-white  border-2  mb-5 py-2 px-5   "
                            placeholder="Enter Course Assessment"
                            {...register("assessments", { required: "Assessment is required" })}
                            disabled={isLoading}>
                        </textarea>

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
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading" : "Create Course"}
                        </button>
                    </form>

                </div>
            </div >
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

export default CreateCourse