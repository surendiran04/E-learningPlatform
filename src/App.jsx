import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "../src/Contexts/AuthContext";
import {ROUTES,PrivateRoutes} from "./Routes/Routes"
import Home from "../src/Pages/Home"
import NotFound from "../src/Pages/NotFound";

function App() {
  // const { isLoggedIn, } = useAuthContext();
  const isLoggedIn = false;
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
  function renderPrivateRoutes() {
    return  PrivateRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={route.path}
      />
    ));
  }
  
  return (
    <div className="w-screen h-screen">
    <Routes>
      {renderRoutes()   }
      {renderPrivateRoutes()}
      {/* {isLoggedIn && renderRoutes()} */}
      {/* {isLoggedIn && renderPrivateRoutes()} */}
      <Route Component={NotFound} path="*" />;
    </Routes>
    </div>
  );
}

export default App;
