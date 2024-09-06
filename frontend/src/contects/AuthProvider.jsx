import React, { createContext, useEffect, useState } from 'react'
import { app, auth } from '../firebase/firebase.config';
import db from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider)
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //signOut
  const loggedOut = () => {
    return signOut(auth);
  }
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, currentUser => {
       setUser(currentUser);
       setLoading(false);
     });
     return () => unsubscribe();
   })

 

  const authInfo = {
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    loggedOut
  }
 
  return (
    <AuthContext.Provider value={authInfo}>
   
      {children}
   
  </AuthContext.Provider>
  )
}

export default AuthProvider