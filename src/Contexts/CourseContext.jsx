import { createContext, useContext, useEffect, useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

// import { useAuthContext } from "./AuthContext";

// const {user} = useAuthContext();

const CourseContext = createContext({
    courseData: [],
    isLoading:true,
});

export const useCourseContext = () => useContext(CourseContext);

export default function CourseContextProvider({ children }) {

   const [courseData,setCourseData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCourseData();
  }, []);
   
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
  
  const values = Object.seal({
    courseData,
    isLoading
  });

  return <CourseContext.Provider value={values}>{children}</CourseContext.Provider>;
}
