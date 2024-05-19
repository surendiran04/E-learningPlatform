import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext.jsx";
import CourseContextProvider from "./Contexts/CourseContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CourseContextProvider>
    <Router>
      <App />
    </Router>
    </CourseContextProvider>
  </AuthContextProvider>
);
