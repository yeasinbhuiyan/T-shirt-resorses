import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../../Firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading ,setLoading] = useState(true)


    



    const loginAccount=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{unsubscribe()}
    })



    const userName = (name) => {
        return  updateProfile(auth.currentUser, {
              displayName: name
              
          })
          .then(()=> setUser((user)=>({...user,displayName: name})))
  
  
      }

    const authInfo={
        user,
        createAccount,
        loginAccount,
        loading,
        logOut,
        userName

    }
    
    return (
      <AuthContext.Provider value={authInfo}>
        
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;