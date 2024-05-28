import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";

const AuthContext = createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
  decodedToken: {},
  user: {},
  SetUser: () => {},
  open:false,
  setOpen: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = sessionStorage.getItem("loggedIn");
    return storedLoggedIn === "true";
  });
  const [open,setOpen] = useState(false); //sideBar hovering
  const storedUserString = sessionStorage.getItem('user');
  const initialUser = storedUserString ? JSON.parse(storedUserString) : null;
  
  const [user, SetUser] = useState(initialUser);
  // console.log(user)

  let token = sessionStorage.getItem("_tk");
  const { decodedToken, isExpired } = useJwt(token || "");

  useEffect(() => {
    token = sessionStorage.getItem("_tk");
    sessionStorage.setItem("loggedIn", isLoggedIn);
    // sessionStorage.setItem("user", user);
    if (decodedToken) {
      setLoggedIn(true);
    }
    if (isExpired) {
      setLoggedIn(false);
    }
  }, [token,isLoggedIn]);
  
  
  const values = Object.seal({
    isLoggedIn,
    setLoggedIn,
    decodedToken,
    user,
    SetUser,
    open,
    setOpen
  });

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
