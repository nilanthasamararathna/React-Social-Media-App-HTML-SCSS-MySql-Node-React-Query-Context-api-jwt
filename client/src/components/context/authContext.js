import { createContext, useEffect, useState } from "react";
import Jone from "../../assets/images/jone.jpg";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

   
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || false
    );

    const login = () => {
        //To Do
        setCurrentUser({id:1, name:"John Doe", profilePic:Jone})
    }

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return (
    <AuthContext.Provider value={{ currentUser, login }}>
    {children}
    </AuthContext.Provider>)
}