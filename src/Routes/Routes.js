import Login from '../Pages/Login'
import Signup from "../Pages/Signup";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import UpdatePassword from '../Pages/UpdatePassword';
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
  },
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

export const PrivateRoutes = [
  {
    title: "Dashboard",
    Component: Dashboard,
    path: "/dashboard",
  },
];

export const studentPrivateRoutes = [
  {
    title: "Dashboard",
    Component: Dashboard,
    path: "/dashboard",
  },
];

export const mentorPrivateRoutes = [
  {
    title: "Dashboard",
    Component: Dashboard,
    path: "/dashboard",
  },
];

export default { ROUTES, PrivateRoutes };