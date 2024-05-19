import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const { VITE_BACKEND_URL } = import.meta.env;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";


export default function ForgotPassword() {
  let notify = () =>
    toast.warn(errors.email?.message);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const onSubmit = (data) => {
    handleEmail(data);
    reset();
  };


  const handleEmail = async (data) => {
    try {
      setIsLoading(true); 
      const response = await fetch(`${VITE_BACKEND_URL}/api/auth/studentForgotPassword`, {
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
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div style={{ height: 'calc(94.5vh - 20px)', overflow: 'auto' }} className="container flex items-center justify-center gap-10  bg-gray-200 ">
      <div class="text-center border-solid border-2 border-black p-10">
        <div class="text-black font-bold text-2xl">
          Check Inbox After entering Email
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex gap-3  mb-5 py-2 px-5  border-solid border-white bg-white  border-2 ">
              <MdEmail className="text-4xl pt-1  pb-0 m-0 " />
              <input
                name="email"
                className="text-xl text-black border-none outline-none  "
                placeholder="Enter your Email"
                type="email"
                {...register("email", { required: "This is required" })}
                disabled={isLoading}
              />
            </div>
            <button
              className={`
        w-full
        rounded-xl
         font-bold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none  mt-1 mb-4  ${isLoading
                  ? "bg-green-400 hover:bg-green-600 text-white"
                  : "bg-transparent border-black border-2 hover:bg-lb text-darkb"
                }`}
              type="submit"
              onClick={notify}
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Send Mail"}
            </button>
          </form>
          <div className="text-center ">
            <p className="text-black font-semibold text-[18px]">
              Don't have an Email?{" "}
              <Link
                to="/student/signup"
                className="text-blue-700 underline cursor-pointer font-bold "
              >
                Sign Up
              </Link>
            </p>
          </div>
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
