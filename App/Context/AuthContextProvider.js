import React, { useState } from "react";
import AuthContext from "./AuthContext";
import fetchAxiosData from "../Services/fetchAxiosData";

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(1)
  const [userName, setUserName] = useState('')
  
  const signIn = async (email, password) => {
    try {
      const userAPI = await fetchAxiosData('users/email/'+ email)
      if (userAPI?.password === password) {
        console.log('fromsignIn in authProvider', userAPI)
        setIsAuthenticated(true)
        setRole(userAPI.role)
        setUserName(userAPI.name)
        setUser(userAPI)
        // return true
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (error) {
      console.log('Error in signIn', error)
      throw error
      // console.log('An error occurred during sign in. Please try again.');
    }
  };

  const signOut = () => {
    // Your sign out logic here...
    setIsAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user, userName, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider