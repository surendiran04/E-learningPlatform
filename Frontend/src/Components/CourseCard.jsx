import React from "react";
import {Link} from "react-router-dom"
import MentorPic from "../assets/mentor.svg";
import thumb1 from "../assets/thumb-1.png";
import { useCourseContext } from "../Contexts/CourseContext";

function CourseCard() {
  const { courseData, isLoading } = useCourseContext();

  return (
    <div className="flex flex-wrap gap-5 ml-5 mt-5">
      {isLoading ? (
        <div>courses are loading...</div>
      ) : (
        courseData?.map((data, i) => (
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
  );
}

export default CourseCard;
