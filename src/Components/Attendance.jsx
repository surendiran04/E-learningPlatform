import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { VITE_BACKEND_URL } = import.meta.env;
import { useAuthContext } from "../Contexts/AuthContext";

function Attendance() {
  const [isLoading, setIsLoading] = useState(false);
  const [StudentsData, setStudentsData] = useState([]);
  const { user, isLoggedIn } = useAuthContext();

  let notify = () => toast.warn(errors.message);

  useEffect(() => {
    getCourseStudents();
  }, [isLoggedIn]);

  const attendanceBtn = (data) => {
    const val = {};
    val.student_ids = data;
    val.course_id = user?.course_id;
    updateAttendance(val);
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getCourseStudents = async () => {
    try {
      const response = await fetch(
        `${VITE_BACKEND_URL}/getStudentByCourse/${user.course_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.success) {
        setStudentsData(result.data);
      } else {
        toast.info(result.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateAttendance = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${VITE_BACKEND_URL}/updateAttendance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.info(result.message);
        console.log(result.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Attendance</h2>
      <form
        className=" border-black border-2 p-4"
        onSubmit={handleSubmit(attendanceBtn)}
      >
        {StudentsData?.map((d, i) => (
          <div key={i} className="flex gap-3">
            <div className="text-xl">
              {`${i + 1}.`}
              {d.student_name}
            </div>
            <input
              className="scale-150 accent-lime-600"
              {...register(`${d.student_id}`, {
                required: "Attendance is required",
              })}
              type="radio"
              name={d.student_id}
              value="1"
            />
            <label for="yes">Present</label>
            <input
              className="scale-150 accent-lime-600"
              {...register(`${d.student_id}`, {
                required: "Attendance is required",
              })}
              type="radio"
              name={d.student_id}
              value="0"
            />
            <label for="no">Absent</label>
          </div>
        ))}

        <button
          className={`
                                w-full
                                rounded-xl
                                font-bold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-4 ${
                                  isLoading
                                    ? "bg-green-600  text-white"
                                    : "bg-transparent border-black border-2 hover:bg-db text-darkb"
                                }`}
          type="submit"
          onClick={notify}
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
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

export default Attendance;
