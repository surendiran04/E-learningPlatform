import { createContext, useContext, useEffect, useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

import { useAuthContext } from "./AuthContext";


const CourseContext = createContext({
    courseData: [],
    courseContent:[],
    mycourse:[],
    isLoading:true,
    isContentLoading:true,
    mycoursesLoading:true
});

export const useCourseContext = () => useContext(CourseContext);

export default function CourseContextProvider({ children }) {

  const { user } = useAuthContext();
   
   const student_id = user?.student_id;

   const [courseData,setCourseData] = useState([]);
   const [courseContent,setCourseContent] = useState([]);
   const [mycourse,setMyCourse] = useState([]);
   const [mycoursesLoading,setMycoursesLoading] = useState(true);
   const [isLoading, setIsLoading] = useState(true);
   const [isContentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    fetchCourseData();
    fetchCourseContent();
  }, []);

  useEffect(()=>{
    fetchStudentCourse();
  },[student_id])
   
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
        setMycoursesLoading(false);
    }
    catch (error){
        console.log(error.message)
    }
  }  
  
  const values = Object.seal({
    courseData,
    courseContent,
    isLoading,
    isContentLoading,
    mycourse,
    mycoursesLoading
  });

  return <CourseContext.Provider value={values}>{children}</CourseContext.Provider>;
}
