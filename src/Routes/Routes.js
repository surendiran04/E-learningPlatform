import Login from '../Pages/Student/Login'
import Signup from "../Pages/Student/Signup";
import ForgotPassword from "../Pages/Student/ForgotPassword";
import Dashboard from "../Pages/Student/Dashboard";
import UpdatePassword from '../Pages/Student/UpdatePassword';
import Home from "../Pages/Home"
import CourseDetails from "../Pages/Course/CourseDetails";
import MentorLogin from '../Pages/Mentor/MentorLogin';
import MentorSignUp from '../Pages/Mentor/MentorSignup';
import MentorForgotPassword from '../Pages/Mentor/MentorForgotPassword'
import MentorUpdatePassword from '../Pages/Mentor/MentorUpdatePassword';
import Profile from '../Pages/Profile';
import Checkout from '../Pages/Course/Checkout';
import Courses from '../Pages/Course/Courses';
import Mycourses from '../Pages/Course/Mycourses';

export const ROUTES = [
  {
    title: "Home",
    Component: Home,
    path: "/"
  },
  {
    title: "Courses",
    Component:Courses,
    path: "/courses"
  },
  {
    title: "course details",
    Component: CourseDetails,
    path: "/coursedetails"
  },
  {
    title: "Profile",
    Component: Profile,
    path: "/profile"
  },{
    title: "Checkout",
    Component: Checkout,
    path: "/checkout"
  }
];

export const studentPrivateRoutes = [
  {
    title:"My courses",
    Component: Mycourses,
    path: "/mycourses",
  },
];

export const studentPublicRoutes = [
  {
    title: "Sign In",
    Component: Login,
    path: "/login",
  },
  {
    title: "Sign Up",
    Component: Signup,
    path: "/signup",
  },
  {
    title: "Reset Password",
    Component: ForgotPassword,
    path: "/forgotPassword",
  },
  {
    title: "update Password",
    Component: UpdatePassword,
    // path: "/resetPassword/:id/:token",
    path: "/resetPassword",

  },
];

export const mentorPublicRoutes = [
  {
    title: "Mentor Login",
    Component:MentorLogin,
    path: "/Login",
  },
  {
    title: "Mentor SignUp",
    Component:MentorSignUp,
    path: "/Signup",
  },
  {
    title: "Mentor Reset Password",
    Component:MentorForgotPassword,
    path: "/ForgotPassword",
  },
  {
    title: "Mentor update password",
    Component:MentorUpdatePassword,
    path: "/resetPassword",
  },
];

export const mentorPrivateRoutes = [
  {
    title: "Dashboard",
    Component: Dashboard,
    path: "/dashboard",
  },
];

export default { ROUTES, studentPrivateRoutes, studentPublicRoutes,mentorPublicRoutes, mentorPrivateRoutes };