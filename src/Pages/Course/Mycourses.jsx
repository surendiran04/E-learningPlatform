import React,{useState} from "react";
import { useCourseContext } from "../../Contexts/CourseContext";

function Mycourses() {
  const { courseData, isLoading, mycourse, mycoursesLoading } = useCourseContext();

  const [data,SetData] =useState([]);
 
    const filterdata = courseData.filter((d) => d.course_id.includes(mycourse))
    SetData(filterdata)



  return (
    <div className="flex flex-wrap gap-5 ml-5 mt-5">
      { (mycoursesLoading || isLoading )? (
        <div>Your courses are loading...</div>
      ) : (
        data?.map((data, i) => (
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
                <span className="text-gray-500 text-xl m-2">
                  {data.duration}
                </span>
              </div>
            </div>
            <div className="mb-2">
              <img src={thumb1} alt="" className="h-56  rounded-xl	" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{data.course_name}</h3>
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

export default Mycourses;
