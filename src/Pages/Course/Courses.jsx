import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { BookCheck } from "lucide-react";
import { NavLink,Link } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MentorPic from "../../assets/mentor.svg";
import thumb1 from "../../assets/thumb-1.png";
import { useCourseContext } from "../../Contexts/CourseContext";

function Courses() {
  const { isLoggedIn } = useAuthContext();

  const { courseData, isLoading } = useCourseContext();
  const [cdata,SetCdata] = useState(courseData);

  const onSubmit = (data) => {
    const filterdata = courseData.filter((d) => d.course_name.toLowerCase().includes(data.search.toLowerCase()))
    SetCdata(filterdata)
    if(data.search==""){
      SetCdata(courseData)
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div>
      <header className="sticky top-0 right-0 left-0 bg-white z-0 border-b-2 border-solid border-black ">
        <section className="flex relative py-4 px-8 ">
          <a href="#" className="text-3xl font-semibold pl-4 text-black">
            E-Learning
          </a>
          <form className="flex ml-60 gap-2 w-4/12 py-1 px-5 rounded-lg  border-solid border-black  border-2 bg-light-bg"
            onKeyUp={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="search courses..."
              maxLength="100"
              className="w-full text-xl bg-inherit outline-none border-light-bg 	"
              {...register("search")}
            />
            <div className="text-2xl">
              <FaSearch />
            </div>
          </form>

          {isLoggedIn &&
            <NavLink className="text-xl flex gap-1 ml-72 mt-2 " to="/student/mycourses">
              <BookCheck className="mt-1" />
              My course
            </NavLink>
          }
        </section>
      </header>
      <div className="flex flex-wrap gap-5 ml-5 mt-5">
      {isLoading ? (
        <div>courses are loading...</div>
      ) : (
        cdata?.map((data, i) => (
          <div
            key={i}
            className="box p-2 rounded-lg grid  w-96 border-solid border-black border-2"
          >
            <div className="flex items-center mb-2">
              <img src={MentorPic} alt="photo" className="h-20 w-20 mr-2 " />
              <div>
                <h3 className="text-xl font-semibold mt-2">
                  {data.mentor_name}
                </h3>
                <span className="text-gray-500 text-xl m-2">{data.duration}</span>
              </div>
            </div>
            <div className="mb-2">
              <img src={thumb1} alt="" className="h-56  rounded-xl	" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              {data.course_name}
            </h3>
            <button
              className={`focus:outline-none text-white bg-green-700 hover:bg-green-800  focus:ring-purple-300  rounded-lg text-xl  px-5 py-2.5 mb-2 `}
            >
            <Link to={`/coursedetails/${data.course_id}`}>Read more</Link>
            </button>
          </div>
        ))
      )}
    </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
        className="z-[1000]"
      />
    </div>
  );
}

export default Courses;
