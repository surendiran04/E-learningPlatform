import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "../src/Contexts/AuthContext";
import { ROUTES, studentPrivateRoutes, studentPublicRoutes, mentorPublicRoutes, mentorPrivateRoutes } from "./Routes/Routes"
import NotFound from "../src/Pages/NotFound";
import Sidebar from "./Components/sidebar.jsx";

function App() {
  const { isLoggedIn,decodedToken,open } = useAuthContext();

  const userRoles = decodedToken?.role[0] ;  //for role based routes


  function renderRoutes() {
    return ROUTES.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={route.path}
      />
    ));
  }

  function renderStudentPublicRoutes() {
    return studentPublicRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={`/student${route.path}`}
      />
    ));
  }

  function renderStudentPrivateRoutes() {
    return studentPrivateRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={`/student${route.path}`}
      />
    ));
  }

  function renderMentorPrivateRoutes() {
    return mentorPrivateRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={`/mentor${route.path}`}
      />
    ));
  }

  function renderMentorPublicRoutes() {
    return mentorPublicRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={`/mentor${route.path}`}
      />
    ));
  }

  return (
    <div className="w-screen h-screen flex">
      <div className={`${open ? "w-44 fixed" : "w-24 fixed"} `}>
        <Sidebar />
      </div>
      <div className={` ${open ? "w-full ml-44" : "ml-24 w-full"} `}>
        <Routes>
          {renderRoutes()}
          {(isLoggedIn && userRoles==="student") ?(renderStudentPrivateRoutes()):(renderStudentPublicRoutes())}
          {(isLoggedIn && userRoles==="mentor") ?(renderMentorPrivateRoutes()):(renderMentorPublicRoutes())}
          <Route Component={NotFound} path="*" />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
