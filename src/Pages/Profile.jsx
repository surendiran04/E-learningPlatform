import React from 'react'
import { useAuthContext } from "../Contexts/AuthContext";

function Profile() {
    
    const {user} = useAuthContext(); 
    const name = user?.student_name?.mentor_name;
    const email = user?.email;
    const pass = user?.pass;
    const phone = user?.phone;
  return (
    <div>
        <>Name:{name}</>
        <>email:{email}</>
        <>password:{pass}</>
        <>Phone:{phone}</>
    </div>
  )
}

export default Profile