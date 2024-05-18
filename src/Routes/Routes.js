import Login from '../Pages/Student/Login'
import Signup from "../Pages/Student/Signup";
import ForgotPassword from "../Pages/Student/ForgotPassword";
import Dashboard from "../Pages/Student/Dashboard";
import UpdatePassword from '../Pages/Student/UpdatePassword';
import Home from "../Pages/Home"
import MentorLogin from '../Pages/Mentor/MentorLogin';
import MentorSignUp from '../Pages/Mentor/MentorSignup';
import MentorForgotPassword from '../Pages/Mentor/MentorForgotPassword'
import MentorUpdatePassword from '../Pages/Mentor/MentorUpdatePassword';

export const ROUTES = [
  {
    title: "Home",
    Component: Home,
    path: "/"
  }
];

export const studentPrivateRoutes = [
  {
    title:"Dashboard",
    Component: Dashboard,
    path: "/dashboard",
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