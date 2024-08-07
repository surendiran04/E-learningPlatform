import { useState } from "react";
import { BookOpenCheck,BriefcaseBusiness } from "lucide-react";
import ProfilePic from "../assets/student1.png";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useAuthContext } from "../Contexts/AuthContext";
import { LogIn ,LogOut} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const Sidebar = () => {
  const { isLoggedIn, open, user, setOpen, decodedToken, setLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const userRole = decodedToken?.role[0] ;
  const name = user?.student_name || user?.mentor_name;

  const Logout = () => {
    sessionStorage.removeItem("_tk");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("loggedIn");
    setLoggedIn(false);
    navigate("/");
  };


  const Login = () => {
    navigate("/student/login");
  };

  const loginComponent = () => {
    return (
      <>
        <LogIn color="black" size={32} />
        {open && (
          <h3 className="text-black sedan-sc-regular text-xl">
            <button onClick={Login}>Login</button>
          </h3>
        )}
      </>
    );
  };

  const logoutComponent = () => {
    return (
      <>
        <LogOut color="black" size={32} />
        {open && (
          <h3 className="text-black sedan-sc-regular text-xl">
            <button onClick={Logout}>Logout</button>
          </h3>
        )}
      </>
    );
  };
  
  let notify = () => toast.info("Login to view profile");

  const profile = () => {
    if (isLoggedIn) {
      navigate("/profile");
    }
    else{
      notify();
    } 
  };


  return (
    <div className="flex h-screen ">
      <div
        className={`bg-white h-screen p-5 pt-8  duration-300 relative border-solid border-black border-r-2 `}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <div
          className={`flex flex-col my-auto items-center ${
            open ? "" : "mt-28"
          }`}
        >
          <img src={ProfilePic} alt="Profile Logo" />
          {open && (
            <>
              <h3 className="text-xl font-semibold mt-2"> {name}</h3>
              <p className="text-gray-500 text-xl m-2">{userRole}</p>
              <button
                onClick={profile}
                className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800  focus:ring-purple-300  rounded-lg text-xl  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-35   `}
              >
                View Profile
              </button>
            </>
          )}
        </div>
        <div
          className={`flex flex-col  ${
            open ? "gap-6" : "justify-center items-center mt-2"
          } `}
        >
          <div className="flex gap-3 mb-4 mt-6">
            <FaHome color="black" size={32} />
            {open && (
              <h3 className="text-black  sedan-sc-regular text-xl">
                <Link to="/">Home</Link>
              </h3>
            )}
          </div>
          <div className="flex gap-3 mb-4">
            <BookOpenCheck color="black" size={32} />
            {open && (
              <h3 className="text-black sedan-sc-regular text-xl">
                {" "}
                <Link to="/courses">courses</Link>
              </h3>
            )}
          </div>
          <div className="flex gap-3 mb-4">
            <FaChalkboardTeacher color="black" size={32} />
            {open && (
              <h3 className="text-black sedan-sc-regular text-xl">
                {" "}
                <Link to="/mentor/Login">Mentors</Link>
              </h3>
            )}
          </div>

          <div className="flex gap-3 mb-4 ">
            <BriefcaseBusiness color="black" size={32} />
            {open && (
              <h3 className="text-black sedan-sc-regular text-xl ">
             {isLoggedIn && userRole==="mentor" ?<Link to="/mentor/dashboard">Dashboard</Link>:<Link to="/student/mycourses">Mycourses</Link>}
               </h3>
              
            )}
          </div>

          <div className="flex gap-3 mb-4 ">
            {isLoggedIn?logoutComponent():loginComponent()}
          </div>
        </div>
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
};

export default Sidebar;
