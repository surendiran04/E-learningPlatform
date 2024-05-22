import React, { useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
const { VITE_BACKEND_URL } = import.meta.env;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCourseContext } from "../../Contexts/CourseContext";

function Checkout() {

  const [isLoading, setIsLoading] = useState(false);
  let notify = () => {};

  const { id } = useParams();

  const { courseContent , isContentLoading}=useCourseContext();

  // const courseContent = [
  //   {
  //     course_id: 10,
  //     course_name: "Data structures & algorithm",
  //     duration: "4-months",
  //     fees: "7500",
  //   },
  // ];

  let content = courseContent?.filter((ele) => {
    return ele.course_id == id;
  });
  content = { ...content[0] };



  const onSubmit = (data) => {
    console.log(content.course_id);
    makePayment();
  };
  const user = {};
   user.student_id = 3;
  const makePayment = async () => {
    try {
        setIsLoading(true);
      const response = await fetch(`${VITE_BACKEND_URL}/enrollCourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({course_id:content.course_id,student_id:user.student_id}),
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        // navigate('/');
      } else {
        toast.info(result.message);
      }
    } catch (error) {
      toast.error(error.message);

    }
    finally{
        setIsLoading(false);
    }
  };
  
  function composeFunctions(...funcs) {
    return () => {
        funcs.forEach(func => func());
    };
}
const combinedFunction = composeFunctions(onSubmit, notify);

  return (
    <div className=" flex items-center justify-center mt-10">
      <div className="w-1/3">
        <div className="text-4xl font-bold  text-dg text-center non-italic mb-4">
          Checkout
        </div>
        <div className="bg-darkb p-10 ">
          <h1 className="text-3xl text-white mb-4">{content.course_name}</h1>
          <div className="flex gap-2 mb-3">
            <p className="text-3xl text-white "> Price: </p>
            <div className="flex">
              <FaIndianRupeeSign className="text-2xl text-white mt-2 " />
              <span className="text-2xl text-gold1 mb-3">{content.fees}</span>
            </div>
          </div>
          <div className="w-fit bg-gray-600 p-3 flex mb-3">
            <h4 className="text-white text-2xl ml-3">
              {" "}
              Duration: {content.duration}
            </h4>
          </div>
          <button
            className={`
                    w-50
                    rounded-xl text-xl ml-24
                    font-semibold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-2 ${
                      isLoading
                        ? "bg-green-400 hover:bg-green-600 text-white"
                        : "bg-transparent border-white border-2 hover:bg-green-600 text-white"
                    }`}
            type="submit"
            disabled={isLoading}
            onClick={combinedFunction}
          >
            {isLoading ? "Loading" : "Make Payment"}
          </button>
        </div>
      </div>
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
    </div>
  );
}

export default Checkout;
