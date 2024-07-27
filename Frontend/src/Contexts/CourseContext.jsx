import { createContext, useContext, useEffect, useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

import { useAuthContext } from "./AuthContext";


const CourseContext = createContext({
    courseData: [],
    courseContent:[],
    filterdata:[],
    isLoading:true,
    isContentLoading:true,
});

export const useCourseContext = () => useContext(CourseContext);

export default function CourseContextProvider({ children }){

  const { user, isLoggedIn } = useAuthContext();
   
   const student_id = user?.student_id;

   const [courseData,setCourseData] = useState([]);
   const [courseContent,setCourseContent] = useState([]);
   const [mycourse,setMyCourse] = useState([]);
   const [filterdata,setFilterdata] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [isContentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    fetchCourseData();
    fetchCourseContent();
  }, []);

  useEffect(()=>{
    fetchStudentCourse();
  },[isLoggedIn,courseData])
   
  const fetchCourseData = async()=>{
    try{
        const response = await fetch(`${VITE_BACKEND_URL}/getCourse`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const result = await response.json();
        setCourseData(result.courseData);
        setIsLoading(false);
    }
    catch (error){
        console.log(error.message)
    }
  }

  const fetchCourseContent = async()=>{
    try{
        const response = await fetch(`${VITE_BACKEND_URL}/getCourseContent`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        const result = await response.json();
        setCourseContent(result.courseContent);
        setContentLoading(false);
    }
    catch (error){
        console.log(error.message)
    }
  }  

  const fetchStudentCourse = async()=>{
    try{
        const response = await fetch(`${VITE_BACKEND_URL}/getStudentCourse`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({student_id}),
          });
        const result = await response.json();
        setMyCourse(result.course_id);
    }
    catch (error){
        console.log(error.message)
    }
  }  


  useEffect(()=>{
    const myCourseIds = mycourse.map(course => course.course_id);
  const data = courseData?.filter((d) => myCourseIds?.includes(d.course_id))
  setFilterdata(data)
  },[mycourse])


  const values = Object.seal({
    courseData,
    courseContent,
    isLoading,
    isContentLoading,
    filterdata
  });

  return <CourseContext.Provider value={values}>{children}</CourseContext.Provider>;
}
