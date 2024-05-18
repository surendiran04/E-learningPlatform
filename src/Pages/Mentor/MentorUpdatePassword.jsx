import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useJwt } from "react-jwt";
const { VITE_BACKEND_URL } = import.meta.env;
import { FaKey } from "react-icons/fa";


export default function MentorUpdatePassword() {
  const { id, token } = useParams();
  const { decodedToken, isExpired } = useJwt(token || "");
  let notify = () => toast.warn(errors.password?.message);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toggleState = () => {
    setIsShow(!isShow);
  };

  const onSubmit = (data) => {
    console.log(data);
    if (isExpired || decodedToken.id != id) {
      toast.info('Time expired or mismatching Link');
    }
    else {
      changePassword(data);
    }
    reset();
  };

  const changePassword = async (data) => {
    try {
      setIsLoading(true)
      const response = await fetch(`${VITE_BACKEND_URL}/resetPassword/${id}/${token}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.success) {
        toast.success(result.message);
        navigate("/");
      }
      else {
        toast.info(result.message);
      }
    }
    catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false); // Set isLoading back to false after the request completes
    };
  }

  return (
    <div style={{ height: 'calc(94.5vh - 20px)', overflow: 'auto' }} className="container flex items-center justify-center gap-10  bg-gray-200 ">
      <div class="text-center border-solid border-2 border-black p-10">
        <div class="text-black font-bold text-3xl">
          Reset password
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex  gap-3  mb-3 py-2 px-5  border-solid border-white bg-white  border-2">
              <FaKey className="text-4xl pt-1  pb-0 m-0 " />

              <input
                name="password"
                type={isShow ? "text" : "password"}
                placeholder="Enter your new Password "
                className="text-xl text-black border-none outline-none"
                disabled={isLoading}
                {...register("password", {
                  required: "this is required",
                  minLength: { value: 8, message: "Minimum length should be 8" },
                })}
              />
              <div onClick={toggleState} classname="cursor-pointer flex-grow ">
                {isShow ? (
                  <Eye size={32} color={"white"} />
                ) : (
                  <EyeOff size={32} color={"white"} />
                )}
              </div>
            </div>
            <button
              className={`
        w-full
        rounded-xl
         font-bold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-3 mb-4 ${isLoading
                  ? "bg-green-400 hover:bg-green-600 text-white"
                  : "bg-transparent border-black border-2 hover:bg-lb  text-darkb"
                }`}
              type="submit"
              onClick={notify}
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Change new Password"}
            </button>
          </form>
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
