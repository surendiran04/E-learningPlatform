import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { ShieldCheck } from "lucide-react";
import { MdAssessment } from "react-icons/md";
import { Laptop } from "lucide-react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {  useParams,useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { useCourseContext } from "../../Contexts/CourseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../Contexts/AuthContext";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {isLoggedIn} = useAuthContext();

  const { courseContent , isContentLoading}=useCourseContext();

  let content = courseContent?.filter((ele) => {
    return ele.course_id == id;
  });
  content = { ...content[0] };

  let notify = () => toast.info("Login to Enroll course!");


  const enroll = () => {
    if (isLoggedIn) {
      navigate(`/checkout/${content.course_id}`);
    }
    else{
      notify();
    } 
  };

  return (
    <>
      <Header />
      {isContentLoading ? (
        <div>Content is loading...</div>
      ) : (
        <div>
          <div className="flex flex-col gap-3 w-full  bg-db3 p-10">
            <h1 className="text-5xl text-white mb-4">{content.course_name}</h1>
            <h2 className="text-2xl text-gold1 mb-3">{content.tagline}</h2>
            <p className="text-3xl text-white mb-5">Language:English</p>
            <div className="flex flex-row gap-1 py-2 ">
              <FaStar className="text-gold1 text-3xl" />
              <FaStar className="text-gold1 text-3xl" />
              <FaStar className="text-gold1 text-3xl" />
              <FaStar className="text-gold1 text-3xl" />
              <FaRegStar className="text-gold1 text-3xl" />
              <span className="text-white text-3xl pl-3">4.1</span>
            </div>
            <div className="flex gap-2">
              <p className="text-2xl text-white "> Buy this course @</p>
              <div className="flex">
                <FaIndianRupeeSign className="text-2xl text-white mt-2 " />
                <span className="text-2xl text-gold1 mb-3">{content.fees}</span>
              </div>
            </div>
            <div className="w-1/4 bg-gray-600 p-3 flex">
              <h4 className="text-white text-2xl ml-3">
                {" "}
                Duration: {content.duration}
              </h4>
            </div>
            <button
              className={`
                    w-1/4
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-4 
                    bg-transparent border-white border-2 hover:bg-green-600 text-white
                   `}
              type="submit"
              onClick={enroll}
            >
           Enroll Now
            </button>
          </div>
          <section>
            <div className="pl-16 py-16 ">
              <h3 className="text-3xl pb-4 font-semibold">Overview</h3>
              <p className="tracking-widest text-xl">{content.description}</p>
            </div>
            <div className=" pl-16 pb-16 ">
              <h3 className="text-3xl pb-4 font-semibold">Projects</h3>
              <ul class="list-none text-xl tracking-widest">
                {content.project.map((d, i) => (
                  <div key={i} className="flex gap-3 pb-5">
                    <ShieldCheck />
                    <li>{d}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="pl-16 pb-16">
              <h3 className="text-3xl pb-4 font-semibold">Assessments</h3>
              <ul class="list-none text-xl tracking-widest">
                {content.assessments.map((d, i) => (
                  <div key={i} className="flex gap-3 pb-5 m-0">
                    <MdAssessment className="text-2xl " />
                    <li>{d}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="pl-16 pb-16">
              <h3 className="text-3xl pb-4 font-semibold">Syllabus</h3>
              <ul class="  grid grid-cols-2 gap-2 grid-flow-row list-none text-xl tracking-widest">
                {content.syllabus.map((d, i) => (
                  <div className="flex gap-3 pb-5 m-0">
                    <Laptop className="text-2xl " />
                    <li>{d}</li>
                  </div>
                ))}
              </ul>
            </div>
            <button
              className={`
                    w-4/6
                    ml-48
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4  hover:border-transparent transition duration-500 outline-none mt-5 mb-14  bg-transparent border-black border-2 hover:bg-green-600 text-black
                        `}
              type="submit"
              onClick={enroll}
            >
             Enroll Now
            </button>
          </section>
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
      )}
    </>
  );
}

export default CourseDetails;
