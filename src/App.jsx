import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "../src/Contexts/AuthContext";
import { ROUTES, studentPrivateRoutes, studentPublicRoutes, mentorPublicRoutes, mentorPrivateRoutes } from "./Routes/Routes"
import NotFound from "../src/Pages/NotFound";
import Sidebar from "./Components/sidebar.jsx";
import CreateCourse from "./Pages/Course/CreateCourse.jsx";

function App() {
  // const { isLoggedIn,decodedToken } = useAuthContext();
  const isLoggedIn = false;
  const { open, setOpen } = useAuthContext();

  // const userRoles = decodedToken?.roles || [];  //for role based routes
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
          {renderMentorPublicRoutes()}
          {renderMentorPrivateRoutes()}
          {renderStudentPublicRoutes()}
          {renderStudentPrivateRoutes()}
          {/* {isLoggedIn && renderRoutes()} */}
          {/* {isLoggedIn && renderPrivateRoutes()} */}
          <Route Component={NotFound} path="*" />;
          <Route Component={CreateCourse} path="/createcourse" />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
